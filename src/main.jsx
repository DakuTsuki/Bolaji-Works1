import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import App from './App';
import './index.css';

import { AboutUs, ContactUs, ProjectPage } from "./Pages";
import { Home } from './Pages';
import { Favicon } from './Components'; 
import { Title } from './Components';
import Charity from './Pages/Charity/Charity';
import AppProvider from './AppContext'; // Import the AppProvider

const router = createBrowserRouter([
    { path: "/", element: <App /> },
    { path: "/projectpage", element: <ProjectPage /> },
    { path: "/home", element: <App /> },
    { path: "/aboutus", element: <AboutUs /> },
    { path: "/contact", element: <ContactUs /> },
    { path: "/charity", element: <Charity /> },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AppProvider>
            <RouterProvider router={router} />
            <Favicon iconPath='/assets/image/logo.png' />
            <Title title="Bolaji Aderigbe" />
        </AppProvider>
    </StrictMode>,
);
