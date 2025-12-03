import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import ModalContextProvider from './context/ModalContext.tsx'
import WatchlistContextProvider from './context/WatchlistContext.tsx'
import RattingContextProvider from './context/rattingContext.tsx'
import MovieDetailsContextProvider from './context/MovieDetailsContext.tsx'
import SerchContextPreovider from './context/SerchContext.tsx'
import { HomeHeroProvider } from './context/HeroMovieContext.tsx'


import Home from "./pages/Home";
import NotFound from "./pages/NotFoud";
import Top15 from "./pages/Top15";
import Watchlist from "./pages/Watchlist";

import Layout from './components/Layout.tsx'
import SerchResults from './pages/SerchResults.tsx'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [

      { path: "/", element: <Home /> },
      { path: "/watchlist", element: <Watchlist /> },
      { path: "/top15", element: <Top15 /> },
      { path: "/serchResults", element: <SerchResults /> },
      { path: "*", element: <NotFound /> }

    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <HomeHeroProvider>
    <SerchContextPreovider>
    <MovieDetailsContextProvider>
      <RattingContextProvider>
        <WatchlistContextProvider>
          <ModalContextProvider>

            <RouterProvider router={router} />

          </ModalContextProvider>
        </WatchlistContextProvider>
      </RattingContextProvider>
    </MovieDetailsContextProvider>
</SerchContextPreovider>
</HomeHeroProvider>

  </StrictMode>,
)
