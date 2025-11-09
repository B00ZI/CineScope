import { BsInfoCircle } from 'react-icons/bs';


import { ModalContext } from '../../context/ModalContext';
import { useContext } from 'react';

const DetailBtn = ({btnText}:{btnText : string}) => {


  const { setIsOpen} = useContext(ModalContext)!;


  return (
   
      <button
        
        onClick={()=>setIsOpen(true)}
        className="h-8 w-12 rounded-[10px] bg-white px-2 py-1 text-sm text-black transition-colors hover:bg-white/90"
      >  {btnText}
        <BsInfoCircle size={15} className="mx-auto" />
      </button>

   
  );
};

export default DetailBtn;
