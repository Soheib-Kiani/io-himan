/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import { createContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(null);


  // --------------------------------------------------------------
  const router = useRouter();
  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  // # Register
  const register = async (user) => {
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    console.log('datatata',data)
    console.log('data user',data.user)
    console.log('phonpass', data.user.phone_number);
    setPhoneNumber(data.user.phone_number);
    setFirstName(data.user.first_name);
    setLastName(data.user.last_name);
  
    if (res.status === 201) {
   
      toast.success('ثبت نام با موفقیت انجام شد');
    } else if (res.status === 208) {

      toast.error('شماره تلفن تکراری است');
    }
  };
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  // # Login
  const login = async (user) => {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const data = await res.json();

    if (res.status === 200) {
      // setUsername(data.user.first_name);
      // setPhoneNumber(data.user.phone_number);
      setFirstName(data.user.first_name);
      setLastName(data.user.last_name);

      toast.success('ورود با موفقیت انجام شد');
      router.push('/');
    } else if (res.status === 400) {

      toast.error('اطلاعات ورودی اشتباه است');
    }else{
      toast.error('ورود انجام نشد')
    }
  };
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  // #Logout
  const logout = async () => {
    const res = await fetch('/api/auth/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();

    if (res.status === 200) {
      setUser(null);
      toast.success('خروج با موفقیت انجام شد');
      router.push('/');
    } else if (res.status === 400) {

      toast.error('انجام نشد');
    }
  };
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  // #CheckToken
  const checkUserLoggedIn = async () => {
    const res = await fetch('/api/auth/me', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    if (res.status === 200) {
      setUser(data.user.first_name);
      setLastName(data.user.last_name);
      setEmail(data.user.email);
      setPass(data.user.password);
      setPhoneNumber(data.user.phone_number);
    } else if (res.status === 403) {
      setUser(null);
      setLastName(null);
      setEmail(null);
      setPass(null);
      setPhoneNumber(null);
    }
  };

  return (
    // <AuthContext.Provider
    //   value={{
    //     register,
    //     login,
    //     logout,
    //     user,
    //   }}
    // >
     <AuthContext.Provider
      value={{
        register,
        login,
        logout,
        user,
        phoneNumber,
        lastName,
        firstName,
        email,
        pass
      }}
    > 
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
