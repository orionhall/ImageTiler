import React from 'react';
import Tile from '../Tile/Tile';
import '../../ImageTiler.css';

const TileRow = (props) => {
    return (
        <div className="tileRow">
            {props.rowPhotos.map((photo) => {
                return (
                    <Tile key={photo.title} alt={photo.title} src={photo.src} />
                );
            })}
        </div>
    );
};

export default TileRow;
