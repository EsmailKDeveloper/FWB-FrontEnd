'use client'
import toast from 'react-hot-toast'
import { useState } from "react"


function Protfolio() {
  const [data , setData] = useState({
    image:null,
    url:'',
    title:'',
    description:'',
    date:''
  })
  const handleChange = (e) => {
    const { id, value, files } = e.target;
    
    setData(prev => ({
      ...prev,
      // اگر فیلد فایل بود، فایل را ذخیره کن، در غیر این صورت مقدار متنی را
      [id]: files ? files[0] : value 
    }))
  }

    const handelsavePortfolio = async (e) => {
    e.preventDefault();

    // ایجاد یک شیء FormData برای ارسال فایل و متن با هم
    const formData = new FormData();
    formData.append('url', data.url);
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('date', data.date);
    
    // ارسال فایل (اگر عکسی انتخاب شده باشد)
    if (data.image && data.image[0]) {
      formData.append('image', data.image[0]);
    }
    
    try {
      // const token = cookies.get
      const response = await fetch('http://localhost:8000/api/dashboard/portfolio/', {
        method: 'POST',
        body: formData,
        credentials: 'include',
      });

      if (response.ok) {
        const result = await response.json();
        toast.success('نمونه کار با موفقیت ثبت شد!')
        console.log(result);
      } else {
        const errorData = await response.json();
        console.error('خطای سرور:', errorData);
        alert('خطایی در ذخیره‌سازی رخ داد.');
        toast.error('خطایی در ذخیره سازی رخ داد')
      }
    } catch (error) {
      console.error('Error sending data:', error);
      alert('ارتباط با سرور برقرار نشد.');
    }
  };

  return (
    <div>
        <h2 className='font-SahelMediume'>اینجا نمونه کارهای خود را آپلود نماید</h2>

        <form onSubmit={handelsavePortfolio} className='grid grid-cols-12 min-h-[20px] mt-5 gap-2'>
          {/* عکس */}
            <div className='col-span-12 md:col-span-4'>
              <label htmlFor="image" className='font-Sahelnormal'>عکس نمونه کار</label>
              <input type="file" onChange={handleChange} id='image' className='hidden' />
            </div>

            {/* آدرس */}
            <div className='col-span-12 md:col-span-4 '>
              <label htmlFor="url" className='font-Sahelnormal'>آدرس نمونه کار</label>
              <input  type="url" value={data.url} onChange={handleChange} id='url' className='w-full h-10 border-b' />
            </div>


            {/* نام پروژه */}
            <div className='col-span-12 md:col-span-4'>
              <label htmlFor="title" className='font-Sahelnormal'>اسم پروژه</label>
              <input value={data.title} onChange={handleChange} type="text" id='title' className='w-full h-10 border-b' />
            </div>


            {/* توضیحات */}
            <div className='col-span-12 md:col-span-4'>
              <label htmlFor="description" className='font-Sahelnormal'>توضیحات پروژه</label>
              <textarea value={data.description} onChange={handleChange} className='w-full h-30 border-b'  id="description"></textarea>
            </div>

            {/* تاریخ */}
            <div className='col-span-12 md:col-span-4'>
              <label htmlFor="date" className='font-Sahelnormal'>تاریخ ساخت پروژه</label>
              <input type="date" id='date' value={data.date} onChange={handleChange} className='w-full h-10 border-b' />
            </div>
            

            <div className="col-span-12">
               <button type="submit" className='px-10 py-3 bg-[#222] rounded-full text-white font-Shabnam-Medium text-lg cursor-pointer hover:bg-black transition-all'>
                 ذخیره نمونه کار
               </button>
            </div>
        </form>

    </div>
  )
}

export default Protfolio