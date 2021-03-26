import React from 'react'
import NavbarX from '../components/NavbarX'
import Image from 'next/image'

export default function aboutus() {
    return (
        <div className=" h-screen bg-gradient-to-d " >
            <NavbarX></NavbarX>

            <div className="mx-8  py-8 grid sm:grid-cols-3 gap-10 justify-self-center" >
                <div className="p-4 hover:shadow-md w-full flex  flex-col items-center bg-gray-50 rounded   border-gray-100 border-2">
                    <Image
                        src="/img/rajnish.jpeg"
                        alt="Founder"
                        width={200}
                        height={200}
                        className="rounded-full"
                    />
                    <h5 className="text-3xl font-bold">Rajnish Sharma</h5>
                    <span className="small text-uppercase text-muted">CEO - Founder</span>
                    <div className="pt-6 w-full flex justify-evenly  ">
                        <a href="#">
                            <Image src="/img/facebook-brands.svg" width={30} height={30}  ></Image>
                        </a>
                        <a href="#">
                            <Image src="/img/instagram-brands.svg" width={30} height={30}  ></Image>
                        </a>
                        <a href="#">
                            <Image src="/img/linkedin-in-brands.svg" width={30} height={30}  ></Image>
                        </a>
                        <a href="#">
                            <Image src="/img/github-brands.svg" width={30} height={30}  ></Image>
                        </a>
                    </div>

                </div>
                <div className="p-4 hover:shadow-md  w-full flex  flex-col items-center bg-gray-50 rounded   border-gray-100 border-2">
                    <Image
                        src="/img/me2.jpeg"
                        alt="Founder"
                        width={200}
                        height={200}
                        className="rounded-full"
                    />
                    <h5 className="text-3xl font-bold">Jorawar Singh</h5>
                    <span className="small text-uppercase text-muted"> Founder</span>
                    <div className="pt-6 w-full flex justify-evenly  ">
                        <a href="#">
                            <Image src="/img/facebook-brands.svg" width={30} height={30}  ></Image>
                        </a>
                        <a href="#">
                            <Image src="/img/instagram-brands.svg" width={30} height={30}  ></Image>
                        </a>
                        <a href="#">
                            <Image src="/img/linkedin-in-brands.svg" width={30} height={30}  ></Image>
                        </a>
                        <a href="#">
                            <Image src="/img/github-brands.svg" width={30} height={30}  ></Image>
                        </a>
                    </div>
                </div>
                <div className="p-4 hover:shadow-md w-full flex  flex-col items-center bg-gray-50 rounded   border-gray-100 border-2">
                    <Image
                        src="/img/ajay.jpeg"
                        alt="Founder"
                        width={200}
                        height={200}
                        className="rounded-full"
                    />
                    <h5 className="text-3xl font-bold">Ajay Gulia</h5>
                    <span className=" text-uppercase text-muted">CO - Founder</span>
                    <div className="pt-6 w-full flex justify-evenly  ">
                        <a href="#">
                            <Image src="/img/facebook-brands.svg" width={30} height={30}  ></Image>
                        </a>
                        <a href="#">
                            <Image src="/img/instagram-brands.svg" width={30} height={30}  ></Image>
                        </a>
                        <a href="#">
                            <Image src="/img/linkedin-in-brands.svg" width={30} height={30}  ></Image>
                        </a>
                        <a href="#">
                            <Image src="/img/github-brands.svg" width={30} height={30}  ></Image>
                        </a>
                    </div>
                </div>
            </div>

        </div>

    )
}
