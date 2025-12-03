import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/navigation';
// @ts-ignore
import 'swiper/css/pagination';
import { BiBookmark } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';
import { ModalContext } from '../context/ModalContext';
import { useContext } from 'react';
import DetailBtn from './Ui/DetailBtn';

export const Movies = [
  {
    // The "Interstellar" from your earlier code (ID 157336)
    id: 550, 
    title: 'Interstellar',
    overview: "In Earth's future, a team of explorers travel beyond our solar system in search of a new home for humanity.",
    rating: 8.4,
    date: '2014',
    // Using the original backdrop path from TMDB
    backdrop: 'https://image.tmdb.org/t/p/original/rSPw7tgCH9C6NqICZef4kZjFOQ5.jpg',

    poster: null
  },
  {
    // A high-rated classic: "The Dark Knight" (ID 155)
    id: 155, 
    title: 'The Dark Knight',
    overview: 'Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, he sets out to dismantle the remaining criminal organizations that plague the city.',
    rating: 8.5,
    date: '2008',
    backdrop: 'https://image.tmdb.org/t/p/original/dqK9Hag1054hbJdfHW ',
    poster: null
  },
  {
    // A newer, popular hit: "Dune" (Part One) (ID 438631)
    id: 438631, 
    title: 'Dune',
    overview: 'Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people.',
    rating: 7.9,
    date: '2021',
    backdrop: 'https://image.tmdb.org/t/p/original/A5E7SJR9n1k1t2sR3iR5fS8eQ1G.jpg',
    poster: null
  },
  {
    // A classic action/sci-fi: "Inception" (ID 27205)
    id: 27205, 
    title: 'Inception',
    overview: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    rating: 8.3,
    date: '2010',
    backdrop: 'https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCDup3AmWCSw.jpg',
    poster: null
  },
  {
    // A critically acclaimed drama: "Parasite" (ID 496243)
    id: 496243, 
    title: 'Parasite',
    overview: 'All unemployed, Ki-taek and his family take peculiar interest in the wealthy and glamorous Park family, as they worm their way into their lives.',
    rating: 8.5,
    date: '2019',
    backdrop: 'https://image.tmdb.org/t/p/original/7Q0NDr8s2y69D2o8k9xYv331JkY.jpg',
    poster: null
  }
];

const HomeHero = () => {
  const { setIsOpen, setMovieId } = useContext(ModalContext)!

  function openModal(x: typeof Movies[0]) {
    setIsOpen(true)
    setMovieId(x.id)
  }

  return (
    <div className="w-full">
      <style>{`
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
          width: 8px;
          height: 8px;
          transition: all 0.3s ease;
         
        }
        .swiper-pagination-bullet-active {
          background: white;
          width: 24px;
          border-radius: 4px;
        }
        .swiper-button-next,
        .swiper-button-prev {
          color: white;
         
         
          width: 70px;
          height: 50px;
          padding: 10px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
      
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          
          transform: scale(1.2);
        }
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 18px;
          font-weight: bold;
        }
        @media (max-width: 640px) {
         
          .swiper-button-next,
          .swiper-button-prev {
            display: none;
          }
        }
      `}</style>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        loop={true}
        className="rounded-2xl overflow-hidden"
      >
        {Movies.map((x) => (
          <SwiperSlide key={x.id}>
            <div
              onClick={() => openModal(x)}
              className="group relative overflow-hidden flex h-[50vh] max-h-[500px] min-h-[350px]
               cursor-grab flex-col items-start justify-center 
                bg-gray-800 p-8 sm:p-20 transition-all duration-500"
            >
              {/* Background Image with Zoom Effect */}
              <div
                className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url(${x?.backdrop})` }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/60 to-transparent" />

              {/* Content */}
              <div className="relative z-10 w-full max-w-2xl">
                {/* Badge */}
                <div className="mb-4">
                  <span className="inline-block rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm px-3 py-1.5 text-xs font-medium tracking-wide">
                    # YAHYA'S FAVORITES
                  </span>
                </div>

                {/* Title */}
                <h2 className="mb-3 text-3xl sm:text-4xl font-bold tracking-tight drop-shadow-lg">
                  {x.title}
                </h2>

                {/* Rating & Date */}
                <div className="mb-4 flex items-center gap-3 text-sm">
                  <div className="flex items-center gap-1.5 text-yellow-500">
                    <AiFillStar size={18} />
                    <span className="font-semibold">{x.rating}</span>
                  </div>
                  <span className="text-white/60">•</span>
                  <span className="text-white/80 font-medium">{x.date}</span>
                </div>

                {/* Genre Tags */}
                <div className="mb-5 flex flex-wrap gap-2">
                  {['Action', 'Sci-Fi', 'Thriller'].map(genre => (
                    <span
                      key={genre}
                      className="rounded-lg border border-white/12 bg-white/7 backdrop-blur-sm px-3 py-1 text-xs font-semibold tracking-wide"
                    >
                      {genre}
                    </span>
                  ))}
                </div>

                {/* Overview */}
                <p className="mb-6 max-w-xl text-base leading-relaxed text-white/90">
                  {x.overview}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  <button className="flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm px-6 py-2.5 text-sm font-semibold transition-all duration-300 hover:bg-white/20 hover:border-white/30 hover:scale-105">
                    <BiBookmark size={18} />
                    <span>Watchlist</span>
                  </button>

                  <DetailBtn />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeHero;