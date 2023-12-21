import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom'
import Loading from './Components/Utils/Loading/Loading';
import Auth from './Pages/Auth/Page';
import Page from './Pages/Home/Page';
import Layout from './Layout/Ui/Layout';
import Doctors from './Pages/Doctors/Page';
const Page404 = lazy(() => import("./Layout/Ui/NotFoundPage"))

const App = () => {


  return (
    <Routes>
      <Route path="*" element={<Suspense fallback={<Loading />}> <Page404 /></Suspense>} />
      <Route path="/auth" element={<Suspense fallback={<Loading />}> <Auth /></Suspense>} />
      <Route path="/" element={<Suspense fallback={<Loading />}><Layout className='Home_Page'>  <Page /> </Layout> </Suspense>} />
      <Route path="/doctors" element={<Suspense fallback={<Loading />}><Layout className='Doctors_Page'>  <Doctors /> </Layout> </Suspense>} />

    </Routes>



  )
}

export default App