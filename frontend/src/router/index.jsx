import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Splash from '../components/Splash';
import About from '../components/About';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials/Testimonials';
import Contact from '../components/Contact';

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Splash />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/services",
                element: <Services />,
            },
            {
                path: "/gallery",
                element: <Gallery />,
            },
            {
                path: "/testimonials",
                element: <Testimonials />,
            },
            {
                path: "/contact-us",
                element: <Contact />,
            },
        ]
    }
]);
