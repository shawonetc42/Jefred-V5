import React from "react";
import StatusClick from "@/components/posts/statusClick";
import PostsModel from "@/components/model/posts";
import ProfileCompleate from "@/components/model/profileCompleate";
import NavigationMenu from "@/components/model/navigationMenu";
import RightSide from "@/components/model/rightSide";

export default function page() {
  return (
    <div className="flex container mx-auto max-w-6xl gap-2">
      <div className="hidden md:block">
        <ProfileCompleate />
        {/* bottom */}
        <NavigationMenu />
      </div>

      {/* middle */}
      <div className="px-2 ml-0 md:ml-2 md:px-0">
        <StatusClick />
        <PostsModel />
      </div>
      {/* right side */}
      <div className="hidden md:block">
        <RightSide />
      </div>
    </div>
  );
}
