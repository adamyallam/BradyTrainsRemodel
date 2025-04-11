import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brady Trains",
  description: "All your model train needs in one place!",
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
