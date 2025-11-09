import Top15Cards from '../components/Top15Cards';

export default function Top15() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-15" >
      <h1 className="w-fit text-3xl font-semibold text-white/70 hover:text-white">
        Your Top 15
      </h1>
      <div className='flex flex-col gap-6'>
     <Top15Cards></Top15Cards>
      <Top15Cards></Top15Cards>
      <Top15Cards></Top15Cards>

      </div>
 
    </div>
  );
}
