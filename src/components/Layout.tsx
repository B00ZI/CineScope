import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import Modal  from '../components/modal';
import { useContext } from 'react';
import { ModalContext } from '../context/ModalContext';


export default function Layout() {

  const {IsOpen}= useContext(ModalContext)!


  return (
    <div className="flex  min-h-screen flex-col bg-black/90">
      <Navbar />
      <main className="container py-10 mx-auto flex-1 px-6 sm:px-8 ">
     
        <Outlet/>

       {IsOpen && <Modal />}

        
  



      </main>
      <Footer />
      
    </div>
  );
}
