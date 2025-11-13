import { BsInfoCircle } from 'react-icons/bs';



function DetailBtn() {
  return (
    <button className=" cursor-pointer w-10 rounded-[10px] bg-white px-2 py-1 text-sm text-black transition-colors hover:bg-white/90">
      <BsInfoCircle size={15} className="mx-auto" />
    </button>
  );
}

export default DetailBtn;
