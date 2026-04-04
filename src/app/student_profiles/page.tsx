'use client'
// import { error } from 'console' // این خط را حذف کنید، نیازی نیست
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

function StudentProfile() {
  const [studentData, setStudentData] = useState([])
  const [loading, setLoading] = useState(true) // 1. اضافه کردن استیت لودینگ

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/dashboard/studentprofiles/')
      .then(res => res.json())
      .then(data => {
        setStudentData(data)
        setLoading(false) 
      })
      .catch(error => {
        console.error(error)
        setLoading(false)
      })
  }, []) // آرایه خالی یعنی فقط یک‌بار اجرا شود

  // 3. نمایش پیام لودینگ
  if (loading) {
    return (
      <div className='w-full min-h-screen flex justify-center items-center'>
        <p className='font-Shabnam-Medium text-xl'>در حال لود کردن...</p>
      </div>
    )
  }

  const toPersianDate = (dateString) => {
          if (!dateString) return "---";
            const date = new Date(dateString);
          return new Intl.DateTimeFormat('fa-IR').format(date);
  }

  return (
    <div className='w-full min-h-screen '>
      <section className='container mx-auto lg:w-[85%] py-10'>
        <div className='grid grid-cols-12 gap-8'>
          {studentData.map((item) => (
            <Link href={`/student_profiles/${item.id}`} key={item.id} className='col-span-12 sm:col-span-6 md:col-span-4 card_shadow p-5 rounded-md text-center '>
              <figure className='w-full'>
                <div className='w-30 h-30  border_custom rounded-full mx-auto flex justify-center items-center'>
                  <img src={item.photo} className='w-[93%] h-[93%] bg-white rounded-full border border-7 border-white' alt="" />
                </div>
                <h2 className='font-Shabnam-Medium my-2'>{item.first_name} {item.last_name}</h2>
                <p className='font-Shabnam-Light my-2'>{item.term}</p>
                <button className='px-8 py-2 bg-[#525fe1] duration-150 hover:bg-white hover:text-[#525fe1] hover:border-2 border-[#525fe1] rounded-sm font-Shabnam-Light text-white shadow-md'>دیدن پروفایل</button>
                <div className='w-full mt-4 font-Shabnam-Light flex justify-between'>
                  <p><span className='font-bold'>تاریخ  ورود </span><span className='text-[10px]'>({toPersianDate(item.date_joined)})</span> </p>
                  <p><span  className='font-bold'>آدرس</span> <span className='text-[10px]'>({item.address})</span> </p>
                </div>
              </figure>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default StudentProfile
