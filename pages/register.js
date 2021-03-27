import React, { Component } from 'react'
import NavbarX from '../components/NavbarX'
import{useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
export default function register() {
	const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");
	return (
		<div className="h-screen">
			<Head>
        <title>Register | The Education App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
		<meta
	  name="description"           
  	content="Register Page for the Education App Platform"></meta>
      </Head>
            <NavbarX></NavbarX>
                <div className="  flex   pt-16 items-center  justify-center">
                    <form 
                    >
                      <div className=" mb-7 pt-7 text-3xl font-serif font-semibold flex justify-center">
                    Register
                    </div>   
                          <input type="text"
							name="email"
							placeholder="Email" 
							className="my-4 p-3 w-full border-2 border-green-600 rounded "
							value= {email}
							onChange = {(e)=> setEmail(e.target.value)} />
							<br></br>
						<input type="password" 
							value= {password}
							placeholder="Password"
							onChange = {(e)=> setPassword(e.target.value)}
							name="password" 
							className=" p-3 my-4  w-full border-2 border-green-300 rounded" />
						<input type="password" 
							value= {cpassword}
							placeholder="Confirm password"
							onChange = {(e)=> setCPassword(e.target.value)}
							name="cpassword" 
							className=" p-3 my-4  w-full border-2 border-green-300 rounded" />

						<div className="form-group">
							<select  name="type" className="form-control">
								<option value="student">Student</option>
								<option value="teacher">Teacher</option>
								<option value="institution">Institution</option>
							</select>
						  </div>
						<div className="form-group">
							<select name="institution" className="form-control"> 
							  </select>
						  </div>	
                        <input type="submit" 
						className="cursor-pointer mt-4 btn rounded bg-green-400 hover:bg-green-700 w-full text-white font-bold py-2 px-4" 
						value="Register"  />
                        <div className=" mt-2 flex justify-end">
                        <Link href="/login" className=" text-blue-500 ">
                        <a className=" hover:text-green-500 cursor-pointer">
                           Already A User?
                        </a>
                        </Link>
                        </div>
                    </form>
                </div>
            </div>
	)
}

