import React from 'react';
import Aux from '../../hoc/Auxiliary';
import TileRow from '../TileRow/TileRow';
import '../../ImageTiler.css';

const TilerBody = (props) => {
    let formattedPhotos = [];
    const { photos } = props;
    if (photos) {
        photos.forEach((photo) => {
            if (formattedPhotos[photo.rowNumber]) {
                formattedPhotos[photo.rowNumber].push(photo);
            } else {
                formattedPhotos.push([ photo ]);
            }
        });
    }

    return (
        <Aux>
            <div className="tilerBody">
                {formattedPhotos.map((rowPhotos, index) => {
                    return (
                        <TileRow key={index} rowPhotos={rowPhotos} />
                    )
                })}
            </div>
        </Aux>
    );
};

export default TilerBody;