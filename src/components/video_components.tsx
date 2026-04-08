import Link from 'next/link'
import React from 'react'

function Video_components() {
  return (
    <section className='w-full min-h-screen relative mt-45'>
        <img src="/home-four-blog.jpg" className='min-h-screen absolute top-0 w-full' alt="" />
        <div className='container mx-auto lg:w-[80%] py-10 relative z-10 py-25 '>
            <section className='w-full flex justify-between items-cente'>
                <h3 className='font-Shabnam-Medium font-bold lg:text-2xl'>نظرات همراهان بی‌نظیر فرانت وب</h3>
                <Link href="comments/" className='px-7 rounded text-white font-Shabnam-Medium py-3 bg-[#525fe1] duration-200 hover:bg-[#231f40]'>مشاهده همه نظرات ❤</Link>
            </section>
            <section className='w-full mt-10 py-4'></section>
        </div>
    </section>
  )
}

export default Video_components