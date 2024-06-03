import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { ModalProvider, Modal } from "../context/Modal";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";


export default function Layout() {
    // const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div className="appWrapper">
            <ModalProvider>
                <Navigation />
                {isLoaded && <Outlet />}
                <Modal />
                <Footer />
            </ModalProvider>
        </div>
    );
}
