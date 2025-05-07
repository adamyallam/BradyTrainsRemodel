import React from "react";
import ByTrainSets from "@/components/ByTrainSets";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Train Sets",
  description: "Train Sets page for Brady's Train Outlet",
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
