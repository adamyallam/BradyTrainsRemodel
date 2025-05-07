import FAQ from "@/components/faq";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "FAQ",
  description: "FAQ page for Brady's Train Outlet",
};

const FAQPage = () => {
  return (
    <main>
      <FAQ />
    </main>
  );
};

export default FAQPage;
