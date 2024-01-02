import React from 'react';
import { Collapse, initTE, } from "tw-elements";
import logo from '@/imgs/caprica.png'
import { Link, useNavigate } from 'react-router-dom';
import { userService } from '@/_services/userService';
initTE({ Collapse });

const Header = () => {

    let navigate = useNavigate();
    const logout = () => {
        userService.logout()
        navigate('/')
    }
    return (
        <div>
            <nav
            className="relative flex w-full flex-nowrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:flex-wrap lg:justify-start lg:py-4"
            data-te-navbar-ref>
            <div className="flex w-full flex-wrap items-center justify-between px-3">
                <div className="ml-2">
                <a className="text-xl text-neutral-800 dark:text-neutral-200" href='/'
                    ><img width="100px" src={ logo } alt="" /></a>
                </div>

                <button
                className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
                type="button"
                data-te-collapse-init
                data-te-target="#navbarSupportedContent2"
                aria-controls="navbarSupportedContent2"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="[&>svg]:w-7">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-7 w-7">
                    <path
                        d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" />
                    </svg>
                </span>
                </button>
                <div
                className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
                id="navbarSupportedContent2"
                data-te-collapse-item>
                <ul
                    className="list-style-none mr-auto flex flex-col pl-0 lg:mt-1 lg:flex-row"
                    data-te-navbar-nav-ref>
                    <li
                    className="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1"
                    data-te-nav-item-ref>
                    <Link className="p-0 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400" data-te-nav-link-ref to="/">Accueil</Link>
                    </li>
                    {userService.isConnected() && (
                    <li
                    className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1"
                    data-te-nav-item-ref>
                    <a
                        className="p-0 cursor-pointer text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400" href='#!'
                        onClick={logout}
                        data-te-nav-link-ref
                        >Deconnexion</a>
                    </li>
                    )}
                    {userService.isConnected() && (
                    <li
                    className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1"
                    data-te-nav-item-ref>
                    <Link to="/ships/list"
                        className="p-0 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                        data-te-nav-link-ref
                        >Liste des vaisseaux</Link>
                    </li>
                    )}
                    {userService.isConnected() && (
                    <li
                    className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1"
                    data-te-nav-item-ref>
                    <a
                        className="p-0 text-amber-600 font-bold transition duration-200 hover:text-amber-600 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400" href='/'
                        data-te-nav-link-ref
                        >Bonjour {userService.getFirstName()} {userService.getName()}</a>
                    </li>
                    )}
                    {!userService.isConnected() && (
                    <li
                    className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1"
                    data-te-nav-item-ref>
                    <Link to="/login"
                        className="p-0 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                        data-te-nav-link-ref
                        >Connexion</Link>
                    </li>
                    )}
                    {!userService.isConnected() && (
                    <li
                    className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1"
                    data-te-nav-link-ref>
                    <Link to="/register"
                        className="p-0 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                        >inscription</Link>
                    </li>
                    )}
                </ul>
                </div>
            </div>
            </nav>
        </div>
    );
};

export default Header;