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
        let _peoples = peoples;
        const result = await getPeople(page);
        result.results?.map(( p ) => {
            _peoples.push({
                name: p.name,
                mass: p.mass,
                height: p.height,
                birth_year: p.birth_year,
                favorite: false
            })
        });
        setPeople(_peoples);
        if ( result.results.length < 10) {
            setPage(0)
        } else {
            setPage(page +1);
        }
        setWait(false);
    };

    const _delFavorite = ( p ) => {
        p.favorite = false;
        const f = favorites.filter(f => {
            if ( f.name !== p.name ) {
                return p
            }
        })
        setFavorite(f)
    }

    const _setFavorite = ( p ) => {
        p.favorite = true;
        _favorites = favorites;
        _favorites.push(p); 
        setFavorite(_favorites)

        const peo = peoples.map(peo => {
            if ( peo.name === p.name ) {
                peo.favotite = true
            }
            return peo
        })
        setPeople(peo)
    }

    return (
        <PeopleContext.Provider
            value={{
                _setPeople,
                wait,
                peoples,
                page,
                favorites,
                _setFavorite,
                _delFavorite
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
