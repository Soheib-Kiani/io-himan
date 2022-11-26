/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, useState } from 'react';
// import { toast } from 'react-toastify';
import toast from 'react-hot-toast';
import AuthContext from '../../context/AuthContext';
import Link from 'next/link';

const Login = () => {
// const Login = ({setChange}) => {
  const { login } = useContext(AuthContext);
  const [password, setPassword] = useState('');
  const [cellphone, setCellphone] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    if (password === '' || cellphone === '') {
      toast.error('تمامی فیلد ها الزامی است');
      return;
    }
    const pattern = /^(\+98|0)?9\d{9}$/;
    if (!pattern.test(cellphone)) {
      toast.error('فرمت شماره موبایل معتبر نیست');
      return;
    }

    await login({ password, cellphone });

  };
  return (
    <div dir="rtl" className="font-myfont">
      <div className=" w-full ">
        <div className="grid grid-cols-2">
          {/* ///////////////////////////////////////////////////////////////////////img */}
          <div className=" flex justify-center">
            <img alt='icon'
              className="2xl:h-[520px] 2xl:w-[520px] "
              src="/icon/logosignup.png"
            ></img>
          </div>
          {/* ////////////////////////////////////////////////////////////////////////////// */}
          <div className=" w-full h-full  flex justify-center items-center  ">
            <div className="w-[60%] h-[60%] 2xl:w-[40%] border border-gray-300 rounded-lg  2xl:mt-16 ">
              <div className="flex justify-center">
                <h1 className="text-xl font-bold text-blue-400">ثبت نام</h1>
              </div>
              <div className=" flex-col flex items-center pt-5 gap-y-5">
                <input
                   onChange={(e) => setCellphone(e.target.value)}
                  type="phone"
                  className="border border-gray-300 w-[95%] rounded-full px-3 py-2 text-xs  "
                  placeholder="شماره موبایل"
                ></input>
                <input
                 onChange={(e) => setPassword(e.target.value)}
                  className="border border-gray-300 w-[95%] rounded-full px-3 py-2 text-xs  "
                  placeholder="رمز عبور"
                  type="text"
                ></input>
              </div>
              <div className="w-full flex py-2 justify-between px-3">
                {/* ////////////////////////////////////////////////////// ربات*/}
                {/* <div className="flex items-center justify-center">
                  <div className="w-4 ">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-3 h-3 "
                    />
                  </div>
                  <h2 className="text-xs">من ربات نیستم</h2>
                </div>
                
                <div>لوگو</div> */}
                {/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  */}
              </div>
              <div className="w-full pt-5  ">
                <div className="flex justify-center">
                  <button onClick={handleLogin} className="w-[95%] bg-blue-400 text-white rounded-full  py-1">
                    ورود
                  </button>
                </div>
                <div className="flex justify-center pt-1">
                  {' '}
                  <p className="text-xs">
                  ثبت نام نکرده ام !
                    <span className="font-bold text-blue-400"> <Link href={'/auth/register'}>صفحه ثبت نام</Link></span>
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

export default Login;