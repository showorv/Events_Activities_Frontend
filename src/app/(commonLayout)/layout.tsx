
import Footer from '@/components/modules/shared/PublicFooter'
import Navbar from '@/components/modules/shared/PublicNavbar'
import React from 'react'

const Commonlayout = ({children}: {children: React.ReactNode})=> {
  return (
    <div className="min-h-screen flex flex-col">
    
    <Navbar />

    
    <main className="grow">
      {children}
    </main>

   
    <Footer />
  </div>
  )
}

export default Commonlayout