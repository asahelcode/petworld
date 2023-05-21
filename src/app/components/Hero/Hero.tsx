import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <main className="h-[600px] bg-heroTwo flex justify-around w-full items-start">
        <div className="flex w-[466px] h-[401.24px] flex-col justify-center">
            <p className="w-[423.79px] font-poppins font-[600] text-[80px]">Pet Store & Beyond</p>
            <span className="w-[466px] text-[#2D2D2D]">This is a sample landing page, created with Figma and Anima. No coding involved.</span>
            <div>
                <button>Get Started</button>
            </div>
        </div>
        <Image 
            src="/images/Image.png"
            alt="Hero Image"
            width={500}
            height={460}
        />
    </main>
  )
}

export default Hero