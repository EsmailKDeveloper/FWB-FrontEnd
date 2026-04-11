import React from 'react'

function Loading_component() {
  return (
    <div className='w-full h-screen bg-white relative z-10'>
        <section className="loader">
            <div className="item1"></div>
            <div className="item2"></div>
            <div className="item3"></div>
        </section>
        <p className='font-Shabnam-Medium text-center mt-10'>در حال بارگذاری....</p>
    </div>
  )
}

export default Loading_component