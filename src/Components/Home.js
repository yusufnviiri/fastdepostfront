import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { add } from '../redux/ApiSlice'
import { Link } from 'react-router-dom';

function Home() {
    const dispatch = useDispatch();
    const age = useSelector((state)=>state.ApiSlice.age)
  return (
    <>
    <div className='relative'>

    <nav className='w-full bg-blue-800 py-2 text-slate-100 font-semibold uppercase font-robotoCo tracking-wider flex pl-8 text-[0.9em]'> 
        <Link className='mr-3 hover:text-yellow-300' to="/login">Login</Link>
        <Link className='mr-3 hover:text-yellow-300' to="/login">Register</Link>
        <Link className='mr-3 hover:text-yellow-300' to="/login">Withdraw</Link>
        <Link className='mr-3 hover:text-yellow-300' to="/login">Deposit</Link>
        <Link className='mr-3 hover:text-yellow-300' to="/login">Withdraws</Link>
        <Link className='mr-3 hover:text-yellow-300' to="/login">Deposits</Link>



    </nav>
{/* <h4>{age}</h4>

<button onClick={()=>dispatch(add())} className='font-bold  bg-blue-700 text-slate-100 p-1 rounded'> Click To Add</button> */}

</div>
    </>
  )
}

export default Home