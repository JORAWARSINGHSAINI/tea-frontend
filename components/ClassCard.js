import React, { useEffect,useState } from 'react'
import axios from 'axios'
import Link from 'next/link'

export default function ClassCard({val}) {
    const [noloop, setNoloop] = useState("initialState")
    const [classa, setClassa] = useState("")
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(()=>{
        setLoading(true)
        axios.get("https://cryptic-harbor-14139.herokuapp.com/class/"+val)
        .then((response) => {
            setClassa(response.data)
        })
        .catch((err) => {
            setError(err.message)
        })
        setLoading(false)
        
    },[noloop])
    
    return(
        <Link href={"/class_detail/"+val} >
        <a>
        <div className=" md:col-span-1 bg-gray-50 rounded 
         text-3xl text-gray-600 border-2 
        border-black h-64 w-full flex justify-center items-center
        hover:shadow-lg hover:bg-white hover:text-black transition duration-150 cursor-pointer ">
              {loading? 'Loading' :classa.name   }
             
        </div>
        </a>
        </Link>
    )
        
}
