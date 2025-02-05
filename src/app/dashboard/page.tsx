"use client";

import Header5 from "@/components/header2";
import Link from "next/link";
import React, { useState } from "react";
import Sidebar2 from '@/components/sidenav2'
import Headers from "@/components/header5";

const Fourth = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [townCity, setTownCity] = useState("");

  return (
    <div className="bg-slate-50 h-auto ">
      <Headers />
      <div className="flex  sm:flex-row flex-col gap-1 p-4">
        {/* Div 1 */}
        <div className="bg-slate-600 sm:w-[20%] w-full flex justify-start sm:block "> <Sidebar2/> </div>





        {/* Div 2 */}
        <div className="bg-[#FFFFFF] sm:w-[44%] w-full order-1 p-2">
          <h1 className="text-[#1A202C] font-bold text-xl mt-5">Details Rental</h1>
          <div className="mt-5">
            <img
              src="/Maps.png"
              alt="Map"
              className="w-full sm:h-[280px] h-[285px] rounded-[5px] shadow-lg "
            />
          </div>
          <div className="flex justify-between mt-5 ">
            <div className="flex">
              <img
                src="/Look.png"
                alt="Car"
                className=" rounded-[5px] shadow-lg "
              />
              <div className="ml-4 mt-2">
                <h1 className="font-bold text-lg text-[#1A202C]">Nissan GT - R</h1> <h1 className="text-[#3D5278]">Sport Car</h1>
              </div>
            </div>
            <div>
              <h1 className="text-[#3D5278] mt-10 sm:mt-3">#9761</h1>
            </div>
          </div>

          <div className="mt-5">
            <img
              src="/Pick.png"
              alt="Pickup"
              className="w-[100px] h-[30px]   "
            />
          </div>

          <div className="flex flex-row flex-wrap sm:flex-nowrap gap-4 w-full items-end mt-4">
      {/* Location Input */}
      <div className="flex flex-col w-full sm:w-1/3">
        <label htmlFor="pickup-location" className="text-[#1A202C] text-lg">
          Location
        </label>
        <select
          id="pickup-location"
          className="mt-2 p-2   rounded-[10px] bg-[#F6F7F9] w-full text-xs"
          defaultValue=""
        >
          <option value="" disabled className="text-[#90A3BF]">
            Select your location
          </option>
          <option className="text-[#90A3BF]" value="Location 1">Location 1</option>
          <option className="text-[#90A3BF]" value="Location 2">Location 2</option>
        </select>
      </div>
      {/* Date Input */}
      <div className="flex flex-col w-full sm:w-1/3">
        <label htmlFor="pickup-date" className="text-black text-lg">
          Date
        </label>
        <input
          type="date"
          id="pickup-date"
          className="mt-2 p-2  rounded-[10px] bg-[#F6F7F9] w-full text-xs"
        />
      </div>
      
      {/* Time Input */}
      <div className="flex flex-col w-full sm:w-1/3">
        <label htmlFor="pickup-time" className="text-black text-lg">
          Time
        </label>
        <select
          id="pickup-time"
          className="mt-2 p-2 rounded-[10px] bg-[#F6F7F9] w-full text-xs"
          defaultValue=""
        >
          <option value="" disabled>
            Select your time
          </option>
          {[
            '06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM',
            '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM',
            '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM'
          ].map((time, index) => (
            <option key={index} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>
    </div>

          <div className="mt-4">
            <img
              src="/Drop.png"
              alt="Pickup"
              className="w-[100px] h-[30px] "
            />
          </div>

          <div className="flex flex-row flex-wrap sm:flex-nowrap gap-4 w-full items-end mt-4">
      {/* Location Input */}
      <div className="flex flex-col w-full sm:w-1/3">
        <label htmlFor="pickup-location" className="text-[#1A202C] text-lg">
          Location
        </label>
        <select
          id="pickup-location"
          className="mt-2 p-2  rounded-[10px] bg-[#F6F7F9] w-full text-xs"
          defaultValue=""
        >
          <option value="" disabled className="text-[#90A3BF]">
            Select your location
          </option>
          <option className="text-[#90A3BF]" value="Location 1">Location 1</option>
          <option className="text-[#90A3BF]" value="Location 2">Location 2</option>
        </select>
      </div>
      {/* Date Input */}
      <div className="flex flex-col w-full sm:w-1/3">
        <label htmlFor="pickup-date" className="text-black text-lg">
          Date
        </label>
        <input
          type="date"
          id="pickup-date"
          className="mt-2 p-2  rounded-[10px] bg-[#F6F7F9] w-full text-xs"
        />
      </div>
      
      {/* Time Input */}
      <div className="flex flex-col w-full sm:w-1/3">
        <label htmlFor="pickup-time" className="text-black text-lg">
          Time
        </label>
        <select
          id="pickup-time"
          className="mt-2 p-2  rounded-[10px] bg-[#F6F7F9] w-full text-xs"
          defaultValue=""
        >
          <option value="" disabled>
            Select your time
          </option>
          {[
            '06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM',
            '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM',
            '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM'
          ].map((time, index) => (
            <option key={index} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>
    </div>  
    <div className='flex justify-between px-3  mt-16'>
            <div className=''>
              <h1 className='font-bold text-lg text-[#1A202C]'> Total Rental Price</h1>
              <h1 className='text-xs text-[#90A3BF] hidden sm:block'>Overall price and includes rental discount</h1>
              <h1 className='text-xs text-[#90A3BF] sm:block'>Overall price rental</h1>
            </div>

            <div>
              <h1 className='text-[#1A202C] text-3xl sm:text-4xl leading-[3rem]  h-16  sm:mt-2'>$80.00</h1>
            </div>
          </div>


          </div>
       

        {/* Div 3 */}
        <div className="bg-white sm:w-[39%] h-[900px] w-full order-2 p-2  ">
            <div className="flex justify-between mt-7"> 
              <div><h1 className="font-bold text-black text-lg">Top 5 Car Rental </h1></div>
                <div><img
              src="/more.png"
              alt="Map"
              className="w-7 h-7  rounded-[5px] shadow-lg mr-4"
            /> </div>


            

            </div>
         
            <div className="flex flex-col sm:flex-row mt-11">

            <div className="relative sm:w-[180px] w-full max-h-[230px]  sm:max-h-[180px] flex flex-col items-center justify-center  mb-10 sm:mb-0">
                  <img
                    src="/Chart.png"
                    alt="Map"
                    className="w-[230px] h-[230px] object-cover"
                  />
                  <div className="absolute flex flex-col items-center"> {/* Flexbox for text */}
                    <h1 className="text-[#1A202C] font-bold text-2xl">72,030</h1>
                    <h1 className="text-[#90A3BF] font-bold text-xs">Rental Car</h1>
                  </div>
                </div>
                  <div className="flex justify-between ml-5 "> 
                    <div className="space-y-4"> 
                      <div className="flex "><div className="rounded-full w-2 h-2 mt-2 mr-2 bg-[#0D3559]" ></div><h1 className="text-[#90A3BF]" >  Sport Car</h1></div>
                      <div className="flex"><div className="rounded-full w-2 h-2 mt-2 mr-2 bg-[#175D9C]"></div><h1  className="text-[#90A3BF]" >  SUV</h1></div>
                      <div className="flex"><div className="rounded-full w-2 h-2 mt-2 mr-2 bg-[#2185DE]"></div><h1 className="text-[#90A3BF]" >  Coupe</h1></div>
                      <div className="flex"><div className="rounded-full w-2 h-2 mt-2 mr-2 bg-[#63A9E8]"></div><h1 className="text-[#90A3BF]" >  Hatchback</h1></div>
                      <div className="flex"><div className="rounded-full w-2 h-2 mt-2 mr-2 bg-[#A6CEF2]"></div><h1  className="text-[#90A3BF]" >  MPV</h1></div>


                    </div>


                    <div className="text-right text-[#1A202C] space-y-4 ml-11"> <h1>17,439</h1>
                     <h1>9,478</h1>
                     <h1>18,197</h1>  <h1>12,510</h1>  <h1>14,406</h1>      
                    </div>
                    
                    
                     </div>                 
              </div>

              <div className="flex  justify-between mt-16"><h1 className="text-[#1A202C] font-bold text-lg">Recent Transaction</h1> <h1 className="text-[#3563E9] mr-4">View All</h1></div>


              <div className="flex justify-between mt-16 h-[450px] sm:h-auto">
                 <div className="space-y-9">  
                  <div className="flex"><div> <img src="/cara.png" alt="Descriptive text" className="sm:w-[150px] w-[100px] h-[73px] sm:h-[75px]"/></div> <div className="mt-5  ml-2 sm:ml-0"><h1 className="font-bold text-[#1A202C] ">Nissan GT - R</h1><h1 className="text-[#90A3BF] text-sm">Sport Car</h1> </div></div>
                  <div className="flex"><div> <img src="/carb.png" alt="Descriptive text" className="sm:w-[150px] w-[100px] h-[73px] sm:h-[75px]"/></div> <div className="mt-5 ml-2 sm:ml-0"><h1 className="font-bold text-[#1A202C] ">Koegnigsegg</h1><h1 className="text-[#90A3BF] text-sm">Sport Car</h1> </div></div>
                  <div className="flex"><div> <img src="/carc.png" alt="Descriptive text" className="sm:w-[150px] w-[100px] h-[73px] sm:h-[75px]"/></div> <div className="mt-5 ml-2 sm:ml-0"><h1 className="font-bold text-[#1A202C] ">Rolls - Royce</h1><h1 className="text-[#90A3BF] text-sm">Sport Car</h1> </div></div>
                  <div className="flex"><div> <img src="/card.png" alt="Descriptive text" className="sm:w-[150px] w-[100px] h-[73px] sm:h-[75px]"/></div> <div className="mt-5 ml-2 sm:ml-0"><h1 className="font-bold text-[#1A202C] ">CR - V</h1><h1 className="text-[#90A3BF] text-sm">SUV</h1> </div></div>
                 </div>


                 <div className="space-y-16 text-right mr-4 ">
                      <div  className="mt-2 mb-2"><h1 className="text-xs text-[#90A3BF]">20 July</h1><h1 className="font-[500] text-[$96.00] text-lg">$80.00</h1></div>
                      <div ><h1 className="text-xs text-[#90A3BF]">19 July</h1><h1 className="font-[500] text-[$96.00] text-lg">$99.00</h1></div>
                      <div ><h1 className="text-xs text-[#90A3BF]">18 July</h1><h1 className="font-[500] text-[$96.00] text-lg">$96.00</h1></div>
                      <div ><h1 className="text-xs text-[#90A3BF]">17 July</h1><h1 className="font-[500] text-[$96.00] text-lg">$80.00</h1></div>
                 </div> 
              </div>


        </div>
     



      </div>
    </div>
  );
};

export default Fourth;
