import React from 'react'
import NavbarY from '../../components/NavbarY'
import { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import axios from 'axios'
import Head from 'next/head'
export default function new_assignment() {
    const [loading, setLoading] = useState(false)
    const [assignment, setAssignment] = useState("");
    const [startdate, setStartdate] = useState("")
    const [enddate, setEnddate] = useState("")
    const [error, setError] = useState("")
    const submitHandler = (e) => {
        setLoading(true);
        e.preventDefault();
        axios.post("https://cryptic-harbor-14139.herokuapp.com"+"/assignment", { 
            name: assignment,
            startdate: startdate,
            enddate: enddate 
        })
            .then((response) => {
                setError("Created new Assignment")
            })
            .catch((err) => {
                setLoading(false)
                setError(err.message)
            })
            setLoading(false)
    }
    return (
        
        <div className="h-screen">
            <NavbarY></NavbarY>
            <div className="sm:grid grid-cols-6">
                <div className="sm:col-span-1">
                    <Sidebar></Sidebar>
                </div>             
                <div className="sm:w-full  sm:col-span-5 ">
                    <div className="border-b-2 w-full h-16  flex justify-center items-center text-xl border-green-400">
                        Add New Assignment 
                    </div>
                    
                    <div className="flex border-2  p-14  justify-center">
                        {error}
                        <br></br>
                        {
                        loading?<div>Loading....</div>:
                        <form
                            onSubmit={submitHandler}
                        >
                            
                            <label>
                                Assignment Name*
                        </label>
                            <input type="text"
                                name="name"
                                placeholder="Assignment Date"
                                className="my-4 p-3 w-full border-2 border-green-400 rounded "
                                value={assignment}
                                onChange={(e) => setAssignment(e.target.value)} />
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
                                // value={assignment}
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
