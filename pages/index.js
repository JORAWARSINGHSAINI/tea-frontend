import React, { Component } from 'react'
import Features from '../components/Features'
import Benefits from '../components/Benefits'
import Image from 'next/image'
import NavbarX from '../components/NavbarX'
import Head from 'next/head'
export default class home extends Component {
    render() {
        return (
            <div className = " mx-6 mt-3 font-serif">
                <Head>
            <title>Home | The Education App</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta
	    name="description"           
  	        content="Home Page for the Education App Platform. It contains all the features why it is 
              a great platform. It has unique features list."></meta>
        </Head>
                 <header className=" mb-1 bg-gray-100 h-18">
                    <p className=" pt-4 pl-4 text-4xl ml-4 text-black">Education App</p>
                </header>
                <NavbarX></NavbarX>
                <div className=" md:grid grid-cols-5 gap-4 ">
                    
                        <div className="mb-4 pb-6 col-span-5 md:col-span-3 flex flex-col items-center justify-center  bg-green-300  text-6xl font-serif font-semibold " >
                            <div className="py-4">Organise</div>
                            <div className="py-4">Your</div>
                            <div className="py-4">Schooling!</div>
                            <button className="  btn w-44 bg-green-400 border-2 border-green-600 text-white text-xl mt-14 p-2 font-light"><a href="#benefits_section">Learn More</a></button>
                        </div>
                        
                        <div className=" md:col-span-2 ">
                            <Image src="/img/home1.jpg"
                                alt="Team process banner" width={600} height = {500}  />
                        </div>
                </div>
                <div id="features_section">
                <Features></Features>
                </div>
                <div id="benefits_secion">
                <Benefits></Benefits>
                </div>
            </div>
        )
    }
}
