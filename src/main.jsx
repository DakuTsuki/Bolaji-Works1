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
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    
  },
{
  path:"/projectpage", element:<ProjectPage />
},
{
  path:"/home",
  element:<App />
},
{
  path:"/aboutus",
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
  </StrictMode>,
)
