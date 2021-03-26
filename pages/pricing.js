import React from 'react'
import NavbarX from '../components/NavbarX'
export default function pricing() {
    return (

        <div className="h-screen bg-gradient-to-r from-green-400 to-blue-500 ">
            <NavbarX></NavbarX>
            <header className="text-white" >           
                    <div className="flex flex-col items-center" >
                        <h1 className="text-4xl" >Pricing</h1>  
                        <br></br>
                        <a href="/" className="text-reset" > Cancel at any time.*</a>
                     
                </div>
            </header>

            <div className=" text-gray-700 px-4 md:grid grid-cols-3 gap-10 text-center">


                <div className="mt-6 bg-gray-100 border-2 border-black h-96 flex flex-col items-center p-5 rounded-lg shadow ">

                    <div >
                        <h1 className="text-xl font-bold mb-4">Basic</h1>
                        <h2 className="">Free<span className="text-small font-weight-normal ml-2">/ month</span></h2>

                        <hr></hr>

                        <ul className="list-unstyled my-5 text-small text-left">
                            <li className="mb-3">
                                <i className="fa fa-check mr-2 text-primary"></i>Organise Schooling</li>
                            <li className="mb-3">
                                <i className="fa fa-check mr-2 text-primary"></i>1 className meet/week</li>
                            <li className="mb-3">
                                <i className="fa fa-check mr-2 text-primary"></i> 1GB Storage</li>
                            <li className="mb-3 text-muted">
                                <i className="fa fa-times mr-2"></i>
                                <del>Recorded Lectures</del>
                            </li>
                            <li className="mb-3 text-muted">
                                <i className="fa fa-times mr-2"></i>
                                <del>ML Test Supervision</del>
                            </li>
                            <li className="mb-3 text-muted">
                                <i className="fa fa-times mr-2"></i>
                                <del>Detailed Analysis</del>
                            </li>
                        </ul>
                        <a href="#" className="btn  p-2 shadow rounded hover:bg-green-400 hover:text-white">Subscribe</a>
                    </div>
                </div>


                <div className=" mt-6 bg-gray-100 border-2 border-black h-96 flex flex-col items-center p-5 rounded-lg shadow ">

                    <div >
                        <h1 className="text-xl font-bold mb-4">Ultimate</h1>
                        <h2 className="">$20000<span className="text-small font-weight-normal ml-2">/ month</span></h2>

                        <hr></hr>

                        <ul className="list-unstyled my-5 text-small text-left font-weight-normal">
                            <li className="mb-3">
                                <i className="fa fa-check mr-2 text-primary"></i>100 className</li>
                            <li className="mb-3">
                                <i className="fa fa-check mr-2 text-primary"></i>15 className meet/ week</li>
                            <li className="mb-3">
                                <i className="fa fa-check mr-2 text-primary"></i>20 GB storage</li>
                            <li className="mb-3">
                                <i className="fa fa-check mr-2 text-primary"></i>Detailed Reports</li>
                            <li className="mb-3">
                                <i className="fa fa-check mr-2 text-primary"></i>Weekly Reports</li>
                            <li className="mb-3">
                                <i className="fa fa-check mr-2 text-primary">24/7 Available</i></li>
                        </ul>
                        <a href="#" className="btn  p-2 shadow rounded hover:bg-green-400 hover:text-white">Subscribe</a>
                    </div>
                </div>
                <div className="mt-6 bg-gray-100 border-2 border-black h-96 flex flex-col items-center p-5 rounded-lg shadow ">

                    <div >
                        <h1 className="text-xl font-bold h5 text-uppercase font-weight-bold mb-4">Pro</h1>
                        <h2 className="h1 font-weight-bold">$10000<span className="text-small font-weight-normal ml-2">/ month</span></h2>

                      <hr></hr>

                        <ul className="list-unstyled my-5 text-small text-left font-weight-normal">
                            <li className="mb-3">
                                <i className="fa fa-check mr-2 text-primary"></i> 15 className</li>
                            <li className="mb-3">
                                <i className="fa fa-check mr-2 text-primary"></i>7 className meet/week </li>
                            <li className="mb-3">
                                <i className="fa fa-check mr-2 text-primary"></i>5 GB Storage</li>
                            <li className="mb-3">
                                <i className="fa fa-check mr-2 text-primary"></i>Detailed Analysis</li>
                            <li className="mb-3">
                                <i className="fa fa-check mr-2 text-primary"></i>Notification Enabled</li>
                            <li className="mb-3 text-muted">
                                <i className="fa fa-times mr-2"></i>
                                <del>Notifications</del>
                            </li>
                        </ul>
                        <a href="#" className="btn  p-2 shadow rounded border-1 border-green-400 hover:bg-green-400 hover:text-white">Subscribe</a>
                    </div>
                </div>




            </div>
        </div>

    )
}
