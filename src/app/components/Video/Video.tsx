import Image from 'next/image'

const Video = () => {
  return (
    <div className="flex h-[600px] bg-heroOne items-center justify-center w-full">
        <Image 
            src="/images/Video.svg"
            alt="video"
            width={765}
            height={460}
        />
    </div>
  )
}

export default Video