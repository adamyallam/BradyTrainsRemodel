import FAQ from "@/components/faq";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "FAQ Page | NextCommerce Nextjs E-commerce template",
  description: "This is FAQ Page for NextCommerce Template",
};

const FAQPage = () => {
  return (
    <main>
      <FAQ />
    </main>
  );
};

export default FAQPage;
