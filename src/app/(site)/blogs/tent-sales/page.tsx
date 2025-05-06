import TentSales from "@/components/BlogDetails/TentSales";
import React from "react";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blog Details Page | NextCommerce Nextjs E-commerce template",
  description: "This is Blog Details Page for NextCommerce Template",
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
