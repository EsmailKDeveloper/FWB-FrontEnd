import React from 'react'

async function getDetailBolgPost(id:string){
  try{
      const res = await fetch(`http://127.0.0.1:8000/blog/${id}`,{
        next:{revalidate:1000}
      })
      if(!res.ok){
        throw new Error(`خطا از سمت سرور :  ${res.status}`)
        return null
      }
      const data = await res.json();
      return data;

  }catch(error){
    console.error(error)
    return null
  }
}

async function DetailBlogPost({ params }: { params: Promise<{ id: string }> }) {
  const Params = await params;
  const  id = Params.id;
  const blogPost = await getDetailBolgPost(id)


  if(!blogPost){
    return(
        <div className='w-full min-h-screen flex justify-center items-center'>
        <p className='font-Shabnam-Medium'>  دیدن جزئیات این پوست برای شما قابل نمایش نیست. </p>
      </div>
    )
  }

  const toPersianDate = (dateString) => {
          if (!dateString) return "---";
            const date = new Date(dateString);
          return new Intl.DateTimeFormat('fa-IR').format(date);
  }


  return (
    <div className='w-full min-h-screen py-10'>
        <section className='container mx-auto lg:w-[85%] my-10 py-5 px-10 lg:px-0'>
            <article className='grid grid-cols-12 gap-y-8'>
                <figure className='col-span-12 lg:col-span-5 p-1 border rounded-sm h-fit lg:sticky top-0 right-0 card_shadow'>
                  <img 
                     src={blogPost.image.startsWith('http') ? blogPost.image : `http://127.0.0.1:8000${blogPost.image}`}
                     alt={blogPost.title}
                     className='w-full h-100 shadow-md object-cover object-left' />
                </figure>
                <div className='col-span-12 lg:col-span-7 pr-10'>
                  <h2 className='font-Shabnam-Medium font-bold text-2xl'>{blogPost.title}</h2>
                  <p className='font-Shabnam-Light my-3.5 text-justify'>{blogPost.intro_text}</p>
                  {blogPost.features.map((item)=>(
                     <section>
                        <h2 className='font-Shabnam-Medium font-bold mt-4'>{item.section_title}</h2>
                        <p className='font-Shabnam-Light text-justify'>{item.points}</p>
                     </section>
                  ))}
                  <p className='font-Shabnam-Light'> <span className='font-bold'>تاریخ نشر</span> {toPersianDate(blogPost.created_at)} </p>
                </div>
            </article>
        </section>
    </div>
  )
}

export default DetailBlogPost