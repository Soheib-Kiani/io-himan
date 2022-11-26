/* eslint-disable react-hooks/rules-of-hooks */
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import AuthContext from '../../context/AuthContext';

const checksms = () => {
  const { phoneNumber } = useContext(AuthContext);
  const [otp, setOtp] = useState('');
  const [show, setShow] = useState(false);
  const [timer, setTimer] = useState('');
  const [loadingResend, setLoadingResend] = useState(false);
  const [access, setAccess] = useState(false);

  const router = useRouter();

  useEffect(() => {
    let time = '0:5';
    let interval = setInterval(() => {
      let countdown = time.split(':');
      let minutes = parseInt(countdown[0], 10);
      let seconds = parseInt(countdown[1], 10);
      --seconds;
      minutes = seconds < 0 ? --minutes : minutes;
      if (minutes < 0) {
        clearInterval(interval);
        setShow(true);
      }
      seconds = seconds < 0 ? 59 : seconds;
      seconds = seconds < 10 ? '0' + seconds : seconds;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      time = minutes + ':' + seconds;
      setTimer(time);
    }, 1000);

    return () => {
      clearInterval(interval);
      setTimer('');
    };
  }, [loadingResend]);

  const handleCheckOtp = async () => {
    if (otp === '') {
      toast.error('کد ورود الزامی است');
      return;
    }

    const pattern = /^[0-9]{6}$/;
    if (!pattern.test(otp)) {
      toast.error('فرمت کد ورود معتبر نیست');
      return;
    }

    const resApi = await fetch('http://127.0.0.1:8000/user/check_sms_verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phone_number: phoneNumber,
        sms: otp,
      }),
    });
    const data = await resApi.json();
    // console.log('data in check sms', data.sms);
    // if (sms === data.sms) {
    //   setAccess(true);
    //   toast.success('تایید کد');
    //   router.push('/');
    // } else {
    //   toast.error('کد اشتباه است');
    // }
    console.log('status ', resApi.status);
    console.log('body', data);
    if (resApi.status === 200) {
      toast.success('تایید کد');
      router.push('/');
    } else if (resApi.status === 400) {
      toast.error('کد اشتباه است');
    }else{
      toast.error('Internal Error')
    }
    // console.log('resapi in checksms.authpage', resApi);
    // console.log('access', access);
    // await checkSms(phoneNumber);
  };

  // const handleResendOtp = async () => {
  //   setLoadingResend(true);
  //   await resendOtp();
  //   setLoadingResend(false);
  //   setShow(false);
  // };

  return (
    <section dir="ltr" className="flex  justify-center items-center h-screen ">
      <div className="flex flex-col gap-y-8 border p-12 ">
        <label dir="rtl" htmlFor="Pass">
          کد اس ام اس برای {phoneNumber} ارسال شد
        </label>
        <input
          id="Pass"
          className="border "
          pattern="[0-9]*"
          required
          type="tel"
          onChange={(e) => setOtp(e.target.value)}
          placeholder=""
        ></input>
        <button
          onClick={handleCheckOtp}
          className="w-auto h-auto p-2 text-center cursor-pointer hover:bg-gray-600 active:bg-gray-800 bg-black text-white rounded-xl"
          disabled={access}
        >
          <Link href="/">تایید اس ام اس</Link>
        </button>
        {/* <div>
          {show ? (
            <button
              onClick={handleResendOtp}
              disabled={loadingResend}
              className=""
            >
              ارسال دوباره
              {loadingResend && <div className=""></div>}
            </button>
          ) : (
            <div className="mt-3">{timer}</div>
          )}
        </div> */}
        {otp}
      </div>
    </section>
  );
};

export default checksms;
