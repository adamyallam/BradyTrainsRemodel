"use client";
import React, { useState } from "react";
import Breadcrumb from "../Common/Breadcrumb";

const FAQ = () => {
  const [selectedSection, setSelectedSection] = useState<number>(0);

  const faqSections = [
    {
      title: "General Questions",
      questions: [
        {
          question: "What is Brady Trains?",
          answer: "Brady Trains is your one-stop shop for all things related to model trains, offering a wide range of products and resources for enthusiasts."
        },
        {
          question: "What types of products do you offer?",
          answer: "We offer model trains, tracks, accessories, and more for train enthusiasts of all levels."
        },
        {
          question: "Do you have a physical store?",
          answer: "Currently, we operate exclusively online to serve customers worldwide."
        },
        {
          question: "How can I contact customer support?",
          answer: "You can reach us via email or through the contact form on our website."
        },
        {
          question: "Do you offer gift cards?",
          answer: "Yes, we offer digital gift cards in various denominations."
        },
        {
          question: "Can I suggest a product?",
          answer: "Absolutely! Please use our contact form to send us your suggestions."
        },
        {
          question: "Do you have a loyalty program?",
          answer: "Yes, we offer a rewards program for our loyal customers. Check our website for details."
        },
        {
          question: "Are your products suitable for children?",
          answer: "Some products are suitable for children, but we recommend checking the age guidelines on each product page."
        },
        {
          question: "Do you offer bulk discounts?",
          answer: "Yes, we offer discounts for bulk purchases. Please contact us for more information."
        }
      ]
    },
    {
      title: "Online Store Questions",
      questions: [
        {
          question: "How can I track my order?",
          answer: "You can track your order by logging into your account and visiting the 'My Orders' section. You will find real-time updates on your shipment status."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept major credit cards, PayPal, and other secure payment options."
        },
        {
          question: "Can I cancel my order?",
          answer: "Yes, you can cancel your order within 24 hours of placing it. Contact customer support for assistance."
        },
        {
          question: "Do you offer gift wrapping?",
          answer: "Yes, we offer gift wrapping for an additional fee. You can select this option at checkout."
        },
        {
          question: "Can I change my shipping address after placing an order?",
          answer: "Yes, you can update your shipping address before the order is shipped. Contact customer support for help."
        }
      ]
    },
    {
      title: "Shipping Questions",
      questions: [
        {
          question: "Do you offer international shipping?",
          answer: "Yes, we ship to many countries worldwide. Shipping costs and delivery times vary depending on the destination."
        },
        {
          question: "How long does shipping take?",
          answer: "Shipping times vary by location. Most orders are delivered within 5-10 business days."
        },
        {
          question: "What shipping carriers do you use?",
          answer: "We use trusted carriers like FedEx, DHL, and USPS for reliable delivery."
        },
        {
          question: "Can I expedite my shipping?",
          answer: "Yes, expedited shipping options are available at checkout for an additional fee."
        },
        {
          question: "What should I do if my package is lost?",
          answer: "If your package is lost, please contact our customer support team for assistance."
        },
        {
          question: "Do you offer free shipping?",
          answer: "We offer free shipping on orders over a certain amount. Check our website for current promotions."
        }
      ]
    },
    {
      title: "Repair Questions",
      questions: [
        {
          question: "What is your return policy?",
          answer: "We offer a 30-day return policy for unused and unopened items. Please visit our Returns page for more details."
        },
        {
          question: "Do you offer repair services?",
          answer: "Yes, we offer repair services for select products. Contact us for more information."
        }
      ]
    }
  ];

  return (
    <>
      <Breadcrumb title={"FAQ"} pages={["FAQ"]} />

      <section className="overflow-hidden py-12 bg-gray-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 md:max-w-[85%]">
          <h2 className="text-2xl font-bold text-center mb-12 sm:text-3xl text-dark">Frequently Asked Questions</h2>
          <div className="flex flex-col md:flex-row">
            <aside className="w-full md:w-1/4 mb-8 md:mb-0">
              <ul className="space-y-2 pr-10">
                {faqSections.map((section, index) => (
                  <li
                    key={index}
                    className={`cursor-pointer p-2 rounded-lg ${selectedSection === index ? "bg-red-dark text-white" : "bg-gray-200 text-dark hover:text-white hover:bg-red-light"}`}
                    onClick={() => setSelectedSection(index)}
                  >
                    {section.title}
                  </li>
                ))}
              </ul>
            </aside>
            <div className="w-full md:w-3/4">
              <div className="space-y-6">
                {faqSections[selectedSection].questions.map((q, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold mb-1 sm:text-xl text-dark">{q.question}</h4>
                    <p className="text-gray-700 text-xs sm:text-sm text-dark">{q.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
