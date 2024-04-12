import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom'
import Loading from './Components/Utils/Loading/Loading';
import Page from './Pages/Home/Page';
import Layout from './Layout/Ui/Layout';
import Doctors from './Pages/Doctors/Page';
import Blog from './Pages/Blog/Page';
import ServiceDetails from './Pages/ServiceDetails/Page';
import useFingerprint from './api/helper/generateFingerprint';
import { useAddJoin_website } from './api/uuid';
import SingleDoctor from './Pages/Doctors/SingleDoctor';
import NewSingleDoctor from './Pages/Doctors/NewSingleDoctor';
const Page404 = lazy(() => import("./Layout/Ui/NotFoundPage"))

const App = () => {
  const fingerprint = useFingerprint();
  const {mutate} = useAddJoin_website() 
  React.useEffect(() => {
    if(fingerprint){
      mutate({uuid:fingerprint});

    }
   
}, [fingerprint,mutate]);


  return (
    <Routes>
      <Route path="*" element={<Suspense fallback={<Loading />}> <Page404 /></Suspense>} />
      <Route path="/" element={<Suspense fallback={<Loading />}>  <Page />  </Suspense>} />
      <Route path="/doctors" element={<Suspense fallback={<Loading />}><Layout className='Doctors_Page'>  <Doctors /> </Layout> </Suspense>} />
      {/* <Route path="/services" element={<Suspense fallback={<Loading />}><Layout className='Services_Page'>  <Services /> </Layout> </Suspense>} /> */}
      <Route path="/blog" element={<Suspense fallback={<Loading />}><Layout className='Blog_Page'>  <Blog /> </Layout> </Suspense>} />
      <Route path="/olddoctors/:id" element={<Suspense fallback={<Loading />}><Layout className='SingleDoctor_Page'>  <SingleDoctor /> </Layout> </Suspense>} />
      <Route path="/doctors/:id" element={<Suspense fallback={<Loading />}><Layout className='NewSingleDoctor_Page'>  <NewSingleDoctor /> </Layout> </Suspense>} />

    {/* <Route path="/Pricing" element={<Suspense fallback={<Loading />}><Layout className='PricingDetails_Page'>  <PricingDetails /> </Layout> </Suspense>} /> */}
    <Route path="/services/:id" element={<Suspense fallback={<Loading />}> <ServiceDetails /> </Suspense>} />

    </Routes>



  )
}

export default App