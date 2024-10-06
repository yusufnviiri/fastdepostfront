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

    <nav className='w-full bg-blue-800 py-2 text-slate-100 font-semibold uppercase font-robotoCo tracking-wider flex pl-8 text-[0.9em]'> 
  {route=="/register"?<Link className='mr-3 hover:text-yellow-300' to="/login">Login</Link>:<Link className='mr-3 hover:text-yellow-300' to="/register">Register</Link>

} 
        <Link className='mr-3 hover:text-yellow-300' to="/login">Withdraw</Link>
        <Link className='mr-3 hover:text-yellow-300' to="/login">Deposit</Link>
        <Link className='mr-3 hover:text-yellow-300' to="/login">Withdraws</Link>
        <Link className='mr-3 hover:text-yellow-300' to="/login">Deposits</Link>
        {userName!=null? <button className='mr-3' onClick={()=>{Logout()}}>Logout</button>:" "}
        <p > 
          User: <span>{userName!=null? userName:"User"}</span>
        </p>

       
      
    </nav>
{/* <h4>{age}</h4>

<button onClick={()=>dispatch(add())} className='font-bold  bg-blue-700 text-slate-100 p-1 rounded'> Click To Add</button> */}

</div>
    </>
  )
}

export default Menu