import React, { Component } from 'react'

export default class Features extends Component {
    render() {
        return (
            <div className="my-12">
                <header className="flex justify-center">
                    <h1 className="text-3xl font-bold " ><u>Uniqueness</u></h1>
                </header>
                <div className="grid grid-cols-3 gap-4 border-green-300 border-4">
                    <div className="bg-white rounded shadow-sm py-5 px-4">
                        <i className="fas fa-chart-bar" ></i>
                        <h5 className="mb-0">Institution</h5>
                        <p>
                            All rounded benfefits.
                    </p>
                    </div>


                    <div className="bg-white rounded shadow-sm py-5 px-4 ">
                        <i className="fas fa-rocket" ></i>
                        <h5 className="mb-0">Ultra Fast</h5>
                        <p>
                            Faster than ever
                    </p>
                    </div>



                    <div className="bg-white rounded shadow-sm py-5 px-4" >

                        <i className="fas fa-child" ></i>
                        <h5 className="mb-0">Children Friendly</h5>
                        <div className="custom-separator-2 my-4 mx-auto bg-primary"></div>
                        <p>
                            Very easy to use
                    </p>
                    </div>


                    <div >
                        <i className="fas fa-award" ></i>
                        <h5 className="mb-0">Smart School</h5>

                        <p>
                            Let us handle all the complexity.
                    </p>

                    </div>

                    <div className="col-xl-4 col-sm-6 mb-5 benefit2" >
                        <i className="fas fa-tachometer-alt" ></i>
                        <h5 className="mb-0">Smooth working</h5>

                        <p>
                            Ultra Clean Dashboard
                    </p>

                    </div>


                    <div className="col-xl-4 col-sm-6 mb-5 benefit2" >

                        {/* style="font-size: 8rem;color: rgb(129, 204, 79);" */}
                        <i className="fas fa-columns" ></i>
                        <h5 className="mb-0">Digitalized Records</h5>
                        <p>
                            Track every minute details with ease.
                    </p>
                    </div>
                </div >
            </div>
        )
    }
}
