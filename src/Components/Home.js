import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';


function Home() {
    const navigate = useNavigate();

const checkLoginStatus=()=>{
    const userName = sessionStorage.getItem("UserName")
    if(userName!=null)
    {
      console.log(typeof(userName))
      navigate("/register", { replace: true });
    }else{
      console.log(userName)
      navigate("/login", { replace: true });}  
    }
    // useEffect(()=>{checkLoginStatus()},[])

  return (
    <div>Home</div>
  )
}

export default Home