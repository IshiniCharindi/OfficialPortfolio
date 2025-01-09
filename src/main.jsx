import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import AboutMe from "./Pages/AboutMe/AboutMe.jsx";
import Porfolio from "./Pages/Porfolio/Porfolio.jsx";
import Services from "./Pages/Services/Services.jsx";
import Resume from "./Pages/Resume/Resume.jsx";
import Contact from "./Pages/Contact/Contact.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/about-me",
        element: <AboutMe />
    },
    {
        path: "/portfolio",
        element: <Porfolio />
    },
    {
        path: "/services",
        element: <Services />
    },
    {
        path: "/resume",
        element: <Resume />
    },
    {
        path: "/contact",
        element: <Contact />
    },
    {
        path: "/portfoilo",
        element: <Porfolio />
    },
]);

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
