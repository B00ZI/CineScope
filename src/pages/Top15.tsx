import Top15Cards from '../components/Top15Cards';
import { useContext } from 'react';
import { RattingContext } from '../context/rattingContext';
import { motion } from 'framer-motion';



const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

export default function Top15() {


  const { userRatting } = useContext(RattingContext)!

 
  const userRattingSorted = userRatting
    .slice()
    .sort((a, b) => {

       return (b.UserRate || 0) - (a.UserRate || 0)
      
    })
    .slice(0, 15)

  return (
    <>
      <h1 className="w-fit text-3xl font-semibold text-white/70 hover:text-white mb-[60px]">
        Your Top 15
      </h1>
    
    <div className="max-w-3xl mx-auto flex flex-col gap-15" >
      <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
       className='flex flex-col gap-6'>
        {userRattingSorted.map((movie, index) => (
          <Top15Cards movie={movie} index={index} key={index}  ></Top15Cards>
        ))}
      </motion.div>

    </div>
    </>
  );
}
