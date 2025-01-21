import React from 'react'
import Image from 'next/image'

export const LogoSection = () => {
  return (
    <div className="w-full h-[122px] bg-black flex justify-evenly items-center flex-wrap m-auto px-4 sm:px-8">
      {/* Logo 1 */}
      <Image
        src={'/vercase.png'}
        width={100}
        height={100}
        alt="versace logo"
        className="w-[166.5px] h-[33px] sm:w-[120px] sm:h-[30px] lg:w-[166.5px] lg:h-[33px]"
      />
      
      {/* Logo 2 */}
      <Image
        src={'/zara.png'}
        width={100}
        height={100}
        alt="zara logo"
        className="w-[91px] h-[38px] sm:w-[80px] sm:h-[35px] lg:w-[91px] lg:h-[38px]"
      />
      
      {/* Logo 3 */}
      <Image
        src={'/guccci.png'}
        width={100}
        height={100}
        alt="gucci logo"
        className="w-[156px] h-[36px] sm:w-[130px] sm:h-[30px] lg:w-[156px] lg:h-[36px]"
      />
      
      {/* Logo 4 */}
      <Image
        src={'/prada.png'}
        width={100}
        height={100}
        alt="prada logo"
        className="w-[194px] h-[32px] sm:w-[160px] sm:h-[28px] lg:w-[194px] lg:h-[32px]"
      />
      
      {/* Logo 5 */}
      <Image
        src={'/calvinklein.png'}
        width={100}
        height={100}
        alt="ck logo"
        className="w-[207px] h-[33px] sm:w-[170px] sm:h-[30px] lg:w-[207px] lg:h-[33px]"
      />
    </div>
  )
}
