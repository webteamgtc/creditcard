import React from 'react'
import Image from 'next/image'

const MainHeader = () => {
  return (
    <div className="bg-[#1A1A47] text-center">
      <div className="container mx-auto text-center py-3 flex flex-col md:flex-row justify-center items-center gap-4">
        <Image
          src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/footer-logo.webp"
          width={200}
          height={72}
          alt="GTCFX"
          className="lg:w-[200px] lg:h-[72px] md:w-[120px] md:h-[53px] w-[130px] h-[47px] cursor-pointer"
        />
      </div>
    </div>
  )
}

export default MainHeader