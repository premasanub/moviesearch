import axios from "axios";

const API_KEY="e91c92a9";
const BASE_URL ="https://www.omdbapi.com/";

export const searchMovies = async (searchTerm,page=1,type="")=>{
    try{
const response=await axios.get(BASE_URL,{
    params:{
        apikey:API_KEY,
        s:searchTerm,
        page,
        type
    }
});
return response.data;
    }
    catch(error){

        console.log(error);
    };
};


export const getMovieDetails = async (imdbID)=>{
    try{
const response = await axios.get(
    BASE_URL,{
        params:{
            apikey:API_KEY,
            i:imdbID
        }
    }
);
return response.data;
    }
    catch(error){
        console.log(error);
    }
};