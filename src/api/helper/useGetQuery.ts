import { useQuery } from 'react-query';
import useAxios from './useAxios';
import { useNavigate } from 'react-router-dom';

function useGetQuery(key: string, url: string , params:any={},options:any={}) {
  const axios = useAxios();
  const navigate = useNavigate()
  return useQuery(
    params ? [key, params] : key,
     async () => {
    const response = await axios.get(url , {params});
    return response.data.data; 
  },
  

  {
    onError: (error:any) => {
 
      
    },
    refetchOnWindowFocus: false,
    
    ...options

  }
  );
}

export default useGetQuery;
