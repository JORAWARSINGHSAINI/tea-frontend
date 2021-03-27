import React from 'react'
import Link from 'next/link'
export default function Sidebar() {
    return (
        <div className=" overflow-y-scroll pt-1  h-screen hidden md:flex flex-col text-xl items-center">
         <Link href="/teacher">
         <a className="hover:bg-green-400 hover:text-white w-full text-center  p-6  border-t-2
          border-b-2 border-gray-300 focus:bg-green-600" >
            Dashboard
         </a>
         </Link>
         <Link href="/teacher/new_class">
         <a className="hover:bg-green-400 hover:text-white w-full text-center  p-6 focus:bg-green-600
          border-b-2 border-gray-300">
            New class
         </a>
         </Link>
         <Link href="/teacher/new_test">
         <a className="hover:bg-green-400 hover:text-white w-full text-center  p-6 focus:bg-green-600
          border-b-2 border-gray-300">
            New Test
         </a>
         </Link>
         
         <Link href="/teacher/new_assignment">
         <a className="hover:bg-green-400 hover:text-white w-full text-center  p-6 focus:bg-green-600
          border-b-2 border-gray-300">
            New Assignment
         </a>
         </Link>
         <Link href="/all_classes">
         <a className="hover:bg-green-400 hover:text-white w-full text-center  p-6 focus:bg-green-600
          border-b-2 border-gray-300">
            All classes
         </a>
         </Link>
         <Link href="/">
         <a className="hover:bg-green-400 hover:text-white w-full text-center  p-6 focus:bg-green-600
          border-b-2 border-gray-300">
            Dashboard6
         </a>
         </Link>
         <Link href="/">
         <a className="hover:bg-green-400 hover:text-white w-full text-center  p-6  focus:bg-green-600
          border-b-2 border-gray-300">
            Dashboard7
         </a>
         </Link>
         <Link href="/">
         <a className="hover:bg-green-400 hover:text-white w-full text-center  p-6  focus:bg-green-600
          border-b-2 border-gray-300">
            Dashboard7
         </a>
         </Link>
         <Link href="/">
         <a className="hover:bg-green-400 hover:text-white w-full text-center  p-6  focus:bg-green-600
          border-b-2 border-gray-300">
            Dashboard7
         </a>
         </Link>
         <Link href="/">
         <a className="hover:bg-green-400 hover:text-white w-full text-center  p-6  focus:bg-green-600
          border-b-2 border-gray-300">
            Dashboard7
         </a>
         </Link>
        </div>
    )
}
