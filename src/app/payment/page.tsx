"use client";

import Header3 from '@/components/header3';
import React, { useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { Plus_Jakarta_Sans } from '@next/font/google';
import Footer from '@/components/footer';
import { BiBullseye } from 'react-icons/bi';
import Link from 'next/link';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const Third = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [townCity, setTownCity] = useState('');

  return (
    <div >
      <Header3 />
      <div className="flex flex-col md:flex-row gap-1 bg-slate-200 ">
        {/* Billing Info */}
        <div className="bg-[#FFFFFF] p-4  sm:w-[63%] w-full order-2 md:order-1 px-9">
          <div className="flex justify-between">
            <div className="-space-y-1">
              <h1 className="text-[#1A202C] font-bold text-lg">Billing Info</h1>
              <h1 className="text-[#90A3BF] text-sm">Please enter your billing info</h1>
            </div>
            <div className="mt-4 text-[#90A3BF]">Step 1 of 4</div>
          </div>

          <div className="mt-5">
            <div className="flex flex-col sm:flex-row px-2 sm:px-0">
              <div className="">
                <h1 className="text-[#1A202C] -translate-y-2">Name</h1>
                <input
                  type="text"
                  placeholder="Your name"
                  className="sm:w-[80%] w-[90%] mt-4 px-3 py-2 border bg-[#F6F7F9] border-gray-300 rounded-[10px]
                     focus:outline-none focus:ring-2 focus:ring-blue-500 text-black
                     placeholder:text-sm ml-3"
                />
              </div>
              <div className="sm:ml-20  mt-9 sm:mt-0">
                <h1 className="text-[#1A202C] -translate-y-2">Phone Number</h1>
                <input
                  type="text"
                  placeholder="Phone number"
                  className="sm:w-[80%] w-[90%] bg-[#F6F7F9] mt-4 px-3 py-2 border border-gray-300 rounded-[10px]
                     focus:outline-none focus:ring-2 focus:ring-blue-500 text-black
                     placeholder:text-sm ml-3"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>

            <div className="mt-16">
              <div className="flex flex-col sm:flex-row px-2 sm:px-0">
                <div className="">
                  <h1 className="text-[#1A202C] -translate-y-2">Address</h1>
                  <input
                    type="text"
                    placeholder="Address"
                    className="sm:w-[80%] w-[90%] mt-4 px-3 py-2 border border-gray-300 rounded-[10px]
                     focus:outline-none focus:ring-2 focus:ring-blue-500 text-black
                     placeholder:text-sm ml-3 bg-[#F6F7F9]"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className="sm:ml-20 mt-9 sm:mt-0">
                  <h1 className="text-[#1A202C] -translate-y-2">Town / City</h1>
                  <input
                    type="text"
                    placeholder="Town or city"
                    className="sm:w-[80%] w-[90%] mt-4 px-3 py-2 border border-gray-300 rounded-[10px]
                     focus:outline-none focus:ring-2 focus:ring-blue-500 text-black
                     placeholder:text-sm ml-3 bg-[#F6F7F9]"
                    value={townCity}
                    onChange={(e) => setTownCity(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-16">
            <div className="-space-y-1">
              <h1 className="text-[#1A202C] font-bold text-lg">Rental Info</h1>
              <h1 className="text-[#90A3BF] text-sm">Please select your rental date</h1>
            </div>
            <div className="mt-4 text-[#90A3BF]">Step 2 of 4</div>
          </div>

          <div className="flex mt-7">
          <img src="/Pick.png" alt="Visa Logo" className="w-[100px] " /> 
          </div>

          <div className="mt-5 px-2">
            <div className="flex flex-col sm:flex-row items-center  w-full sm:mr-5">
              {/* Location,time  and Date Inputs  */}
              <div className="flex flex-col  w-[95%] sm:w-[35%] sm:mr-6">
                <label htmlFor="pickup-location" className="text-[#1A202C] text-lg">
                  Locations
                </label>
                <select
                  id="pickup-location"
                  className="mt-6 p-2 border border-gray-300 rounded-[10px] max-w-full ml-3 w-[76%] bg-[#F6F7F9]"
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                >
                  <option value="" disabled className="text-[#90A3BF]">
                    Select your location
                  </option>
                  <option className="text-[#90A3BF]">Location 1</option>
                  <option className="text-[#90A3BF]">Location 2</option>
                </select>
              </div>

              {/* Date Input */}
              <div className="flex flex-col w-[78%] sm:w-[30%] mr-11 mt-7 sm:ml-10 mb-4">
                <label htmlFor="pickup-date" className="text-black  mt-2 mb-4">
                  Date
                </label>
                <input
                  type="date"
                  id="pickup-date"
                  className="mt-2 p-2 border border-gray-300 rounded-[10px] max-w-full ml-3 sm:mb-3  bg-[#F6F7F9]"
                />
              </div>
              {/* TimE Input */}
            </div>
            <div className="flex flex-col sm:w-[29%]  w-[80%] mt-4">
                  <label htmlFor="pickup-time" className="text-black  mt-2 mb-4">
                  Time
                </label>
                <select
                 id="pickup-time"
                 className="mt-2 p-2 border border-gray-300 rounded-[10px] max-w-full ml-3 mb-1 bg-[#F6F7F9]"
                defaultValue=""
                   >
                    <option value="" disabled>
                    Select your time
                  </option>
                  {['06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM'].map((time, index) => (
                  <option key={index} value={time}>
                   {time}
                      </option>
                       ))}
                   </select>
                    </div>
                  
                  
          </div>


          <div className="flex mt-7">
          <img src="/Drop.png" alt="pickup" className="w-[110px] " /> 
          </div>

          <div className="mt-5 px-2">
            <div className="flex flex-col sm:flex-row items-center  w-full sm:mr-5">
              {/* Location and Date Inputs Separated */}
              <div className="flex flex-col  w-[95%] sm:w-[35%] sm:mr-6">
                <label htmlFor="pickup-location" className="text-black ">
                  Locations
                </label>
                <select
                  id="pickup-location"
                  className="mt-6 p-2 border border-gray-300 rounded-[10px] max-w-full ml-3 w-[76%] bg-[#F6F7F9]"
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                >
                  <option value="" disabled className="text-[#90A3BF]">
                    Select your location
                  </option>
                  <option className="text-[#90A3BF]">Location 1</option>
                  <option className="text-[#90A3BF]">Location 2</option>
                </select>
              </div>

              {/* Date Input */}
              <div className="flex flex-col w-[78%] sm:w-[30%] mr-11 mt-7 sm:ml-10 mb-4">
                <label htmlFor="pickup-date" className="text-black  mt-2 mb-4">
                  Date
                </label>
                <input
                  type="date"
                  id="pickup-date"
                  className="mt-2 p-2 border border-gray-300 rounded-[10px] max-w-full ml-3 mb-1 bg-[#F6F7F9] "
                />
              </div>
                {/* time Input */}
            </div>
            <div className="flex flex-col sm:w-[29%]  w-[80%] mt-4">
                  <label htmlFor="pickup-time" className="text-black mt-2 mb-4">
                  Time
                </label>
                <select
                 id="pickup-time"
                 className="mt-2 p-2 border border-gray-300 rounded-[10px] max-w-full ml-3 mb-1 bg-[#F6F7F9]"
                defaultValue=""
                   >
                    <option value="" disabled>
                    Select your time
                  </option>
                  {['06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM'].map((time, index) => (
                  <option key={index} value={time}>
                   {time}
                      </option>
                       ))}
                   </select>
                    </div>


                       {/*Payment Method */}
                  </div>
                      <div className="flex justify-between mt-8">
                    <div className="sm:-space-y-1">
                      <h1 className="text-[#1A202C] font-bold text-lg">Payment Method</h1>
                       <h1 className="text-[#90A3BF] text-[10px] sm:text-sm">Please enter your payment method</h1>
                    </div>
                       <div className="mt-2 text-[#90A3BF]">Step 3 of 4</div>                  
                    </div>


                    <div className='px-5 flex justify-between mt-5'>
                          <div >  <img src="/credit.png" alt="Visa Logo" className="w-[120px] h-[25px]" />
                           </div>
                          <div className='flex'> <img src="/Visa.png" alt="Visa Logo" className="sm:w-8 w-10 h-5 sm:h-4" />
                          <img src="/mc.png" alt="Visa Logo" className="sm:w-8 w-10 h-5 sm:h-4 ml-2" /> </div>                         
                           </div> 

                         <div className='mt-6'>  <div className="flex sm:flex-row flex-col">
              <div className="mt-7">
                <h1 className="text-[#1A202C] -translate-y-2">Card Number</h1>
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-[80%] mt-4 px-3 py-2 border border-gray-300 rounded-[10px]
                     focus:outline-none focus:ring-2 focus:ring-blue-500 text-black
                     placeholder:text-sm ml-3 bg-[#F6F7F9]"
                />
              </div>
              <div className="sm:ml-24 mt-7">
                <h1 className="text-[#1A202C] -translate-y-2">Expration Date</h1>
                <input
                  type="date"
                  id="pickup-date"
                  className="mt-4 sm:w-[100%] w-[80%] first-line: p-2 border bg-[#F6F7F9] border-gray-300 rounded-[10px] max-w-full ml-3 mb-1 "
                />
              </div>
            </div></div>
              <div className='mt-11'>
            <div className="flex flex-col sm:flex-row ">
                <div className="">
                  <h1 className="text-[#1A202C] -translate-y-2">Card Holder</h1>
                  <input
                    type="text"
                    placeholder="Card Holder"
                    className="w-[80%] mt-4 px-3 py-2 border border-gray-300 rounded-[10px]
                     focus:outline-none focus:ring-2 focus:ring-blue-500 text-black
                     placeholder:text-sm ml-3 bg-[#F6F7F9]"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className="sm:ml-24 mt-7">
                    <h1 className="text-[#1A202C] -translate-y-2">CVC</h1>
                      <input
                    type="text"
                  placeholder="CVC"
                     maxLength={3}  
                 pattern="[A-Za-z]{3}"
                    title="Enter exactly three letters"
                 className="w-[80%] mt-4 px-3 py-2 border border-gray-300 rounded-[10px]
                        focus:outline-none focus:ring-2 focus:ring-blue-500 text-black
                        placeholder:text-sm ml-3 bg-[#F6F7F9]"
                   />
                        </div>

                               </div>  </div>

                       
                               <div className='mt-11 flex justify-between px-4'>
                                  <div>
                         <label>
                  <input type="radio" name="option" value="option1" style={{ transform: 'scale(1.6)' }} className='mr-4 text-xl' />
               <span className='text-[#1A202C] text-lg'>PayPal</span>
             </label>
                         </div>
           <div>
                <img src="/PayPal.png" alt="PayPal Logo" className="w-[70px] h-[23px] sm:mr-8 mt-1" />
                   </div>
              </div>

                  <div className='mt-5 flex justify-between px-4'>
                      <div>
                     <label>
                     <input type="radio" name="option" value="option2" style={{ transform: 'scale(1.6)' }} className='mr-4 text-xl' />
                  <span className='text-[#1A202C] text-lg'>Bitcoin</span>
                      </label>
                            </div>
                       <div>
                       <img src="/Bitcoin.png" alt="Bitcoin Logo" className="w-[70px] h-[20px] sm:mr-8 mt-1" />
                   </div>
                      </div>
                        

                     <div className="flex justify-between mt-8">
                    <div className="sm:-space-y-1">
                      <h1 className="text-[#1A202C] font-bold text-lg">Confirmation</h1>
                     
                       <h1 className="text-[#90A3BF] text-[10px] sm:text-xs hidden sm:block">We are getting to the end. Just few clicks and your rental is ready!</h1>
                       <h1 className="text-[#90A3BF] text-[10px] sm:text-xs sm:hidden">We are getting to the end. Just few <br />clicks and your rental is ready!</h1>
                    </div>


                       <div className="mt-0 sm:mt-2 text-[#90A3BF]">Step 4 of 4</div>                  
                    </div>
                               


                               <div className='px-4 mt-9 space-y-7'>
                               <form>
                            <label>
                     <input type="checkbox" name="subscribe" value="newsletter" className='transform scale-150'/>
                 <span className='text-sm ml-4'>I agree with sending an Marketing and newsletter emails. No spam, promissed!</span>
                   </label>
                 </form>

                   <form> 
                      <label>
                       <input type="checkbox" name="subscribe" value="newsletter" className='transform scale-150'/>
                         <span className='text-sm ml-4'>I agree with our terms and conditions and privacy policy.</span>
                        </label>
                    </form>





                               </div>
                     <div><Link href="/dashboard">
                  <button className="text-white bg-[#3563E9] px-6 py-3 text-xs rounded-[10px] mt-9 pb-4">
                    Rent Now
                  </button>
             </Link></div>

                   <div className='mt-9'>
                    <img src="/safety.png" alt="Bitcoin Logo" className="w-[30px] h-[25px] mr-8 mt-1"/>
                    <h1 className='mt-3 text-sm text-[#1A202C]'>All your data are safe</h1>
                        <h1 className='text-xs mt-1 mb-5 text-[#90A3BF]'>We are using the most advanced security to provide you the best experience ever.</h1>
              </div>
                         </div>
      


        {/* Rental Summary */}
        <div className="p-4 text-white md:w-[37%] w-full order-1 md:order-2 bg-[#FFFFFF]">
          <h4 className={`px-3 text-black font-bold ${plusJakartaSans.className} text-lg`}>
            Rental Summary
          </h4>
          <h1 className="px-3 text-[#90A3BF] text-xs">
            Prices may change depending on the length of the rental and the price of your rental car.
          </h1>

          <div className="flex mt-8 px-3">
            <div className="row-start-4 col-start-1 bg-[#3563E9] rounded-[5px] p-4 h-[105px] w-[150px] flex justify-center items-center">
              <img
                src="/cae2.png"
                alt="Sports Car"
                className="rounded-[5px]"
                style={{ width: '120px', height: '70px', padding: '1px' }}
              />
            </div>

            <div className="ml-2 mt-7">
              <h2 className="font-bold text-xl text-black">Nissan GT - R</h2>
              <div className="flex items-center">
                <FaStar className="text-[#FBAD39]" />
                <FaStar className="text-[#FBAD39]" />
                <FaStar className="text-[#FBAD39]" />
                <FaStar className="text-[#FBAD39]" />
                <FaRegStar className="text-[#90A3BF]" />
                <h1 className="ml-2 text-xs text-[#596780]">440+ Reviewers</h1>
              </div>
            </div>
          </div>

          <div className='flex justify-between px-3 mt-14'>
            <h1 className='text-[#90A3BF]'>Subtotal</h1>
            <h1 className='text-black'>$80.00</h1>
          </div>
          <div className='flex justify-between px-3 mt-5'>
            <h1 className='text-[#90A3BF]'>Tax</h1>
            <h1 className='text-black'>$0</h1>
          </div>
          <div className='flex justify-center mt-5'>
            <input
              type="text"
              placeholder="Apply promo code"
              className="w-[65%] mt-4 px-3 py-2 border  rounded-[10px]
             focus:outline-none focus:ring-2 focus:ring-blue-500 text-black
             placeholder:text-sm"
            />
            <button className='mt-2 font-serif text-[#1A202C] ml-1'> Apply now</button>
          </div>

          <div className='flex justify-between px-3 mt-11 sm:mt-4'>
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
        
      </div>

      <Footer />
    </div>
  );
};

export default Third;