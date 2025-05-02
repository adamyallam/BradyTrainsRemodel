import React from "react";
import NewItems from "@/components/NewItems";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Shop Page | NextCommerce Nextjs E-commerce template",
  description: "This is Shop Page for NextCommerce Template",
  // other metadata
};

const ShopNewItems = () => {
  return (
    <main>
      <NewItems />
    </main>
  );
};

export default ShopNewItems;
