import React, { useContext } from 'react';
import PeopleContext from './context/PeopleProvider';

import Card from './ui/Card'

const Favorite = () => {
    const { favorites } = useContext(PeopleContext);

    return (
        <div  className="container mx-auto">
            <h1 className="text-center py-4 text-xl font-bold text-cyan-800">Mis Personajes Favoritos de Star Wars</h1>
            <div className='flex flex-wrap'>
                {favorites.length > 0 ?
                    favorites.map((favoite, i) => {
                        return <Card key={i} p={favoite} source="f" />
                    }) : null}
            </div>
        </div>
    );
};

export default Favorite;