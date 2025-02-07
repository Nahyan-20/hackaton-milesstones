import Body from "@/components/bodx";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Herotop from "@/components/herotop";
import Link from 'next/link';
import PickupDropup from "@/components/pickdrop";
import Products from "@/components/products";
import Seller from "@/components/products2";

import Image from "next/image";
import TeacherAlert from "@/components/message";

export default function Home() {
  return (
  <div className="bg-slate-100 h-full ">
    <Header/>
     <PickupDropup/>
     <Herotop/>
<Products/>
 <Seller/>

 <div className="relative bg-[#F6F7F9] pt-6 pb-6 h-[140px] flex items-center">
 <TeacherAlert />
  <Link href="/category"> {/* Link to the category page */}
    <button className="absolute left-1/2 transform -translate-x-1/2 text-white bg-[#3563E9] px-5 py-3 rounded-[5px]">
      Show more car
    </button>
  </Link>
  <h1 className="hidden sm:block sm:absolute right-10 pr-5 text-[#90A3BF]">
    120Car
  </h1>
</div>


 <Footer/>
  </div>
  );
}