import React from 'react'
import NavbarY from '../../components/NavbarY'
import { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import axios from 'axios'

export default function new_class() {
    const [classa, setClass] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false)
    const submitHandler = (e)=>{
        e.preventDefault();
        setLoading(true)
        axios.post("https://cryptic-harbor-14139.herokuapp.com"+"/class",
        {
            name: classa
        } )
        .then((response)=>{
            setError('Class Created')    
        })
        .catch((err)=>{
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
                
                <div className="col-span-6  sm:col-span-5 ">
                    <div className="border-b-2 w-full h-16  flex justify-center items-center text-xl border-green-400">
                        Add New Class
                    </div>
                    
                    <div className="flex  pt-20  justify-center">
                    
                    {error}
                        <br></br>
                        {
                        loading?<div>Loading....</div>:

                    <form
                        onSubmit={submitHandler}
                        // action="http://localhost:5000/class"
                        // method="POST"
                        >
                      <label >
                            Class Name
                      </label>
                        <input type="text"
                            name="name"
                            placeholder="Class Name"
                            className="my-4 p-3 w-full border-2 border-green-300 rounded "
                            value={classa}
                            onChange={(e) => setClass(e.target.value)} />
                        <br></br>

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
