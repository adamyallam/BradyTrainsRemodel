import React from "react";
import ByManufacturer from "@/components/ByManufacturer";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Shop By Manufacturer",
  description: "Shop By Manufacturer page for Brady's Train Outlet",
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
