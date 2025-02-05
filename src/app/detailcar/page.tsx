import Detail from '@/components/detail'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Header2 from '@/components/header2'
import Tool from '@/components/product4'
import Toof from '@/components/product5'
import Fool from '@/components/products3'
import Sidebar from '@/components/sidenav'
import React from 'react'

const Second = () => {
  return (
    <div className="grid grid-cols-4 bg-slate-200 "> {/* Main grid container */}
    <div className="col-span-4"> 
      <Header2 />
    </div>

    <div className="sm:col-span-1"> 
      <Sidebar />
      
    </div>

    <div className="col-span-4 md:col-span-3 px-2">
      <div className="sm:ml-9">
        <Detail/>
      </div>
      
      <Tool />
      <Toof />
    </div>

    <div className="col-span-4 mt-8"> 
      <Footer />
    </div>
  </div>
  )
}

export default Second