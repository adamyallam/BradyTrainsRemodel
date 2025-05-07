import React from "react";
import SellYourTrains from "@/components/SellYourTrains";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Sell Your Trains",
  description: "Sell Your Trains page for Brady's Train Outlet",
  // other metadata
};

const SellYourTrainsPage = () => {
  return (
    <main>
      <SellYourTrains />
    </main>
  );
};

export default SellYourTrainsPage;
