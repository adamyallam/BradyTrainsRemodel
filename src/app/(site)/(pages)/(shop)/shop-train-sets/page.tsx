import React from "react";
import ByTrainSets from "@/components/ByTrainSets";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Shop Page | NextCommerce Nextjs E-commerce template",
  description: "This is Shop Page for NextCommerce Template",
  // other metadata
};

const ShopTrainSets = () => {
  return (
    <main>
      <ByTrainSets />
    </main>
  );
};

export default ShopTrainSets;
