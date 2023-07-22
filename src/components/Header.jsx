import { useState } from "react";
import logo from "../../images/logo.svg";
import close from "../../images/icon-close.svg";
import hamburger from "../../images/icon-hamburger.svg";

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <header className="">
            <img
                src={hamburger}
                alt="open menu"
                className="md:hidden absolute z-50 top-7 left-5"
                onClick={() => setToggleMenu(true)}
            />
            <section
                className={
                    toggleMenu
                        ? "absolute z-50 top-0 md:left-10 w-full h-24 flex justify-start items-center md:text-white bg-white md:bg-transparent"
                        : "absolute z-50 top-0 md:left-10 w-full h-24 hidden md:flex justify-start items-center md:text-white bg-white md:bg-transparent"
                }
            >
                <ul className="flex justify-between items-center font-semibold w-full md:w-[350px] px-5 md:px-0">
                    <li>
                        <img src={logo} alt="company logo" className="hidden md:block" />
                        <img
                            src={close}
                            alt="company logo"
                            className="md:hidden"
                            onClick={() => setToggleMenu(false)}
                        />
                    </li>
                    <li className="cursor-pointer relative before:w-0 hover:before:absolute hover:before:bottom-0 hover:before:right-0 hover:before:w-[20px] hover:before:h-0.5 hover:before:bg-white">
                        home
                    </li>
                    <li className="cursor-pointer relative before:w-0 hover:before:absolute hover:before:bottom-0 hover:before:right-0 hover:before:w-[20px] hover:before:h-0.5 hover:before:bg-white">
                        shop
                    </li>
                    <li className="cursor-pointer relative before:w-0 hover:before:absolute hover:before:bottom-0 hover:before:right-0 hover:before:w-[20px] hover:before:h-0.5 hover:before:bg-white">about</li>
                    <li className="cursor-pointer relative before:w-0 hover:before:absolute hover:before:bottom-0 hover:before:right-0 hover:before:w-[20px] hover:before:h-0.5 hover:before:bg-white">contact</li>
                </ul>
            </section>
        </header>
    );
};

export default Header;
