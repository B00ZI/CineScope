
import MovieCards from "./MovieCards";
import type { moviesDataType } from "../types/MovieDataType";
import { motion } from 'framer-motion';


interface MovieCardRendererProp {
    Movies: moviesDataType[]
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};


export default function MovieCardRenderer({ Movies = [] }: MovieCardRendererProp) {


    return (
        <motion.div 
         variants={containerVariants}
         initial="hidden"
         animate="visible"
         className="grid grid-cols-2 gap-6 md:gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {Movies.map(movie => (
                <MovieCards movie={movie} key={movie.id} ></MovieCards>
            ))}

        </motion.div>

    )

}




