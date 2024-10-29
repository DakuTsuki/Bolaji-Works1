import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import App from './App'
import './index.css'

import { AboutUs, ContactUs, ProjectPage } from "./Pages";
import { Home } from './Pages'
import { Favicon } from './Components'; // Import the Favicon component
import { Title } from './Components';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/projectpage",
    element: <ProjectPage />
  },
  {
    path: "/home",
    element: <App />
  },
  {
    path: "/aboutus",
    element: <AboutUs />
  },
  {
    path: "/contact",
    element: <ContactUs />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Favicon iconPath='/assets/image/logo.png' /> {/* Set the path to your favicon icon */}
    <Title title="Bolaji Aderigbe" /> {/* Set the page title */}
  </StrictMode>,
)