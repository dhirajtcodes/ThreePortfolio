import React, { useState } from "react";
import { styles } from "../styles/style";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar: React.FC = () => {
    const [active, setActive] = useState<string>();
    const [toggle, setToggle] = useState<boolean>(false);
    return (
        <nav
            className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
        >
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link
                    to="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <p className="text-white text-[18px] font-bold cursor-pointer flex">
                        Dhiraj &nbsp;
                        <span className="sm:block hidden"> | Developer</span>
                    </p>
                </Link>

                <ul className="list-none hidden sm:flex flex-row gap-10">
                    {navLinks.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className={`${
                                    active == item.title
                                        ? "text-white"
                                        : "text-secondary"
                                } hover:text-white text-[18px] font-medium cursor-pointer`}
                                onClick={() => setActive(item.title)}
                            >
                                <a href={`#${item.id}`}>{item.title}</a>
                            </li>
                        );
                    })}
                </ul>
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img
                        src={menu}
                        alt={toggle ? close : menu}
                        className="w-[28px] h-[28px] object-contain cursor-pointer"
                        onClick={() => setToggle(!toggle)}
                    />

                    <div
                        className={`${
                            !toggle ? "hidden" : "flex"
                        } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}
                    >
                        <ul className="list-none flex justify-end items-start flex-col gap-4">
                            {navLinks.map((item, index) => {
                                return (
                                    <li
                                        key={index}
                                        className={`${
                                            active == item.title
                                                ? "text-white"
                                                : "text-secondary"
                                        } font-poppins font-medium cursor-pointer text-[16px]`}
                                        onClick={() => {
                                            setToggle(!toggle);
                                            setActive(item.title);
                                        }}
                                    >
                                        <a href={`#${item.id}`}>{item.title}</a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
