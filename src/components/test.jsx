import React ,{useState,useEffect} from 'react'
import Button from './button'

export default function test() {
    const [count,setCount] = useState(0)

      
      useEffect(()=>{

           setCount(count+1) 
  
    return(()=>{
        console.log("unmounted")
    })

      },[])
    


     
  return (
    <div>
        <Button value = {setCount} />
    </div>
    
  )
}
