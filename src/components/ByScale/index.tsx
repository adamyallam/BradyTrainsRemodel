"use client";
import React, { useState, useEffect } from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import CustomSelect from "./CustomSelect";
import ScaleDropdown from "./ScaleDropdown";
import PriceDropdown from "./PriceDropdown";
import shopData from "@/components/Shop/shopData";
import SingleGridItem from "@/components/Shop/SingleGridItem";

const ByScale = () => {
  const [productSidebar, setProductSidebar] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const [selectedScales, setSelectedScales] = useState([]);
  const [priceRange, setPriceRange] = useState({ from: 0, to: 400 });

  const options = [
    { label: "Latest Products", value: "0" },
    { label: "Price: High to Low", value: "1" },
    { label: "Price: Low to High", value: "2" },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  const clearAllFilters = () => {
    setSelectedScales([]);
    setPriceRange({ from: 0, to: 400 });
  };

  const scales = shopData.reduce((acc, product) => {
    const scale = acc.find(s => s.name === product.scale);
    if (scale) {
      scale.products += 1;
    } else {
      acc.push({ name: product.scale, products: 1 });
    }
    return acc;
  }, []);

  // Ensure all scales are represented, even if they have 0 products
  const allScales = ["N", "HO", "O", "G", "Z", "S"];
  allScales.forEach(scale => {
    if (!scales.find(s => s.name === scale)) {
      scales.push({ name: scale, products: 0 });
    }
  });

  const filterProducts = (products) => {
    let filteredProducts = products;

    if (selectedScales.length > 0) {
      filteredProducts = filteredProducts.filter(product => selectedScales.includes(product.scale));
    }

    filteredProducts = filteredProducts.filter(product => product.price >= priceRange.from && product.price <= priceRange.to);

    if (selectedOption.value === "1") {
      return filteredProducts.sort((a, b) => b.price - a.price);
    } else if (selectedOption.value === "2") {
      return filteredProducts.sort((a, b) => a.price - b.price);
    }

    return filteredProducts;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);

    // closing sidebar while clicking outside
    function handleClickOutside(event) {
      if (!event.target.closest(".sidebar-content")) {
        setProductSidebar(false);
      }
    }

    if (productSidebar) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const filteredProducts = filterProducts(shopData);

  return (
    <>
      <Breadcrumb
        title={"Shop By Scale"}
        pages={["shop", "/", "Shop By Scale"]}
      />
      <section className="overflow-hidden relative pb-20 pt-5 lg:pt-20 xl:pt-28 bg-[#f3f4f6]">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex gap-7.5">
            {/* <!-- Sidebar Start --> */}
            <div
              className={`sidebar-content fixed xl:z-1 z-9999 left-0 top-0 xl:translate-x-0 xl:static max-w-[310px] xl:max-w-[270px] w-full ease-out duration-200 ${productSidebar
                ? "translate-x-0 bg-white p-5 h-screen overflow-y-auto"
                : "-translate-x-full"
                }`}
            >
              <button
                onClick={() => setProductSidebar(!productSidebar)}
                aria-label="button for product sidebar toggle"
                className={`xl:hidden absolute -right-12.5 sm:-right-8 flex items-center justify-center w-8 h-8 rounded-md bg-white shadow-1 ${stickyMenu
                  ? "lg:top-20 sm:top-34.5 top-35"
                  : "lg:top-24 sm:top-39 top-37"
                  }`}
              >
                <svg
                  className="fill-current"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.0068 3.44714C10.3121 3.72703 10.3328 4.20146 10.0529 4.5068L5.70494 9.25H20C20.4142 9.25 20.75 9.58579 20.75 10C20.75 10.4142 20.4142 10.75 20 10.75H4.00002C3.70259 10.75 3.43327 10.5742 3.3135 10.302C3.19374 10.0298 3.24617 9.71246 3.44715 9.49321L8.94715 3.49321C9.22704 3.18787 9.70147 3.16724 10.0068 3.44714Z"
                    fill=""
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.6865 13.698C20.5668 13.4258 20.2974 13.25 20 13.25L4.00001 13.25C3.5858 13.25 3.25001 13.5858 3.25001 14C3.25001 14.4142 3.5858 14.75 4.00001 14.75L18.2951 14.75L13.9472 19.4932C13.6673 19.7985 13.6879 20.273 13.9932 20.5529C14.2986 20.8328 14.773 20.8121 15.0529 20.5068L20.5529 14.5068C20.7539 14.2876 20.8063 13.9703 20.6865 13.698Z"
                    fill=""
                  />
                </svg>
              </button>

              <form onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col gap-6">
                  {/* <!-- filter box --> */}
                  <div className="bg-white shadow-1 rounded-lg py-4 px-5">
                    <div className="flex items-center justify-between">
                      <p>Filters:</p>
                      <button onClick={clearAllFilters} className="text-red-dark">Clean All</button>
                    </div>
                  </div>

                  {/* <!-- Scale box --> */}
                  <ScaleDropdown scales={scales} selectedScales={selectedScales} setSelectedScales={setSelectedScales} />

                  {/* // <!-- price range box --> */}
                  <PriceDropdown priceRange={priceRange} setPriceRange={setPriceRange} />
                </div>
              </form>
            </div>
            {/* // <!-- Sidebar End --> */}

            {/* // <!-- Content Start --> */}
            <div className="xl:max-w-[870px] w-full">
              <div className="rounded-lg bg-white shadow-1 pl-3 pr-2.5 py-2.5 mb-6">
                <div className="flex items-center justify-between">
                  {/* <!-- top bar left --> */}
                  <div className="flex flex-wrap items-center gap-4">
                    <CustomSelect options={options} selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>

                    <p>
                      Showing All Products By Scale
                    </p>
                  </div>

                </div>
              </div>

              {/* <!-- Products Grid Tab Content Start --> */}
              <div
                className="grid grid-cols-2 lg:grid-cols-3 gap-x-7.5 gap-y-9">
                {filteredProducts.map((item, key) =>
                  <SingleGridItem item={item} key={key} />
                )}
              </div>
              {/* <!-- Products Grid Tab Content End --> */}


            </div>
            {/* // <!-- Content End --> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default ByScale;
