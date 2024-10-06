/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {  registerUser} from '../redux/ApiSlice';
// import { register } from "../../redux/ApiSlice"

function Register() {

 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const [roleString, setRoleString] = useState('');
  const [password, setpassword] = useState('');
  const userName = email;
  const role = [];
  
  useEffect(()=>{
    role.push(roleString)
    
      },[roleString.length])
  const userdetails = {
    firstName,
    lastName,
    password,
    email,
    roleString,
    userName,
  };
  async function RegisterUser(e) {
    // let error = JSON.parse(localStorage.getItem("logginError"));

    e.preventDefault();


    dispatch(registerUser(userdetails))
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
    console.log("oete");
    navigate('/', { replace: true });
  }

  return (
    <>
      <div className="w-[30%] m-auto  login_form">

        <h4 className=" my-6 font-bold font-robotoCo uppercase underline-offset-2 text-center tracking-wider">   REGISTER</h4>
        <form onSubmit={(e) => {RegisterUser(e);}}>
          <div className="mb-1  ">
            <label className="font-bold   ml-2 block">First Name</label>
            <input
              required
              value={firstName}
              onChange={(e) => {
                setfirstName(e.target.value);
              }}
              className=" w-full   py-3 text-center"
              type="text"
            />
          </div>

          <div className="mb-1  ">
            <label className="font-bold   ml-2 block">Last Name</label>
            <input
              required
              value={lastName}
              onChange={(e) => {
                setlastName(e.target.value);
              }}
              className=" w-full   py-3 text-center"
              type="text"
            />
          </div>

          <div className="mb-1  ">
            <label className="font-bold   ml-2 block">Phone Number</label>
            <input
              required
              type="text"
              value={phoneNumber}
              onChange={(e) => {
                setphoneNumber(e.target.value);
              }}
              className=" w-full   py-3 text-center"
            />
          </div>
          <div className="mb-1  ">
            <label className="font-bold   ml-2 block">Role</label>

            <select
              className="font-bold    block w-full"
              required
              value={roleString}
              onChange={(e) => {
                setRoleString(e.target.value);
              }}
            >
              <option className=" font-thin text-red-900">...select...</option>
              <option className=" font-thin text-red-900">Member</option>
              <option className=" font-thin text-red-900">Manager</option>
              <option className=" font-thin text-red-900">Administrator</option>

            </select>

            {/* <input required
              value={lastName}
              onChange={(e) => {
                setlastName(e.target.value);
              }}
              className=" w-full   py-3 text-center"
              type="text"
            /> */}
          </div>

          <div className="mb-1  ">
            <label className="font-bold   ml-2 block">Email</label>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className=" w-full   py-3 text-center"
            />
          </div>

          <div className="   mb-1">
            <label className="font-bold   ml-2 block">Password</label>
            <input
              required
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              className=" w-full   py-3 text-center"
              type="text"
            />
          </div>

       
          <div
            className="mt-6 text-white submit   font-bold w-full m-auto
    text-center  bg-green-700 rounded hover:bg-slate-700"
          >
            <input
              className="uppercase  font-lobs text:[0.48em] sm:text-[0.71em] cursor-pointer text-yellow-300"
              type="submit"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
