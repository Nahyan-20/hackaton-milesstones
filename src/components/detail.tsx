'use client'

import React, { useState } from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa6'
import { IoIosArrowDropdown } from 'react-icons/io';
import { IoHeartOutline, IoHeartSharp } from 'react-icons/io5'
import { RiArrowDownWideLine } from 'react-icons/ri';
import Link from "next/link";

const Detail = () => {
  const [liked, setLiked] = useState<boolean>(false);

  const toggleLike = () => {
    setLiked(prevState => !prevState);
  };

  return (
    <div className='sm:ml-4  sm:px-2'>
      {/* First Section: Car Details and Images */}
      <div className='flex  flex-col sm:flex-row'>
        <div className='max-w-[330px] sm:max-w-[370px]'>
          <div className="grid grid-rows-4 grid-cols-3 gap-1">
            {/* Main Car Image */}
            <div className="col-span-3 row-span-3 bg-[#3563E9] p-4 rounded-[5px] mt-9">
              <h4 className='text-white font-bold text-lg'>
                Sports car with the best <br /> design and acceleration
              </h4>
              <p className='text-[0.8rem] mt-2 text-white'>
                Safety and comfort while driving <br /> a futuristic and elegant sports car
              </p>
              <div className="flex justify-center mt-4">
                <img
                  src="/cae2.png"
                  alt="Sports Car"
                  style={{ width: '240px', height: '110px' }}
                />
              </div>
            </div>

            {/* Additional Car Images */}
            <div className="row-start-4 col-start-1 bg-[#3563E9] rounded-[5px] p-4 h-[88px]  ">
              <img
                src="/Look.png"
                alt="Sports Car"
                className='rounded-[5px]'
                style={{ width: '177px', height: '70px' }}
              />
            </div>
            <div className="row-start-4 col-start-2 rounded-[5px]">
              <img
                src="/e2.png"
                alt="Sports Car"
                className='rounded-[5px]'
                style={{ width: '300px', height: '88px' }}
              />
            </div>
            <div className="row-start-4 col-start-3 rounded-[20px]">
              <img
                src="/e1.png"
                alt="Sports Car"
                className='rounded-[5px]'
                style={{ width: '300px', height: '88px' }}
              />
            </div>
          </div>
        </div>

        {/* Car Information */}
        <div className="w-[300px]  sm:w-[380px] h-[330px]  bg-slate-50 p-4 ml-2 mt-2 sm:mt-10 ">
          <div className="flex justify-between items-center mt-5">
            <h2 className="font-bold text-xl">Nissan GT - R</h2>

            {/* Like Button (Heart) */}
            <p
              className={`text-xl cursor-pointer ${liked ? "text-red-500" : "text-zinc-500"}`}
              onClick={toggleLike}
            >
              {liked ? <IoHeartSharp /> : <IoHeartOutline />}
            </p>
          </div>

          {/* Rating Section */}
          <div className="flex items-center">
            <FaStar className="text-[#FBAD39]" />
            <FaStar className="text-[#FBAD39]" />
            <FaStar className="text-[#FBAD39]" />
            <FaStar className="text-[#FBAD39]" />
            <FaRegStar className="text-[#90A3BF]" />
            <h1 className='ml-2 text-xs text-[#596780]'>440+ Reviewers</h1>
          </div>

          {/* Description */}
          <p className="text-sm text-justify leading-relaxed font-sans w-full m-0 p-0 mt-7">
            NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most
            &nbsp; unforgiving proving ground, the "race track".
          </p>

          {/* Additional Details */}
          <div className='flex justify-between mt-7 text-[0.9rem]'>
            <div>
              <h1 className='text-[#596780]'><span className='text-[#90A3BF] mr-4'>Type Car</span> Sport</h1>
              <h1 className='text-[#596780]'><span className='text-[#90A3BF] mr-4'>Steering</span> Manual</h1>
            </div>
            <div>
              <h1 className='text-[#596780]'><span className='text-[#90A3BF] mr-4'>Capacity</span> 2 Person</h1>
              <h1 className='text-[#596780]'><span className='text-[#90A3BF] mr-4'>Gasoline</span> 70L</h1>
            </div>
          </div>

          {/* Pricing and Button */}
          <div className='flex justify-between items-center mt-2 '>
            <div>
              <h1 className='font-bold'>$80.00/<span className='text-[#90A3BF] text-xs font-normal ml-1'>day</span> </h1>
              <h1 className='line-through text-xs text-[#90A3BF]'>$100.00</h1>
            </div>
            <div className="pb-4 flex justify-end">
            <Link href="/payment">
                  <button className="text-white bg-[#3563E9] px-5 py-3 text-xs rounded-[10px] mt-2 pb-4">
                    Rent Now
                  </button>
             </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="flex mt-11 mr-3">
        <div className="w-full sm:max-w-[750px] max-w-[320px] ">
          <h2 className="text-lg">
            Reviews <span className='text-white bg-[#3563E9] px-4 py-1 text-sm ml-2 rounded-[5px]'>13</span>
          </h2>

          {/* Review 1 */}
          <div className="flex justify-between items-start mt-4">
            <div className="flex items-center">
              <img className="w-12 h-12 rounded-full" src="/headerpic.png" alt="Profile" />
              <div className="ml-3">
                <h1 className="font-bold text-lg mt-1">Alex Stanton</h1>
                <h2 className="text-sm text-gray-500 mt-1">CEO at Bukalapak</h2>
              </div>
            </div>

            <div className="flex flex-col items-end">
              <h2 className="text-sm text-gray-500">21 July 2022</h2>
              <div className="flex mt-1">
                <FaStar className="text-[#FBAD39]" />
                <FaStar className="text-[#FBAD39]" />
                <FaStar className="text-[#FBAD39]" />
                <FaStar className="text-[#FBAD39]" />
                <FaRegStar className="text-[#90A3BF]" />
              </div>
            </div>
          </div>
          <h1 className='ml-14 mt-2 text-xs hidden sm:block'>
            We are very happy with the service from the MORENT App. Morent has a low price and a large variety of cars with good and comfortable facilities. The service provided by the officers is also very friendly and polite.
          </h1>
          <h1 className='ml-14 mt-2 text-xs  sm:hidden'>
            We are very happy with the service from the MORENT App. Morent has a low 
          </h1>
        </div>
      </div>

      {/* Review 2 */}
      <div className="flex mt-2 mr-3">
        <div className="w-full sm:max-w-[750px] max-w-[300px]">
          <div className="flex justify-between items-start mt-4">
            <div className="flex items-center">
              <img className="w-12 h-12 rounded-full" src="/e7.jpg" alt="Profile" />
              <div className="ml-3">
                <h1 className="font-bold text-lg mt-1">Skylar Dias</h1>
                <h2 className="text-sm text-gray-500 mt-1">CEO at Amazon</h2>
              </div>
            </div>

            <div className="flex flex-col items-end">
              <h2 className="text-sm text-gray-500">20 July 2022</h2>
              <div className="flex mt-1">
                <FaStar className="text-[#FBAD39]" />
                <FaStar className="text-[#FBAD39]" />
                <FaStar className="text-[#FBAD39]" />
                <FaStar className="text-[#FBAD39]" />
                <FaRegStar className="text-[#90A3BF]" />
              </div>
            </div>
          </div>
          <h1 className='ml-14 mt-2 text-xs hidden sm:block'>
            We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.
          </h1>
          <h1 className='ml-14 mt-2 text-xs  sm:hidden'>
            We are greatly helped by the services of the MORENT Application. Morent has low prices 
          </h1>
          

        </div>
  
        </div>
        <div className='flex justify-center mt-3 items-center w-full max-w-[650px] text-[#90A3BF]'>
          <h1 className='mr-2'>Show All</h1>
          <RiArrowDownWideLine />
          
         </div>
    </div>
  );
};

export default Detail;
