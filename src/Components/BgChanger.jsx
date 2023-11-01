import React, { useState } from 'react'

function BgChanger() {
    const[color,setColor]=useState("olive")
  return (
    <div className='w-full h-screen' style={{backgroundColor: color}}>
      <div className='flex flex-wrap bg-white w-3/4 h-14 fixed bottom-12 left-40 rounded-xl shadow-2xl'>
        <div className='bg-red-700 hover:bg-red-500 rounded-xl gap-3 w-20 h-10 m-auto text-center'><button onClick={()=>setColor("red")} className='m-1.5'>Red</button></div>
        <div className='bg-green-600 hover:bg-green-400 rounded-xl gap-3 w-20 h-10 m-auto text-center'><button onClick={()=>setColor("green")} className='m-1.5'>Green</button></div>
        <div className='bg-yellow-400 hover:bg-yellow-200 rounded-xl gap-3 w-20 h-10 m-auto text-center'><button onClick={()=>setColor("yellow")} className='m-1.5'>Yellow</button></div>
        <div className='bg-blue-500 hover:bg-blue-300 rounded-xl gap-3 w-20 h-10 m-auto text-center'><button onClick={()=>setColor("blue")} className='m-1.5'>Blue</button></div>
        <div className='bg-orange-500 hover:bg-orange-300 rounded-xl gap-3 w-20 h-10 m-auto text-center'><button onClick={()=>setColor("orange")} className='m-1.5'>Orange</button></div>
        <div className='bg-violet-600 hover:bg-violet-400 rounded-xl gap-3 w-20 h-10 m-auto text-center'><button onClick={()=>setColor("violet")} className='m-1.5'>Violet</button></div>
        <div className='bg-pink-400 hover:bg-pink-300 rounded-xl gap-3 w-20 h-10 m-auto text-center'><button onClick={()=>setColor("pink")} className='m-1.5'>Pink</button></div>

      </div>
    </div>
  )
}

export default BgChanger
