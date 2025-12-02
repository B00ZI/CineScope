import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import Modal from '../components/modal';
import { useContext } from 'react';
import { ModalContext } from '../context/ModalContext';
import { useFetch } from './FetchMovies';
import { SerchContext } from '../context/SerchContext';
import { WatchlistContext } from '../context/WatchlistContext';
import { RattingContext } from '../context/rattingContext';


export default function Layout() {
  
  const {userRatting } = useContext(RattingContext)!
  const { WatchlistMovies } = useContext(WatchlistContext)!;
  const { Movies } = useFetch()
  const { IsOpen, MovieId } = useContext(ModalContext)!
  const { serchResulte } = useContext(SerchContext)!

  const combainedArray = [...(Movies ?? []), ...(serchResulte.serchdata ?? []), ...(WatchlistMovies ?? []), ...(userRatting ?? [])]

  const modalData = combainedArray?.find(x => x.id === MovieId);

  return (
    <div className="flex  min-h-screen flex-col bg-black/90">
      <Navbar />
      <main className="container py-10 mx-auto flex-1 px-6 sm:px-8 ">

        <Outlet />

        {IsOpen && <Modal modalData={modalData!} />}






      </main>
      <Footer />

    </div>
  );
}
