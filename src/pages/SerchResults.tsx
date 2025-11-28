
import { useContext } from "react"
import { SerchContext } from "../context/SerchContext"
import MovieCardRendrer from "../components/MovieCardRendrer"
export default function SerchResults(){

const {serchResulte} = useContext(SerchContext)
 
 
 if ( !serchResulte || !serchResulte.serchdata  ){
  return <h1> no search resultes  </h1>
 }
  


 if (serchResulte.serchdata.length === 0 ){
  return <h1> no Movie Found </h1>
 }
  
  return(
   <>
   
   <h1 className="aling-center">Serch Results</h1>
      <MovieCardRendrer Movies={serchResulte.serchdata} ></MovieCardRendrer>
   </>

  )  
}

