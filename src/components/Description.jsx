import React, { useContext, useEffect } from 'react';
import PeopleContext from './context/PeopleProvider';
import {   useParams   } from "react-router-dom";

import Card from './ui/Card'

const Description = () => {
    const { person } = useContext(PeopleContext);
    let { name } = useParams();

    useEffect(()=> {
        console.log(person.films)
    }, []);

    return (
        <div>
            <h1 className="text-center py-4 text-xl font-bold text-cyan-800">Mas sobre {name}</h1>
            <table className='table-auto text-gray-700 text-base w-full text-left'>
                <tbody>
                    <tr>
                        <th>Genero</th><tr>{person.gender}</tr>
                        <th>Fecha Cumpleaños</th><tr>{person.birth_year}</tr>
                    </tr>    
                    <tr>
                        <th>Color Ojos</th><tr>{person.eye_color}</tr>
                        <th>Color Cabello</th><tr>{person.hair_color}</tr>
                    </tr>
                    <tr>
                        <th>Altura</th><tr>{person.height}</tr>
                        <th>Peso</th><tr>{person.mass}</tr>
                    </tr>
                    <tr>
                        <th>Color Piel</th><tr>{person.skin_color}</tr>
                    </tr>
                </tbody>
            </table>
            <h2 className='my-4 text-center font-xl font-bold'>Peliculas realizadas </h2>
            <div className='flex flex-wrap'>
            
                {person.films?.length > 0 ?
                    person.films?.map((_info, i) => {
                        return <Card key={i} p={_info} source="d" />
                    }) : null}
            </div>
        </div>
    );
};

export default Description;