import React from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { ImSearch } from "react-icons/im";
interface SearchBoxProps {
  className?: string;
  handelShowSearchBox: () => void;
}

function SearchBox({ className,handelShowSearchBox  }: SearchBoxProps) {
  return (
    <div className={`w-full h-screen fixed top-0  z-10 right-0 bg-[#222222cf] transition-all duration-300 ${className} p-6 flex justify-center items-center`}>
        <span className='rounded-full shadow cursor-pointer bg-white w-10 h-10 flex justify-center items-center text-xl absolute top-9 left-10'>
            <IoCloseSharp onClick={handelShowSearchBox } />
        </span>
        <section className='w-[80%] h-12 bg-white rounded relative'>
            <input type="text" placeholder="اینجا بگردید" className="w-full h-full pr-5 outline-0 font-Sahelnormal" />
            <ImSearch className='cursor-pointer absolute top-4 left-2' />
        </section>
    </div>
  )
}

export default SearchBox