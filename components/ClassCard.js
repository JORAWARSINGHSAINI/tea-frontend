import React, { useEffect,useState } from 'react'
import axios from 'axios'
export default function ClassCard({val}) {
    const [noloop, setNoloop] = useState("initialState")
    const [classa, setClassa] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    useEffect(()=>{
        setLoading(true)
        axios.get("https://cryptic-harbor-14139.herokuapp.com/class", { 
            id: val
        })
        .then((response) => {
            alert(JSON.stringify(response))
        })
        .catch((err) => {
            setError(err.message)
        })
        setLoading(false)
        
    },[noloop])
    
    return(
        <>
        {val}
        <div className=" md:col-span-1 border-2 border-black h-64 rounded">
              {loading? 'Loading' : String(classa) }
              <span>fasdfadsf</span>
        </div>
        </>
    )
        
}
