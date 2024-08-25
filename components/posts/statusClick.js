import React from "react";
import { getServerSession } from "next-auth";
import AskQuestion from "../client/router/AskQuestion";

export default async function StatusClick() {
  const session = await getServerSession();
  return (
    <div className=" mt-2 ">
      <AskQuestion session={session} />
    </div>
  );
}
