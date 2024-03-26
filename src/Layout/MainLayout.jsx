import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navebar from "../Shared/Navebar";


const MainLayout = () => {
    return (
        <>
            <Navebar/>

            <Outlet/>
            <Footer/>
        </>
    );
};

export default MainLayout;