/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMemberWithdraws } from '../redux/ApiSlice';

function Withdraws() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const withdraws = useSelector((state) => state.ApiSlice.withdraws);
  useEffect(() => {
    dispatch(getMemberWithdraws());  
  },[]);

  return (
    <>
      <h4 className=" my-6  font-bold font-robotoCo uppercase underline-offset-2 text-center tracking-wider">
        Member Withdraws
      </h4>
      {withdraws.length > 0 ? withdraws.map((item) => (
        <div
          key={item.Id}
          className="flex list_data  flex-col justify-start my-5 text-left w-1/2 m-auto "
          >
            <p className="font-semibold">
              Amount:
              <span className="font-bold">{item.amount}</span>
            </p>
            <p className="font-semibold">
              Available Balance:
              <span className="font-bold">{item.balance}</span>
            </p>{" "}
            <p className="font-semibold">
              Deposit Date:
              <span className="font-bold">{item.transactionDate}</span>
            </p>
          </div>
      )) : (<p>No Withdraw in database</p>)}

    </>
  );
}
export default Withdraws;
