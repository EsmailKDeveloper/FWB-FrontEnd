import Link from 'next/link'
import React from 'react'

function About_page() {
  return (
    <div className='w-full py-10'>
        <section className='container mx-auto'>
          <div className='lg:w-[70%] mx-auto font-Sahelnormal'>
              <h1 className='text-center font-SahelBold mt-10 md:text-4xl lg:text-5xl'>
              فرانت وب آکادمی
            </h1>
            <p className='my-4'>
                ما یک آکادمی آموزشی هستیم با تمرکز بر تربیت نسل جدید برنامه‌نویسان حرفه‌ای در حوزه <strong>توسعه وب و هوش مصنوعی</strong>. هدف ما این است که مسیر یادگیری را برای علاقه‌مندان ساده، کاربردی و قابل دسترس کنیم—از سطح مبتدی تا پیشرفته.
            </p>
            <p>
                در دنیای امروز، مهارت‌های دیجیتال دیگر یک انتخاب نیستند، بلکه یک ضرورت‌اند. ما اینجا هستیم تا به شما کمک کنیم این مهارت‌ها را به‌صورت اصولی و پروژه‌محور یاد بگیرید و وارد بازار کار شوید.
            </p>
            <h5 className='font-bold mt-9'>🚀 ماموریت ما</h5>
            <p>ماموریت ما این است که:</p>
            <ul className='list-disc mr-9'>
              <li>آموزش برنامه‌نویسی را <span className='font-bold'>ساده، کاربردی و قابل فهم</span> کنیم</li>
              <li>فاصله بین آموزش و بازار کار را از بین ببریم</li>
              <li><span className='font-bold'>دانشجویان را به افراد توانمند و مستقل</span> تبدیل کنیم</li>
              <li>راه فراهم کنیم که هر فرد بتواند با هر سطحی شروع کند</li>
            </ul>

            <h5 className='mt-9 font-bold'>💡 چرا ما متفاوت هستیم؟</h5>
            <p>ما فقط آموزش تئوری نمی‌دهیم—بلکه شما را برای دنیای واقعی آماده می‌کنیم.</p>
            <p>ویژگی‌های آکادمی ما:</p>
            <ul className='list-disc mr-9'>
              <li>✅ آموزش کاملاً <span className='font-bold'>پروژه‌محور</span></li>
              <li>✅ تمرکز روی مهارت‌های <span className='font-bold'>مورد نیاز بازار کار</span></li>
              <li>✅ مسیر یادگیری <span className='font-bold'>مرحله‌به‌مرحله و ساختاریافته</span></li>
              <li>✅ پشتیبانی و راهنمایی در طول مسیر یادگیری</li>
              <li>✅ ترکیب آموزش حضوری و آنلاین</li>
            </ul>


            <h5 className='mt-9 font-bold'>🧠 حوزه‌های آموزشی ما</h5>
            <p>ما در سه حوزه اصلی آموزش ارائه می‌دهیم:</p>
            <h3 className='font-bold'>1. توسعه فرانت‌اند (Front-End)</h3>
            <p>یادگیری ساخت رابط کاربری حرفه‌ای با تکنولوژی‌های مدرن مانند:</p>
            <ul className='list-disc mr-9'>
              <li>HTML, CSS , Git/GitHub, Tailwind_CSS, JavaScript</li>
              <li>React.js , TypeScript, React Query, Next.js</li>
              <li>طراحی UI/UX</li>
            </ul>

            <h5 className='mt-9 font-bold'>2. توسعه بک‌اند (Back-End)</h5>
            <p>یادگیری ساخت سیستم‌های قدرتمند سمت سرور:</p>
            <ul className='list-disc mr-9'>
                <li>Python(Django)</li>
                <li>API Development</li>
                <li>کار با دیتابیس‌ها</li>
            </ul>


            <h5 className='mt-9 font-bold'>3. پرامپت‌نویسی هوش مصنوعی</h5>
            <p>یادگیری نحوه تعامل حرفه‌ای با ابزارهای هوش مصنوعی:</p>
            <ul className='list-disc mr-9'>
              <li>ساخت پرامپت‌های حرفه‌ای</li>
              <li>استفاده کاربردی از AI در پروژه‌ها</li>
              <li>استفاده کاربردی از AI در پروژه‌ها</li>
              <li>افزایش بهره‌وری با ابزارهای هوشمند</li>
            </ul>



            <h5 className='mt-9 font-bold'>🏫 آموزش حضوری + آنلاین</h5>
            <p >
              آکادمی ما علاوه بر آموزش آنلاین، دوره‌های <span className='font-bold'>حضوری</span> نیز برگزار می‌کند تا دانشجویان بتوانند:
            </p>
            <ul className='list-disc mr-9'>
              <li>ارتباط مستقیم با استاد داشته باشند</li>
              <li>در محیط واقعی تمرین کنند</li>
              <li>شبکه‌سازی و رشد سریع‌تر داشته باشند</li>
            </ul>


            <h5 className='mt-9 font-bold'>👨‍💻 رویکرد آموزشی ما</h5>
            <p>ما باور داریم که بهترین روش یادگیری، <span className='font-bold'>ساختن است</span>.</p>

            <p className='my-5'>به همین دلیل:</p>
            <ul className='list-disc mr-9'>
              <li>هر دوره شامل پروژه‌های واقعی است</li>
              <li>دانشجویان از ابتدا وارد فضای عملی می‌شوند</li>
              <li>تمرکز ما روی «توانایی انجام کار» است، نه فقط یادگیری تئوری</li>
            </ul>


            <h5 className='mt-9 font-bold'>🌍 چشم‌انداز ما</h5>
            <p>ما در تلاش هستیم تا به یکی از برترین مراکز آموزش برنامه‌نویسی در منطقه تبدیل شویم و راه ایجاد کنیم که جوانان بتوانند:</p>
            <ul className='list-disc mr-9'>
              <li>مهارت یاد بگیرند</li>
              <li>شغل پیدا کنند</li>
              <li>آینده خود را بسازند</li>
            </ul>

            <h5 className='mt-9 font-bold'>❤️ پیام ما به شما</h5>
            <p>اگر می‌خواهید وارد دنیای برنامه‌نویسی شوید یا مهارت‌های خود را ارتقا دهید، ما در کنار شما هستیم.</p>
            <p className='mt-2.5'>این فقط یک آموزش نیست—</p>
            <p>این شروع مسیر حرفه‌ای شماست.</p>

            {/* _______About___Info__car_Teacher___ */}
            <div className="card bg-base-100 w-96 shadow-sm my-5 mx-auto">
                <figure>
                  <img
                    src="logo2-n.png"
                    alt="فرانت وب آکادمی" className="h-60 w-full object-cover" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    <img src="contact2.png" className='w-20 h-20 rounded-full object-cover'  alt="esmail keyhan" />
                    اسماعیل کیهان
                    <div className="badge badge-secondary">بنیانگذار آکادمی</div>
                  </h2>
                  <p>
                    من اسماعیل کیهان مدرس و بنیانگذار فرانت وب آکادمی هستم، سعی و تلاش من اینست که تمام جوانان سرزمین را به سمت تکنولوژی‌ روز برسانم
                  </p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">دیدن پروفایل</div>
                    <div className="badge badge-outline">ارتبابامن</div>
                  </div>
                </div>
            </div>
            {/* ___END____About___Info__car_Teacher___ */}

            <p>👉 همین حالا یادگیری را شروع کن</p>
            <Link className='font-bold  w-40 py-3 rounded-full mt-3.5 block shadow' href={'/'}>👉 ثبت‌نام در دوره‌ها</Link>
          </div>
        </section>
    </div>
  )
}

export default About_page