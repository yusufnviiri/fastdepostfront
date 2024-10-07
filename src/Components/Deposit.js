/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { replace, useNavigate } from 'react-router-dom';
import { createDeposit} from '../redux/ApiSlice';

function Deposit() {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  useEffect(() => {
   
  });

  const [amount, setAmount] = useState(0);
  const depositDetails = {
    amount,
  };
  const saveDeposit = (e) => {
    e.preventDefault();
    dispatch(createDeposit(depositDetails)).then(()=>{navigate("/deposits", { replace: true });
  });
  
  };
  return (
    <>
      <div className="w-[30%] m-auto  login_form">

        <h4 className=" my-6 font-bold font-robotoCo uppercase underline-offset-2 text-center tracking-wider">
          Account Deposit
        </h4>
        <form
          onSubmit={(e) => {
            saveDeposit(e);
          }}
        >
          

          <div className="mb-1  ">
            <label className="font-bold   ml-2 block">Amount</label>
            <input
              required
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              className=" w-full   py-3 text-center"
              type="number"
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

export default Deposit;
