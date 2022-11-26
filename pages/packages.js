/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { numberFormat } from '../lib/helper';
import { addToCart, clearCart, removeFromCart } from '../redux/cart/action';
import Image from 'next/image';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdOutlineAccessTimeFilled } from 'react-icons/md';

const packages = ({ product }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const goShop = () => {
    dispatch(removeFromCart(product.id));
    dispatch(addToCart(product));
    toast.success('محصول با موفقیت اضافه شد');
    router.push('/cart');
  };
  // console.log('adkhasgd', product.teacher.name);

  return (
    <div dir="rtl" className=" font-myfont max-w-screen-lg mx-auto mb-5 ">
      <div className="flex flex-col shadow-sm  shadow-gray-300 rounded-2xl   ">
        <div className="w-80 cursor-pointer h-40 rounded-2xl ">
        <Link href={`/product/${product?.title_url}`}>
          <img
            className="h-full w-full object-cover bg-black rounded-2xl "
            alt={product?.title}
            src={`http://127.0.0.1:8000${product?.image}`}
          />
          </Link>
        </div>
        
        <p className="font-bold xl:text-lg lg:text-sm px-2">{product?.title}</p>
        <hr />
        <div className="text-gray-500 flex items-center gap-x-3 pt-3 px-2">
          <BsFillPersonFill />

          <p>مدرس : {product?.teacher?.name}</p>
        </div>
        <div className="flex justify-between px-2">
          <div className="flex items-center gap-x-3 pt-2">
            <MdOutlineAccessTimeFilled />
            <p> {product?.all_time} ساعت</p>
          </div>
          <div className="pt-2 text-red-600">
            <p>{numberFormat(product?.price)} تومان</p>
          </div>
        </div>

        <div className="flex justify-end  p-2">
          <div className=" p-1 px-2 border-blue-400 rounded-lg  bg-blue-400 text-white  text-sm ">
          <Link href={`/product/${product?.title_url}`}>مشاهده دوره</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default packages;
