import { useQuery } from 'react-query';
import useAxios from './useAxios';
import { useNavigate } from 'react-router-dom';

function  useGetQuery(key: string, url: string , params:any={},options:any={}) {
  const axios = useAxios();
  const navigate = useNavigate()
  const language = localStorage.getItem("language") ?? "en"

  return useQuery(
    params ? [key, params,language] : [key,language],
     async () => {
    const response = await axios.get(url , {params});
    return response.data.data; 
  },
  

  {
    onError: (error:any) => {
 
      
    },
    refetchOnWindowFocus: false,
    
    ...options,


  }
  );
}

export default useGetQuery;
