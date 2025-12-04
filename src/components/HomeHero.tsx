import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation , EffectFade } from 'swiper/modules';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/navigation';
// @ts-ignore
import 'swiper/css/pagination';

import { AiFillStar } from 'react-icons/ai';
import { ModalContext } from '../context/ModalContext';
import { useContext } from 'react';
import DetailBtn from './Ui/DetailBtn';
import WatchlistBtn from './Ui/WatchlistBtn';
export const Movies = [
  {
    backdrop: "https://image.tmdb.org/t/p/original/5XNQBqnBwPA9yT0jZ0p3s8bbLh0.jpg",
    date: "2014",
    id: 157336,
    overview: "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    rating: 8.4,
    title: "Interstellar"
  },
  {
    backdrop: "https://image.tmdb.org/t/p/original/hkKTtlHjiVUW5XRfkQfl3FmJUfX.jpg",
    date: "1995",
    id: 807,
    overview: "Two homicide detectives are on a desperate hunt for a serial killer whose crimes are based on the \"seven deadly sins\" in this dark and haunting film that takes viewers from the tortured remains of one victim to the next. The seasoned Det. Somerset researches each sin in an effort to get inside the killer's mind, while his novice partner, Mills, scoffs at his efforts to unravel the case.",
    poster: "https://image.tmdb.org/t/p/w500/191nKfP0ehp3uIvWqgPbFmI4lv9.jpg",
    rating: 8.3,
    title: "Se7en",
  },
  {
    // A classic action/sci-fi: "Inception" (ID 27205)
    id: 27205,
    title: 'Inception',
    overview: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    rating: 8.3,
    date: '2010',
    backdrop: "https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
    poster: null
  },
  {
    backdrop: "https://image.tmdb.org/t/p/original/bpV8wn48s82au37QyUJ51S7X2Vf.jpg",
    date: "1997",
    id: 489,
    overview: "Headstrong yet aimless, Will Hunting has a genius-level IQ but chooses to work as a janitor at MIT. When he secretly solves highly difficult graduate-level math problems, his talents are discovered by Professor Gerald Lambeau, who decides to help the misguided youth reach his potential. When Will is arrested for attacking a police officer, Professor Lambeau makes a deal to get leniency for him if he gets court-ordered therapy. Eventually, therapist Dr. Sean Maguire helps Will confront the demons that are holding him back.",
    poster: "https://image.tmdb.org/t/p/w500/z2FnLKpFi1HPO7BEJxdkv6hpJSU.jpg",
    rating: 8.1,
    title: "Good Will Hunting",
  }
  ,
  {
    backdrop: "https://image.tmdb.org/t/p/original/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
    date: "1999",
    id: 550,
    overview: "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
    poster: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    rating: 8.4,
    title: "Fight Club",
  },
  {
    backdrop: "https://image.tmdb.org/t/p/original/2vq5GTJOahE03mNYZGxIynlHcWr.jpg",
    date: "2019",
    id: 359724,
    overview: "American car designer Carroll Shelby and the British-born driver Ken Miles work together to battle corporate interference, the laws of physics, and their own personal demons to build a revolutionary race car for Ford Motor Company and take on the dominating race cars of Enzo Ferrari at the 24 Hours of Le Mans in France in 1966.",
    poster: "https://image.tmdb.org/t/p/w500/dR1Ju50iudrOh3YgfwkAU1g2HZe.jpg",
    rating: 8.0,
    title: "Ford v Ferrari",
  },
  {
    backdrop: "https://image.tmdb.org/t/p/original/1kuYEvLkX2nTkbfzN6X0w0xQFQU.jpg",
    date: "2014",
    id: 244786,
    overview: "Under the direction of a ruthless instructor, a talented young drummer begins to pursue perfection at any cost, even his humanity.",
    poster: "https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg",
    rating: 8.3,
    title: "Whiplash",
  },
  {
    backdrop: "https://image.tmdb.org/t/p/original/bdI6U1mT0kCdTJ6TWtiFxQ42GSn.jpg",
    date: "2014",
    id: 242582,
    overview: "When Lou Bloom, desperate for work, muscles into the world of L.A. crime journalism, he blurs the line between observer and participant to become the star of his own story. Aiding him in his effort is Nina, a TV-news veteran.",
    poster: "https://image.tmdb.org/t/p/w500/j9HrX8f7GbZQm1BrBiR40uFQZSb.jpg",
    rating: 7.7,
    title: "Nightcrawler",
  },
  {
    backdrop: "https://image.tmdb.org/t/p/original/rSzDfniDjqh2TIP9uH7rwi2iRy3.jpg",
    date: "1989",
    id: 207,
    overview: "At an elite, old-fashioned boarding school in New England, a passionate English teacher inspires his students to rebel against convention and seize the potential of every day, courting the disdain of the stern headmaster.",
    poster: "https://image.tmdb.org/t/p/w500/erzbMlcNHOdx24AXOcn2ZKA7R1q.jpg",
    rating: 8.3,
    title: "Dead Poets Society",
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
          color: #999;
         
         
          width: 70px;
          height: 45px;
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
        modules={[Autoplay, Pagination, Navigation ]}
        
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        speed={1100}
        loop={true}
        className="rounded-2xl overflow-hidden"
      >
        {Movies.map((x) => (
          <SwiperSlide key={x.id}>
            <div
              onClick={() => openModal(x)}
              className="group relative overflow-hidden flex h-[450px] 
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
                <h2 className="mb-3 text-3xl sm:text-4xl font-bold tracking-tight drop-shadow-lg line-clamp-2">
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
                <p className="mb-6 max-w-xl text-base leading-relaxed text-white/90 line-clamp-2 sm:line-clamp-3">
                  {x.overview}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 max-w-50">
                  <WatchlistBtn Movie={x} />
                  {/* <button className="flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm px-6 py-2.5 text-sm font-semibold transition-all duration-300 hover:bg-white/20 hover:border-white/30 hover:scale-105">
                    <BiBookmark size={18} />
                    <span>Watchlist</span>
                  </button> */}

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