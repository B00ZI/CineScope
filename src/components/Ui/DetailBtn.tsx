import { BsInfoCircle } from 'react-icons/bs';


import { ModalContext } from '../../context/ModalContext';
import { useContext } from 'react';
import type { moviesDataType } from '../../types/MovieDataType';

const DetailBtn = ({movie}:{movie:moviesDataType}) => {


  const { setIsOpen , setMovieId} = useContext(ModalContext)!;
   
 const openModel= ()=> {
  setIsOpen(true)
  setMovieId(movie.id)
 }

  return (
   
      <button
        
        onClick={openModel}
        className="h-8 w-12 rounded-[10px] bg-white px-2 py-1 text-sm text-black transition-colors hover:bg-white/90"
      > 
        <BsInfoCircle size={15} className="mx-auto" />
      </button>

   
  );
};

export default DetailBtn;
