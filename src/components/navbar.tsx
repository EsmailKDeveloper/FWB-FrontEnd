'use client'
import Link from 'next/link'
import Image from 'next/image'
import { PiListBold } from "react-icons/pi";
import { TbUserScan } from "react-icons/tb";
import { TbShoppingCartFilled } from "react-icons/tb";
import { ImSearch } from "react-icons/im";
import { useState } from 'react';
import { IoCloseSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiYoutubekids } from "react-icons/si";
import { FaTelegramPlane } from "react-icons/fa";

import SearchBox from './serachBox';





function Navbar() {
    const [toggleMenu , setToggleMenu] = useState(false)
    const handleToggelMenu = ()=>{
        setToggleMenu((prev)=> !prev)
    }

    const [search , setSearch] = useState(false)
    const handelShowSearchBox = ()=>{
        setSearch((prev)=> !prev)
    }
  return (
    <header className='w-full shadow'>
        <section className='container mx-auto'>
            {/* =======DIV______SM___MENU_____ */}
            <div className='w-full h-13 lg:w-20 lg:hidden flex justify-between items-center px-10'>
                <Link href={'/'}>
                    <Image
                        src="/logo2.png"
                        alt="فـــــرانـت وب آکــادمــی"
                        width={40}
                        height={40}
                    />
                </Link>
                <section className='flex gap-x-3'>
                    <ImSearch className='cursor-pointer hover:text-[#0c7ce6]' onClick={handelShowSearchBox} />
                    <SearchBox handelShowSearchBox={handelShowSearchBox} className={search ? 'visible opacity-100' : 'invisible opacity-0'} />

                    <Link href={'login/'}><TbUserScan className='cursor-pointer hover:text-[#0c7ce6] ' /></Link>
                    <Link href={'cart/'}><TbShoppingCartFilled className='cursor-pointer hover:text-[#0c7ce6]' /></Link>
                    <PiListBold className='cursor-pointer hover:text-[#0c7ce6]' onClick={handleToggelMenu} />
                </section>
                <nav className={`w-[360px] h-screen fixed top-0 ${toggleMenu ? 'right-0 opacity-100' : 'right-[-360px] opacity-0'} duration-500 shadow z-10 bg-white p-2.5`}>
                    <div className='w-full flex justify-between h-10 items-center'>
                        <Image
                            src="/logo2.png"
                            alt="فـــــرانـت وب آکــادمــی"
                            width={40}
                            height={40}
                        />
                        <span onClick={handleToggelMenu} className='rounded-full shadow cursor-pointer w-10 h-10 flex justify-center items-center text-xl'>
                            <IoCloseSharp />
                        </span>
                    </div>
                    <ul className='w-full mt-8 min-h-2 font-Shabnam-Medium'>
                        <li className='w-full h-10 border-custome'>
                            <Link className='w-full h-full flex items-center'  href={'/'}>فرانت وب </Link>
                        </li>
                        <li className='w-full h-10 border-custome'>
                            <Link className='w-full h-full flex items-center'  href={'courses/'}>دوره های آموزشی</Link>
                        </li>
                        <li className='w-full h-10 border-custome'>
                            <Link className='w-full h-full flex items-center'  href={'free-courses/'}>آموزش های رایگان</Link>
                        </li>
                        <li className='w-full h-10 border-custome'>
                            <Link className='w-full h-full flex items-center'  href={'blog/'}>بلاگ</Link>
                        </li>
                        <li className='w-full h-10 border-custome'>
                            <Link className='w-full h-full flex items-center'  href={'about/'}>درباره فرانت وب</Link>
                        </li>
                        <li className='mx-1'>
                            <Link  href={'student_profiles/'}>پروفایل شاگردان</Link>
                        </li>
                        <li className='w-full h-10 border-custome font-Shabnam-Medium'>
                            <Link className='w-full h-full flex items-center'  href={'contact/'}>تماس</Link>
                        </li>
                    </ul>
                    
                    <section className='w-full mt-6 flex justify-center gap-x-2 text-xl'>
                        <Link href={'https://www.facebook.com/'}><FaFacebook /></Link>
                        <Link href={'https://www.facebook.com/'}><FaInstagramSquare /></Link>
                        <Link href={'https://www.facebook.com/'}><FaLinkedin /></Link>
                        <Link href={'https://www.facebook.com/'}><SiYoutubekids /></Link>
                        <Link href={'https://www.facebook.com/'}><FaTelegramPlane /></Link>
                    </section>
                </nav>
            </div>

            {/* =======DIV______LG___MENU_____ */}
            <div className='w-[85%] h-19 hidden lg:flex mx-auto justify-between items-center'>
                <Image
                    src="/logo2.png"
                    alt="فـــــرانـت وب آکــادمــی"
                    width={50}
                    height={45}
                />
                <ul className='flex gap-x-4 font-Shabnam-Light text-sm font-bold'>
                    <li className='mx-1'>
                        <Link href={'/'}>فرانت وب </Link>
                    </li>
                    <li className='mx-1'>
                        <Link href={'courses/'}>دوره های آموزشی</Link>
                    </li>
                    <li className='mx-1'>
                        <Link href={'free-courses/'}>آموزش های رایگان</Link>
                    </li>
                    <li className='mx-1'>
                        <Link href={'blog/'}>بلاگ</Link>
                    </li>
                    <li className='mx-1'>
                        <Link  href={'about/'}>درباره فرانت وب</Link>
                    </li>
                    <li className='mx-1'>
                        <Link  href={'student_profiles/'}>پروفایل شاگردان</Link>
                    </li>
                    <li className='mx-1'>
                        <Link href={'contact/'}>تماس</Link>
                    </li>
                </ul>
                 <section className='flex gap-x-3'>
                    <ImSearch className='cursor-pointer hover:text-[#0c7ce6]' onClick={handelShowSearchBox} />
                    <SearchBox handelShowSearchBox={handelShowSearchBox} className={search ? 'visible opacity-100' : 'invisible opacity-0'} />
                    <Link href={'login/'}><TbUserScan className='cursor-pointer hover:text-[#0c7ce6] ' /></Link>
                    <Link href={'cart/'}><TbShoppingCartFilled className='cursor-pointer hover:text-[#0c7ce6]' /></Link>
                </section>
            </div>
        </section>
    </header>
  )
}

export default Navbar