import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App/App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from 'components/Pages/HomePage.jsx'
import CinemaPage from 'components/Pages/CinemaPage.jsx'
import MovieListPage from 'components/Pages/MovieListPage.jsx'
import AddMoviePage from 'components/Pages/AddMoviePage.jsx'
import MoviePage from 'components/Pages/MoviePage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <HomePage />
      },
      {
        path: 'cinema',
        element: <CinemaPage />
      },
      {
        path: 'movielist',
        element: <MovieListPage />
      },
      {
        path: 'addmovie',
        element: <AddMoviePage />
      },
      {
        path: 'movie/:id',
        element: <MoviePage />
      }
    ]
  }
]) 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
