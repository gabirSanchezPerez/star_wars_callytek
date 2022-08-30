import React, { useContext, useEffect } from 'react';
import PeopleContext from '../context/PeopleProvider';
import { useNavigate } from "react-router-dom";

const Card = ({ p, source }) => {

    let navigate = useNavigate();
    const { setPerson, _setFavorite, _delFavorite } = useContext(PeopleContext);
    const seeMore = (p) => {
        setPerson(p)
        navigate("/description/" + p.name, { replace: true });
    }

    return (
        <div className=" sm:w-full md:w-1/2 lg:w-1/3 p-2">
            {source === "d" ? (
                <>
                    <div className="rounded overflow-hidden shadow bg-gray-100">
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{p.name}</div>
                            <h2 className='w-full px-4 text-xl font-bold text-center mb-4'>{p?.title}</h2>
                            <p><span className='font-bold'>Director:</span> {p?.director}</p>
                            <p><span className='font-bold'>Productor:</span> {p?.producer}</p>
                            <p><span className='font-bold'>Descripcion:</span></p>
                            <p className='text-justify'>{p?.opening_crawl}</p>
                        </div>
                    </div>
                </>
            ) : (
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
                        <button onClick={() => { seeMore(p) }} className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-full">
                            <i className='fas fa-plus'></i> Info
                        </button>
                        <span>
                            {source === "h" ?
                                p.favorite ? <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-red-700 align-middle"><i className='fas fa-heart'></i></span> : <span onClick={() => { _setFavorite(p) }} className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 align-middle"><i className='fas fa-heart'></i></span> :
                                <span onClick={() => { _delFavorite(p) }} className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-red-700 align-middle"><i className='fas fa-trash'></i></span>}
                        </span>
                    </div>
                </div>
            )
            }


        </div >
    );
};

export default Card;