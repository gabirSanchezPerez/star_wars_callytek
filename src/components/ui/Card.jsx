import React from 'react';

import usePeople from '../context/usePeople';

const Card = ({p}) => {

    const { _setFavorite, wait } = usePeople();

    return (
        <div className=" sm:w-full md:w-1/2 lg:w-1/3 p-2">

            <div className="rounded overflow-hidden shadow bg-gray-100">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-center">{p.name}</div>
                        <table className='table-auto text-gray-700 text-base w-full'>
                            <tbody>
                            <tr>
                                <th>Altura</th>
                                <td>{p.height}</td>
                            </tr>
                            <tr>
                                <th>Peso</th>
                                <td>{p.mass}</td>
                            </tr>
                            <tr>
                                <th>Año Nacimiento</th>
                                <td>{p.birth_year}</td>
                            </tr>
                            </tbody>
                        </table>
                </div>
                <div className="px-6 pt-4 pb-2 flex justify-between align-middle">
                    <button className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-full">
                        Mas información
                    </button>
                    <span>
                        <span onClick={() => {_setFavorite(p)}} className={p.favorite ? "inline-block rounded-full px-3 py-1 text-sm font-semibold text-red-700 align-middle" : "inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 align-middle"}><i className='fas fa-heart'></i></span>
                        <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-red-700 align-middle"><i className='fas fa-trash'></i></span>
                    </span>
                </div>
            </div>

        </div>
    );
};

export default Card;