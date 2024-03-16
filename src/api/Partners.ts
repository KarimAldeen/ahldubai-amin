
import useGetQuery from "./helper/useGetQuery";

const API = { GET_ALL: `partners`};
const KEY = "Partners"


export const useGetPartners = (params?:any) => useGetQuery(KEY, API.GET_ALL,params);
