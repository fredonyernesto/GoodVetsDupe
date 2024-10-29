

import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import Home from './pages/Home'
import Hospitals from './pages/Hospitals';
import Locations from './pages/Locations';
import Services from './pages/Services';
import Wellness from './pages/Wellness';
import Join from './pages/Join';
import Portal from './pages/Portal';
import Book from './pages/Book';
import NotFound from './pages/NotFound';
// import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/hospitals',
        element: <Hospitals />
      }, {
        path: '/locations',
        element: <Locations />
      }, {
        path: '/services',
        element: <Services />
      }, {
        path: '/wellness',
        element: <Wellness />
      }, {
        path: '/join',
        element: <Join />
      }, {
        path: '/portal',
        element: <Portal />
      }, {
        path: '/book',
        element: <Book />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
)