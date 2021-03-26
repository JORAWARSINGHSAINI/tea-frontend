import React, { Component } from 'react'
import Link from 'next/link'
export default class NavbarY extends Component {
    render() {
        return (              
                <nav className="hidden sticky top-0 z-50 md:flex justify-end pr-20 h-14 text-lg items-center bg-green-400 text-white ">
                    <div className="flex flex-row w-full justify-start pl-10 ">
                        DASHBOARD
                    </div>
                    <Link href="/">
                    <a className=" hover:border-green-800 mr-14" >
                    Notifications
                    </a>
                    </Link>
                    <Link href="/">
                        <a className=" mr-14">Profile</a>
                    </Link>
                    <Link href="/">
                        <a className="hover:border-green-800">LogOut</a>
                    </Link>
                </nav>
        )
    }
}
