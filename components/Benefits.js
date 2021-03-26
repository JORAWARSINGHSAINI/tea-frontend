import React, { Component } from 'react'
import Image from 'next/image'
export default class Benefits extends Component {
    render() {
        return (
            <div
                className="container-fluid benefits_section "
                id="benefits_section"   >
                <header className="text-center mb-5 ">
                    <div className="row">
                        <div className="col-lg-7 mx-auto">
                            <h1 ><u> Why Us?</u></h1>
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-3 gap-4">
                    <div >
                        <Image
                            src="/img/Institution_logo.png"
                            alt="Institution Image"
                            width={100} height={100}
                            className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                        <h5 className="mb-0">Institution</h5>

                        <p>
                            All rounded benfefits.
                            Benefits and benefits and benefits
                            Lorem Ipsum  Lorem Ipsum Lorem Ipsum Lorem Ipsum
                    </p>

                    </div>
                    <div >

                        <Image
                            src="/img/Teacher_logo.png"
                            alt="Teacher Image"
                            width={100} height={100}
                            className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                        <h5 className="mb-0">
                            Teachers
                    </h5>

                        <p>
                            All rounded benfefits.
                            Benefits and benefits and benefits
                            Lorem Ipsum  Lorem Ipsum Lorem Ipsum Lorem Ipsum
                    </p>
                    </div>
                    <div >

                        <Image
                            src="/img/avatar.svg" alt="Student Image"
                            width={100} height={100}
                             className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                        <h5 className="mb-0">Students</h5>
                        <p>
                            All rounded benfefits.
                            Benefits and benefits and benefits
                            Lorem Ipsum  Lorem Ipsum Lorem Ipsum Lorem Ipsum
                    </p>

                    </div>


                </div>
            </div>
        )
    }
}
