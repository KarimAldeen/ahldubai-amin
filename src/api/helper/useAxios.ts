import { BaseURL } from '../config'
import AxiosBuilder from './AxiosBuilder'

function useAxios() {
  const language = localStorage.getItem("language") ?? "en"

    
  const buildAxios = new AxiosBuilder().
  withBaseURL(BaseURL)
  .withResponseType('json')
  .withTimeout(120000)
  .withHeaders({"Content-Type" :"application/json"})
  .withHeaders({"language" :language})
  
  return (
    buildAxios.build()
  )
}

export default useAxios