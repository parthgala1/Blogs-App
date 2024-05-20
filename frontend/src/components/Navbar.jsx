import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { NavbarData } from "../data/navbarData";

const Navbar = () => {
    const navbarItems = NavbarData();
    const navbarRef = useRef();
    const navgiate = useNavigate();

    const handleNavbarItemClick = (item) => {
        if (item.link === "/") {
            navgiate("/");

            return;
        }

        const currentPath = useLocation().pathname;
        if (currentPath === item.link) {
            return;
        }

        navgiate(item.link);
    }

    return (
        <div className=" top-0 bg-white max-h-96 min-h-20 w-full px-10 flex justify-between items-center ">
            <div className="flex-center gap-0.5">

                <h1 className={`bg-gradient-to-b from-red-200 to-red-700 bg-clip-text text-transparent font-bold text-xl uppercase font-montserrat tracking-wider`}>
                    Thoughts Flow
                </h1>
            </div>

            <div ref={navbarRef} className="flex-center gap-10">
                {navbarItems.map((item) => (
                    <Link
                        key={item.title}
                        to={item.link}
                        className={`text-red-400 font-montserrat flex-center cursor-pointer hover:font-bold`}
                        onClick={() => handleNavbarItemClick(item)}
                    >
                        {item.title}
                    </Link>
                ))}
            </div>
            <div className="flex-center gap-10">
                <Link to="/login" className={`text-red-400 font-montserrat flex-center cursor-pointer hover:font-bold`}>
                    Login
                </Link>
                <Link to="/register" className={`text-red-400 font-montserrat flex-center cursor-pointer hover:font-bold`}>
                    Register
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
