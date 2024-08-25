import React from "react";
import Image from "next/image";
export default function ProfileCompleate() {
  return (
    <div className="flex flex-col pb-2.5 text-xs bg-white mt-2 rounded-2xl max-w-[278px] text-black text-opacity-50">
      <Image
        loading="lazy"
        src="/..."
        alt="book"
        width={278}
        height={278}
        className="w-full rounded-2xl aspect-[2.63]"
      />
      <div className="self-start ml-16">Ceo of Jefred</div>
      <div className="mt-2.5 w-full border border-solid bg-neutral-100 border-neutral-100 min-h-[1px]" />
      <div className="flex gap-5 self-start mt-2 ml-6">
        <Image
          loading="lazy"
          src="/..."
          alt="book"
          width={22}
          height={22}
          className="shrink-0 aspect-[0.92] fill-black fill-opacity-0 w-[22px]"
        />
        <div className="my-auto">Add another account</div>
      </div>
    </div>
  );
}
