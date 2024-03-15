import { BrowserRouter } from 'react-router-dom'
import { Tchildren } from './Layout/app/Types'
import QueryProvider from './lib/ReactQueryProvider'

function ProviderContainer({children}:Tchildren) {
  return (
 <BrowserRouter basename='/'>
   <QueryProvider>
             {children}
             </QueryProvider>
</BrowserRouter>
    )
}

export default ProviderContainer