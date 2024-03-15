
import useGetQuery from "./helper/useGetQuery";

const API = { GET_ALL: `single_service`};
const KEY = "single_service"


export const useGetSingleService = (params?:any) => useGetQuery(KEY, API.GET_ALL,params);
