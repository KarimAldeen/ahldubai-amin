import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Footer2 from './Footer2'
import Footer3 from './Footer3'


const Layout = ({ children ,className=""}: { children: React.ReactNode ,className?: string }) => {

  return (
 <div className={`${className} Layout`}>
     <Header/>
    <main className={`Layout_Body`}>
        {children}
    </main>
    {/* <Footer/> */}
    {/* <Footer2/> */}
    <Footer3/>

 </div>
  )
}

export default Layout