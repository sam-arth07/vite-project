import React from "react";
import { BiChevronRight,BiSearch } from 'react-icons/bi';
import { CiSearch } from "react-icons/ci";
import {IoMdArrowDropdown} from "react-icons/io";
import {RxHamburgerMenu} from 'react-icons/rx';
const NavSm = () => {
    return(
        <>
        <div className="text-white flex items-center justify-between">
            <div>
                <h3 className="text-2xl font-bold">It All Starts Here!</h3>
                <span className="text-xs text-gray-400 flex items-center">Surat <BiChevronRight /></span>
            </div>
            <div className="w-6 h-6">
                <BiSearch className="w-full h-full" />
            </div>
        </div>
        </>
    )
}
const NavMd = () => {
    return(
        <>
        <label className="relative block w-full">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg className="h-6 w-6 fill-slate-300" viewBox="0 0 20 20"><CiSearch /></svg>
            </span>
            <input className="w-full placeholder:text-slate-400 block bg-white border border-slate-300 rounded-sm py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for Movies, Events, Plays, Sports and Activities" type="search" name="search"/>
        </label>
        </>
    )
}
const NavLg = () => {
    return(
        <>
        <div className="container mx-auto px-4 flex items-center gap-4 justify-between">
            <div className="flex items-center w-1/2 gap-4">
                <div className="w-32 h-14">
                    <img className="w-full h-full" src="https://seeklogo.com/images/B/bookmyshow-logo-31BC3C7354-seeklogo.com.png" />
                </div>
                <div className="w-full">
                <label className="relative block">
                    <span className="sr-only">Search</span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg className="h-6 w-6 fill-slate-300" viewBox="0 0 20 20"><CiSearch /></svg>
                    </span>
                    <input className="w-full placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for Movies, Events, Plays, Sports and Activities" type="search" name="search"/>
                </label>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <span className="text-sm text-slate-200 font-normal flex items-center gap-1 hover:text-white cursor-pointer">Surat<IoMdArrowDropdown className="text-xl text-white"/></span>
                <button className="w-16 text-xs font-normal px-3 py-1 rounded bg-navCol-1000 text-slate-50">Sign in</button>
                <div className="text-slate-200 text-2xl hover:text-white cursor-pointer">
                <RxHamburgerMenu />
                </div>
            </div>
        </div>
        </>
    )
}

const Navbar = () => {
    return(
    <>
    <nav className="bg-navCol-700 px-4 py-2">
        <div className="md:hidden">
            {/* <--Mobile View--> */}
            <NavSm />
        </div>
        <div className="hidden md:flex lg:hidden">
            {/* <--Tablet View--> */}
            <NavMd />
        </div>
        <div className="hidden lg:flex">
            {/* <--Desktop View--> */}
            <NavLg />
        </div>
    </nav>
    </>
    )
}

export default Navbar;