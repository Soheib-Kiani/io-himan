/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */

import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import AuthContext from '../context/AuthContext';

const profile = () => {
  // const { user } = useContext(AuthContext);
  const { user, lastName, email, pass, phoneNumber, logout } =
    useContext(AuthContext);
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue
  } = useForm();

  const onSubmit = async () => {
    // e.prevetDefault()
    try {
      const res = await fetch('http://127.0.0.1:8000/user/edit_user_data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: 175,
          first_name: user,
          last_name: lastName,
          email: email,
          password: getValues("passw"),
          phone_number: phoneNumber,
        }),
      });
      console.log('dsad', res.status);
      toast.success('ویرایش با موفقیت انجام شد')
    } catch (e) {
      console.log('eeee', e);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        dir="ltr"
        className="flex flex-col justify-center items-center "
      >
        {/* ---------------------------- */}
        <label>نام : </label>
        <input
          className="border-4 bg-gray-300"
          disabled
          defaultValue={user}
        ></input>
        
        {/* ---------------------------- */}
        <label>نام خانوادگی : </label>
        <input
          className="border-4 bg-gray-300"
          disabled
          defaultValue={lastName}
        ></input>
        
        {/* ---------------------------- */}
        <label>ایمیل : </label>
        <input
          className="border-4 bg-gray-300"
          disabled
          defaultValue={email}
        ></input>
        
        {/* ---------------------------- */}
        <label>رمز : </label>
        <input
          className="border-4 "
          {...register('passw', {
            required: 'فیلد نام و نام خانوادگی الزامی است'

          })}
          defaultValue={pass}
        ></input>
        <div className="form-text text-danger">{errors.passw?.message}</div>
        {/* ---------------------------- */}
        <label>تلفن : </label>
        <input
          className="border-4 bg-gray-300"
          disabled
          defaultValue={phoneNumber}
        ></input>

        {/* <label>نام : </label>
        <input  className="border-4" defaultValue={user}></input>
        
        <label>نام خانوادگی : </label>
        <input className="border-4" defaultValue={lastName}></input>
        
        <label>ایمیل : </label>
        <input className="border-4" defaultValue={email}></input>
        
        <label>رمز : </label>
        <input className="border-4" defaultValue={pass}></input>
        
        <label>تلفن : </label>
        <input
          className="border-4 bg-gray-300"
          disabled
          defaultValue={phoneNumber}
        ></input> */}

        <button className="h-auto w-auto bg-gray-600 p-1 hover:bg-gray-300">
          ویرایش
        </button>
      </form>
      <button onClick={logout} className="text-red-600">
        خروج
      </button>

    </>
  );
};

export default profile;
