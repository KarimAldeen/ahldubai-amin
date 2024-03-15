
import useGetQuery from "./helper/useGetQuery";

const API = { GET_ALL: `footer`};
const KEY = "footer"


export const useGetFooter = (params?:any) => useGetQuery(KEY, API.GET_ALL,params);
