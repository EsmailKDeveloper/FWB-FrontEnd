import { AiFillHome } from "react-icons/ai";


import Link from 'next/link';
import React from 'react'

async function getStudentDetail(id: string) {
  try {
    const res = await fetch(`http://127.0.0.1:8000/api/dashboard/studentprofiles/${id}/`, {
      next:{revalidate:1000}
    })
    
    if (!res.ok) {
      console.error(`خطای سرور: ${res.status}`);
      return null;
    }
    
    const data = await res.json();
        return data;

        
  } catch (error) {
    console.error("خطا در اتصال به بک‌اندر:", error);
    return null;
  }
}



async function DetailProfileStudent({ params }: { params: Promise<{ id: string }> }) {
  
  
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  
  const student = await getStudentDetail(id);

  
  if (!student) {
    return (
      <div className='w-full min-h-screen flex justify-center items-center'>
        <p className='font-Shabnam-Medium text-red-500'>اطلاعات دانش‌آموز یافت نشد یا سرور متصل نیست.</p>
      </div>
    )
  }

  const toPersianDate = (dateString) => {
          if (!dateString) return "---";
            const date = new Date(dateString);
          return new Intl.DateTimeFormat('fa-IR').format(date);
  }

  return (
    <div className='w-full min-h-screen'>
       <img src="/banner.png" className='h-[470px] w-full object-cover object-center ' alt="cover photo" />
       <div className="container mx-auto">
            <article className='w-full lg:w-[85%] mx-auto py-10 px-7 md:px-0'>
                <img src={student.photo} className="w-32 h-32 rounded-full object-cover object-top -mt-26 border-2 border-white outline-4 outline-white outline-offset-2 card_shadow" alt={student.first_name} />
                <h2 className="text-2xl mt-4 font-Shabnam-Medium">{student.first_name} {student.last_name}</h2>
                <p className="text-gray-600 mt-2 font-Shabnam-Light">دانشجور دوره: {student.term}</p>
                <div className="mt-6pt-4 font-Shabnam-Light">
                   <p><span className='font-bold'>شماره تماس:</span> 073-------</p>
                   <p><span className='font-bold'>ایمیل آدرس:</span> {student.email_address}</p>
                   <p><span className='font-bold'>تاریخ عضویت:</span> {toPersianDate(student.date_joined)}</p>
                   <p className='mb-4'><span className='font-bold'>آدرس:</span> {student.address}</p>
                   <Link className='px-5 py-2 bg-[#231F40] text-white rounded-sm duration-150 hover:bg-white hover:text-[#231F40] border border-2 card_shadow flex w-fit' href={'/'}>
                        <AiFillHome className="ml-2" />  برگشت به صفحه اصلی
                   </Link>
                </div>
                <div className='border-t mt-4 py-5 '>
                    <h6 className='font-Shabnam-Medium px-10 w-fit py-3 rounded-md shadow-md bg-[#525fe1] text-white card_shadow'>نمونه کارها</h6>
                </div>
            </article>
       </div>
    </div>
  )
}

export default DetailProfileStudent
