
import useGetQuery from "./helper/useGetQuery";

const API = { GET_ALL: `doctors`,GET_ONE: `doctor`};
const KEY = "doctors"


export const useGetDoctors = (params?:any) => useGetQuery(KEY, API.GET_ALL,params);

export const useGetDoctor = (params?:any) => useGetQuery(KEY, API.GET_ONE,params);
