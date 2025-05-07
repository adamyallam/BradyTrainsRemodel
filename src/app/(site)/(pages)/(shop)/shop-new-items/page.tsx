import React from "react";
import NewItems from "@/components/NewItems";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "New Items",
  description: "New Items page for Brady's Train Outlet",
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
