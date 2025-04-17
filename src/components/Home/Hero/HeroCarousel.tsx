"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css";

import Image from "next/image";

const HeroCarousal = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="hero-carousel"
    >
      <SwiperSlide>
        <div className="flex items-center pt-4 sm:pt-0 flex-col-reverse sm:flex-row">
          <div className="max-w-[394px] py-8 sm:py-12 lg:py-20 pl-4 sm:pl-7.5 lg:pl-12.5">
            <div className="flex items-center gap-4 mb-7.5 sm:mb-10">
              <span className="block font-semibold text-heading-3 sm:text-heading-1 text-red-dark">
                15$
              </span>
              <span className="block text-dark text-sm sm:text-custom-1 sm:leading-[24px]">
                Off
                <br />
                Sale
              </span>
            </div>

            <h1 className="font-semibold text-red-dark text-xl sm:text-3xl mb-3">
              <a href="#">Custom Run Lionel Cabin Car Caboose</a>
            </h1>

            <p>
              Most recognizable and popular rail car: LED Interior Lights, LED Marker Lights, Plays Freight Sounds, Max/Min Switch + MORE!
            </p>

            <a
              href="#"
              className="inline-flex font-medium text-white text-custom-sm rounded-md bg-red-dark py-3 px-9 ease-out duration-200 hover:bg-red mt-6"
            >
              Shop Now
            </a>
          </div>

          <div className="pl-3">
            <Image
              src="/images/hero/train-carousel-1.png"
              alt="Cabin-Car"
              width={325}
              height={325}
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex items-center pt-4 sm:pt-0 flex-col-reverse sm:flex-row">
          <div className="max-w-[394px] py-8 sm:py-12 lg:py-20 pl-4 sm:pl-7.5 lg:pl-12.5">
            <div className="flex items-center gap-4 mb-7.5 sm:mb-10">
              <span className="block font-semibold text-heading-3 sm:text-heading-1 text-red-dark">
                15$
              </span>
              <span className="block text-dark text-sm sm:text-custom-1 sm:leading-[24px]">
                Off
                <br />
                Sale
              </span>
            </div>

            <h1 className="font-semibold text-red-dark text-xl sm:text-3xl mb-3">
              <a href="#">Lionel Custom Run Auxiliary Water Tender</a>
            </h1>

            <p>
              These auxiliary water tenders are the perfect add on! Legacy Control, Legacy Railsounds, Rear Electrocoupler, Directional rear headlight + MORE!
            </p>

            <a
              href="#"
              className="inline-flex font-medium text-white text-custom-sm rounded-md bg-red-dark py-3 px-9 ease-out duration-200 hover:bg-red mt-6"
            >
              Shop Now
            </a>
          </div>

          <div className="pl-3">
            <Image
              src="/images/hero/train-carousel-2.png"
              alt="Auxiliary-Water-Tender"
              width={325}
              height={325}
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex items-center pt-4 sm:pt-0 flex-col-reverse sm:flex-row">
          <div className="max-w-[394px] py-8 sm:py-12 lg:py-20 pl-4 sm:pl-7.5 lg:pl-12.5">
            <div className="flex items-center gap-4 mb-7.5 sm:mb-10">
              <span className="block font-semibold text-heading-3 sm:text-heading-1 text-red-dark">
                25$
              </span>
              <span className="block text-dark text-sm sm:text-custom-1 sm:leading-[24px]">
                Off
                <br />
                Sale
              </span>
            </div>

            <h1 className="font-semibold text-red-dark text-xl sm:text-3xl mb-3">
              <a href="#">Lionel CSX Chessie Heritage</a>
            </h1>

            <p>
              Exclusive custom run CSX engine! Bluetooth Control, LEGACY Control System, Road-specific detailing, Fan-driven smoke unit + MORE!
            </p>

            <a
              href="#"
              className="inline-flex font-medium text-white text-custom-sm rounded-md bg-red-dark py-3 px-9 ease-out duration-200 hover:bg-red mt-6"
            >
              Shop Now
            </a>
          </div>

          <div className="pl-3">
            <Image
              src="/images/hero/train-carousel-3.png"
              alt="CSX-Chessie-Heritage"
              width={325}
              height={325}
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex items-center pt-4 sm:pt-0 flex-col-reverse sm:flex-row">
          <div className="max-w-[394px] py-8 sm:py-12 lg:py-20 pl-4 sm:pl-7.5 lg:pl-12.5">
            <div className="flex items-center gap-4 mb-7.5 sm:mb-10">
              <span className="block font-semibold text-heading-3 sm:text-heading-1 text-red-dark">
                05$
              </span>
              <span className="block text-dark text-sm sm:text-custom-1 sm:leading-[24px]">
                Off
                <br />
                Sale
              </span>
            </div>

            <h1 className="font-semibold text-red-dark text-xl sm:text-3xl mb-3">
              <a href="#">Lionel Custom Run Woodside Reefer</a>
            </h1>

            <p>
            The reefer features an authentic advertisement from the 1860s! Die-cast Trucks, Operating Couplers w/ Hidden Tabs + MORE! 
            </p>

            <a
              href="#"
              className="inline-flex font-medium text-white text-custom-sm rounded-md bg-red-dark py-3 px-9 ease-out duration-200 hover:bg-red mt-6"
            >
              Shop Now
            </a>
          </div>

          <div className="pl-3">
            <Image
              src="/images/hero/train-carousel-4.png"
              alt="Auxiliary-Water-Tender"
              width={325}
              height={325}
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroCarousal;
