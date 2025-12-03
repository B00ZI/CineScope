import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { BiBookmark } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';
import { ModalContext } from '../context/ModalContext';
import { useContext } from 'react';
import DetailBtn from './Ui/DetailBtn';

const Movies = [
  {
    id: 1,
    title: 'Interstellar Adventure',
    overview: 'Journey through the stars in this epic sci-fi saga.',
    rating: 8.8,
    date: '2024',
    backdrop: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'The Dark City',
    overview: 'A hero rises in a city consumed by shadows and crime.',
    rating: 9.2,
    date: '2023',
    backdrop: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Dune Sands',
    overview: 'Survival on a desert planet where spice is life.',
    rating: 7.9,
    date: '2021',
    backdrop: 'https://images.unsplash.com/photo-1547234935-80c7142ee969?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Dune Sands',
    overview: 'Survival on a desert planet where spice is life.',
    rating: 7.9,
    date: '2021',
    backdrop: 'https://images.unsplash.com/photo-1547234935-80c7142ee969?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Dune Sands',
    overview: 'Survival on a desert planet where spice is life.',
    rating: 7.9,
    date: '2021',
    backdrop: 'https://images.unsplash.com/photo-1547234935-80c7142ee969?q=80&w=1000&auto=format&fit=crop'
  }
];

const HomeHero = () => {
  const { setIsOpen, setMovieId } = useContext(ModalContext)!

  function openModal(x) {
    setIsOpen(false)
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