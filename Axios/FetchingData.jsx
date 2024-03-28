import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Fragment } from 'react';

const FetchingData = () => {
    let [details,setDetails]=useState(null)
    useEffect(()=>{
       try {
        let fetchData = async()=>{
            let {data} = await axios.get("https://api.github.com/users")
            setDetails(data)
          }
          fetchData()
       } catch (error) {
         console.log(error)
       }
    },[])
  return (

    <div>
        {
            details==null?"Loading......":details.map((element)=>{
                return (
                    <Fragment key={element.id}>
                        <h1>{element.id}</h1>
                        <h1>{element.login}</h1>
                        <img src={element.avatar_url} alt="" />
                        <h1>{element.type}</h1>
                        <button><a href={element.html_url}>GITHUB</a></button>
                    </Fragment>
                )
            })
        }
    </div>
  )
}

export default FetchingData