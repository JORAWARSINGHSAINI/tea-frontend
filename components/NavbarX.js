import React, { Component } from 'react'
import Link from 'next/link'

export default class NavbarX extends Component {
    render() {
        return (              
                <nav className="hidden sticky top-0 z-50 mb-10 md:flex justify-evenly h-14 text-lg  items-center bg-green-400 text-white ">
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
                </nav>
        )
    }
}
