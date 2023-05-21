import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <main className="h-[600px] bg-heroTwo flex justify-around w-full items-center">
        <div className="flex w-[466px] h-[401.24px] flex-col justify-center">
            <p className="fontFamily-Poppins font-[600px]">Pet Store & Beyond</p>
            <span>This is a sample landing page, created with Figma and Anima. No coding involved.</span>
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