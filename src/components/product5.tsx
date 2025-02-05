"use client";

import React, { useState } from "react";
import { FaCircleNotch } from "react-icons/fa6";
import { GiGasPump } from "react-icons/gi";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { MdOutlinePeopleAlt } from "react-icons/md";
import Image from "next/image";
import { FaRegDotCircle } from "react-icons/fa";
import Link from "next/link";

// Define the product interface
interface Iproducts {
  title: string;
  title1?: string;
  title2?: string;
  title3?: string;
  title4?: string;
  title5?: string;
  title6?: string;
  title7?: string;
  id: number;
  rating?: string;
  old_price?: number;
  img_url: string;
}

// Example product data
let product: Iproducts[] = [
  {
    title: "All New Rush",
    title1: "SUV",
    id: 1,
    img_url: "/care.png",
    title2: "70L",
    title3: "Manual",
    title4: "6 People",
    title5: "$72.00/",
    title6: "day",
    title7: "$80",
    
  },
  {
    title: "CR  - V",
    title1: "SUV",
    id: 2,
    img_url: "/card.png",
    title2: "80L",
    title3: "Manual",
    title4: "6 People",
    title5: "$80.00/",
    title6: "day",
    
  },
  {
    title: "All New Terios",
    title1: "SUV",
    id: 3,
    img_url: "/cardf.png",
    title2: "90L",
    title3: "Manual",
    title4: "6 People",
    title5: "$74.00/",
    title6: "day",
  },
 
];

// Icons for buttons
let gasstation = <GiGasPump />;
let circle = <FaRegDotCircle />;
let people = <MdOutlinePeopleAlt />;

const Toof = () => {
  // State to track liked status for each product
  const [liked, setLiked] = useState<boolean[]>(Array(product.length).fill(false));

  const toggleLike = (index: number) => {
    const updatedLiked = [...liked];
    updatedLiked[index] = !updatedLiked[index]; // Toggle the liked state for the specific index
    setLiked(updatedLiked);
  };

  return (
    <div className="  space-x-3 space-y-4 bg-slate-200 pb-4 ">
        <div className="flex justify-between">
        <div> <h1 className="w-full h-[44px] pr-3  pl-3 sm:pl-12 pt-6 gap-8 text-xl md:text-2xl text-[#90A3BF]">
         Recomendation Car
      </h1></div>
      <div>
             <button className="w-full h-[44px] pr-3 pt-6 text-normal mr-2 sm:mr-9 text-[#3563E9]">
             View All
            </button>
            </div>

      </div>
      <div className="flex sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mx-auto sm:px-8 pt-10 justify-start items-center overflow-x-auto sm:overflow-visible space-x-4 sm:space-x-0 w-full">

       
       
        {product.map((data, index) => {
          return (
            <div
              key={data.id}
              className="bg-white rounded-[10px]  md:w-[103%] pl-4 pt-6 -space-y-2 shadow-lg"
            >
              {/* Represents individual cards */}
              <div className="flex justify-between items-center">
                <p className="text-xl font-bold">{data.title}</p>
                <p
                  className={`mr-4 text-2xl cursor-pointer  ${
                    liked[index] ? "text-red-500" : "text-zinc-500"
                  }`}
                  onClick={() => toggleLike(index)}
                >
                  {liked[index] ? <IoHeartSharp /> : <IoHeartOutline />}
                </p>
              </div>
              <p className="text-[#90A3BF]">{data.title1}</p>
              <div className="-space-y-3">
                <div className="w-[230px] h-[170px] pt-6 flex justify-start sm:justify-center">
                  <Image src={data.img_url} alt={data.title} width={270} height={19} />
                </div>
                <div className="-space-y-5">
                  <div className="   flex justify-evenly pl-2 items-center  text-[#90A3BF] w-[256px] h-[80px] texl-base pb-12 translate-y-6 sm:-translate-x-4">
                    <div className="flex justify-center gap-6 relative">
                      <p className="absolute right-7 top-1">{gasstation}</p>
                      <p className="">{data.title2}</p>
                    </div>
                    <div className="flex justify-center relative ml-3 sm:ml-0">
                      <p className="absolute right-12 top-1/4 px-2 pl-6">{circle}</p>
                      <p className="pl-3">{data.title3}</p>
                    </div>
                    <div className="flex justify-center relative">
                      <p className="absolute right-14 top-1/4 px-2 pl-6 ">{people}</p>
                      <p className="pl-2">{data.title4}</p>
                    </div>
                  </div>

                  {/* Price div */}
                  <div
                    className={`flex flex-col items-start justify-start ${
                      data.title7 ? "translate-y-5 -space-y-2 " : "translate-y-4 pt-2 pb-2 "
                    }`}
                  >
                    <div className="flex items-center gap-1">
                      <p className="text-xl font-bold translate-x-1">{data.title5}</p>
                      <p className="translate-x-1">{data.title6}</p>
                    </div>

                    {data.title7 && (
                      <p className=" ml-1 text-[#90A3BF] font-bold line-through">
                        {data.title7}
                      </p>
                    )}
                  </div>
                  <div className="pb-4 flex justify-end">
                      <Link href="/detailcar">
                     <button className="text-white bg-[#3563E9] px-5 py-3 rounded-[10px] mr-6 sm:translate-x-4">
                       Rent Now
                      </button>
                     </Link>
                  </div>
                </div>
              </div>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Toof;