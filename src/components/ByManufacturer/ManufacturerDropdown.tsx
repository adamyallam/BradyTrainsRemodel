"use client";

import { useState } from "react";

const ManufacturerItem = ({ manufacturer, isSelected, toggleManufacturer}) => {
  return (
    <button
      className={`${
        isSelected && "text-red-dark"
      } group flex items-center justify-between ease-out duration-200 hover:text-red-dark `}
      onClick={() => toggleManufacturer(manufacturer.name)}
    >
      <div className="flex items-center gap-2">
        <div
          className={`cursor-pointer flex items-center justify-center rounded w-4 h-4 border ${
            isSelected ? "border-red bg-red" : "bg-white border-gray-3"
          }`}
        >
          <svg
            className={isSelected ? "block" : "hidden"}
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.33317 2.5L3.74984 7.08333L1.6665 5"
              stroke="white"
              strokeWidth="1.94437"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <span>{manufacturer.name}</span>
      </div>

      <span
        className={`${
          isSelected ? "text-white bg-red" : "bg-gray-2"
        } inline-flex rounded-[30px] text-custom-xs px-2 ease-out duration-200 group-hover:text-white group-hover:bg-red`}
      >
        {manufacturer.products}
      </span>
    </button>
  );
};

const ManufacturerDropdown = ({ manufacturers, selectedManufacturers, setSelectedManufacturers }) => {
  const [toggleDropdown, setToggleDropdown] = useState(true);

  const toggleManufacturer = (name) => {
    if (selectedManufacturers.includes(name)) {
      setSelectedManufacturers(selectedManufacturers.filter(s => s !== name));
    } else {
      setSelectedManufacturers([...selectedManufacturers, name]);
    }
  };

  return (
    <div className="bg-white shadow-1 rounded-lg">
      <div
        onClick={(e) => {
          e.preventDefault();
          setToggleDropdown(!toggleDropdown);
        }}
        className={`cursor-pointer flex items-center justify-between py-3 pl-6 pr-5.5 ${
          toggleDropdown && "shadow-filter"
        }`}
      >
        <p className="text-dark">Manufacturer</p>
        <button
          aria-label="button for manufacturer dropdown"
          className={`text-dark ease-out duration-200 ${
            toggleDropdown && "rotate-180"
          }`}
        >
          <svg
            className="fill-current"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.43057 8.51192C4.70014 8.19743 5.17361 8.161 5.48811 8.43057L12 14.0122L18.5119 8.43057C18.8264 8.16101 19.2999 8.19743 19.5695 8.51192C19.839 8.82642 19.8026 9.29989 19.4881 9.56946L12.4881 15.5695C12.2072 15.8102 11.7928 15.8102 11.5119 15.5695L4.51192 9.56946C4.19743 9.29989 4.161 8.82641 4.43057 8.51192Z"
              fill=""
            />
          </svg>
        </button>
      </div>

      {/* dropdown && 'shadow-filter */}
      {/* <!-- dropdown menu --> */}
      <div
        className={`flex-col gap-3 py-6 pl-6 pr-5.5 ${
          toggleDropdown ? "flex" : "hidden"
        }`}
      >
        {manufacturers.map((manufacturer, key) => (
          <ManufacturerItem key={key} manufacturer={manufacturer} isSelected={selectedManufacturers.includes(manufacturer.name)} toggleManufacturer={toggleManufacturer}/>
        ))}
      </div>
    </div>
  );
};

export default ManufacturerDropdown;
