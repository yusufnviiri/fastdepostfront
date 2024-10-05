import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { add } from '../redux/ApiSlice'

function Home() {
    const dispatch = useDispatch();
    const age = useSelector((state)=>state.ApiSlice.age)
  return (
    <>
    <div className='relative'>
<h3 className='bg-yellow-600 text-slate-700'>Home</h3>
<h4>{age}</h4>

<button onClick={()=>dispatch(add())} className='font-bold  bg-blue-700 text-slate-100 p-1 rounded'> Click To Add</button>

</div>
    </>
  )
}

export default Home