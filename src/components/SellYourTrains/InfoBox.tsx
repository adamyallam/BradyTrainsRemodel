import React, { useState } from "react";

const InfoBox = () => {
  const [selectedSection, setSelectedSection] = useState<number>(0);

  const infoSections = [
    {
      title: "We work for you!",
      content: (
        <>
          <p className="mb-4">
            We make the selling process as easy as possible for our clients.
            Whatever your reason for selling your model train collection, we
            understand that it can be a stressful and sometimes emotional
            decision. Depending on your location and the size of your collection,
            selling your trains could be as easy as accepting our offer. Let us
            do the hard part.
          </p>
        </>
      ),
    },
    {
      title: "Next steps",
      content: (
        <>
          <ul className="list-disc list-inside mb-4">
            <li>
              E-mail us{" "}
              <a
                href="mailto:bradystrains@gmail.com"
                className="text-red"
              >
                bradystrains@gmail.com
              </a>
              {" "}a detailed list of your collection, ideally including product
              numbers, quantities, and condition. Pictures also help!
            </li>
            <li>
              Lists should be typed, preferably using Excel or a similar program.
              Include SKU (e.g., 6-12345, 30-4567) and item condition.
            </li>
            <li>
              John Brady will be in touch to discuss your collection and offer a
              tentative estimate!
            </li>
            <li>
              You can bring your trains into the store for an assessment, mail
              them to us, or, for large collections, John may visit your
              location.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Determine Train Value",
      content: (
        <>
          <ul className="list-disc list-inside">
            <li>Desirability</li>
            <li>Rareness</li>
            <li>Item condition (paint, appearance, functionality)</li>
            <li>Box condition</li>
            <li>Technology (sound, control system, etc.)</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <div className="flex flex-col items-center text-center">
      <aside className="w-1/2">
        <ul className="space-y-2">
          {infoSections.map((section, index) => (
            <li
              key={index}
              className={`cursor-pointer p-2 rounded-lg ${
                selectedSection === index
                  ? "bg-red-dark text-white"
                  : "bg-gray-200 text-dark hover:text-white hover:bg-red-light"
              }`}
              onClick={() => setSelectedSection(index)}
            >
              {section.title}
            </li>
          ))}
        </ul>
      </aside>
      <div className="w-full">
        <div className="bg-white p-4 rounded-lg shadow-md border-0 m-4">
          {infoSections[selectedSection].content}
        </div>
      </div>
    </div>
  );
};

export default InfoBox;