import { error } from 'console'
import Link from 'next/link'
import React from 'react'

async function Course_commponents() {
    let res = await fetch('http://127.0.0.1:8000/api/courses/',{
        next:{revalidate:1000}
    })
    if(!res.ok){
        throw new Error('دیتا یافت نشد')
    }
    let course = await res.json()
  return (
    <div className='w-full min-h-screen '>
        <section className='container mx-auto lg:w-[85%] pt-10 px-10 md:px-0'>
            <h2 className='font-Shabnam-Medium font-bold text-2xl md:text-4xl'>دوره های آموزشی ما</h2>
            <div className='grid grid-cols-12 py-5 mt-5 gap-4'>
                {course.map((item)=>(
                    <Link href={'courses/'} key={item.id} className='col-span-12 sm:col-span-6 md:col-span-4 shadow p-1 card_shadow rounded-sm'>
                    <article className='w-full'>
                    <img src={`${item.image}`} className='w-full h-[200px] object-cover' alt={item.title} />
                    <figcaption className='p-3'>
                            <h2 className='my-3 font-Shabnam-Medium font-bold'>{item.title}</h2>
                        <div className='my-2 flex gap-x-2.5'>
                            <p className='font-Shabnam-Light'>💻 <span>{item.session} جلسه</span> </p>
                            <p className='font-Shabnam-Light'>👤 <span>10 شاگرد</span> </p>
                        </div>
                        <div className='w-full flex flex-wrap items-center'>
                            <img src={`${item.teachers[0].photo}`} className='w-10 h-10 rounded-full object-cover' alt={item.teachers[0].first_name} />
                            <strong className='font-Shabnam-Medium mr-3'>{item.teachers[0].first_name} {item.teachers[0].last_name}</strong>
                            <p className='w-full mr-10 text-[12px] font-Shabnam-Light -mt-2.5'>مدرس دوره</p>
                        </div>
                            <button className='block w-full mt-4 py-2 bg-[#231F40] text-white border border-2 borde-[#231F40] hover:bg-transparent hover:text-[#231F40] rounded-md cursor-pointer font-Shabnam-Medium'>بیشتر بدانیــد</button>
                        
                    </figcaption>
                </article>
                </Link>
                ))}
                
            </div>
        </section>
    </div>
  )
}

export default Course_commponents
