import React, { Component, useState } from 'react'
import Link from 'next/link'


export default function NavbarX() {
    const [open, setopen] = useState(true)
    const clickHandler = (e) => {
        setopen(!open);
    }
    return (
        <div className="sticky top-0 z-50 mb-10 text-lg ">
           
           <nav className=" sm:flex justify-evenly h-14   items-center bg-green-400 text-white transition duration-200 ">
           <div className=" cursor-pointer absolute left-3
                bg-green-400 text-white"
            onClick={(e) => clickHandler(e)}>Menu</div>  
            {
                open ?
                    <>
                        <Link href="/">
                            <a className="border-b-2 hover:border-green-800" >
                                Home
                    </a>
                        </Link>
                        <Link href="/pricing">
                            <a className="border-b-2 hover:border-green-800" >
                                Pricing
                    </a>
                        </Link>
                        <Link href="/teacher">
                            <a className="border-b-2 hover:border-green-800" >
                                Teacher
                    </a>
                        </Link>
                        <Link href="/student">
                            <a className="border-b-2 hover:border-green-800" >
                                Student
                    </a>
                        </Link>
                        <Link href="/aboutus">
                            <a className="border-b-2 hover:border-green-800" >
                                About us
                    </a>
                        </Link>
                        <Link href="/register">
                            <a className="border-b-2 hover:border-green-800">SignUp</a>
                        </Link>
                        <Link href="/login">
                            <a className="border-b-2 hover:border-green-800">LogIn</a>
                        </Link>
                        </>
              :
              <></>  
            }
                    </nav>
                  
            


        </div>
    )

}
