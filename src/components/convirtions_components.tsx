'use client'
import React, { useEffect, useState } from 'react'

function Convirtions_components() {
    const [isVisible, setIsVisible] = useState(false); // 👈 اول false
    const [message, setMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [fullname, setFullname] = useState('');
    const [phone, setPhone] = useState('');

    // 👇 این مهم‌ترین بخش است
    useEffect(() => {
        const hasSeen = sessionStorage.getItem("consultation_shown");

        if (!hasSeen) {
            setIsVisible(true);
            sessionStorage.setItem("consultation_shown", "true");
        }
    }, []);

    const handleRemove = () => {
        setIsVisible(false);
    }

    if (!isVisible) return null;

    const handelSendData = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:8000/convirtions/', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ full_name: fullname, phone: phone })
            });

            if (response.ok) {
                setMessage('✅ درخواست شما با موفقیت ثبت شد');
                setIsSubmitted(true); 
                setTimeout(() => setIsVisible(false), 3000);
            } else {
                setMessage('❌ خطا در ثبت');
            }
        } catch (error) {
            setMessage('❌ خطا در اتصال');
        }
    }

    return (
        <section className='w-full h-screen bg-[#222222e7] fixed top-0 left-0 z-10 flex justify-center items-center'>
            <div className='w-80 p-5 bg-white rounded-md text-center'>
                <div className='flex justify-end'>
                    <span onClick={handleRemove} className='flex w-8 h-8 bg-gray-200 rounded-full justify-center items-center cursor-pointer'>❌</span>
                </div>

                {!isSubmitted ? (
                    <>
                        <h4 className='font-Shabnam-Medium text-lg mb-2'>درخواست مشاوره</h4>
                        <p className='font-Shabnam-Light text-[12px] mb-4'>اطلاعات خود را وارد کنید:</p>
                        <form onSubmit={handelSendData} className='flex flex-col gap-2'>
                            <input type="text"
                                   placeholder='نام و فامیلی'
                                   className='h-10 pr-3 border rounded-sm  font-Shabnam-Light'
                                   value={fullname}
                                   onChange={(e) => setFullname(e.target.value)} required />

                            <input type="text" 
                                   placeholder='شماره تلفن'
                                   className='h-10 pr-3 border rounded-sm font-Shabnam-Light'
                                   value={phone} onChange={(e) => setPhone(e.target.value)} required />

                            <button className='h-10 rounded-md bg-[#525fe1] text-white font-Shabnam-Medium cursor-pointer duration-150 hover:text-[#525fe1] hover:bg-white border-2 border-[#525fe1] card_shadow'>
                                ارسال درخواست
                            </button>
                            <p className='text-red-500 text-xs mt-2'>{message}</p>
                        </form>
                    </>
                ) : (
                    <div className='py-10'>
                        <p className='font-Shabnam-Medium text-green-600'>{message}</p>
                        <button onClick={handleRemove} className='mt-4 text-sm text-gray-500 underline'>بستن</button>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Convirtions_components
