import React from "react";
import ByManufacturer from "@/components/ByManufacturer";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Shop By Manufacturer",
  description: "This is Shop Page for NextCommerce Template",
  // other metadata
};

const ShopByManufacturer = () => {
  return (
    <main>
      <ByManufacturer />
    </main>
  );
};

export default ShopByManufacturer;
