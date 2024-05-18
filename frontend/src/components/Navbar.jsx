import { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { NavbarData } from "../data/navbarData";

const Navbar = () => {
    const navbarItems = NavbarData();
    const navbarRef = useRef();
    const nnavgiate = useNavigate();

    const handleNavbarItemClick = (item) => {
        if (item.link === "/") {
            nnavgiate("/");
            return;
        }

        const currentPath = useLocation().pathname;
        if (currentPath === item.link) {
            return;
        }

        nnavgiate(item.link);
    }

    return (
        <div className="bg-blue-300 max-h-96 min-h-20 px-10 flex justify-between items-center ">
            <div className="flex-center gap-0.5">

                <h1 className=" text-white text-2xl font-montserrat tracking-wider">
                    Blogs App
                </h1>
            </div>

            <div ref={navbarRef} className="flex-center gap-10">
                {navbarItems.map((item) => (
                    <Link
                        key={item.title}
                        to={item.link}
                        className="text-white font-montserrat flex-center cursor-pointer"
                        onClick={() => handleNavbarItemClick(item)}
                    >
                        {item.title}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Navbar;
