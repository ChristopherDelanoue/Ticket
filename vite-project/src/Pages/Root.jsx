import Banner from "../Component/Banner.jsx";
import Footer from "../Component/Footer.jsx";
import { Outlet } from "react-router";

function Root() {
    return (
        <>
            <Banner />
            <Outlet />
            <Footer />
        </>
    )
}

export default Root;