import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-black/90">
      <Navbar />
      <main className="container py-10 mx-auto flex-1 px-6 sm:px-8 ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
