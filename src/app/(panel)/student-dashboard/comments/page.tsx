'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loading_component from '@/components/loading_component'

export default function Comments() {
  const [mycomment , setMycomment] = useState([])
  const [loading , setLoading] = useState(true)

  useEffect(()=>{
    axios.get('http://localhost:8000/my-comments/',{
      withCredentials: true
    })
    .then(res=>{
      setMycomment(res.data)
      setLoading(false)
      console.log(res.data)
    })
  },[])
  if(loading) return(
    <Loading_component />
  )

   const toPersianDate = (dateString) => {
          if (!dateString) return "---";
            const date = new Date(dateString);
          return new Intl.DateTimeFormat('fa-IR').format(date);
  }
  return (
    <div>
        <h2 className='font-Shabnam-Medium border-b w-fit'>نظرات من</h2>
        <section className='grid grid-cols-12 gap-3.5 py-10 mt-5'>
          {mycomment===null ? ('شما تاحالا کامنت  ثبت نکرده اید.'):(
            mycomment.map((item)=>(
            <div className='col-span-12 font-Shabnam-Light text-sm py-5 rounded-sm shadow-md'>
              <span className='font-bold text-xl'>متن کامنت</span>
              <p className='text-justify mt-2 mb-5'>{item.description}</p>
              <p> <span className='font-bold'>تاریخ ثبت</span> {toPersianDate(item.create_at)}</p>
            </div>
          ))
          )}
        </section>
    </div>
  )
}
