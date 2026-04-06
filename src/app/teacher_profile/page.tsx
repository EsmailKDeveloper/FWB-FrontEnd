'use client'
import React, { useEffect, useState } from 'react'

function Teacher_profile() {
  const [userInfo , setUserInfo] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/api/dashboard/teacher/')
      .then(res => res.json())
      .then(data => {
        setUserInfo(data)
        console.log(data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  if (!userInfo) {
    return <p>در حال بارگذاری پروفایل...</p>
  }

  return (
    <div className='w-full min-h-screen bg-amber-100'>
      {/* {
        userInfo.map((item)=>(
          <img src={item.photo} className='w-full h-[450px] object-cover' alt="" />
        ))
      } */}
      {/* <img src="/contact2.png" className='w-full h-[450px] object-cover' alt="" />

      <article className='container lg:w-[80%] mx-auto py-10 border'>

        <h1 className='text-2xl font-bold'>
          {userInfo.first_name} {userInfo.last_name}
        </h1>

        <p className='mt-4'>
          {userInfo.bio}
        </p>

      </article> */}

    </div>
  )
}

export default Teacher_profile