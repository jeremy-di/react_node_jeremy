import React, { useState } from 'react';
import logo from '@/imgs/caprica.png'
import { Link, useNavigate } from 'react-router-dom';
import { userService } from '@/_services/userService';

const Login = () => {
    let navigate = useNavigate()
    const [credentials, setCredentials] = useState({
        email : "",
        password : ""
    })

    const onChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        setCredentials({
            ...credentials,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        userService.login(credentials)
        .then(res => {
            userService.saveToken(res.data.token)
            userService.saveName(res.data.name)
            userService.saveFirstName(res.data.firstName)
            navigate("/")
        })
        .catch(error => console.log(error))
    }

    return (
        <section className="gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
        <div className="container m-auto h-full p-10">
            <div
            className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
            <div className="w-full">
                <div
                className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                <div className="g-0 lg:flex lg:flex-wrap">

                    <div className="px-4 md:px-0 lg:w-6/12">
                    <div className="md:mx-6 md:p-12">

                        <div className="text-center">
                        <img
                            className="mx-auto w-48"
                            src={ logo }
                            alt="logo" />
                        <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                            Connexion
                        </h4>
                        </div>

                        <form onSubmit={onSubmit}>
                        <p className="mb-4">Veuillez vous identifier</p>

                        <div className="relative mb-4" data-te-input-wrapper-init>
                            <input
                            type="email"
                            className="peer block min-h-[auto] w-full rounded border-0 bg-slate-300 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            name="email"
                            value={credentials.email}
                            onChange={onChange}
                            placeholder="Username" />
                            <label
                            htmlFor="email"
                            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                            >Email
                            </label>
                        </div>


                        <div className="relative mb-4" data-te-input-wrapper-init>
                            <input
                            type="password"
                            className="peer block min-h-[auto] w-full rounded border-0 bg-slate-300 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            name="password"
                            value={credentials.password}
                            onChange={onChange}
                            placeholder="Password" />
                            <label
                            htmlFor="password"
                            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                            >Mot de passe
                            </label>
                        </div>


                        <div className="mb-12 pb-1 pt-1 text-center">
                            <button
                            className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                            type="submit"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                            style={{
                                background: "linear-gradient(to right, #FFAE00, #AD7600, #563A00, #000000)"
                            }}>
                            Se connecter
                            </button>
                        </div>


                        <div className="flex items-center justify-between pb-6">
                            <p className="mb-0 mr-2">Pas de compte ?</p>
                            <Link to="/register">
                            <button
                            type="button"
                            className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            S'inscrire
                            </button>
                            </Link>
                        </div>
                        </form>
                    </div>
                    </div>


                    <div
                    className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                    style={{background: "linear-gradient(to right, #FFAE00, #AD7600, #563A00, #000000)"}}>
                    <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                        <h4 className="mb-6 text-xl font-semibold">
                        Base de données des vaisseaux de la flotte coloniale
                        </h4>
                        <p className="text-sm">
                        Cette archive est reservée aux personnes autorisées. Tout manquement à cette rêgle sera suivi d'une peine pouvant aller jusqu'a 10 ans d'emprisonnement dans le pénitencier de Sagitaron.
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
};


export default Login;