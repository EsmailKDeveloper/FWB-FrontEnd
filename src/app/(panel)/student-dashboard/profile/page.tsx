"use client"
import { useUser } from "@/context/UserContext" 
import { useEffect, useState } from "react"
import { getCurrentUser } from "@/services/api"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { MdOutlineBorderColor } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";



export default function Profile() {
  const { profile, loading  , error } = useUser();


  const toPersianDate = (dateString) => {
          if (!dateString) return "---";
            const date = new Date(dateString);
          return new Intl.DateTimeFormat('fa-IR').format(date);
  }


  if (loading) return <p className="text-center mt-10">در حال بارگذاری...</p>

  if (error) return <p className="text-center mt-10 text-red-600">{error}</p>

  return (

    <div className="w-full">
      <section className="w-full">
        <h2 className="text-2xl font-Shabnam-Medium font-bold">{profile?.first_name} {profile?.last_name}</h2>
        <span className="font-Sahelnormal text-sm">دشبورد </span>
         /   
        <span className="font-Sahelnormal text-sm">مشاهده پروفایل کاربری</span>
      </section>

      {profile && (
        <>
        {/* =====container____body====== */}
        <section className=" mt-10 min-h-2.5 grid  grid-cols-12 gap-y-9 gap-x-5">


        {/* _____User__Img__profile____ */}
            <div className="col-span-12 md:col-span-4">
              <p className="font-Sahelnormal text-sm font-black">پروفایل کاربری</p>
              <section className="w-full h-[280px] bg-white flex justify-center content-center flex-wrap rounded">
                  <div className="p-1.5 border w-46 h-46 rounded">
                    <img src="/user_img.webp" className="w-full h-full rounded" alt="" />
                  </div>
                  <strong className="w-full block font-Sahelnormal mt-2 text-center">{profile.first_name} {profile.last_name}</strong>
              </section>

              <ul className="w-full px-3 py-5 bg-white mt-3.5 rounded text-sm">
                <li className="bg-blue-400 font-Sahelnormal">
                  <Link className="w-full h-10 flex items-center justify-center text-white font-bold" href={'/home'}>
                  <MdOutlineBorderColor className="text-xl mx-1.5" />
                  ویرایش حساب کاربری
                  </Link>
                </li>


                <li className="bg-[#ee2558] font-Sahelnormal mt-2 rounded text-sm">
                  <Link className="w-full h-10 flex items-center justify-center text-white font-bold" href={'/home'}>
                  <FaLock className="text-xl mx-1.5" />
                  تغییر رمز عبور
                  </Link>
                </li>


                <li className="bg-[#04be5b] font-Sahelnormal text-sm mt-2">
                  <Link className="w-full h-10 flex items-center justify-center text-white font-bold" href={'/home'}>
                  <FaMapLocationDot  className="text-xl mx-1.5" />
                  ثبت آدرس جدید
                  </Link>
                </li>
              </ul>
            </div>


          {/* _____User__Content__profile____ */}
            <div className="col-span-12 md:col-span-8">
              <p className="font-Sahelnormal text-sm font-black">اطلاعات</p>
              <section className="w-full bg-white p-4 rounded">
                <table className="w-full text-right">
                  <tr className="w-full h-[40px] bg-[#E47297]  text-white font-Sahelnormal text-sm">
                    <th className="w-[30%] ps-1.5">#</th>
                    <th className="w-[70%]">توضیحات</th>
                  </tr>
                  <tr className="w-full h-[40px] font-Shabnam-Light text-sm  hover:bg-[#f2f2f2] duration-100 rounded">
                    <td className="w-[200px] ps-1.5">نام و نام خانوادگی</td>
                    <td>{profile.first_name} {profile.last_name}</td>
                  </tr>
                  <tr className="w-full h-[40px] font-Shabnam-Light text-sm  hover:bg-[#f2f2f2] duration-100">
                    <td className="w-[200px] ps-1.5">نام کاربری</td>
                    <td>{profile.phone_number}</td>
                  </tr>
                  <tr className="w-full h-[40px] font-Shabnam-Light text-sm hover:bg-[#f2f2f2] duration-100">
                    <td className="w-[200px] ps-1.5">کد دانشجویی</td>
                    <td>{profile.student_code}</td>
                  </tr>
                  <tr className="w-full h-[40px] font-Shabnam-Light text-sm hover:bg-[#f2f2f2] duration-100">
                    <td className="w-[200px] ps-1.5">تاریخ تولد</td>
                    <td>
                      {profile?.birth_day ? toPersianDate(profile.birth_day) : "ثبت نشده"}
                    </td>
                  </tr>
                  <tr className="w-full h-[40px] font-Shabnam-Light text-sm hover:bg-[#f2f2f2] duration-100">
                    <td className="w-[200px] ps-1.5">شماره همراه</td>
                    <td>{profile.phone_number}</td>
                  </tr>
                  <tr className="w-full h-[40px] font-Shabnam-Light text-sm hover:bg-[#f2f2f2] duration-100">
                    <td className="w-[200px] ps-1.5">ایمیل</td>
                    <td>{profile?.email_address || "ثبت نشده"}</td>
                  </tr>
                  <tr className="w-full h-[40px] font-Shabnam-Light text-sm hover:bg-[#f2f2f2] duration-100">
                    <td className="w-[200px] ps-1.5">وضعیت</td>
                    <td>{profile.status}</td>
                  </tr>
                  <tr className="w-full h-[40px] font-Shabnam-Light text-sm hover:bg-[#f2f2f2] duration-100">
                    <td className="w-[200px] ps-1.5">تاریخ ورود</td>
                    <td>{toPersianDate(profile?.date_joined)}</td>
                  </tr>
                  <tr className="w-full h-[40px] font-Shabnam-Light text-sm hover:bg-[#f2f2f2] duration-100">
                    <td className="w-[200px] ps-1.5">تاریخ ثبت نام</td>
                    <td>{profile.date_enroll}</td>
                  </tr>
                  <tr className="w-full h-[40px] font-Shabnam-Light text-sm hover:bg-[#f2f2f2] duration-100">
                    <td className="w-[200px] ps-1.5">آدرس </td>
                    <td>{profile.address}</td>
                  </tr>
                </table>
              </section>
            </div>

        </section>
  </>
)}
    </div>
  )
}