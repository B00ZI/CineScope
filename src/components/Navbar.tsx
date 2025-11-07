import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { TbMenu4 } from 'react-icons/tb';
import { HiX } from 'react-icons/hi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const mobileMenu = () => setIsOpen(!isOpen);

  const handleActive = ({ isActive }: { isActive: boolean }) => {
    return isActive
      ? 'text-white md:bg-transparent bg-white/6 rounded-lg px-3 py-2'
      : 'text-white/40 hover:text-white md:hover:bg-transparent hover:bg-white/4 rounded-lg px-3 py-2';
  };

  return (
    <div className=" sticky  top-0 left-0 z-10 border-b border-white/20 bg-black/70 px-4 py-2 md:px-12">
      {/* Desktop Layout */}
      <div className="hidden items-center justify-between gap-8 md:flex">
        {/* Logo - Left */}
        <h2 className="flex-shrink-0 text-xl font-semibold">CineScope</h2>

        {/* Search Bar - Center */}
        <div className="max-w-xl flex-1">
          <input
            className="w-full rounded-3xl border border-white/20 bg-white/10 px-3 py-2 placeholder:text-white/60 focus:bg-white/16 focus:outline-none"
            type="text"
            placeholder="@ Search"
          />
        </div>

        {/* Nav Links - Right */}
        <nav className="flex flex-shrink-0 gap-6 text-sm font-semibold">
          <NavLink className={handleActive} to="/">
            Home
          </NavLink>
          <NavLink className={handleActive} to="/watchlist">
            Watchlist
          </NavLink>
          <NavLink className={handleActive} to="/top15">
            Top 15
          </NavLink>
          <NavLink className={handleActive} to="/profile">
            Profile
          </NavLink>
        </nav>
      </div>

      <div className="md:hidden">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">CineScope</h2>
          <button onClick={mobileMenu} className="focus:outline-none">
            {isOpen ? <HiX size={24} /> : <TbMenu4 size={24} />}
          </button>
        </div>

        <div className="mt-3">
          <input
            className="w-full rounded-3xl border border-white/20 bg-white/10 px-3 py-2 placeholder:text-white/60 focus:bg-white/16 focus:outline-none"
            type="text"
            placeholder="@ Search"
          />
        </div>
      </div>

      {isOpen && (
        <nav className="absolute top-full left-0 flex w-full flex-col gap-6 border-b border-white/20 bg-black/70 px-9 py-5 text-center text-sm font-semibold md:hidden">
          <NavLink className={handleActive} to="/" onClick={mobileMenu}>
            Home
          </NavLink>
          <NavLink
            className={handleActive}
            to="/watchlist"
            onClick={mobileMenu}
          >
            Watchlist
          </NavLink>
          <NavLink className={handleActive} to="/top15" onClick={mobileMenu}>
            Top 15
          </NavLink>
          <NavLink className={handleActive} to="/profile" onClick={mobileMenu}>
            Profile
          </NavLink>
        </nav>
      )}
    </div>
  );
}
