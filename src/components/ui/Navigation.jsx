import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <>
            <nav className="flex items-center justify-between flex-wrap bg-teal-500 pl-6 fixed w-full">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
                    <span className="font-semibold text-xl tracking-tight">Tailwind CSS</span>
                </div>
                <div className="w-auto flex justify-end">
                    <div className="text-sm flex-grow">
                        <NavLink to="/home" className="block inline-block lg:mt-0 text-teal-200 hover:text-white ml-4 pr-4">
                            Home
                        </NavLink>
                        <NavLink
                            to="/favorite"
                            className="block inline-block lg:mt-0 text-teal-200 hover:text-white ml-4 pr-4">
                            Favorite
                        </NavLink>

                    </div>
                </div>
            </nav>
            <span className='py-6 block'></span>
        </>
    );
};

export default Navigation;