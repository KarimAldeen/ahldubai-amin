
import useGetQuery from "./helper/useGetQuery";

const API = { GET_ALL: `home`};
const KEY = "home"


export const useGetHome = (params?:any) => useGetQuery(KEY, API.GET_ALL,params);
