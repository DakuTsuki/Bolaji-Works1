import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
    HashRouter,
    Routes, // Import Routes
    Route, // Import Route
    Navigate
} from 'react-router-dom';
import App from './App';
import './index.css';

import { AboutUs, ContactUs, ProjectPage } from "./Pages";
import { Favicon } from './Components'; 
import { Title } from './Components';
import Charity from './Pages/Charity/Charity';
import AppProvider from './AppContext'; // Import the AppProvider

// Define your routes
const routes = [
    { path: "/", element: <App /> },
    { path: "/home", element: <Navigate to="/" replace /> }, // Redirect /home to /
    { path: "/projectpage", element: <ProjectPage /> },
    { path: "/aboutus", element: <AboutUs /> },
    { path: "/contact", element: <ContactUs /> },
    { path: "/charity", element: <Charity /> },
];

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AppProvider>
            <HashRouter>
                <Routes> {/* Wrap routes with Routes */}
                    {routes.map(route => (
                        <Route key={route.path} path={route.path} element={route.element} />
                    ))}
                </Routes>
                <Favicon iconPath='/assets/image/logo.png' />
                <Title title="Bolaji Aderigbe" />
            </HashRouter>
        </AppProvider>
    </StrictMode>,
);
