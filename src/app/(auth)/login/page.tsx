"use client"

import { useState } from "react"
import { loginUser, getCurrentUser } from "@/services/api"
import { useRouter } from "next/navigation"

export default function LoginPage() {

  const router = useRouter()

  const [formData, setFormData] = useState({
    phone_number: "",
    password: ""
  })

  const [message, setMessage] = useState("")

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const result = await loginUser(formData)

    // تغییر شرط: چون سرور result.access نمی‌فرستد، از result.message یا result.role استفاده کنید
    if (result.message === "Login successful" || result.role) {
      
      // لاگین موفق است، حالا نقش را از خودِ پاسخِ لاگین بگیرید (نیازی به فراخوانی دوباره getCurrentUser نیست چون role را دارید)
      const userRole = result.role; 
      
      console.log("User Role:", userRole)
      
      if (userRole === "student") {
        router.push("/student-dashboard/profile")
      } else if (userRole === "teacher") {
        router.push("/teacher-dashboard")
      } else {
        setMessage("نقش نامعتبر")
      }

    } else {
      // اگر واقعاً یوزر/پسورد غلط باشد، سرور معمولاً فیلد message را موفقیت‌آمیز نمی‌فرستد
      setMessage("شماره تماس یا پسورد اشتباه است")
    }
}


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-96"
      >

        <h2 className="text-2xl mb-4 text-center font-SahelBold">درگـــــــــــاه ورود</h2>

        <input
          type="text"
          name="phone_number"
          placeholder="شماره تماس"
          onChange={handleChange}
          className="w-full p-2 mb-3 font-Shabnam-Medium rounded shadow"
        />

        <input
          type="password"
          name="password"
          placeholder="پسورد"
          onChange={handleChange}
          className="w-full p-2 mb-3 font-Shabnam-Medium shadow rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 cursor-pointer text-white p-3 font-SahelBold rounded"
        >
          ورود
        </button>

        <p className="text-center mt-3 text-red-600">
          {message}
        </p>

      </form>

    </div>
  )
}