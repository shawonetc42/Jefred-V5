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
      <div className="ml-2">
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
