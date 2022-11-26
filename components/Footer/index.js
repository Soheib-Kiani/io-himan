/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
const footer = () => {
    return (
        <div dir="rtl" className="font-myfont  w-full">
        <div className="grid grid-cols-5 bg-[#f1f1f1] py-[2%] ">
          <div className="xl:px-10 lg:px-5">
            <p className="font-bold pb-3 xl:text-xl lg:text-lg">گروه آموزشی IO</p>
            <p className="xl:text-justify xl:text-sm lg:text-xs">تیم IO  متشکل از افرادی توانمند در زمینه های UI/UX، طراحی وب سایت، با زبان های برنامه نویسی React.js . Next.js، طراحی اپلیکیشن با Flutter، حوزه بک اند .Net، و Django، و همچنین فعال در حوزه برنامه نویسی Blackchain هستش</p>
          </div>
          <div className="xl:px-10 lg:px-5 ">
            <p className="font-bold pb-3 xl:text-xl lg:text-lg ">آموزش بک اند</p>
            <p className=" xl:text-sm lg:text-xs">آموزش زبان برنامه نویسی Python</p>
            <p className=" xl:text-sm lg:text-xs">آموزش فریم ورک django </p>
            <p className=" xl:text-sm lg:text-xs">آموزش زبان برنامه نویسی Asp.net </p>
          </div>
          <div className="xl:px-10 lg:px-5 ">
            <p className="font-bold pb-3 xl:text-xl lg:text-lg ">آموزش فرانت اند</p>
            <p className=" xl:text-sm lg:text-xs">آموزش Html-Css</p>
            <p className=" xl:text-sm lg:text-xs">آموزش فریم ورک Next.js </p>
            <p className=" xl:text-sm lg:text-xs">آموزش فریم ورک Tailwind</p>
            <p className=" xl:text-sm lg:text-xs">آموزش زبان برنامه نویسی Flutter </p>
          </div>
          <div className="xl:px-10 lg:px-5 ">
            <p className="font-bold pb-3 xl:text-xl lg:text-lg ">آموزشUI/UX</p>
            <p className=" xl:text-sm lg:text-xs">آموزش Figma</p>
            <p className=" xl:text-sm lg:text-xs">آموزشAdobe XD</p>
           
          </div>
          <div className="flex items-center justify-center gap-x-5 ">
              <img className="h-5 w-5" src="/footericon/github.png"></img>
              <img className="h-5 w-5" src="/footericon/youtube.png"></img>
              <img className="h-5 w-5" src="/footericon/instagram.png"></img>
              <img className="h-5 w-5" src="/footericon/linkedin.png"></img>
              </div>
        </div>
        
      </div>
    );
}

export default footer;