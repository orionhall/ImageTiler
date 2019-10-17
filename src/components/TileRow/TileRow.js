import React from 'react';
import Tile from '../Tile/Tile';
import '../../ImageTiler.css';

const TileRow = (props) => {
    return (
        <div className="tileRow">
            {props.rowPhotos.map((photo) => {
                return (
                    <Tile key={photo.id} alt={photo.id} src={photo.src} />
                );
            })}
        </div>
    );
};

export default TileRow;
