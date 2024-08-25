import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",

      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          username: profile.name.replace(/\s+/g, "").toLowerCase(), // Generate username from name
        };
      },
    }),
  ],
  session: {
    jwt: true,
  },
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      // Persist the OAuth access_token and uid to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
      }
      if (user) {
        token.uid = user.id; // Assuming the user object has an id field
        token.username = user.username; // Use the generated username
      }
      return token;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and uid from a provider.
      session.accessToken = token.accessToken;
      session.uid = token.uid;
      session.username = token.username;

      return session;
    },
  },
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
