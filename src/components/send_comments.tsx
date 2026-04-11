'use client'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'

function Send_comments() {
    const [description, setDescription] = useState('');
    const [photo, setPhoto] = useState(null);
    const [loading, setLoading] = useState(false);
    

    const handleFileChange = (e) => {
        setPhoto(e.target.files[0]); 
    }

    const handelSendComment = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('description', description);
    if (photo) {
        formData.append('photo', photo); 
    }
    
    try {
        const response = await axios.post('http://localhost:8000/comments/', formData, {
            
            withCredentials: true, 
            headers: {
                'Content-Type': 'multipart/form-data',
                
            }
        });
        toast.success('کامنت با موفقیت ثبت شد!')
        setDescription(''); 
        setPhoto(null);
    } catch (error) {
        console.error("جزئیات خطا:", error.response?.data);
        toast.error('خطا: شما اجازه ثبت کامنت ندارید')
    } finally {
            setLoading(false);
    }
};

  return (
    <form className='grid grid-cols-12' onSubmit={handelSendComment}>
        <div className='col-span-12 md:col-span-6 font-Shabnam-Light'>
            <input type="file" id='photo'
                   className='hidden'
                   onChange={handleFileChange} required />
            <label htmlFor="photo" 
                   className='cursor-pointer'>
                     {photo ? `✅ عکس انتخاب شد` : "📸 عکس تان را وارد نمایید *"}
            </label>
        </div>
        <textarea 
                className='col-span-12 md:col-span-6 border font-Shabnam-Light p-3 h-40 placeholder:text-sm rounded-sm'
                placeholder='پیام تانرا بنوسید'
                value={description}
                onChange={(e)=>setDescription(e.target.value)} ></textarea>
        <button type='submit'  
                disabled={loading}
                className='w-102 mt-3 h-13 bg-[#525fe1] rounded-sm cursor-pointer text-white font-Shabnam-Medium'>
                {loading ? 'در حال ارسال...' : 'ثبت نظر'}
        </button>
    </form>
  )
}

export default Send_comments