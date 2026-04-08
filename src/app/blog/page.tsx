'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function Blog() {
  const [blogs , setBLogs] = useState([])
  useEffect(()=>{
    fetch('http://127.0.0.1:8000/blog/',{
      next:{revalidate:1000}
    })
    .then(res => res.json())
    .then(data=>{
      setBLogs(data)
    })
    .catch(err => console.log(err));
  },[])
  return (
    <div className='w-full min-h-screen'>
        <div className='w-full md:w-[90%] lg:w-[80%] py-10 mx-auto grid grid-cols-12 gap-6'>
  {blogs.map((item) => (
    <Link 
      key={item.id} 
      href={`/blog/${item.id}`} 
      className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 group'
    >
      <figure className="h-full p-2 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
        <div className="overflow-hidden">
          <img 
            src={item.image.startsWith('http') ? item.image : `http://127.0.0.1:8000${item.image}`} 
            alt={item.title} 
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h2 className="text-md font-bold text-gray-800 line-clamp-2 font-SahelMediume">{item.title}</h2>
          <section className="mt-3 flex items-center justify-between border-t pt-2 font-Shabnam-Light">
            <span className='text-xs text-gray-500 '>نویسنده:</span>
            <strong className='text-xs font-medium text-blue-600'>{item.author_name}</strong>
          </section>
        </div>
      </figure>
    </Link>
  ))}
</div>

    </div>
  )
}

export default Blog