import axios from 'axios';
import { useState, useEffect } from 'react';



export function useDetailsFetch() {

//   const [details, setdetails] = useState();
//   const [detailsLoding, setDetailsLoding] = useState(true);
  const [error, setError] = useState<string | null>(null);

useEffect(()=>{
    
  
    async function fetchMoviedetail(){
         try{
         const res = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=48c7cae7bad0d7bfd809b07356e38b45`,
        );
    
         console.log(res);
    }catch(err) {
    
        setError("err")
        

    }
     
       
      
    }
    
    fetchMoviedetail()
}, [] )  

}
