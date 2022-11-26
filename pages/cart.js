/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { numberFormat } from '../lib/helper';
import { clearCart, removeFromCart } from '../redux/cart/action';

const cart = () => {
  const [cart, setCart] = useState(null);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.shoppingCart);

  useEffect(() => {
    setCart(state.cart);
  }, [state]);

  if (cart === null) {
    return <div className="">Loading ...</div>;
  }

  const handleDeleteAll = () => {
    dispatch(clearCart());
  };

  return (
    <>
      {/* <button onClick={handleDeleteAll}>Clear All</button> */}
      {/* <h1 className="mb-4 text-xl">سبد خرید</h1> */}
      {cart.length === 0 ? (
        <div>
          سبد خرید شما خالی است{' '}
          <Link href="/">
            <p className="text-blue-700 cursor-pointer">
              بازگشت به صفجه ی اصلی
            </p>
          </Link>
        </div>
      ) : (
        // <div className="grid md:grid-cols-3">
        //   <div className="overflow-x-auto md:col-span-3">
        //     <table className="min-w-full">
        //       <thead className="border-b">l
        //         <tr>
        //           <th className="px-5 text-right">محصول</th>
        //           {/* <th className="p-5 text-right">Quantity</th> */}
        //           <th className="p-5 text-right">قیمت</th>
        //           <th className="p-5">حذف از سبد</th>
        //         </tr>
        //       </thead>
        //       <tbody>
        //         {cart.map((item) => (
        //           <tr key={item.id} className="border-b">
        //             <td>
        //               <Link href={`/product/${item.id}`}>{item.title}</Link>
        //             </td>
        //             <td className="p-5 text-right">
        //               {numberFormat(item.price)}{' '}
        //             </td>
        //             <td className="p-5 text-center">
        //               <button onClick={() => dispatch(removeFromCart(item.id))}>
        //                 <img alt="img" className="h-5 w-5" src="/cross.png" />
        //               </button>
        //             </td>
        //           </tr>
        //         ))}
        //       </tbody>
        //     </table>
        //     <button className="bg-gray-500 h-auto w-auto rounded hover:bg-blue-50 p-1 ">
        //       تکمیل سفارش
        //     </button>
        //   </div>
        // </div>
        <div dir="rtl" className="">
          {cart.map((item) => (
            <div key={item.id} className="w-full flex">
              <div className="w-[80%]  h-20 flex justify-end  my-3">
                <div className=" h-full w-[90%] bg-gray-200 rounded-lg flex items-center ">
                  <div className="flex items-center justify-around w-full">
                    <div className="flex items-center gap-x-12 w-3/4 ">
                      <div className="h-16 w-16 rounded-full bg-gray-600">
                        <img
                          className="object-cover h-full w-full rounded-full"
                          src={`http://127.0.0.1:8000${item.image}`} 
                          alt="ca"
                        />
                      </div>
                      <div className="font-bold text-gray-700">
                        {item.title}
                      </div>
                    </div>
                    <div className="text-gray-500">
                      {numberFormat(item.price)}
                      <span className="px-2 text-sm">تومان</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[10%]  flex items-center justify-center">
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  <img alt="img" className="h-5 w-5" src="/cross.png" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="max-w-screen-2xl mx-auto ">
        <div className='flex gap-x-12'>
          <button className="px-4 py-2 bg-blue-400 rounded-lg w-auto h-auto">تکمیل سفارش</button>
          <button onClick={handleDeleteAll} className="px-4 py-2 bg-blue-400 rounded-lg w-auto h-auto">پاک کردن همه</button>
        </div>
      </div>
    </>
  );
};

export default cart;
