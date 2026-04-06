import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { PiTelegramLogoBold } from "react-icons/pi";


import React from 'react'
import Link from "next/link";

function Footer() {
  return (
    <footer className='w-full bg-[#231F40]'>
        <section className='container mx-auto  px-5 lg:px-0'>

            <div className='grid grid-cols-12 lg:w-[80%] mx-auto py-2 mb-8 sm:gap-5 relative'>
                {/* ___CARD__1__ */}
                <section className='col-span-12  md:col-span-6 lg:col-span-3 mt-23'>
                    <h2 className='text-white border-b border-custome pb-4 font-Shabnam-Medium font-bold text-lg relative after:content-[""] after:block after:w-20 after:h-0 after:border-white after:border-1 after:absolute after:bottom-[-1px] after:right-0 after:rounded-md'>
                        فرانت وب
                    </h2>
                    <p className='font-Shabnam-Light text-white  text-sm text-justify mt-3'>
                        ما در فرانت وب بخشی از دایره وسیع دانش را در ساختاری مدرن، متفاوت و با جزئیات بسیار کاربـردی در اختیار مـخاطبان خود قرار می‌دهـیم و کـیـفیت را به عـنوان وجه تمایز خود در تولید محتوای آموزشی برگزیده‌ایم.
                    </p>
                </section>


                {/* ___CARD__2__ */}
                <section className='col-span-12 sm:col-span-6 lg:col-span-3 mt-23'>
                    <h2 className='text-white border-b border-custome pb-4 font-Shabnam-Medium font-bold text-lg relative after:content-[""] after:block after:w-20 after:h-0 after:border-white after:border-1 after:absolute after:bottom-[-1px] after:right-0 after:rounded-md'>
                        تماس با ما
                    </h2>
                    <p className='text-white font-Shabnam-Light text-sm mt-5'>
                        کابل، افغانستان ، چهارراهی کارته پروان
                    </p>
                    <p className='text-white font-semibold text-sm mt-4'>
                        <a href="tel:93785788463" className='hover:text-[#525fe1]'>(93) 78 578 8463</a>
                    </p>
                    <p className='text-white font-semibold text-sm mt-4'>
                        <a href="" className='hover:text-[#525fe1] duration-300'>info@frontWb.net</a>
                    </p>
                </section>


                {/* ___CARD__3__ */}
                <section className='col-span-12 sm:col-span-6 lg:col-span-3 mt-23'>
                    <h2 className='text-white border-b border-custome pb-4 font-Shabnam-Medium font-bold text-lg relative after:content-[""] after:block after:w-20 after:h-0 after:border-white after:border-1 after:absolute after:bottom-[-1px] after:right-0 after:rounded-md'>
                         شبکه های اجتماعی
                    </h2>
                    <div className='w-full mt-5 flex gap-3 text-white text-xl'>
                        <a href="" className="duration-200 hover:text-[#525fe1]"><GrInstagram /></a>
                        <a href="" className="duration-200 hover:text-[#525fe1]"><FaLinkedinIn /></a>
                        <a href="" className="duration-200 hover:text-[#525fe1]"><FaFacebookF /></a>
                        <a href="" className="duration-200 hover:text-[#525fe1]"><PiTelegramLogoBold /></a>
                    </div>
                    <p className="mt-3">
                        <span className="text-[red]">❤</span>
                        <Link href='comments/' className="font-Shabnam-Medium text-white  duration-200 hover:text-[#525fe1]">      نظرات مشتریان
                        </Link>
                    </p>
                </section>

                {/* ___CARD__4__ */}
                <section className='col-span-12 sm:col-span-6 lg:col-span-3 mt-23'>
                    <h2 className='text-white border-b border-custome pb-4 font-Shabnam-Medium font-bold text-lg relative after:content-[""] after:block after:w-20 after:h-0 after:border-white after:border-1 after:absolute after:bottom-[-1px] after:right-0 after:rounded-md'>
                        مجوزها
                    </h2>
                    <p className='text-white font- text-sm mt-4'>
                        اخذ مجوز های سایت طی مراحل می باشد 
                    </p>
                </section>

            <img src="/shape-35.png" className="absolute -bottom-15 -left-15 scale-[0.8] hidden lg:block"  alt="shape" />
            <img src="/shape-21-01.png" className="absolute top-5 -right-30 scale-[0.8] hidden lg:block"  alt="shape" />
            </div>

            
        </section>
            {/* =====CopyRite__erea___ */}
            <div>
                <p className='py-7 bg-[#18152F] text-center text-white font-Shabnam-Medium text-sm px-5 md:px-0'>
                    کليه حقوق اين سايت متعلق تیم تولید محتوا فرانت وب می‌باشد. 2025 © اجرا شده با <span className='text-[red]'>❤</span> در فرانت وب
                </p>
            </div>
    </footer>
  )
}

export default Footer