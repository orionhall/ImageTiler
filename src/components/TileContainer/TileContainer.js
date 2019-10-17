import React from 'react';
import Aux from '../../hoc/Auxiliary';
import Tile from '../Tile/Tile';
import image1 from '../../assets/images/1.jpg';
import image2 from '../../assets/images/2.jpg';
import image3 from '../../assets/images/3.jpg';

// Gonna send an array of image objects (with src property) to the TileContainer
class TileContainer extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
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
                }
            ]
        }
    };


    render () {
        return (
            <Aux>
                {this.state.photos.map((img) => {
                    return (
                        <Tile key={img.id} alt={img.id} src={img.src}></Tile>
                    )
                })}
            </Aux>
        );
    }; 
}

export default TileContainer;