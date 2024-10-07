import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate,useLocation } from 'react-router-dom';


function Menu() {
  const userName = sessionStorage.getItem("UserName")
  const navigate = useNavigate();
  const location = useLocation();


  function Logout() {
    sessionStorage.clear()
    navigate("/login", { replace: true });

  }

  const route=location.pathname

  return (
    <>

    <div className='relative'>

    <nav className=' w-full bg-blue-800 py-2 text-slate-100 font-semibold uppercase font-robotoCo tracking-wider flex justify-between px-8 text-[0.9em]'>
      <div  className='border-none bg-transparent flex'> 
  {route=="/register"?<Link className='mr-3 hover:text-yellow-300' to="/login">Login</Link>:<Link className='mr-3 py-[3px] hover:text-yellow-300' to="/register">Register</Link>}         
        {userName!=null? <div className='border-none bg-transparent'>
        <Link className='mr-3 hover:text-yellow-300' to="/deposit">Deposit</Link>
        <Link className='mr-3 hover:text-yellow-300' to="/withraw">Withdraw</Link>

           <Link className='mr-3 hover:text-yellow-300' to="/withraws">Withdraws</Link>
           <Link className='mr-3 hover:text-yellow-300' to="/deposits">Deposits</Link>
       
          
         <button className='mr-3 bg-red-700 px-2 py-[3px] rounded' onClick={()=>{Logout()}}>Logout</button></div>:""}</div>
        <p className=''> 
          User: <span className='text-green-100 text-[0.99em]'>{userName!=null? userName:"User"}</span>
        </p>

       
      
    </nav>
{/* <h4>{age}</h4>

<button onClick={()=>dispatch(add())} className='font-bold  bg-blue-700 text-slate-100 p-1 rounded'> Click To Add</button> */}

</div>
    </>
  )
}

export default Menu