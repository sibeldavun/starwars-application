import axios from "axios";

// get Starships list
export const fetchStarships = async ({pageParam = 1, queryKey}) => {
   let url =`${process.env.REACT_APP_BASE_ENDPOINT}/api/starships`
   if (queryKey[1] !== "") {
    url += queryKey[1]
    url += `&page=${pageParam}` 
   } else {
    url += `?page=${pageParam}` 
   }
  
    const { data } = await axios.get(url);
    return data;
}

// get Starship with given id
export const fetchStarshipDetails = async (id) => {
    const { data } = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/api/starships/${id}`);
    return data;
}