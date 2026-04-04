"use client"

import { useState } from "react"
import { registerUser } from "@/services/api"
import { useRouter } from "next/navigation"

export default function RegisterPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    password: "",
    role: "student"
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
    setMessage("در حال بررسی..."); 


    const result = await registerUser(formData)

    if (result.message || result.status == 200 || result.status == 201) {
      setMessage("ثبت نام موفقانه انجام شد")
      router.push('/login')
    } else {
      setMessage("این شماره قبلاً ثبت شده است");
    }

  }

  return (

    <div className="flex justify-center items-center min-h-screen bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-96"
      >

        <h2 className="text-2xl mb-4 text-center font-SahelBold">راجســـــتر نــمایــد</h2>

        <input
          type="text"
          name="first_name"
          placeholder="نام"
          onChange={handleChange}
          className="w-full p-2 mb-3 shadow font-Sahelnormal rounded"
          autoFocus
        />

        <input
          type="text"
          name="last_name"
          placeholder="فامیلی"
          onChange={handleChange}
          className="w-full p-2 mb-3 shadow font-Sahelnormal rounded"
        />

        <input
          type="text"
          name="phone_number"
          maxLength={10}
          minLength={10}
          placeholder="شماره تماس"
          onChange={handleChange}
          className="w-full p-2 mb-3 shadow font-Sahelnormal rounded"
        />

        <input
          type="password"
          name="password"
          placeholder="پسورد"
          onChange={handleChange}
          className="w-full p-2 mb-3 shadow font-Sahelnormal rounded"
        />

        <select
          name="role"
          onChange={handleChange}
          className="w-full p-2 mb-3 shadow font-Sahelnormal rounded"
        >

          <option value="student">شاگرد</option>

          <option value="teacher">استاد</option>

        </select>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded font-SahelBold"
        >
          ثبت نام
        </button>

        <p className="text-center mt-3 text-green-600">
          {message}
        </p>

      </form>

    </div>

  )

}