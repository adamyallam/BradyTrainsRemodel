import React from "react";
import Image from "next/image";

const PromoBanner = () => {
  return (
    <section className="overflow-hidden py-20">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="grid gap-7.5 grid-cols-1 lg:grid-cols-2">
          {/* <!-- promo banner small --> */}
          <div className="relative z-1 overflow-hidden rounded-lg bg-[#DBF4F3] py-10 xl:py-16 px-4 sm:px-7.5 xl:px-10">
            <Image
              src="/images/promo/promo-02.png"
              alt="promo img"
              className="absolute top-1/2 -translate-y-1/2 left-3 sm:left-10 -z-1"
              width={291}
              height={291}
            />

            <div className="text-right">
              <span className="block text-lg text-dark mb-1.5">
                CUSTOM CONRAIL VISION HUDSON
              </span>

              <h2 className="font-bold text-xl lg:text-heading-4 text-dark mb-25">
                NEW LIMITED PREORDER
              </h2>

              <div className="text-left sm:text-right">
                <a
                  href="#"
                  className="inline-flex font-medium text-custom-sm text-white bg-teal py-2.5 px-8.5 rounded-md ease-out duration-200 hover:bg-teal-dark mt-7"
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>

          {/* <!-- promo banner small --> */}
          <div className="relative z-1 overflow-hidden rounded-lg bg-[#FFECE1] py-10 xl:py-16 px-4 sm:px-7.5 xl:px-10">
            <Image
              src="/images/promo/promo-03.png"
              alt="promo img"
              className="absolute top-45 sm:top-50 -translate-y-1/2 right-3 sm:right-8.5 -z-1"
              width={275}
              height={275}
            />

            <div>
              <span className="block text-lg text-dark mb-1.5">
                Union Pacific UP TOFC Flatcar
              </span>

              <h2 className="font-bold text-xl lg:text-heading-4 text-dark mb-2">
                Sale <span className="text-orange">10&#39;</span> OFF
              </h2>

              <p className="max-w-[285px] text-custom-sm mb-20 sm:mb-24">
                With 20' Trailers!
              </p>

              <a
                href="#"
                className="inline-flex font-medium text-custom-sm text-white bg-orange py-2.5 px-8.5 rounded-md ease-out duration-200 hover:bg-orange-dark mt-7 sm:mt-0"
              >
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
