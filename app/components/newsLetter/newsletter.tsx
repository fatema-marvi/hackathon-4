import { TfiEmail } from "react-icons/tfi";

export default function NewsLetter() {
  return (
    <div className="w-full max-w-[1240px] h-auto sm:h-[293px] lg:h-[180px] rounded-[20px] bg-[#000000] relative lg:left-[80px] left-3 lg:top-[90px] sm:top-[40px] p-6 sm:p-8 md:p-10">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        {/* Left Section - Heading */}
        <h5 className="font-bold text-white text-center lg:text-left lg:text-[40px] text-[32px] leading-tight lg:leading-[45px] lg:w-[551px] w-full lg:h-[92px] h-[105px] lg:pt-[40px] pt-[20px] lg:pl-[40px] pl-[24px]">
          STAY UP TO DATE ABOUT OUR LATEST OFFERS
        </h5>

        {/* Right Section - Email input and Subscribe button */}
        <div className="flex flex-col lg:ml-[160px] mt-6 lg:mt-0">
          {/* Email Input Box */}
          <div className="flex items-center bg-white rounded-[62px] lg:w-[349px] w-[311px] h-[42px] text-[#00000066] mt-[30px] sm:mt-[15px]">
            <TfiEmail className="ml-5" size={24} />
            <input
              type="email"
              placeholder="Enter your email address"
              className="bg-transparent text-[16px] leading-[21.6px] text-[#00000066] outline-none py-[12px] px-[16px] w-full"
            />
          </div>

          {/* Subscribe Button */}
          <div className="mt-[15px]">
            <button className="w-full lg:w-[349px] h-[42px] bg-white text-[#000000] rounded-[62px] text-center py-[12px] px-[16px] text-[16px] leading-[21.6px]">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
