import React, { useContext, useEffect } from 'react';
import PeopleContext from '../context/PeopleProvider';
import { useNavigate } from "react-router-dom";

const Card = ({ p, source }) => {

    let navigate = useNavigate();
    const { moreInfo,  _setFavorite, _delFavorite } = useContext(PeopleContext);
    const seeMore = async (p) => {
        await moreInfo(p.url)
        setTimeout(() => {
            navigate("/description/" + p.name, { replace: true });
        }, 300)
        
    }
    console.log(p)
    return (
        <div className=" sm:w-full md:w-1/2 lg:w-1/3 p-2">
            {source === "d" ? (
                <>
                <div className="rounded overflow-hidden shadow bg-gray-100">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-center">{p.name}</div>
                        <table className='table-auto text-gray-700 text-base w-full'>
                            <tbody>
                                <tr>
                                    <th>Titulo</th>
                                    <td>{p.films?.title}</td>
                                </tr>
                                <tr>
                                    <th>Descripcion</th>
                                    <td>{p.films?.opening_crawl}</td>
                                </tr>
                                <tr>
                                    <th>Director</th>
                                    <td>{p.films?.director}</td>
                                </tr>
                                <tr>
                                    <th>Productor</th>
                                    <td>{p.films?.producer}</td>
                                </tr>
                            </tbody>
                        </table>
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
            )}


        </div>
    );
};

export default Card;