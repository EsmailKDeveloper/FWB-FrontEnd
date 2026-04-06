import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaHeadphones } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";

import Image from 'next/image'
import React from 'react'
import MyImg from '../../../public/contact2.png'

function Contact() {
  return (
    <div className='min-h-screen  pb-10'>


        <figure className="w-full ">
        <Image 
            src={MyImg}
            alt='عکس اسماعیل کیهان' 
            className='object-cover w-full' 
            priority 
            sizes="100vw" 
            placeholder="blur" // نمایش حالت تاری تا زمان لود کامل
        />
      </figure>


      <section className='container mx-auto'>

      {/* ____Content__Section */}
          <div className='w-full lg:w-[80%] mx-auto py-10 font-Shabnam-Light px-5 md:px-8 lg:px-0'>
            <h2 className='font-Shabnam-Medium text-center text-xl md:text-3xl font-bold md:mt-20'>تماس با فرانت وب و پیشتبانی آموزشی</h2>
            <p className='mt-8'>
              خوشحال خواهیم شد با دریافت نظرات، پیشنهادات و پرسش‌هایتان زمینه ارتباط موثر تیم  <strong>فرانت وب</strong> با شما فراهم شود. از شما دعوت می‌کنیم درکنار امکان تماس تلفنی در ساعات اداری؛ با ثبت نقطه نظرات خود در هر ساعت از شبانه روز با ما در ارتباط باشید. همکاران ما در کوتاهترین زمان پاسخگو شما خواهند بود.
            </p>
            <section className='w-full py-1 bg-[#f8d7da] border border-[#f5c2c7] text-center rounded-sm my-4 text-sm'>
              <p>
                سریعترن راه ارتباط با فرانت وب : کلیک روی دایره بنفش رنگ گوشه پایین سمت راست صفحه
              </p>
            </section>
          </div>

          <SendData />
          <Iframe_map />

          <Contact_text />
      </section>
    </div>
  )
}

export default Contact



function SendData(){

  
  return(
    <section className='w-full lg:w-[80%] mx-auto  grid grid-cols-12 px-5  lg:px-0'>


        {/* =======DIV___1=========== */}
      <div className='col-span-12 lg:col-span-6 p-2'>
        
        <section className='grid grid-cols-12 gap-8'>
            {/* _____Card__1__ */}
          <div className='bg-white card_shadow p-3 col-span-12 sm:col-span-6 md:h-55 text-center duration-300 hover:-translate-y-2 hover:bg-[#F86F03] group hover:text-white'>
              <span className="flex w-10 h-10 bg-[#525ee131] rounded-full justify-center items-center mx-auto my-7 group-hover:bg-white group-hover:text-[#F86F03]"><BsGlobe2 /></span>
              <h6 className='font-Shabnam-Medium'>وب سایت</h6>
              <p className='font-semibold text-[12px] mt-1 mb-8'>frontwb.com</p>
          </div>


           {/* _____Card__2__ */}
          <div className='bg-white card_shadow p-3 col-span-12 sm:col-span-6 md:h-61 text-center duration-300 hover:-translate-y-2 hover:bg-[#F86F03] group hover:text-white'>
              <span className="flex w-10 h-10 bg-[#f86d032f] rounded-full justify-center items-center mx-auto my-7 group-hover:bg-white group-hover:text-[#F86F03]"><FaHeadphones /></span>
              <h6 className='font-Shabnam-Medium'>تماس تلفنی</h6>
              <p className='font-semibold text-[12px] mt-1 mb-8'>(93) 78 578 8463</p>
              <p className='font-semibold text-[12px] mt-1'>(93) 791 785 822</p>
          </div>


           {/* _____Card__3__ */}
          <div className='bg-white card_shadow p-3 col-span-12 sm:col-span-6 md:h-44 text-center duration-300 hover:-translate-y-2 group hover:bg-[#F86F03] hover:text-white'>
              <span className="flex w-10 h-10 bg-[#f86d032f] rounded-full justify-center items-center mx-auto my-7 group-hover:bg-white group-hover:text-[#F86F03]"><MdOutlineMarkEmailUnread /></span>
              <h6 className='font-Shabnam-Medium'>ایمیل</h6>
              <p className='font-semibold text-[12px] mt-1 mb-8'>info@frontwb.net</p>
          </div>



           {/* _____Card__4__ */}
          <div className='bg-white card_shadow p-3 col-span-12 sm:col-span-6 md:h-50 text-center rounded-sm group duration-300 hover:-translate-y-2 hover:bg-[#F86F03] hover:text-white'>
              <span className="flex w-10 h-10 bg-[#525ee131] rounded-full justify-center items-center mx-auto my-7 group-hover:bg-white group-hover:text-[#F86F03]"><FaLocationDot /></span>
              <h6 className='font-Shabnam-Medium '>آدرس</h6>
              <p className='font-semibold text-[12px] mt-3 mb-8'>
                کابل، افغانستان ، چهارراهی کارته پروان
              </p>
          </div>
        </section>

      </div>

      {/* =======DIV___2=========== */}
      <div className='col-span-12 lg:col-span-6 p-2 md:pr-4 '>
        <form className='w-full font-Shabnam-Light'>
          <input type="text"
                 className='w-full h-[50px] rounded-sm  pr-4 bg-[#f2f2f2] outline-blue-200'
                 placeholder="نام و نام خانوادگی* " />
          <input type="text"
                 className='w-full h-[50px] rounded-sm bg-[#f2f2f2] pr-4 mt-4 outline-blue-200'
                 placeholder=" موبایل " />
          <input type="email"
                 className='w-full h-[50px] rounded-sm bg-[#f2f2f2] pr-4 mt-4 outline-blue-200'
                 placeholder=" ایمیل* " />
          <textarea 
          placeholder='پیام شما'
          className='w-full rounded-sm bg-[#f2f2f2] p-4 mt-4 h-40 outline-blue-200'
          ></textarea>
          <div className="w-full h-[50px]  mb-1 flex justify-between">
            <span className="flex h-10 w-25 bg-amber-100 justify-center items-center font-bold">NWOO1</span>
            <input type="text"
                   className='w-[70%] h-full rounded-sm bg-[#f2f2f2] pr-4  outline-blue-200'
                 placeholder=" ایمیل* "  />
          </div>
          <button className='w-full h-12 rounded-sm bg-[#525fe1] text-white font-Shabnam-Medium cursor-pointer duration-200 hover:bg-[#231F40] '>ارسال پیام </button>
        </form>
      </div>
    </section>

  )
}



function Iframe_map(){
  return(
    <section className="container mx-auto mt-24">
      <div className="w-full lg:w-[80%] mx-auto md:px-8 lg:px-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.60302412089!2d69.14203997414769!3d34.53828429191294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d16f70c9593667%3A0x4eb6762902bb0720!2sFrontWeb%20Academy!5e0!3m2!1sen!2s!4v1775152910212!5m2!1sen!2s"
          width="100%" 
          height="450"
          style={{ border: 0 }} 
          allowFullScreen="True" 
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade" // اصلاح به حروف بزرگ
        ></iframe>
      </div>
    </section>
  )
}



function Contact_text(){
  return(
    <section className="container mx-auto">
      <div className="w-full lg:w-[80%] mx-auto my-20 md:px-8 lg:px-0">
          <h5 className="font-Shabnam-Medium">راه ارتباطی با تیم فرانت وب</h5>
          <ul className="font-Shabnam-Light text-[12px] my-2 list-disc pr-5">
            <li>پشتیبانی آنلاین (دکمه بنفش رنگ گوشه پایین سمت راست صفحه)</li>
            <li>تماس تلفنی</li>
            <li>ایمیل</li>
          </ul>
          <h5 className="font-Shabnam-Medium mt-5">پشتیبانی سریع و پاسخگویی</h5>
          <p className="font-Shabnam-Light text-[12px] my-2">کافیست روی دکمه بنفش رنگ گوشه پایین صفحه کلیک کنید و اولین پیام خود را ارسال کنید تا از سرعت پاسخگویی شگفت زده شوید</p>
          <h5 className="font-Shabnam-Medium mt-5">مشاوره رایگان برای انتخاب دوره</h5>
          <p className="font-Shabnam-Light text-[12px] my-2 mb-5">هر سوالی راجع به خرید دوره نیاز داشتید، میتوانید از همان دکمه بنفش رنگ گوشه سمت راست پایین صفحه استفاده کنید و سوالتان رو بپرسید.</p>
          <span className="font-Shabnam-Medium px-2.5 py-1 shadow-sm text-[#525fe1]">بخش پیشتبانی آنلاین به زودی فعال میگردد</span>
      </div>
    </section>
  )
}