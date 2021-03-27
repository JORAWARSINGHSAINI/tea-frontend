import React from 'react'
import Head from 'next/head'
import NavbarY from '../../components/NavbarY'
import Sidebar from '../../components/Sidebar'

export async function getStaticPaths() {

    return {
        paths: [
            { params: { id: '605da3c241d6f646f0508774' } },
            { params: { id: '605dae39f8a2ec1f70e64bbf' } },
            { params: { id: '605e2971bf790000156f76cf' } },
        ], fallback: false
    }
}
export async function getStaticProps({ params }) {

    const res = await fetch(`https://cryptic-harbor-14139.herokuapp.com/class/${params.id}`)
    const post = await res.json()

    // Pass post data to the page via props
    return { props: { post } }
}
export default function ClassDetail({ post }) {
    return (
        <div className="h-screen">
            <Head>
                <title>{post.name} </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <NavbarY></NavbarY>
            <div className="sm:grid grid-cols-6">
                <div className="sm:col-span-1">
                    <Sidebar></Sidebar>
                </div>
                <div className=" col-span-6 sm:col-span-5 ">
                    <div className="border-b-2 w-full h-16  flex justify-center items-center text-xl border-green-400">
                        Class Detail - {post.name}
                    </div>
                    <div className="h-full flex flex-col border-2  p-14  justify-center">
                        <div className="w-full">
                            {
                                post.teachers.map((element, index) => {
                                    return (
                                        <div key={index}>
                                            {element}
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            {
                                post.students.map((element, index) => {
                                    return (
                                        <div key={index}>
                                            {element}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}
