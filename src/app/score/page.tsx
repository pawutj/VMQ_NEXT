"use client"
import { useSocket } from '@/components/providers/socket-provider'
import axios from 'axios'
import Image from 'next/image'
import { useEffect, useState } from 'react'


export default function Home() {
    const { socket, isConnected} = useSocket()
    const [count,setCount] = useState(0)
    const [onState,setOnState] = useState("")

    useEffect(() => {
        if (!isConnected){
            return
        }
        socket?.on("onCallback", () => {
            setOnState("test on state")
        })
     })
    
    const addCount = async () => {
        setCount(count + 1)
        try{
            await axios.post(String(process.env.BASE_URL)+"/api/score/");
        } catch (e) {
            console.log(e)
        }
    }
    

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1> TEST HEADER </h1>
        <button onClick={addCount}>count: {count}</button>
        <p>{onState}</p>

      </div>
    </main>
  )
}