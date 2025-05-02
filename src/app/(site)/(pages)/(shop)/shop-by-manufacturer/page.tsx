import React from "react";
import ShopAll from "@/components/ShopAll";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Shop Page | NextCommerce Nextjs E-commerce template",
  description: "This is Shop Page for NextCommerce Template",
  // other metadata
};

const ShopByManufacturer = () => {
  return (
    <main>
      <ShopAll />
    </main>
  );
};

export default ShopByManufacturer;
