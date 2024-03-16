import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

function QueryProvider({ children }: any) {
  const queryClient = new QueryClient({
    defaultOptions:{
      queries:{
        staleTime:60*60*24,
        cacheTime:60*60*24

      }
    }
  })

  return (
    <QueryClientProvider  client={queryClient}>
      {children}
    </QueryClientProvider>

  )
}

export default QueryProvider


