import Link from 'next/link';
import React from 'react'


async function Hero_commponents() {
    
    
    const res = await fetch('http://127.0.0.1:8000/hero/', {
    next: { revalidate: 1000 }
});
    const hero = await res.json();

    return (
        <div className='w-full mb-20 hero_background'>
            <div className='w-full h-full'>
                <section className='container lg:w-[85%] py-10 mx-auto'>
                    {/* _____hero__img_conent__ */}
                    {hero.map((item, index) => (
                        <div key={index} className='grid grid-cols-12 px-10 lg:px-0'>
                            <section className='col-span-12 md:col-span-6 py-10'>
                                <h2 className='font-Shabnam-Medium font-bold text-2xl lg:text-4xl'>
                                    {item.title}
                                </h2>
                                <p className='font-Shabnam-Light my-5 text-justify mb-10'>{item.description}</p>
                                <Link href={'courses/'} className='px-11 py-3 bg-[#525fe1] text-white border border-2 border-[#525fe1] hover:bg-transparent hover:text-[#525fe1] rounded-md font-Shabnam-Medium'>من میخوایم</Link>
                            </section>

                            <figure className='col-span-12 md:col-span-6 flex justify-end relative min-h-100'>
                                <img src="/hero-04-round.png" alt="hero background" className='w-90 h-90 object-contain left-5 sm:left-0 absolute top-0' />
                                <img src={item.image} alt={item.title} className='w-90 h-90 object-cover scale-[0.9] left-5 sm:left-0 absolute top-0 rounded-full border-4 border-white card_shadow' />
                            </figure>
                        </div>
                    ))}

                    {/* _____Hero__Text__ */}
                    <div className='w-full py-10 mt-20 px-10 md:px-0'>
                        <h3 className='font-Shabnam-Medium font-bold text-2xl'> آمـــار و ارقــام </h3>
                        <section className='grid grid-cols-12 gap-5 py-5 mt-10'>
                            <div className='col-span-6 md:col-span-3 card_shadow text-center font-Shabnam-Light p-4 rotate-md content-center duration-150 hover:-translate-y-4 border-b-2'>
                                <span className='text-5xl'>🎓</span>
                                <p className='my-4 font-bold text-5xl'>+50</p>
                                <p>شاگرد</p>
                            </div>
                            <div className='col-span-6 md:col-span-3 card_shadow text-center font-Shabnam-Light p-4 rotate-md content-center duration-150 hover:-translate-y-4 border-b-2'>
                                <span className='text-5xl'>💼</span>
                                <p className='my-4'>معرفی به بازار کار</p>
                            </div>
                            <div className='col-span-6 md:col-span-3 card_shadow text-center font-Shabnam-Light p-4 rotate-md content-center duration-150 hover:-translate-y-4 border-b-2'>
                                <span className='text-5xl'>⭐</span>
                                <p className='my-4 font-bold text-5xl'>98%</p>
                                <p>رضایت شاگردان</p>
                            </div>
                            <div className='col-span-6 md:col-span-3 card_shadow text-center font-Shabnam-Light p-4 rotate-md content-center duration-150 hover:-translate-y-4 border-b-2'>
                                <span className='text-5xl'>🛠 </span>
                                <p>پروژه عملی</p>
                            </div>
                        </section>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Hero_commponents
