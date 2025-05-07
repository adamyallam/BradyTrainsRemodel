import TrainShows from "@/components/BlogDetails/TrainShows";
import React from "react";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Train Shows",
  description: "Train Shows page for Brady's Train Outlet",
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
