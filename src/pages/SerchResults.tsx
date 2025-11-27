
import { useContext } from "react"
import { SerchContext } from "../context/SerchContext"
import MovieCardRendrer from "../components/MovieCardRendrer"
export default function SerchResults(){

const {serchResulte} = useContext(SerchContext)

  return(
   <>
   <h1 className="aling-center">Serch Results</h1>
      <MovieCardRendrer Movies={serchResulte.serchdata} ></MovieCardRendrer>
   </>

  )  
}

