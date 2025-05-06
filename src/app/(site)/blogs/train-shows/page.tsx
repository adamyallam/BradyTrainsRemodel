import TrainShows from "@/components/BlogDetails/TrainShows";
import React from "react";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blog Details Page | NextCommerce Nextjs E-commerce template",
  description: "This is Blog Details Page for NextCommerce Template",
  // other metadata
};

const BlogTrainShows = () => {
  return (
    <main>
      <TrainShows />
    </main>
  );
};

export default BlogTrainShows;
