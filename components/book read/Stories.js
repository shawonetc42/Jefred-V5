"use client";
import Image from "next/image";

// swiper js react
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// stories img
import Stories1 from "@/public/cover/1.png";

const Stories = () => {
  return (
    <main>
      <div className="container mx-auto max-w-6xl px-5 lg:px-0">
        <div>
          <div>
            <div>
              {/* Silder */}
              <div>
                <div>
                  <div className="w-full  h-[200px] mt-14 lg:mt-0">
                    <Swiper
                      spaceBetween={30}
                      centeredSlides={true}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={true}
                      modules={[Autoplay, Pagination, Navigation]}
                      loop={true}
                      className="w-full h-full"
                    >
                      <SwiperSlide className="text-center text-lg  flex justify-center items-center relative">
                        <div className="relative w-full h-full">
                          <Image
                            src={Stories1}
                            alt="Picture of the author"
                            layout="fill"
                            objectFit="cover"
                            className="group-hover:scale-110 transition-all duration-300"
                          />
                        </div>
                      </SwiperSlide>

                      <SwiperSlide className="text-center text-lg  flex justify-center items-center relative">
                        <div className="relative w-full h-full">
                          <Image
                            src={Stories1}
                            alt="Picture of the author"
                            layout="fill"
                            objectFit="cover"
                            className=""
                          />
                        </div>
                      </SwiperSlide>

                      <SwiperSlide className="text-center text-lg  flex justify-center items-center relative">
                        <div className="relative w-full h-full">
                          <Image
                            src={Stories1}
                            alt="Picture of the author"
                            layout="fill"
                            objectFit="cover"
                            className="group-hover:scale-110 transition-all duration-300"
                          />
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Stories;
