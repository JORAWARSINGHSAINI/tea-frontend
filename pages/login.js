import React, { Component } from 'react'
import Image from 'next/image'
import NavbarX from '../components/NavbarX'
import { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
export default function login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className="h-screen">
            <Head>
            <title>Login | The Education App</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
             </Head>
            <NavbarX></NavbarX>
            <div className="  flex   pt-16 items-center  justify-center">
                <form
                     >
                    <div className=" mb-7  flex justify-center">
                        <Image src="/img/Institution_logo.png" width={150} height={150} alt="Institution Logo"/>
                    </div>
                    <input type="text"
                        name="email"
                        placeholder="email"
                        className="my-4 p-3 w-full border-2 border-green-300 rounded "
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <br></br>
                    <input type="password"
                        value={password}
                        placeholder="password"
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                        className=" p-3 my-4  w-full border-2 border-green-300 rounded" />
                    <input
                        type="submit"
                        className="cursor-pointer mt-4 btn rounded bg-green-600 hover:bg-green-700 w-full text-white font-bold py-2 px-4"
                        value="Login" />
                    <div className=" mt-2 flex justify-end">
                        <Link href="/register" className=" text-blue-500 ">
                            <a className=" hover:text-green-500 cursor-pointer">
                                Forgot Password?
                        </a>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}



