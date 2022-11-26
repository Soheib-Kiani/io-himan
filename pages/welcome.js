/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';

const welcome = () => {
  return (
    <div dir="rtl" className="w-full font-myfont mb-20  ">
      <div className="grid sm:grid-cols-1 md:grid-cols-2">
        <div className="w-full flex flex-col items-center justify-center lg:pt-12  ">
          <h1 className="font-bold lg:text-4xl xl: text-sm 2xl:text-5xl ">
            دوره های آموزشی پروژه محور IO
          </h1>
          <h2 className="pt-10 xl:text-2xl lg:text-lg ">
            برنامه نویسی رو خیلی راحت و سریع اینجا یادبگیر
          </h2>
          <div className="pt-10">
            <button className="text-blue-400 border-2 border-blue-400 rounded-full py-2 px-9 font-bold text-lg  ">
              مشاهده دوره ها
            </button>
          </div>
        </div>

        <div className=" flex items-center justify-center">
          <img
            className="2xl:h-[600px] 2xl:w-[600px]"
            src={'/homelogo.gif'}
          ></img>
        </div>
      </div>
      <div className=" flex flex-col items-center ">
        <h2 className="font-bold lg:text-2xl xl:text-3xl 2xl:text-4xl  ">
          می خوای توی کدوم حوزه حرفه ای بشی؟
        </h2>
        <h2 className="xl:text-xl lg:text-lg lg:pt-0 xl:pt-4 2xl:text-2xl ">
          تخصص و علاقه تو اینجا پیدا کن و دنبالش کن
        </h2>
      </div>
    </div>
  );
};

export default welcome;
