import Card from "../card/card"; 
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

export default function Customer() {
  return (
    <div className="flex flex-col items-center m-auto gap-8 px-4 sm:px-8 lg:px-16 w-full max-w-[1440px]">
      {/* Heading Section */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-center text-center sm:text-left mb-8">
        <h4 className="text-[#000000] text-[24px] sm:text-[32px] lg:text-[48px] font-bold leading-tight">
          OUR HAPPY CUSTOMERS
        </h4>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <button className="p-3 bg-gray-200 hover:bg-gray-300 rounded-full">
            <FaArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button className="p-3 bg-gray-200 hover:bg-gray-300 rounded-full">
            <FaArrowRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Customer Cards Section */}
      <div className="flex flex-wrap justify-center gap-6 w-full">
        <Card
          text={"Sarah M."}
          p={
            "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
          }
        />
        <Card
          text={"Alex K."}
          p={
            "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."
          }
        />
        <Card
          text={"James L."}
          p={
            "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
          }
        />
      </div>
    </div>
  );
}
