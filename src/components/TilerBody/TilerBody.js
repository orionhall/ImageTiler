import React from 'react';
import Aux from '../../hoc/Auxiliary';
import TileRow from '../TileRow/TileRow';
import { getFlickrData, makePhotoURL } from '../../actions/getFlickrData';
import '../../ImageTiler.css';

class TilerBody extends React.Component {
    
    constructor (props) {
        super(props);

        this.state = {
            photos: null,
            photosPerRow: 3
        };
    };

    componentDidMount () {
        getFlickrData().then((response) => {
            let photos = response.photos ? response.photos : response.items;
            photos = photos.map((photo, index) => {
                let newPhotoObj = {...photo},
                    photoNumber = index + 1,
                    rowNumber = photoNumber % this.state.photosPerRow !== 0 ?
                        Math.floor(photoNumber / this.state.photosPerRow) :
                        (photoNumber / this.state.photosPerRow - 1);
                newPhotoObj.rowNumber = rowNumber;
                newPhotoObj.src = makePhotoURL(photo);
                return newPhotoObj;
            });
            this.setState({ photos });
        });
    }
    
    render () {
        let formattedPhotos = [];
        if (this.state.photos) {
            this.state.photos.forEach((photo) => {
                if (formattedPhotos[photo.rowNumber]) {
                    formattedPhotos[photo.rowNumber].push(photo);
                } else {
                    formattedPhotos.push([ photo ]);
                }
            });
            console.log(formattedPhotos);
            // const numPhotos = this.state.photos.length,
            //     photosPerRow = this.state.photosPerRow,
            //     rowsNeeded = numPhotos % photosPerRow === 0 ? numPhotos / photosPerRow : Math.floor(numPhotos / photosPerRow ) + 1;
            // for (let i = 1; i <= rowsNeeded; i++) {
            //     const maxThisRow = (i * photosPerRow) - 1, // row 1 = 2, row 2 = 5
            //         minThisRow = maxThisRow - photosPerRow, // row 1 = 0, row 2 = 3
            //         thisRowPhotos = this.state.photos.filter((photo, index) => {
            //             return photo.id >= minThisRow && photo.id <= maxThisRow;
            //         });
            //     formattedPhotos.push(thisRowPhotos);
            // }
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
}

export default TilerBody;