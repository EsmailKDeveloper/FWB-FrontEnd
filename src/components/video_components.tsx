import Link from 'next/link'
import React from 'react'
import Comments from '@/app/(main)/comments/page'

function Video_components() {
  return (
    <section className='w-full mt-25 hero_background'>
        <div className='container mx-auto lg:w-[85%] py-25 '>
            <section className='w-full flex justify-between items-center flex-wrap px-10 md:px-0'>
                <h3 className='font-Shabnam-Medium font-bold lg:text-2xl w-full md:w-fit'>نظرات همراهان بی‌نظیر فرانت وب</h3>
                <Link href="comments/" className='px-7 rounded text-white font-Shabnam-Medium mt-5 md:mt-0 py-3 bg-[#525fe1] duration-200 hover:bg-[#231f40]'>مشاهده همه نظرات ❤</Link>
            </section>
            <section className='w-full'>
              <Comments limit={3} />
            </section>
        </div>
    </section>
  )
}

export default Video_components