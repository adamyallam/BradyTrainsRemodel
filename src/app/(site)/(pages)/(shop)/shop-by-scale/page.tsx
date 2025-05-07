import React from "react";
import ByScale from "@/components/ByScale";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Shop By Scale",
  description: "Shop By Scale page for Brady's Train Outlet",
  // other metadata
};

const ShopByScale = () => {
  return (
    <main>
      <ByScale />
    </main>
  );
};

export default ShopByScale;
