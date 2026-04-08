'use client'
import { useUser } from "@/context/UserContext";
import Link from "next/link";
import Image from "next/image";
import { RiDashboard3Fill } from "react-icons/ri";
import { PiChalkboardTeacherBold } from "react-icons/pi";
import { FaMoneyBillAlt } from "react-icons/fa";
import { MdOutlineBorderColor } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { GiNotebook } from "react-icons/gi";
import { LiaCommentSolid } from "react-icons/lia";
import { RiShutDownLine } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { MdWindow } from "react-icons/md";



export default function LayoutContent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const { profile, loading } = useUser();
  return (
    <html dir="rtl">
      <body>
        <main className="w-full min-h-screen">
            <div className="xl:container flex mx-auto">
                <aside className="w-[17%] md:w-[7%] lg:w-[17%] h-screen p-3  top-0  absolute right-[-100%] md:sticky lg:right-0  duration-1000">


                    <Link href={'#'} className="flex items-center gap-1.5">
                        <Image
                            src="/logo2.png"
                            alt="فـــــرانـت وب آکــادمــی"
                            width={40}
                            height={40}
                        />
                        <h2 className="font-SahelBold md:hidden lg:block">فرانت وب</h2>
                    </Link>


                    
                <nav className="w-full h-[70vh]  overflow-y-scroll no-scrollbar">
                    {/* ____Profiel_info___ */}
                    <div className="flex w-full h-17 border-custome items-center gap-1.5">
                        <img src="/user_img.webp" className="w-10 h-10 rounded border-2 border-white shadow-md" alt="" />
                        {loading? (
                            <span>در حال بارگذاری...</span>
                        ):(
                        <strong className="font-SahelMediume md:hidden lg:block">{profile?.first_name} {profile?.last_name}</strong>
                        )}
                    </div>


                    <ul className="w-full h-[70vh] border-custome overflow-x-hidden overflow-y-scroll no-scrollbar">
                        <li className="w-full h-10 font-Sahelnormal pt-6 pb-12 border-custome text-sm">
                            <Link className=" w-full  cursor-pointer flex items-center gap-x-1.5" href={'dashboard/'}>
                                <RiDashboard3Fill className="md:text-3xl lg:text-xl" /> 
                                <span className="md:hidden lg:block">داشبورد</span> 
                            </Link>
                        </li>
                        <li className="w-full h-10 mt-0.5 font-Sahelnormal text-sm">
                            <Link className="flex items-center w-full h-full cursor-pointer gap-x-1.5" href={'Our-Courses/'}>
                                <PiChalkboardTeacherBold className="md:text-3xl lg:text-xl" /> 
                                <span className="md:hidden lg:block">دوره های من </span>
                            </Link>
                        </li>
                        <li className="w-full h-10 mt-0.5 font-Sahelnormal text-sm">
                            <Link className="w-full h-full cursor-pointer flex items-center gap-x-1.5" href={'planers/'}>
                                <FaMoneyBillAlt className="md:text-3xl lg:text-xl" /> 
                                <span className="md:hidden lg:block">پلنرهای من </span>
                            </Link>
                        </li>
                        <li className="w-full h-10 mt-0.5 font-Sahelnormal text-sm">
                            <Link className="flex items-center w-full h-full cursor-pointer gap-x-1.5" href={'Our-Orders/'}>
                                <MdOutlineBorderColor className="md:text-3xl lg:text-xl" /> 
                                <span className="md:hidden lg:block">سفارشات من </span>
                            </Link>
                        </li>
                        <li className="w-full h-10 mt-0.5 font-Sahelnormal text-sm">
                            <Link className="flex items-center w-full h-full cursor-pointer gap-x-1.5" href={'notepayments/'}>
                                <GiNotebook className="md:text-3xl lg:text-xl" /> 
                                <span className="md:hidden lg:block">دفترچه باقیات </span>
                            </Link>
                        </li>
                        <li className="w-full h-10 mt-0.5 font-Sahelnormal text-sm">
                            <Link className="flex items-center w-full h-full cursor-pointer gap-x-1.5" href={'profile/'}>
                                <ImProfile className="md:text-3xl lg:text-xl" /> 
                                <span className="md:hidden lg:block">پروفایل کاربری </span>
                            </Link>
                        </li>
                        <li className="w-full h-10 mt-0.5 font-Sahelnormal text-sm">
                            <Link className="flex items-center w-full h-full cursor-pointer gap-x-1.5" href={'portfolio/'}>
                                <ImProfile className="md:text-3xl lg:text-xl" /> 
                                <span className="md:hidden lg:block"> آپلود نمونه کارها </span>
                            </Link>
                        </li>
                        <li className="w-full h-10 mt-0.5 font-Sahelnormal text-sm">
                            <Link className="flex items-center w-full h-full cursor-pointer gap-x-1.5" href={'comments/'}>
                                <LiaCommentSolid  className="md:text-3xl lg:text-xl"/>
                                <span className="md:hidden lg:block"> نظرات من </span>
                            </Link>
                        </li>
                    </ul>


                    {/* ____Btn__Logut__ */}
                    <button className="w-full h-[40px] bg-[#ee2558] rounded-md mt-3.5 cursor-pointer font-SahelMediume text-white flex items-center justify-center gap-x-2">
                         <RiShutDownLine />
                         <span className="md:hidden lg:block">خروج</span>
                    </button>
                </nav>
            </aside>


{/* _____________________Container___For__Pages______ */}
                <section className="w-[100%] md:w-[88%] lg:w-[78%] min-h-screen pt-2.5">
                    <div className="bg-[#f2f2f2] rounded-md border-4 border-white shadow-md min-h-screen p-4">
                        {children}
                    </div>
                </section>

                {/* ______Btns___Lieft__side____ */}
                <ul className="w-[5%] h-screen sticky top-0 hidden md:block">
                    <li className="w-full h-10 flex items-center justify-center text-md cursor-pointer"><MdWindow /></li>
                    <li className="w-full h-10 flex items-center justify-center text-md cursor-pointer"><IoNotifications /></li>
                    <li className="w-full h-10 flex items-center justify-center text-md cursor-pointer"><IoSettingsSharp /></li>
                    <li className="w-full h-10 flex items-center justify-center text-md cursor-pointer"><RiShutDownLine /></li>
                </ul>
            </div>
        </main>
      </body>
    </html>
  );
}