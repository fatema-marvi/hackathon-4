import Card from "../card/card"; 
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

export default function Customer() {
  return (
    <div className="flex flex-col justify-start items-center m-auto gap-6 px-4 sm:px-8 lg:px-16">
      {/* Heading Section */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-center mx-auto mb-8">
        <h4 className="text-[#000000] text-[28px] sm:text-[32px] lg:text-[48px] font-bold leading-tight text-center sm:text-left mb-4 sm:mb-0">
          OUR HAPPY CUSTOMERS
        </h4>
        <div className="flex justify-between items-center gap-2">
          <FaArrowLeft className="w-[24px] h-[24px] text-2xl text-gray-700 cursor-pointer" />
          <FaArrowRight className="w-[24px] h-[24px] text-2xl text-gray-700 cursor-pointer" />
        </div>
      </div>

      {/* Customer Cards Section */}
      <div className="flex flex-wrap gap-6 justify-center lg:justify-start w-full">
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
