/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, useState } from 'react';
// import { toast } from 'react-toastify'
import LoginUi from '../../components/authpage/loginui';
import ForgotPass from './forgotpass';

const Login = () => {
  const [change, setChange] = useState(1);
  return (
    // <section dir="ltr" className="flex justify-center items-center ">
    <>
     <LoginUi />
      {/* {change === 1 && <LoginUi change={setChange(2)} />} */}
      {/* {change === 2 && <ForgotPass />} */}
    </>
    // </section>
  );
};

export default Login;
