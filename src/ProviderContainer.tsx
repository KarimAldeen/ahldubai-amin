import QueryProvider from './lib/ReactQueryProvider'
import { BrowserRouter } from 'react-router-dom'
import { Tchildren } from './Layout/app/Types'

function ProviderContainer({children}:Tchildren) {
  return (
 <BrowserRouter basename='/'>
     <QueryProvider>
        {/* <ToastProvider> */}
             {children}
        {/* </ToastProvider> */}
    </QueryProvider>
</BrowserRouter>
    )
}

export default ProviderContainer