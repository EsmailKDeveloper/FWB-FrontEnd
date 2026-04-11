'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Send_comments from '@/components/send_comments'
import Loading_component from '@/components/loading_component'

function Comments({ limit = null }) {
  const [comment , setComment] = useState([])
  const [loading , setLoading] = useState(true)

  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/comments/')
        .then(res=>{
          const data = limit ? res.data.slice(0, limit) : res.data;
          setComment(data)
          setLoading(false)
        })
        .catch(err => {
          console.error("خطا در دریافت کامنت‌ها:", err);
        });
  },[limit])

  if(loading) return(
    <Loading_component />
  )

  const toPersianDate = (dateString) => {
          if (!dateString) return "---";
            const date = new Date(dateString);
          return new Intl.DateTimeFormat('fa-IR').format(date);
  }

  return (
    <section className={`w-full ${limit ? '' : 'min-h-screen'}`}>
        <div className='container lg:w-[85%] mx-auto py-10 text-xl px-10 md:px-0'>
            {!limit && (
              <>
                <h2 className='font-Shabnam-Medium font-bold text-center my-10'>نظرات تانرا ثبت نماید</h2>
                <Send_comments />
              </>
            )}

            <section className='grid grid-cols-12 gap-3.5 my-15'>
                {comment.map((item)=>(
                  <article key={item.id} className='col-span-12 h-100 sm:col-span-6 lg:col-span-4 card_shadow relative p-1 rounded-sm'>
                    <img src={item?.photo} className='w-full h-full object-cover object-top' alt={item.first_name} />
                    <div className='p-3 absolute top-0 left-0 card_gradient w-full h-full content-end text-white'>
                        <strong className='font-Shabnam-Medium mt-4 block'>{item.first_name} {item.last_name}</strong>
                        <p className='font-Shabnam-Light my-2 text-justify text-[13px]'>{item.description}</p>
                        <p className='font-Shabnam-Light text-[12px]'> <span className='font-Shabnam-Medium text-[14px]'>تاریخ ایحاد:</span>  {toPersianDate(item.create_at)}</p>
                    </div>
                  </article>
                ))}
            </section>
        </div>
    </section>
  )
}

export default Comments