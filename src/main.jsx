import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import AboutMe from "./Pages/AboutMe/AboutMe.jsx";
import Porfolio from "./Pages/Porfolio/Porfolio.jsx";
import Services from "./Pages/Services/Services.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import PortfolioLayout from "./Components/HeaderComponent/PortfolioLayout.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/",
        element: <PortfolioLayout />,
        children: [
            { index: true, element: <AboutMe /> },
            { path: "portfolio", element: <Porfolio /> },
            { path: "services", element: <Services /> },
            { path: "contact", element: <Contact /> }
        ]
    }
]);

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
