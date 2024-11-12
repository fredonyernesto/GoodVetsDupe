

import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import Home from './pages/Home/Home.jsx'
import Hospitals from './pages/Hospitals/Hospitals.jsx';
import Locations from './pages/Locations/Locations.jsx';
import Services from './pages/Services/Services.jsx';
import Wellness from './pages/Wellness/Wellness.jsx';
import Join from './pages/Join/Join.jsx';
import Portal from './pages/Portal/Portal.jsx';
import Book from './pages/Book/Book.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';


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