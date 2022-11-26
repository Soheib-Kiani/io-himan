/* eslint-disable @next/next/no-img-element */

import { MdLocationPin } from 'react-icons/md';
import { MdTagFaces } from 'react-icons/md';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [posts, setposts] = useState([]);


  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        setposts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="grid grid-cols-2 lg:grid-cols-4 md gap-x-5">
        {posts.map((post) => (
          <div
            key={post.id}
            className="flex justify-center items-center h-screen"
          >
            <div className="border border-[#0AAAA0]   rounded-xl shadow-lg shadow-gray-400">
              <img
                src="/courseimg/img.jpg"
                alt="main"
                className="rounded-t-xl  object-cover w-full"
              />
              <div dir="rtl" className=" w-full flex bg-yellow-200 ">
                <div className=" w-3/4 bg-red-800 flex  justify-center items-center font-vazir ">
                  <h3 className="text-white text-xs">جمع آوری شده</h3>
                </div>
                <div className="h-full  w-2/5 bg-[#1E3042] flex flex-col justify-center items-center font-vazir">
                  <h3 className="text-white text-xs"> 85,110,000 ریال</h3>
                  <h3 className=" text-white text-xs">جمع آوری شده</h3>
                </div>
              </div>

              <div className="">
                <h3 className="text-base h-14 bg-red-500 text-center font-semibold text-black">
                  {' '}
                  {post.title}{' '}
                </h3>
                <div className="h-32 w-full  font-vazir">
                  <h3 className="text-black text-xs  text-right ">
                    <p>show more/less button</p>
                    {' '}

   
                    {post.body}
                    {' '}
                  </h3>
                </div>
                <h3 className="flex font-vazir pb-1 text-xs font-semibold text-[#6C757D] ">
                  خیریه دارالاحسان سنندج
                  <sapn className="text-sm">
                    <MdLocationPin />
                  </sapn>
                </h3>
                <button className="flex justify-center mb-1 items-center font-vazir text-base text-gray-900 h-10 w-full bg-[#FDC61F] rounded-md font-semibold">
                  پایان یافته
                  <span className="">
                    <MdTagFaces />
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
