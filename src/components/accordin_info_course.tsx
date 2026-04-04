import React from 'react'

function Accordin_info_course() {
  return (
    <section className='w-full lg:w-[80%] mx-auto py-4 px-10 lg:px-0'>
        <h2 className='font-Shabnam-Medium font-bold text-center text-2xl my-6'>چرا فرانت وب؟</h2>

        {/* _Accordion__1__ */}
        <div className="collapse collapse-plus bg-base-200 border border-base-300 my-3 ">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title font-Shabnam-Medium">
                چرا فرانت وب را برای یادگیری انتخاب کنیم؟
            </div>
            <div className="collapse-content text-md bg-[#525fe1] text-white font-Shabnam-Light rounded-sm">
                فرانت وب با رویکرد آموزش پروژه‌محور، یادگیری را از سطح پایه تا پیشرفته ساده و کاربردی کرده است. شما علاوه بر دانش تئوری، تجربه عملی در پروژه‌های واقعی به دست می‌آورید و با پشتیبانی تخصصی همیشه مسیر یادگیری روشن و مطمئن خواهد بود.
            </div>
        </div>

    {/* _Accordion__2__ */}
        <div className="collapse collapse-plus bg-base-200 border border-base-300 my-3">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title  font-Shabnam-Medium">
                دوره‌های آموزشی پرطرفدار برنامه‌نویسی
            </div>
        <div className="collapse-content text-md rounded-sm bg-[#525fe1] text-white font-Shabnam-Light">
            ما در فرنت وب مجموعه‌ای از دوره‌های کاربردی و پرتقاضا را ارائه می‌دهیم؛ از یادگیری زبان‌های پایه‌ای مثل پایتون و جاوا گرفته تا تکنولوژی‌های روز مانند جنگو و اسپرینگ بوت. هر دوره با تمرکز بر مهارت‌های عملی طراحی شده تا شما بتوانید مستقیماً وارد بازار کار شوید.
            <br />

            <span className='font-bold'>پایتون</span>
            <br />
            پایتون یک زبان قدرتمند و پرکاربرد در زمینه وب، داده و اتوماسیون است. دوره ما شما را از پایه تا اجرای پروژه‌های واقعی همراهی می‌کند.
            
            <br />
            <span className='font-bold'>ری اکت</span>
            <br />
            زبان جاوا همچنان یکی از محبوب‌ترین گزینه‌ها برای توسعه اپلیکیشن‌های سازمانی و اندروید است. با دوره جاوا مسیر یادگیری اصولی و مدرن خواهید داشت.

            <br />
            <span className='font-bold'>ری اکت کئوری</span>
            <br />
            کاتلین زبان رسمی توسعه اندروید است. با آموزش پروژه‌محور، اپلیکیشن‌های حرفه‌ای اندرویدی بسازید.

            <br />
            <span className='font-bold'>جاوااسکریپت</span>
            <br />
            جاوااسکریپت قلب توسعه فرانت‌اند است. با یادگیری آن می‌توانید وب‌سایت‌های پویا و تعاملی ایجاد کنید.

            جنگو
            فریم‌ورک Django یکی از بهترین گزینه‌ها برای ساخت وب‌سایت‌های مدرن است. در این دوره، از صفر تا ساخت فروشگاه اینترنتی همراه شما هستیم.

            <br />
            <span className='font-bold'>نکست جی اس</span>
            <br />
            Spring Boot ابزار قدرتمند جاوا برای توسعه بک‌اند است. با پروژه‌های عملی آماده ورود به بازار کار می‌شوید.
        </div>
        </div>

        {/* _Accordion__3__ */}
        <div className="collapse collapse-plus bg-base-200 border border-base-300">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-Shabnam-Medium">
                آموزش‌های پروژه‌محور از مبتدی تا پیشرفته
            </div>
            <div className="collapse-content text-md rounded-sm bg-[#525fe1] text-white font-Shabnam-Light">
                تمام دوره‌های فرانت وب بر اساس پروژه‌های واقعی طراحی شده‌اند. این روش باعث می‌شود دانشجو صرفاً مفاهیم تئوری را حفظ نکند، بلکه با اجرای کد، رفع خطا و ساخت اپلیکیشن، تجربه‌ای شبیه به کار در شرکت‌های نرم‌افزاری به دست آورد.
            </div>
        </div>


        {/* _Accordion__4__ */}
        <div className="collapse collapse-plus bg-base-200 border border-base-300 my-3">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title font-Shabnam-Medium">
                مسیر ورود به بازار کار با یادگیری برنامه‌نویسی
            </div>
            <div className="collapse-content text-md bg-[#525fe1] text-white font-Shabnam-Light rounded-sm">
                هدف اصلی ما آماده‌سازی شما برای بازار کار است. در طول دوره‌ها علاوه بر آموزش مهارت‌های فنی، روی نکات کاربردی برای شروع همکاری در پروژه‌ها، فریلنسری یا حتی مهاجرت کاری نیز تمرکز می‌کنیم.
                <br />
                <span className='font-bold'>فرصت‌های شغلی داخلی</span>
                <br />
                بازار ایران نیاز زیادی به برنامه‌نویسان حرفه‌ای دارد. با مهارت‌هایی که در فرنت وب یاد می‌گیرید می‌توانید در شرکت‌ها و استارتاپ‌ها استخدام شوید یا به صورت پروژه‌ای فعالیت کنید.
                <br />
                <span className='font-bold'>مسیر مهاجرت برنامه‌نویس</span>
                <br />
                یادگیری زبان‌های پرطرفدار مثل پایتون و جاوا مسیر مهاجرت کاری شما را هموار می‌کند. بسیاری از دانشجویان فرنت وب توانسته‌اند با همین مهارت‌ها وارد بازار جهانی شوند.
            </div>
        </div>    


        {/* _Accordion__5__ */}
        <div className="collapse collapse-plus bg-base-200 border border-base-300 my-3">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title font-Shabnam-Medium">
                پشتیبانی تخصصی و دسترسی به منابع آموزشی
            </div>
            <div className="collapse-content text-md bg-[#525fe1] text-white font-Shabnam-Light rounded-sm">
                در فرات وب یادگیری شما تنها به دیدن ویدیو محدود نمی‌شود. با پشتیبانی تخصصی، رفع اشکال سریع و دسترسی به منابع آموزشی تکمیلی، همیشه یک همراه مطمئن در مسیر یادگیری دارید.
            </div>
        </div>

    </section>
  )
}

export default Accordin_info_course