import React from "react";

export default function Peopleyoumayknow() {
  return (
    <div className="flex flex-col  ml-2 px-5 py-6 mt-2 bg-white rounded-2xl max-w-[278px]">
      <div className="text-base font-medium text-neutral-800">
        People you may know:
      </div>
      <div className="flex gap-2.5 items-start mt-4">
        {/* <div className="flex flex-col items-center">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/69ecc77ff27652a6aa02ded364e98a372bcc8dedd05c8e5a3166181f09a54674?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/69ecc77ff27652a6aa02ded364e98a372bcc8dedd05c8e5a3166181f09a54674?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/69ecc77ff27652a6aa02ded364e98a372bcc8dedd05c8e5a3166181f09a54674?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/69ecc77ff27652a6aa02ded364e98a372bcc8dedd05c8e5a3166181f09a54674?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/69ecc77ff27652a6aa02ded364e98a372bcc8dedd05c8e5a3166181f09a54674?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/69ecc77ff27652a6aa02ded364e98a372bcc8dedd05c8e5a3166181f09a54674?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/69ecc77ff27652a6aa02ded364e98a372bcc8dedd05c8e5a3166181f09a54674?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/69ecc77ff27652a6aa02ded364e98a372bcc8dedd05c8e5a3166181f09a54674?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
            className="aspect-[0.93] w-[37px]"
          />
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/dd5b28980844fd88a3344e700b161926d51f09e4fc4530dc542124f058fc3e91?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd5b28980844fd88a3344e700b161926d51f09e4fc4530dc542124f058fc3e91?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd5b28980844fd88a3344e700b161926d51f09e4fc4530dc542124f058fc3e91?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd5b28980844fd88a3344e700b161926d51f09e4fc4530dc542124f058fc3e91?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd5b28980844fd88a3344e700b161926d51f09e4fc4530dc542124f058fc3e91?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd5b28980844fd88a3344e700b161926d51f09e4fc4530dc542124f058fc3e91?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd5b28980844fd88a3344e700b161926d51f09e4fc4530dc542124f058fc3e91?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd5b28980844fd88a3344e700b161926d51f09e4fc4530dc542124f058fc3e91?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
            className="mt-6 aspect-[0.93] w-[37px]"
          />
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/715b7ebb4c36389d44dbf868aac50ae56933192174cd09378e9152bcbfc24327?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/715b7ebb4c36389d44dbf868aac50ae56933192174cd09378e9152bcbfc24327?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/715b7ebb4c36389d44dbf868aac50ae56933192174cd09378e9152bcbfc24327?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/715b7ebb4c36389d44dbf868aac50ae56933192174cd09378e9152bcbfc24327?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/715b7ebb4c36389d44dbf868aac50ae56933192174cd09378e9152bcbfc24327?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/715b7ebb4c36389d44dbf868aac50ae56933192174cd09378e9152bcbfc24327?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/715b7ebb4c36389d44dbf868aac50ae56933192174cd09378e9152bcbfc24327?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/715b7ebb4c36389d44dbf868aac50ae56933192174cd09378e9152bcbfc24327?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
            className="mt-6 aspect-[0.93] w-[37px]"
          />
        </div> */}
        <div className="flex flex-col mt-1.5 text-base font-medium text-neutral-800">
          <div>Steve Jobs</div>
          <div className="mt-2.5 text-xs font-light">CEO of Apple</div>
          <div className="mt-8">Ryan Roslansky</div>
          <div className="mt-2 text-xs font-light">CEO of Linkedin</div>
          <div className="mt-9">Dylan Field</div>
          <div className="mt-2 text-xs font-light">CEO of Figma</div>
          <div className="self-center mt-11 text-xs text-center text-emerald-400">
            See All
          </div>
        </div>
        <div className="flex flex-col mt-1 text-xs font-medium text-center text-emerald-400 whitespace-nowrap">
          <div className="justify-center px-3 py-3 bg-white rounded-lg border border-emerald-400 border-solid">
            Connect
          </div>
          <div className="justify-center px-3 py-3 mt-8 bg-white rounded-lg border border-emerald-400 border-solid">
            Connect
          </div>
          <div className="justify-center px-3 py-3 mt-8 bg-white rounded-lg border border-emerald-400 border-solid">
            Connect
          </div>
        </div>
      </div>
    </div>
  );
}
