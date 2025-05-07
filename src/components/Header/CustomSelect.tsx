import React, { useState, useEffect } from "react";

const CustomSelect = ({ options, secondaryOptions, selectedOption, setSelectedOption, selectedSecondaryOption, setSelectedSecondaryOption  }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSecondaryOpen, setIsSecondaryOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleSecondaryDropdown = () => {
    setIsSecondaryOpen(!isSecondaryOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    toggleDropdown();
  };

  const handleSecondaryOptionClick = (option) => {
    setSelectedSecondaryOption(option);
    toggleSecondaryDropdown();
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (!event.target.closest(".dropdown-content")) {
        setIsOpen(false);
        setIsSecondaryOpen(false);
      }
    }

    if (isOpen || isSecondaryOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, isSecondaryOpen]);

  return (
    <div className="flex">
      <div className="dropdown-content custom-select relative" style={{ width: "105px" }}>
        <div
          className={`select-selected whitespace-nowrap ${
            isOpen ? "select-arrow-active" : ""
          }`}
          onClick={toggleDropdown}
        >
          {selectedOption.label}
        </div>
        <div className={`select-items ${isOpen ? "" : "select-hide"}`}>
          {options.map((option, index) =>
            option !== selectedOption && (
              <div
                key={index}
                onClick={() => handleOptionClick(option)}
                className={`select-item ${selectedOption === option ? "same-as-selected" : ""}`}
              >
                {option.label}
              </div>
            )
          )}
        </div>
      </div>

      <div className="dropdown-content custom-select relative" style={{ width: "105px" }}>
        <div
          className={`second-select-selected whitespace-nowrap ${
            isSecondaryOpen ? "select-arrow-active" : ""
          }`}
          onClick={toggleSecondaryDropdown}
        >
          {selectedSecondaryOption.label}
        </div>
        <div className={`select-items ${isSecondaryOpen ? "" : "select-hide"}`}>
          {secondaryOptions.map((option, index) =>
            option !== selectedSecondaryOption && (
              <div
                key={index}
                onClick={() => handleSecondaryOptionClick(option)}
                className={`select-item ${
                  selectedSecondaryOption === option ? "same-as-selected" : ""
                }`}
              >
                {option.label}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomSelect;
