import { BsInfoCircle } from 'react-icons/bs';


import { ModalContext } from '../../context/ModalContext';
import { useContext } from 'react';
import type { moviesDataType } from '../../types/MovieDataType';

const DetailBtn = ({movie}:{movie:moviesDataType}) => {


  const { setIsOpen , setModalData} = useContext(ModalContext)!;
   
 const openModel= ()=> {
  setIsOpen(true)
  setModalData(movie)
 }

  return (
   
      <button
        
        onClick={()=>setIsOpen(true)}
        className="h-8 w-12 rounded-[10px] bg-white px-2 py-1 text-sm text-black transition-colors hover:bg-white/90"
      > 
        <BsInfoCircle size={15} className="mx-auto" />
      </button>

   
  );
};

export default DetailBtn;
