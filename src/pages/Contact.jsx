import React, { useEffect,useState } from "react";
import { useNavigate } from 'react-router-dom';

import EmailForm from '../components/EmailForm';


export default function Contact() {

  return (
    <div>
      <h1>Contact Page</h1>

      <EmailForm/>
    </div>
  );
}


export function MessageSubmitted() {

    const [count, setCount] = useState(10);
  const navigate  = useNavigate()


  useEffect(()=>{
    const timer = setTimeout(()=>{
      if(count > 0){
        setCount((prev)=>prev-1)
      }else{
        navigate("/")
      }
    },1000)

    return()=>clearTimeout(timer)
  },[count,navigate])


  return (
    <>
      <h1>Thank you for Contacting Us!</h1>
      <p>redirecting to Homepage in {count} seconds...</p>
    </>
  );
}
