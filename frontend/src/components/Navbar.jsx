import { useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { NavbarData } from "../data/navbarData";

const Navbar = () => {
    const navbarItems = NavbarData();
    const navbarRef = useRef();
    const navgiate = useNavigate();
    const [blackNavbar, setBlackNavbar] = useState(false);

    const handleNavbarItemClick = (item) => {
        if (item.link === "/") {
            navgiate("/");
            setBlackNavbar(true);

            return;
        }

        const currentPath = useLocation().pathname;
        if (currentPath === item.link) {
            return;
        }

        navgiate(item.link);
        setBlackNavbar(false);
    }

    return (
        <div className="absolute top-0 max-h-96 min-h-20 w-full px-10 flex justify-between items-center ">
            <div className="flex-center gap-0.5">

                <h1 className={`${blackNavbar ? 'text-white' : 'text-black'} font-bold text-2xl font-montserrat tracking-wider`}>
                    Blogs App
                </h1>
            </div>

            <div ref={navbarRef} className="flex-center gap-10">
                {navbarItems.map((item) => (
                    <Link
                        key={item.title}
                        to={item.link}
                        className={`${blackNavbar ? 'text-white' : 'text-black'} font-montserrat flex-center cursor-pointer hover:font-bold`}
                        onClick={() => handleNavbarItemClick(item)}
                    >
                        {item.title}
                    </Link>
                ))}
            </div>
            <div className="flex-center gap-10">
                <Link to="/login" className={`${blackNavbar ? 'text-white' : 'text-black'} font-montserrat flex-center cursor-pointer hover:font-bold`}>
                    Login
                </Link>
                <Link to="/register" className={`${blackNavbar ? 'text-white' : 'text-black'} font-montserrat flex-center cursor-pointer hover:font-bold`}>
                    Register
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
