/* eslint-disable react-hooks/rules-of-hooks */

// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import { useContext, useEffect, useState } from 'react';
// import AuthContext from '../../context/AuthContext';

// const header = () => {
//   const { user, loading } = useContext(AuthContext);
//   const router = useRouter();
//   const handleProfile = () => {
//     router.push('/profile');
//   };

//   return (
//     <div className="">
//       <header className={`flex h-auto p-5 justify-between`}>

//         <div className="h-auto cursor-pointer w-24 ">
//           <Link href="/">
//             <img alt="logo" src="/vercel.svg" />
//           </Link>
//         </div>

//         <div className=" flex w-1/2 h-[10%] justify-start">
//           <ul className="flex gap-x-24 font-sans text-base">
//             <li className="font-bold">خانه</li>
//             <li className="text-gray-500">دوره های اموزشی</li>
//             <li className="text-gray-500">درباره ما</li>
//           </ul>
//         </div>

//         <div className=" gap-x-8 flex">
//           <Link href="/cart">
//             <div className="w-6 cursor-pointer ">
//               <img alt="shop" src="/shop.png" />
//             </div>
//           </Link>
//           <div className={`w-6`}>

//             {user ? (
//               <button
//                 onClick={handleProfile}
//                 className="cursor-pointer transition-all"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth={1.5}
//                   stroke="currentColor"
//                   className="w-6 h-6"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
//                   />
//                 </svg>
//               </button>
//             ) : (
//               <div className="cursor-pointer">
//                 <Link href="/auth/login">
//                   <img alt="enter" src="/enter.png" />
//                 </Link>
//                 Login
//               </div>
//             )}
//           </div>
//         </div>

//       </header>
//     </div>
//   );
// };

// export default header;

import Image from 'next/image';
import { TbMoon } from 'react-icons/tb';
import { FiShoppingCart } from 'react-icons/fi';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/AuthContext';
const header = () => {
  const { user, loading, firstName, lastName } = useContext(AuthContext);
  const router = useRouter();
  const handleProfile = () => {
    router.push('/profile');
  };
  const titleHeader = [
    { lable: 'خانه', path: '/' },
    { lable: 'دوره های آموزشی', path: '' },
    { lable: 'ارتباط با ما', path: '' },
    { lable: 'درباره ما', path: '' },
  ];
  return (
    <div
      dir="rtl"
      className="w-full flex items-center  my-3 font-myfont  py-3 sticky top-0  bg-white"
    >
      <div className="w-[10%]  flex justify-center ">
        <div className="bg-blue-400 cursor-pointer p-2 rounded-full">
          <Link href="/">
            <Image alt="" src={'/ioo.png'} height={25} width={32}></Image>
          </Link>
        </div>
      </div>
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////field */}
      <div className="w-[50%]  flex gap-x-12 ">
        {titleHeader.map((nav, index) => (
          <div key={index} className="flex items-center   ">
            <a href={nav.path}>
              {' '}
              <h1 className="text-sm">{nav.lable}</h1>
            </a>
          </div>
        ))}
      </div>
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////search */}
      <div className=" w-[40%]  flex">
        <div className="w-[6%]  flex items-center text-xl text-gray-500">
          <Link href='/cart'>
          <FiShoppingCart />
          </Link>
        </div>
        <div className="w-[45%]  ">
          <input
            className="w-[90%] border border-gray-300 rounded-full text-xs py-2 px-2  "
            placeholder="جست و جو"
          ></input>
        </div>
        <div className="w-[20%]   ">
          {user ? (
            <div className='flex'>
                <button
                    onClick={handleProfile}
                    className="cursor-pointer transition-all"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                  </button>
               <h1>
              {user} <span>{lastName}</span>
            </h1>
            </div>
           
          ) : (
            // <button
            //         onClick={handleProfile}
            //         className="cursor-pointer transition-all"
            //       >
            //         <svg
            //           xmlns="http://www.w3.org/2000/svg"
            //           fill="none"
            //           viewBox="0 0 24 24"
            //           strokeWidth={1.5}
            //           stroke="currentColor"
            //           className="w-6 h-6"
            //         >
            //           <path
            //             strokeLinecap="round"
            //             strokeLinejoin="round"
            //             d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            //           />
            //         </svg>
            //       </button>
            <Link href="/auth/login">
              <button className="text-xs text-white rounded-lg bg-blue-400 w-full h-full ">
                ورود / ثبت نام
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default header;
