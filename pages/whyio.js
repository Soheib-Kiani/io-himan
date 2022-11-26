/* eslint-disable @next/next/no-img-element */
const about = () => {
  return (
    <div className="flex flex-col">
      <section className="flex-col md:flex-row flex md:justify-between md:items-center  container  mx-auto ">
        <div className="w-1/2 h-full object-cover ">
          <img alt="io" className="h-1/2 w-1/2" src="/anim/1.gif" />
        </div>
        <div className="w-1/2 grid place-content-center h-full">
          <p className="text-justify">
            با دوره های آموزشی تمام پروژه محوره سایت IO شما می توانید در کمترین
            زمان ممکن با حداقل هزینه به یک برنامه نویس حرفه ای تبدیل شود. آموزش
            های ما متشکل از حوزه های مختلف در حوزه برنامه نویسی هستش که با
            یادگیری در حوزه مورد علاقه خودتون میتونید به هدفی که می خوایید
            برسید.
          </p>
        </div>
      </section>
      <section className="flex justify-around items-center">
        <div className="w-auto h-auto bg-gray-500 p-12 rounded-xl">
          پشتیبانی رایگان
        </div>
        <div className="w-auto h-auto bg-gray-500 p-12 rounded-xl">
          تضمین کیفیت
        </div>
        <div className="w-auto h-auto bg-gray-500 p-12 rounded-xl">
          پروژه محور
        </div>
        <div className="w-auto h-auto bg-gray-500 p-12 rounded-xl">
          ویدیو باکیفیت
        </div>
      </section>
    </div>
  );
};

export default about;
