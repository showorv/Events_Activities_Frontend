
import Footer from '@/components/modules/shared/PublicFooter'
import Navbar from '@/components/modules/shared/PublicNavbar'
import { getUserInfo } from '@/service/auth/getUserInfo';
import React from 'react'

const Commonlayout =async ({children}: {children: React.ReactNode})=> {
  const userInfo = await getUserInfo(); 
  return (
    <div className="min-h-screen flex flex-col">


    
    <Navbar userInfo={userInfo}/>

    
    <main className="grow">
      {children}
    </main>

   
    <Footer />
  </div>
  )
}

export default Commonlayout