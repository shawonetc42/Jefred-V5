import React from "react";
import Cover from "@/components/profile/Cover";
import NavigationMenu from "@/components/model/navigationMenu";
import Notes from "@/components/profile/Notes";
import Profile from "@/components/auth/register/Profile";

export default function page() {
  return (
    <div>
      {/* <Cover />
      <NavigationMenu /> */}
      <Profile />
      {/* <Notes /> */}
    </div>
  );
}
