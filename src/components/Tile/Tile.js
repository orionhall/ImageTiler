import React from 'react';

const Tile = (props) => {
    return (
        <img className='tile' key={props.id} alt={props.id} src={props.src} />
    );
}

export default Tile;
