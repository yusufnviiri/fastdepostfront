
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addExcelFile } from '../redux/ApiSlice';

const FetchExcelData = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const saveFiletoDb = (e) => {
    e.preventDefault();
    const fileInput = document.getElementById('fileInput');
            
    const file = fileInput.files[0];
    if (!file) {
      alert("No file selected");
      return;
  }
  console.log(file)
  dispatch(addExcelFile(file)).then((res)=>{ console.log(res)  ; navigate("/withdraws", { replace: true });
  });} 
  return (
    <>

      <div className="w-[30%] m-auto  login_form">
        <h4 className=" my-6 font-bold font-robotoCo uppercase underline-offset-2 text-center tracking-wider">Add Excel File  </h4>
        <form method='post' 
          onSubmit={(e) => {
            saveFiletoDb(e);
          }}
        >
          

          <div className="mb-1  ">
            <label className="font-bold   ml-2 block">Select File</label>
            <input id='fileInput'
              required
              type='file'            
              className=" w-full   pb-11 pt-3 px-3 text-center"
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
};




export default FetchExcelData
