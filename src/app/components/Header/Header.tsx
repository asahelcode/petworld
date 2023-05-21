import Image from 'next/image'


const Header = () => {
  return (
    <main className="flex items-center justify-between px-24 py-8 w-#[1280px]">
        <Image 
          src="/images/Logo.svg"
          alt="Website Logo"
          width={200}
          height={200}
        />
        <div className="flex items-center space-x-10">
          <div>
            Sign Up
          </div>
          <button className="px-10 py-2 bg-[#3366FF] text-white rounded-lg text-center text-#[18px]">
            Log In
          </button>
        </div>
    </main>
  )
}

export default Header