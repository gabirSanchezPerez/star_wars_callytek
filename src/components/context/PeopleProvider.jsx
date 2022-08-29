import React, { useState, useEffect, createContext } from 'react'

import { getPeople } from '../../Endpoint';
const PeopleContext = createContext()


const PeopleProvider = ({ children }) => {

    let _favorites = []
    const [peoples, setPeople] = useState([]);
    const [page, setPage] = useState(1);
    const [favorites, setFavorite] =  useState([]);
    const [wait, setWait] = useState(false);
    
    const _setPeople = async (page) => {
        setWait(true);
        let respPeople = peoples;
        //console.log(respPeople)
        const result = await getPeople(page);
        respPeople = result.results.map(( p ) => {
            return {
                name: p.name,
                mass: p.mass,
                height: p.height,
                birth_year: p.birth_year,
                favorite: false
            }
        });
        //console.log(respPeople)
        setPeople(respPeople);
        if ( result.results.length < 10) {
            setPage(0)
        } else {
            setPage(page +1);
        }
        setWait(false);
    };

    const _setFavorite = ( p ) => {
        p.favorite = true;
        
        _favorites.push(p); 
        setFavorite(_favorites)
        console.log(favorites)
    }

    return (
        <PeopleContext.Provider
            value={{
                _setPeople,
                wait,
                peoples,
                page,
                favorites,
                _setFavorite
            }}
        >
            {children}
        </PeopleContext.Provider>
    )
}

export {
    PeopleProvider
}

export default PeopleContext
