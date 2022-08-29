import React from 'react';

import usePeople from './context/usePeople';

const Favorite = () => {
    const { favorites } = usePeople();

    return (
        <div>
            <h1 className="text-center py-4 text-xl font-bold text-cyan-800">Mis Personajes Favoritos de Star Wars</h1>
            <div className='flex flex-wrap'>
                {favorites.length > 0 ?
                    favorites.map((favoite, i) => {
                        return <Card key={i} p={favoite} />
                    }) : null}
            </div>
        </div>
    );
};

export default Favorite;