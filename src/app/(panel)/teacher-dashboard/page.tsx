"use client"

import { useEffect, useState } from "react"
import { getCurrentUser } from "@/services/api"
import { useRouter } from "next/navigation"

export default function StudentDashboard() {

  const router = useRouter()
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {

    const fetchProfile = async () => {

      try {
        const user = await getCurrentUser()
        console.log(user)
        if (user.role !== "teacher") {
          router.push("/login")
          return
        }

        // گرفتن اطلاعات پروفایل شاگرد
        const response = await fetch("http://localhost:8000/api/dashboard/teacher/", {
          method: "GET",
          credentials: "include"
        })

        if (response.status === 200) {
          const data = await response.json()
          console.log(data)
          setProfile(data)
        } else {
          setError("خطا در دریافت پروفایل")
        }

      } catch (err) {
        setError("لطفاً لاگین کنید")
        router.push("/login")
      } finally {
        setLoading(false)
      }

    }

    fetchProfile()

  }, [])

  if (loading) return <p className="text-center mt-10">در حال بارگذاری...</p>

  if (error) return <p className="text-center mt-10 text-red-600">{error}</p>

  return (
    <div className="max-w-xl mx-auto mt-10 p-5 bg-white shadow rounded">
      <h2 className="text-2xl mb-4">Teacher Dashboard</h2>

      <img
        src={profile.photo}
        alt="Profile Photo"
        className="w-32 h-32 rounded-full mb-4"
      />

      <p><strong>نام:</strong> {profile.first_name}</p>
      <p><strong>فامیلی:</strong> {profile.last_name}</p>
      <p><strong> شماره تماس :</strong> {profile.phone_number}</p>
      <p><strong> سطح تحصیل :</strong> {profile.education_level}</p>
      <p><strong> تجربه کاری :</strong> {profile.work_experience}</p>
      <p><strong> ایمیل :</strong> {profile.email_address}</p>
      <p><strong> عنوان کورس :</strong> {profile.courses.title}</p>
      <p><strong>آدرس:</strong> {profile.bio}</p>
    </div>
  )
}