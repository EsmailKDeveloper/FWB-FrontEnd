import Link from 'next/link'
import { BsCalendarDateFill } from "react-icons/bs";
import { BiSolidMessageAltEdit } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";



function Dashboard() {
  return (
    <div>
        <span className='font-SahelMediume'>داشــبورد</span>

        <section className='w-full px-5 py-4 bg-[#04be5b] rounded font-Shabnam-Light text-white text-sm mt-7'>
          <p>اسماعیل کیهان عزیز، به فرانت وب خوش آمدی ❤️</p>
        </section>


        <section className='bg-[#1CBFD0] px-5 py-4 mt-6 rounded'>
          <p className='text-sm text-white font-Sahelnormal'>
            اسماعیل کیهان عزیز. برای مشاهده دوره‌های آموزشی که در آن ثبت نام کرده‌اید، روی دکمه زیر کلیک کنید، یا وارد منوی «دوره‌های من» شوید.
          </p>

          <Link href={"Our-Courses/"} 
          className='bg-[#0c7ce6] w-50 rounded block mt-8.5 text-center font-Sahelnormal text-sm text-white font-Sahelnormal py-3 '>ورور به  صفحه courses</Link>
        </section>



        <section className='bg-[#04be5b] px-5 py-4 mt-6 rounded text-sm text-white font-Sahelnormal'>
          <p>
            جشنواره فروش ویژه بزرگ فرانت وب : نوروز ۱۴۰۵
          </p>
          <p>
            در این جشنواره میتوانید با 60% تخفیف، دوره‌های زیر را خریداری کنید:
          </p>
          <ul>
            <li>جعبه‌ابزار جادویی فرانت وب</li>
          </ul>
          <p>جهت ورود به صفحه جشنواره روی لینک زیر کلیک کنید</p>


          <Link href={"Our-Courses/"} 
          className='bg-[#0c7ce6] w-50 rounded block mt-8.5 text-center font-Sahelnormal text-sm text-white font-Sahelnormal py-3 '>ورود به صفحه off</Link>
        </section>


        <section className='grid grid-cols-12 gap-4 mt-8'>
            {/* ____CARD_1___ */}
            <div className='col-span-12 md:col-span-6 lg:col-span-3 p-12 bg-[#46b6fe] font-Sahelnormal text-sm text-center text-white rounded'>
                <BsCalendarDateFill className='text-3xl mr-12' />
                <p className='my-2'> سابقه عضویت شما </p>
                <span className='font-bold text-lg'>1 روز</span>
            </div>



            {/* ____CARD_2___ */}
            <div className='col-span-12 md:col-span-6 lg:col-span-3  p-12 bg-[#ffc107] rounded font-Sahelnormal text-sm text-center text-white'>
                 <BiSolidMessageAltEdit className='text-3xl mr-12' />
                 <p className='my-2'> نظرات شما </p>
                 <span className='font-bold text-lg'>0</span>
            </div>


            {/* ____CARD_3___ */}
            <div className='col-span-12 md:col-span-6 lg:col-span-3 p-12 bg-[#04be5b] rounded font-Sahelnormal text-sm text-center text-white'>
                <FaShoppingCart className='text-3xl mr-12' />
                <p className='my-2'> تعداد خرید شما </p>
                <span className='font-bold text-lg'>0</span>
            </div>


            {/* ____CARD_4___ */}
            <div className='col-span-12 md:col-span-6 lg:col-span-3 p-12 text-white bg-[#ee2558] rounded font-Sahelnormal text-sm text-center'>
               <FaMoneyBillTransfer className='text-3xl mr-12' />
              <p className='my-2'>اعتبار کیف پول شما</p>
              <span className='font-bold text-lg'>0 افغانی</span>
            </div>
        </section>
    </div>
  )
}

export default Dashboard