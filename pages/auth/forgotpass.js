/* eslint-disable react-hooks/rules-of-hooks */
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import toast from 'react-hot-toast';

const forgotpass = () => {
  const [phone, setPhone] = useState('');
  const [newPass, setNewPass] = useState('');
  const [newPassConfirm, setNewPassConfirm] = useState('');

  //   const [timer, setTimer] = useState('');
  //   const [loadingResend, setLoadingResend] = useState(false);
  //   const [access, setAccess] = useState(false);

  const router = useRouter();

  const handleNewPass = async () => {
    if (phone === '' && newPass === '' && newPassConfirm=='') {
      toast.error('تمای فیلد ها الزامی است');
      
      return;
    }

    const pattern = /^(\+98|0)?9\d{9}$/;
    if (!pattern.test(phone)) {
      toast.error('فرمت شماره تلفن اشتباه است');
      return;
    }
    const patternP = /^[0-9]{6}$/;
    if (!patternP.test(phone)) {
      toast.error('فرمت کد ورود معتبر نیست');
      return;
    }
    if (newPass !== newPassConfirm) {
      toast.error('عدم تطابق رمز وارد شده');
      return;
    }

    const resApi = await fetch('http://127.0.0.1:8000/user/change_password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phone_number: phoneNumber,
        new_password: newPass,
        // user_id: id,
      }),
    });
    const data = await resApi.json();
    

    if (resApi.status === 200) {
      toast.success('رمز جدید ثبت شد');
      router.push('/');
    } else {
      toast.error('شماره تلفن نامعتبر است');
    }
  };

  return (
    <section dir="ltr" className="flex  justify-center items-center h-screen ">
      <div className="flex flex-col gap-y-8 border p-12 ">
        <label dir="rtl" htmlFor="Pass">
          شماره تلفن
        </label>
        <input
          id="Pass"
          className="border "
          pattern="[0-9]*"
          required
          type="tel"
          onChange={(e) => setPhone(e.target.value)}
          placeholder=""
        ></input>
        <label dir="rtl" htmlFor="Pass">
          رمز جدید
        </label>
        <input
          id="Pass"
          className="border "
          pattern="[0-9]*"
          required
          type="tel"
          onChange={(e) => setNewPass(e.target.value)}
          placeholder=""
        ></input>
        <label dir="rtl" htmlFor="Pass">
          تکرار رمز جدید
        </label>
        <input
          id="Pass"
          className="border "
          pattern="[0-9]*"
          required
          type="tel"
          onChange={(e) => setNewPassConfirm(e.target.value)}
          placeholder=""
        ></input>
        <button
          onClick={handleNewPass}
          className="w-auto h-auto p-2 text-center cursor-pointer hover:bg-gray-600 active:bg-gray-800 bg-black text-white rounded-xl"
        >
          <Link href="/">تایید</Link>
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
      </div>
    </section>
  );
};

export default forgotpass;
