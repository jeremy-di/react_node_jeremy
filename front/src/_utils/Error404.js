import React from 'react';

const error404 = () => {
    return (
        <div>
            <div
            className="rounded-lg bg-neutral-100 p-6 text-neutral-700 shadow-lg dark:bg-neutral-600 dark:text-neutral-200 dark:shadow-black/30">
                <h2 className="mb-5 text-3xl font-semibold">Erreur 404</h2>
                <p>
                    Nous ne trouvons pas la page que vous souhaitez
                </p>
                <hr
                    className="my-6 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-30" />
                <p className="mb-4">
                    Verifiez l'url et voyez si il n'ya pas d'erreurs
                </p>
                <a href="d">
                    <button
                        type="button"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        className="rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                        retour A l'accueil
                    </button>
                </a>
            </div>
        </div>
    );
};

export default error404;