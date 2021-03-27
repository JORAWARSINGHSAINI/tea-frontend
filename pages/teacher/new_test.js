import React from 'react'
import NavbarY from '../../components/NavbarY'
import { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import axios from 'axios'
import Head from 'next/head'

export default function new_test() {
    const [loading, setLoading] = useState(false)
    const [test, setTest] = useState("");
    const [error, setError] = useState("")
    const [startdate, setStartdate] = useState(Date.now())
    const [enddate, setEnddate] = useState("")
    const submitHandler = (e) => {
        setLoading(true);
        e.preventDefault();
        axios.post("https://cryptic-harbor-14139.herokuapp.com"+"/test", { 
            name: test,
            startdate: startdate,
            enddate: enddate 
        })
            .then((response) => {
                setError("Created new Test")
            })
            .catch((err) => {
                setLoading(false)
                setError(err.message)
            })
            setLoading(false)
    }
    return (
        <div className="h-screen">
            <Head>
        <title>New Test</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
            <NavbarY></NavbarY>
            <div className="sm:grid grid-cols-6">
                <div className="sm:col-span-1">
                    <Sidebar></Sidebar>
                </div>
                <div className=" col-span-6 sm:col-span-5 ">
                    <div className="border-b-2 w-full h-16  flex justify-center items-center text-xl border-green-400">
                     
                        Add New Test
                    </div>
                    <div className="flex border-2  p-14  justify-center">
                        <div>{error}</div>
                        
                        {
                        loading?<div>Loading....</div>:
                        <form
                            onSubmit={(e)=>submitHandler(e)}
                        >
                            <label>
                                Test Name*
                        </label>
                            <input type="text"
                                name="name"
                                placeholder="Test Name"
                                className="my-4 p-3 w-full border-2 border-green-300 rounded "
                                value={test}
                                onChange={(e) => setTest(e.target.value)} />
                            <br></br>
                            <label>
                                Start Date*
                        </label>
                            <br />
                            <input type="date"
                                name="startdate"
                                className="my-4 p-3 w-full border-2 border-green-300 rounded "
                                value={startdate}
                                onChange={(e) => setStartdate(e.target.value)} />
                            <br></br>
                            <label>
                                End Date*
                        </label>
                            <br />
                            <input type="date"
                                name="enddate"
                                className="my-4 p-3 w-full border-2 border-green-300 rounded "
                                value={enddate}
                                onChange={(e) => setEnddate(e.target.value)} />
                            <br></br>
                            <label>
                                Attach File
                            </label>
                            <input type="file"
                                name="file"
                                
                                className="my-4 p-3 w-full border-2 border-green-300 rounded "
                                // value={test}
                                // onChange={(e) => setAssignment(e.target.value)} 
                                />

                            <input
                                type="submit"
                                className="cursor-pointer mt-4 btn rounded bg-green-400 hover:bg-green-700 w-full text-white font-bold py-2 px-4"
                                value="Create" />

                        </form>
}
                    </div>
                </div>
            </div>

        </div>
    )
}
