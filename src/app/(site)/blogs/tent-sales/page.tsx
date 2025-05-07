import TentSales from "@/components/BlogDetails/TentSales";
import React from "react";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Tent Sales",
  description: "Tent Sales page for Brady's Train Outlet",
  // other metadata
};

const BlogTentSales = () => {
  return (
    <main>
      <TentSales />
    </main>
  );
};

export default BlogTentSales;
