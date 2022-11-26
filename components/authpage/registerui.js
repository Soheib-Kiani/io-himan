/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, useState } from 'react';
// import { toast } from 'react-toastify';
import toast from 'react-hot-toast';
import AuthContext from '../../context/AuthContext';
import Link from 'next/link';

const registerForm = ({ setStep }) => {
  const { register } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passconfirm, setPassconfirm] = useState('');
  const [cellphone, setCellphone] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    if (
      name === '' ||
      lname === '' ||
      email === '' ||
      password === '' ||
      cellphone === '' ||
      passconfirm === ''
    ) {
      toast.error('تمامی فیلد ها الزامی است');
      return;
    }

    if (password !== passconfirm) {
      toast.error('پسورد مطابقت ندارد');
      return;
    }

    const pattern = /^(\+98|0)?9\d{9}$/;
    if (!pattern.test(cellphone)) {
      toast.error('فرمت شماره موبایل معتبر نیست');
      return;
    }

    await register({ name, lname, email, password, cellphone });
    setStep(2);
  };
  return (
    <div dir="rtl" className="font-myfont">
      <div className=" w-full ">
        <div className="grid grid-cols-2">
          {/* ///////////////////////////////////////////////////////////////////////img */}
          <div className=" flex justify-center">
            <img
              className="2xl:h-[520px] 2xl:w-[520px] "
              src="/icon/logosignup.png"
            ></img>
          </div>
          {/* ////////////////////////////////////////////////////////////////////////////// */}
          <div className=" w-full h-full  flex justify-center items-center  ">
            <div className="w-[60%] h-[90%] 2xl:w-[40%] border border-gray-300 rounded-lg  2xl:mt-16 ">
              <div className="flex justify-center">
                <h1 className="text-xl font-bold text-blue-400">ثبت نام</h1>
              </div>
              <div className=" flex-col flex items-center pt-5 gap-y-5">
                <input
                  className="border border-gray-300 w-[95%] rounded-full px-3 py-2 text-xs  "
                  placeholder="نام"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                ></input>
                <input
                  className="border border-gray-300 w-[95%] rounded-full px-3 py-2 text-xs  "
                  placeholder="نام خانوادگی"
                  type="text"
                  onChange={(e) => setLname(e.target.value)}
                ></input>
                <input
                  className="border border-gray-300 w-[95%] rounded-full px-3 py-2 text-xs  "
                  placeholder="شماره موبایل"
                  type="phonenumber"
                  onChange={(e) => setCellphone(e.target.value)}
                ></input>
                <input
                  className="border border-gray-300 w-[95%] rounded-full px-3 py-2 text-xs  "
                  placeholder="ایمیل"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                <input
                  className="border border-gray-300 w-[95%] rounded-full px-3 py-2 text-xs  "
                  placeholder="رمز عبور"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
                
                <input
                  className="border border-gray-300 w-[95%] rounded-full px-3 py-2 text-xs  "
                  placeholder="تایید رمز عبور"
                  type="password"
                  onChange={(e) => setPassconfirm(e.target.value)}
                ></input>
              </div>
              <div className="w-full flex py-2 justify-between px-3">
                {/* //////////////////////////////////////////////////////////////////////////////////// ربات*/}
                {/* <div className="flex items-center justify-center">
                  <div className="w-4 ">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-3 h-3 "
                    />
                  </div>
                  <h2 className="text-xs">من ربات نیستم</h2>
                </div> */}
                {/* ///////////////////////////////////////////// */}
                {/* <div>لوگو</div> */}
                {/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  */}
              </div>
              <div className="w-full   ">
                <div className="flex justify-center">
                  <button
                    onClick={handleRegister}
                    className="w-[95%] bg-blue-400 text-white rounded-full  py-1"
                  >
                    ثبت نام
                  </button>
                </div>
                <div className="flex justify-center pt-1">
                  <p className="text-xs">
                    <Link  href="/auth/login">
                      <span className="font-bold text-blue-400">
                        ثبت نام کرده ام؟ صفحه ورود
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default registerForm;
