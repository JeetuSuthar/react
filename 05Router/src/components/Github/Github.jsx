import React from 'react'
import { useEffect, useState} from 'react'
import { useFetcher } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'
function Github() {
const data=useLoaderData()

    //const [data,setData] = useState([])

    //useEffect(()=>{
      //  fetch('https://api.github.com/users/JeetuSuthar')
        //.then(res => res.json())
        //.then(data => {
          //      setData(data)
        //})
    //},[])
  return (
    <div className=' text-center m-4 bg-gray-600 text-white p-4 text-3xl   '>
      GitHub Followers : {data.followers}
      <img className='rounded-3xl' src={data.avatar_url} alt="Github Picture" width ={200}/> 
    </div>
  )
}

export default Github

export const githubInfoLoader = async ()=>{
    const response = await fetch ('https://api.github.com/users/JeetuSuthar')
    return response.json()
}

