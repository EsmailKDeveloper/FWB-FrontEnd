import React from 'react'

async function getCouresDetail(id:string){
    try{
        const res = await fetch(`http://127.0.0.1:8000/api/courses/${id}/`,{
            next:{revalidate:1000}
        })
        if(!res.ok){
            console.error(`خطای سرور: ${res.status}`);
            return null;
        }
        const data = await res.json()
        return data
    }catch(error){
        console.error(error)
        return null;
    }
}

async function Courses_detail({ params }: { params: Promise<{ id: string }> }) {
    const Params = await params;
    const id = Params.id;

  const course = await getCouresDetail(id)

  if(!course){
    return(
        <div className='w-full min-h-screen flex justify-center items-center'>
        <p className='font-Shabnam-Medium text-red-500'> کورس یافت نشد  </p>
      </div>
    )
  }


  const toPersianDate = (dateString) => {
          if (!dateString) return "---";
            const date = new Date(dateString);
          return new Intl.DateTimeFormat('fa-IR').format(date);
  }
  return (
    <section className='w-full min-h-screen py-10'>
        <div className='container mx-auto lg:w-[85%] my-15 px-10 lg:px-0'>
            <h2 className='font-bold font-Shabnam-Medium text-2xl'>دوره آموزشی {course.title}</h2>
            <article className='grid grid-cols-12 mt-8 gap-y-10 lg:gap-y-0'>
                <figure className='col-span-12 lg:col-span-4'>
                    <img src={course.image} className='w-full h-80 shadow-md object-cover' alt={course.title} />
                </figure>
                <section className='col-span-12 lg:col-span-8 lg:px-7'>
                    <h2 className='font-bold font-Shabnam-Medium text-2xl'>{course.title}</h2>
                    <p className='text-justify my-5'>
                        {course.description}
                    </p>
                    <p className='font-Shabnam-Light'>  
                        <span className='font-bold'>قیمت دوره</span> {course.price} افغانی 
                    </p>
                    <p className='font-Shabnam-Light my-3'>  
                        <span className='font-bold'> درصد تخفیف</span> {course.discount} افغانی 
                    </p>
                    <p className='font-Shabnam-Light my-3'>  
                        <span className='font-bold'>مدت دوره</span> {course.session} جلسه 
                    </p>
                    <p className='font-Shabnam-Light my-3'>  
                        <span className='font-bold'>تاریخ نشر</span> 
                         {toPersianDate(course.updated_at)}
                    </p>
                </section>
            </article>
        </div>
    </section>
  )
}

export default Courses_detail