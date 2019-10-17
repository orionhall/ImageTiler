import React from 'react';
import Aux from '../../hoc/Auxiliary';
import TileRow from '../TileRow/TileRow';
import image1 from '../../assets/images/1.jpg';
import image2 from '../../assets/images/2.jpg';
import image3 from '../../assets/images/3.jpg';
import '../../ImageTiler.css';

class TilerBody extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            photosPerRow: 3,
            // Sample photos for now
            photos: [
                {
                    id: 1,
                    src: image1
                },
                {
                    id: 2,
                    src: image2
                },
                {
                    id: 3,
                    src: image3
                },
                {
                    id: 4,
                    src: image1
                },
                {
                    id: 5,
                    src: image2
                },
                {
                    id: 6,
                    src: image3
                },
                {
                    id: 7,
                    src: image1
                },
                {
                    id: 8,
                    src: image2
                },
                {
                    id: 9,
                    src: image3
                }
            ]
        }
    };


    render () {
        const numPhotos = this.state.photos.length,
            photosPerRow = this.state.photosPerRow,
            rowsNeeded = numPhotos % photosPerRow === 0 ? numPhotos / photosPerRow : Math.floor(numPhotos / photosPerRow ) + 1,
            formattedPhotos = [];
        for (let i = 1; i <= rowsNeeded; i++) {
            const maxThisRow = i * photosPerRow, // row 1 = 3, row 2 = 6
                minThisRow = (maxThisRow - photosPerRow) + 1, // row 1 = 1, row 2 = 4
                thisRowPhotos = this.state.photos.filter((photo) => {
                return photo.id >= minThisRow && photo.id <= maxThisRow;
            });
            formattedPhotos.push(thisRowPhotos);
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