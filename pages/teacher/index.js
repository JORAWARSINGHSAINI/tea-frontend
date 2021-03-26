import React from 'react'
import NavbarY from '../../components/NavbarY'
import Sidebar from '../../components/Sidebar'
import Head from 'next/head'
export default function Teacher() {
    return (
        
        <div className="h-screen">
       <Head>
        <title>Dashboard | The Education App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
            <NavbarY></NavbarY>
            <div className="grid grid-cols-6">
                <div className="col-span-1">
                <Sidebar></Sidebar>
                </div>
                
                <div className=" col-span-5 ">
                    <div className="border-b-2 w-full h-16  flex justify-center items-center text-xl border-green-400">
                        Hola!
                    </div>
                    <div className="flex  pt-20  justify-center">
                   Hello Teacher!!
                    </div>
                </div>
            </div>

        </div>
    )
}

