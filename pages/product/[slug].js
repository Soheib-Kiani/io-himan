/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import { BiTime } from 'react-icons/bi';
import { MdPersonOutline } from 'react-icons/md';
import { CiHeadphones } from 'react-icons/ci';
import { BsPhone } from 'react-icons/bs';
import { HiLockOpen } from 'react-icons/hi';
import { HiLockClosed } from 'react-icons/hi';
import { useState } from 'react';
import { numberFormat } from '../../lib/helper';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/cart/action';
import toast from 'react-hot-toast';
import { IoIosTime } from 'react-icons/io';
import { BsPersonFill } from 'react-icons/bs';

const test = ({ data }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(removeFromCart(data.id));
    dispatch(addToCart(data));
    toast.success('محصول با موفقیت اضافه شد');
    router.push('/cart');
  };

  return (
    <>
      {
        <div key={data.id}>
          <div dir="rtl" className="font-myfont  my-5 ">
            {/* /////////////////////////////////////////////////////////////////////////////////////// */}
            <div className="w-full  text-gray-700 flex justify-center font-bold text-3xl">
              {data.title}
            </div>
            {/* ///////////////////////////////////////////////////////////////////////////////// video */}
            <div className="w-full   flex ">
              <div className="w-[60%] flex items-center justify-center ">
                <video
                  controls
                  type="video/mp4"
                  className="h-[80%] rounded-2xl"
                >
                  <source src={`http://127.0.0.1:8000${data.video_sample}`} />
                </video>
              </div>
              {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// description video*/}
              <div className="flex items-center w-[40%]   justify-center   ">
                <div className="  bg-white shadow-sm shadow-gray-300 rounded-lg    xl:text-xl lg:text-sm 2xl:h-[50%] lg:h-[73%]  2xl:w-[45%] lg:w-[57%] ">
                  <div className="h-[60%]    ">
                    <div className="w-full h-[30%]   flex items-center justify-center ">
                      <button className="bg-cyan-600 xl:px-7 lg:px-10 rounded-md text-white xl:text-lg lg:text-sm ">
                        اطلاعات دوره
                      </button>
                    </div>
                    <div className=" h-[70%] flex w-full pt-1    ">
                      {/* ////////////////////////////////////////////////////////////////////////////////////////////// */}
                      <div className="w-[33%]  ">
                        <div className="h-[40%]  flex items-center justify-center ">
                          <div className="bg-white xl:p-4 lg:p-3 rounded-full border border-gray-300">
                            <BsPersonFill />
                          </div>
                        </div>

                        <div className="h-[60%]  flex flex-col items-center justify-start pt-2">
                          <p className="text-xs font-bold ">مدرس دوره</p>
                          <p className="text-xs pt-2">{data.teacher.name}</p>
                        </div>
                      </div>

                      {/* /////////////////////////////////////////////////////////////////////////////////////////////// */}

                      <div className="w-[33%]  ">
                        <div className="h-[40%]  flex items-center justify-center ">
                          <div className="bg-white xl:p-4 lg:p-3 rounded-full border border-gray-300">
                            <IoIosTime />
                          </div>
                        </div>

                        <div className="h-[60%]  flex flex-col items-center justify-start pt-2">
                          <p className="text-xs font-bold ">مدت دوره</p>
                          <p className="text-xs pt-2">{data.all_time} ساعت</p>
                        </div>
                      </div>
                      {/* ///////////////////////////////////////////////////////////////////////////////////////// */}
                      <div className="w-[33%]  ">
                        <div className="h-[40%]  flex items-center justify-center ">
                          <div className="bg-white xl:p-4 lg:p-3 rounded-full border border-gray-300">
                            <BsPhone />
                          </div>
                        </div>

                        <div className="h-[60%]  flex flex-col items-center justify-start pt-2">
                          <p className="text-xs font-bold ">پشتیبانی</p>
                          <p className="text-xs pt-2">رایگان</p>
                        </div>
                      </div>
                      {/* //////////////////////////////////////////////////////////////////// */}
                    </div>
                  </div>

                  <div className="h-[40%] px-2 pt-2 ">
                    <div className="h-[50%]  w-full  ">
                      <div className="flex justify-between">
                        <p className="xl:text-base lg:text-xs">قیمت دوره</p>
                        <p className="xl:text-lg lg:text-xs text-red-700">
                          {data.price}
                          <span className="text-xs px-1">تومان</span>
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <p className="xl:text-base lg:text-xs">تخفیف</p>
                        <p className="xl:text-lg lg:text-xs ">
                          20<span className="text-sm px-1">درصد</span>
                        </p>
                      </div>
                    </div>
                    <div className="h-[50%]  flex items-end justify-center pb-2 ">
                      <button onClick={handleAddToCart} className="bg-cyan-600 w-full py-1 rounded-md text-white xl:text-lg lg:text-sm ">
                        ثبت نام دوره
                      </button>
                    </div>
                  </div>

                  {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                </div>
              </div>
            </div>
            {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////ویژگی های دوره */}
            <div className=" w-full  ">
              <div className="w-[70%]  mx-[6%]">
                <h2 className="pb-5 xl:text-3xl font-bold text-black">
                  {' '}
                  ویژگی های دوره
                </h2>

                <div className="px-2 ">
                  {data.description.map((element, index) => (
                    <div key={index}>
                      <p className="text-lg font-bold pb-4">{element.title}</p>

                      <p className="text-lg pb-3">{element.description}</p>
                      <hr className="pt-10"></hr>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <div className=" w-full  ">
              <div className=" w-[70%]  mx-[6%] my-[3%]  ">
                <h2 className="pb-5 xl:text-3xl font-bold text-black">
                  {' '}
                  سرفصل ها
                </h2>
                {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////collapsibale */}
                <div className=" w-full drop-shadow-none rounded-md">
                  {data.parts.map((element, index) => (
                    <details
                      key={index}
                      onClick={() => setOpen(!open)}
                      className={`${
                        open
                          ? 'duration-1000 '
                          : ' bg-white px-2  open:bg-white  duration-300 '
                      }`}
                    >
                      <summary className="bg-cyan-600 px-5  text-white text-lg cursor-pointer rounded-full py-3 my-5 ">
                        {element.Part_title}
                      </summary>
                      <div className="bg-white px-5 py-3  text-sm font-light ">
                        <div className="flex  w-full ">
                          <div className="w-[70%]     ">
                            <div className="flex items-center py-5 ">
                              {/* ///////////////////////////////////////////////////////////////////////////اصلی */}
                              <p className="text-lg">
                                1 <span>.</span>
                              </p>
                              <p className="text-lg px-3">
                                {element.video.map((er, index) => (
                                  <span key={index}>{er.video_title}</span>
                                ))}
                              </p>
                            </div>
                          </div>
                          {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
                          <div className="w-[30%]  ">
                            <div className="flex items-center justify-end py-5 gap-x-3">
                              <p className="text-lg">
                                {element.video.map((er, index) => (
                                  <span key={index}>{er.video_time}دقیقه</span>
                                ))}
                              </p>
                              <HiLockClosed />
                            </div>
                          </div>
                        </div>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </div>
            {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////سوالات متداول */}
            <div className=" w-full  ">
              <div className="w-[70%]  mx-[6%] my-[3%]">
                {/* <h2 className="pb-5 xl:text-3xl font-bold text-black">
                  {' '}
                  سوالات متداول{' '}
                </h2> */}
                {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////collapsibale */}
                {/* <div className="  w-full drop-shadow-none rounded-md">
                  <details className="bg-white px-2  open:bg-white  duration-300 ">
                    <summary className="bg-inherit px-5  text-lg cursor-pointer">
                      آیا این دوره اپدیت دارد؟
                    </summary>
                    <div className="bg-white px-5 py-3  text-sm font-light ">
                      <div className="flex  w-full ">
                        <div className="w-[100%]     ">
                          <div className="flex items-center  ">
                            

                            <p className="text-sm px-10">
                              اره اره اره هسییییییییییی
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </details>
                </div> */}
              </div>
            </div>
            {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////نظرات */}
           
          </div>
        </div>
      }
    </>
  );
};

export default test;

export async function getServerSideProps({ query }) {
  const res = await fetch(
    `http://127.0.0.1:8000/toturials/get_toturial_by_title_url/${query.slug}`
  );
  const product = await res.json();
  let data;
  {
    product.map((soheib) => {
      data = soheib;
    });
  }
  return { props: { data } };
}
