'use client'
import { useEffect, useState } from 'react'

function useGetWidth() {
    const [width, setWidth ]  = useState(0)

    useEffect(()=>{

        window?.addEventListener('resize', ()=>{

            setWidth(window.innerWidth)
        })
    },[])
    useEffect(()=>{
        setWidth(window.innerWidth)
    },[])
  return (
    width
  )
}

export default useGetWidth