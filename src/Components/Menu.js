import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate,useLocation } from 'react-router-dom';
import {  useDispatch } from 'react-redux';
import { updateAccounts } from '../redux/ApiSlice';


function Menu() {
  const userName = sessionStorage.getItem("UserName")
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();


  function Logout() {
    sessionStorage.clear()
    navigate("/login", { replace: true });

  }

  const route=location.pathname

  return (
    <>

    <div className='relative'>

    <nav className=' w-full bg-blue-800 py-2 text-slate-100 font-semibold uppercase font-roboto tracking-wider flex justify-between px-8 text-[0.49em] md:text-[0.7em] lg:text-[0.8em]'>
      <div  className='border-none bg-transparent flex font-mul'> 
  {route==="/register"?<Link className='lg:mr-3 mr-[3px] hover:text-yellow-300' to="/login">Login</Link>:<Link className='lg:mr-3 mr-[3px] py-[3px] hover:text-yellow-300' to="/register">Register</Link>}         
        {userName!=null? <div className='border-none bg-transparent'>
        <Link className='lg:mr-3 mr-[3px]  hover:text-yellow-300' to="/deposit">Deposit</Link>
        <Link className='lg:mr-3 mr-[3px] hover:text-yellow-300' to="/withdraw">Withdraw</Link>

           <Link className='lg:mr-3 mr-[3px] hover:text-yellow-300' to="/withdraws">Withdraws</Link>
           <Link className='lg:mr-3 mr-[3px] hover:text-yellow-300' to="/deposits">Deposits</Link>
           <Link className='lg:mr-3 mr-[3px] hover:text-yellow-300' to="/upload">Add ExcelFile</Link>
       
           <button className='lg:mr-3 mr-[3px] bg-yellow-500 px-2 py-[3px] rounded text-green-800 font-bold' onClick={()=>{dispatch(updateAccounts())}}>Update Accounts</button>
         <button className='lg:mr-3 mr-[3px] bg-red-700 px-2 py-[3px] rounded' onClick={()=>{Logout()}}>Logout</button></div>:""}</div>
        <p className='capitalize'> 
          User: <span className='text-green-100 lg:text-[0.99em] text-[0.69em]'>{userName!=null? userName:"User"}</span>
        </p>

       
      
    </nav>
{/* <h4>{age}</h4>

<button onClick={()=>dispatch(add())} className='font-bold  bg-blue-700 text-slate-100 p-1 rounded'> Click To Add</button> */}

</div>
    </>
  )
}

export default Menu