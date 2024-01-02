import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { shipService } from '@/_services/ship.service';

const OneShip = () => {

    const [ship, setShip] = useState(null)
    const [loaded, setLoaded] = useState(null)
    const [error, setError] = useState(null)

    const { _id } = useParams()

    useEffect(() => {
        shipService.getShip(_id)
        .then(res => {
            console.log(res.data)
            setShip(res.data)
            setLoaded(true)
        })
        .catch(error => {
            setError(error)
            setLoaded(true)
        })
    }, [_id])

    if ( !loaded ) {
        return(
            <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-warning motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status">
            <span
                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Loading...</span>
            </div>
        )
    } else if ( error ) {
        return(
            <div
            className="mb-4 rounded-lg bg-danger-100 px-6 py-5 text-base text-danger-700"
            role="alert">
            Vous avez une erreur de type : {error.response.status}
            </div>
        )
    } else {

        return (
            <div>
                <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-left text-sm font-light">
                            <thead className="border-b font-medium dark:border-neutral-500">
                                <tr>
                                <th scope="col" className="px-6 py-4">Nom du vaisseau</th>
                                <th scope="col" className="px-6 py-4">Code colonial</th>
                                <th scope="col" className="px-6 py-4">Type</th>
                                <th scope="col" className="px-6 py-4">Colonie affiliée</th>
                                <th scope="col" className="px-6 py-4">Commandant</th>
                                <th scope="col" className="px-6 py-4">Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b dark:border-neutral-500">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">{ship.name}</td>
                                <td className="whitespace-nowrap px-6 py-4">{ship.shipCode}</td>
                                <td className="whitespace-nowrap px-6 py-4">{ship.type}</td>
                                <td className="whitespace-nowrap px-6 py-4">{ship.colony}</td>
                                <td className="whitespace-nowrap px-6 py-4">{ship.commander}</td>
                                <td className="whitespace-nowrap px-6 py-4 whitespace-pre-wrap">{ship.description}</td>
                                </tr>
                                
                            </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='mt-5 text-center'>
                <Link to="/ships/list">
                <button
                type="button"
                class="inline-block rounded bg-warning px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#e4a11b] transition duration-150 ease-in-out hover:bg-warning-600 hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:bg-warning-600 focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:outline-none focus:ring-0 active:bg-warning-700 active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(228,161,27,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)]">
                Retour à la liste des vaisseaux
                </button>
                </Link>
                </div>
            </div>
        );
    }
    
};

export default OneShip;