import Footer from '@/components/footer';
import Seller from '@/components/products2';
import Fool from '@/components/products3';
import Sidebar from '@/components/sidenav';
import React from 'react';
import PickupDropup from '@/components/pickdrop';
import Header2 from '@/components/header2';
import PickDropComponent2 from '@/components/pickupdrop2';
import Link from 'next/link';

const First = () => {
  return (
    <div className="grid grid-cols-4 bg-slate-200 "> {/* Main grid container */}
      <div className="col-span-4"> 
        <Header2 />
      </div>

      <div className="sm:col-span-1"> 
        <Sidebar />
        
      </div>

      <div className="col-span-4 md:col-span-3 px-2">
        <div className="">
        <PickDropComponent2/>
        </div>
        
        <Fool />
        <div className=" bg-slate-200 pt-6 pb-6 h-[140px] flex items-center">
  <Link href="/detailcar"> {/* Link to the category page */}
    <button className="absolute left-1/2 transform -translate-x-1/2 text-white bg-[#3563E9] px-5 py-3 rounded-[5px]">
      Show more car
    </button>
  </Link>
  <h1 className="hidden sm:block sm:absolute right-10 pr-5 text-[#90A3BF]">
    120Car
  </h1>
</div>

      </div>

      <div className="col-span-4 mt-8"> 
        <Footer />
      </div>
    </div>
  );
};

export default First;