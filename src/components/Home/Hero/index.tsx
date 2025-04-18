import React from "react";
import HeroCarousel from "./HeroCarousel";
import HeroFeature from "./HeroFeature";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="overflow-hidden pb-8 lg:pb-10 xl:pb-9 pt-50 sm:pt-40 lg:pt-25 xl:pt-45 bg-[#E5EAF4]">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="flex flex-wrap gap-5">
          <div className="xl:max-w-[757px] w-full">
            <div className="relative z-1 rounded-[10px] bg-white overflow-hidden">
              {/* <!-- bg shapes --> */}
              <Image
                src="/images/hero/hero-bg.png"
                alt="hero bg shapes"
                className="absolute right-0 bottom-0 -z-1"
                width={534}
                height={520}
              />

              <HeroCarousel />
            </div>
          </div>

          <div className="xl:max-w-[393px] w-full">
            <div className="flex flex-col sm:flex-row xl:flex-col gap-5 h-[445px] sm:h-[235px] xl:h-[216px]">
              <div className="w-full h-full relative rounded-[10px] bg-white p-5 sm:p-7.5">
                <div className="flex items-center gap-14">
                  <div>
                    <h2 className="max-w-[153px] font-semibold text-dark text-xl mb-10">
                      <a href="#"> New Jersey Blue Comet </a>
                    </h2>

                    <div>
                      <p className="font-medium text-dark-4 text-custom-sm">
                        limited time offer
                      </p>
                      <span className="flex items-center gap-2">
                        <span className="font-medium text-heading-5 text-red">
                          $2,200
                        </span>
                        <span className="flex flex-col font-semibold text-md text-dark">
                          <span className="translate-y-0.5">$100</span>
                          <span className="-translate-y-0.5">OFF!</span>
                        </span>
                      </span>
                    </div>
                  </div>

                  <div>
                    <Image
                      src="/images/hero/train-hero-1.png"
                      alt="Blue Comet"
                      width={163}
                      height={191}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full h-full relative rounded-[10px] bg-white p-5 sm:p-7.5">
                <div className="flex items-center gap-14">
                  <div>
                    <h2 className="max-w-[153px] font-semibold text-dark text-xl mb-10">
                      <a href="#"> Turner Dairy Milk Car </a>
                    </h2>

                    <div>
                      <p className="font-medium text-dark-4 text-custom-sm mb-1.5">
                        limited time offer
                      </p>
                      <span className="flex items-center gap-3">
                        <span className="font-medium text-heading-5 text-red">
                          $115
                        </span>
                        <span className="font-medium text-2xl text-dark-4 line-through">
                          $120
                        </span>
                      </span>
                    </div>
                  </div>

                  <div>
                    <Image
                      src="/images/hero/train-hero-2.png"
                      alt="Dairy Milk Car"
                      width={210}
                      height={210}
                    />
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Hero features --> */}
      <HeroFeature />
    </section>
  );
};

export default Hero;
