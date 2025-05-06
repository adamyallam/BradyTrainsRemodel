import React from "react";
import ByScale from "@/components/ByScale";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Shop Page | NextCommerce Nextjs E-commerce template",
  description: "This is Shop Page for NextCommerce Template",
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
