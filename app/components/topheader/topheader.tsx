import React, { useState } from "react";  
import { RxCross2 } from "react-icons/rx";

const TopHeader = () => {
  // State to manage banner visibility
  const [isVisible, setIsVisible] = useState(true);

  // Function to hide the banner when the close button is clicked
  const closeBanner = () => {
    setIsVisible(false);
  };

  return (
    isVisible && ( // Only render the banner if it is visible
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-black text-white">
        {/* Sale Banner */}
        <div className="w-full h-[48px] flex justify-center items-center px-4 sm:px-8">
          <p className="text-gray-300 text-sm font-normal text-center sm:text-left">
            Sign up and get <span className="font-semibold">20% off</span> your first order. 
            <span className="underline font-medium hover:font-semibold ml-2 text-white cursor-pointer">
              Sign Up Now
            </span>
          </p>
        </div>

        {/* Close Icon (hidden on small screens) */}
        <div className="w-full sm:w-auto h-[48px] sm:flex hidden justify-center items-center sm:justify-end px-4 sm:px-8 mt-2 sm:mt-0">
          <button 
            className="flex items-center justify-center text-gray-100 hover:text-gray-300 transition-all duration-200 cursor-pointer"
            aria-label="Close"
            onClick={closeBanner} // Close the banner when clicked
          >
            <RxCross2 size={20} />
          </button>
        </div>
      </div>
    )
  );
};

export default TopHeader;
