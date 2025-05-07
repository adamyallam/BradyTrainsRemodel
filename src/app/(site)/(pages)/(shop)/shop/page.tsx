import React from "react";
import ShopAll from "@/components/ShopAll";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Shop",
  description: "Shop page for Brady's Train Outlet",
  // other metadata
};

const Shop = () => {
  return (
    <main>
      <ShopAll/>
    </main>
  );
};

export default Shop;
