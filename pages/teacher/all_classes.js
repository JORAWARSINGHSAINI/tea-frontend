import React, { useEffect } from 'react'
import { useState } from 'react'

import Sidebar from '../../components/Sidebar'
import NavbarY from '../../components/NavbarY'
import Head from 'next/head'
import ClassCard from '../../components/ClassCard'

export default function all_classes() {
    const [classes, setclasses] = useState([
        "605da3c241d6f646f0508774",
        "605dae39f8a2ec1f70e64bbf",
        "605e2971bf790000156f76cf"
    ])
    return (
        <div className="h-screen">
            <Head>
        <title>All Classes | The Education App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
            <NavbarY></NavbarY>
            <div className="grid grid-cols-6">
                <div className="col-span-1">
                <Sidebar></Sidebar>
                </div>
                
                <div className=" col-span-5 ">
                    <div className="border-b-2 w-full h-16  flex justify-center items-center text-xl border-green-400">
                        All Classes1
                    </div>
                    <div className="sm:grid grid-cols-3 gap-4 pt-20 pl-4 ">
                    {
                        classes.map( (elementval,index)=>{
                            return (
                                <ClassCard key={index} val= {elementval}></ClassCard>
                        )
                        } )
                    }   
                    </div>
                </div>
            </div>

        </div>
       
    )
}
