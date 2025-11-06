import { useState } from "react";
import { NavLink } from "react-router-dom";
import { TbMenu4 } from "react-icons/tb";
import { HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const mobileMenu = () => setIsOpen(!isOpen);

const handleActive = ({ isActive }: { isActive: boolean }) => {
  return isActive 
    ? "text-white md:bg-transparent bg-white/6 rounded-lg px-3 py-2" 
    : "text-white/40 hover:text-white md:hover:bg-transparent hover:bg-white/4 rounded-lg px-3 py-2";
};

  return (
    <div className="px-4 md:px-12 py-2 border-b border-white/20 bg-black/70 relative">
      {/* Desktop Layout */}
      <div className="hidden md:flex items-center justify-between gap-8">
        {/* Logo - Left */}
        <h2 className="font-semibold text-xl flex-shrink-0">CineScope</h2>

        {/* Search Bar - Center */}
        <div className="flex-1 max-w-xl">
          <input
            className="w-full py-2 px-3 bg-white/10 border border-white/20 rounded-3xl placeholder:text-white/60 focus:bg-white/16 focus:outline-none"
            type="text"
            placeholder="@ Search"
          />
        </div>

        {/* Nav Links - Right */}
        <nav className="flex gap-6 font-semibold text-sm flex-shrink-0">
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
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl">CineScope</h2>
          <button onClick={mobileMenu} className="focus:outline-none">
            {isOpen ? <HiX size={24} /> : <TbMenu4 size={24} />}
          </button>
        </div>

        <div className="mt-3">
          <input
            className="py-2 px-3 bg-white/10 border border-white/20 w-full rounded-3xl placeholder:text-white/60 focus:bg-white/16 focus:outline-none"
            type="text"
            placeholder="@ Search"
          />
        </div>
      </div>

      
      {isOpen && (
        <nav className="absolute top-full left-0 w-full bg-black/70 flex flex-col text-center gap-6 font-semibold text-sm py-5 px-9 border-b border-white/20 md:hidden ">
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
