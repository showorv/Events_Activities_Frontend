
import React from 'react'

const Commonlayout = ({children}: {children: React.ReactNode})=> {
  return (
    <div>
        {/* <PublicNavbar /> */}
        {children}
        {/* <PublicFooter /> */}
    </div>
  )
}

export default Commonlayout