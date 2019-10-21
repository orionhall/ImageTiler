import React from 'react';
import Aux from '../../hoc/Auxiliary';
import TilerBody from '../../components/TilerBody/TilerBody';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SettingsModal from '../../components/SettingsModal/SettingsModal';
import { getFlickrData, makePhotoURL } from '../../actions/getFlickrData';

class ImageTiler extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            photos: null,
            photosPerRow: 3,
            showSettingsModal: false
        };
    };

    componentDidMount() {
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

    toggleSettingsModal() {
        let showSettingsModal = this.state.showSettingsModal === false ? true : false;
        this.setState({ showSettingsModal });
        console.log('Clicked!');
        console.log(this.state.showSettingsModal);
    }

    render() {
        return (
            <Aux>
                <Toolbar toggleModalHandler={this.toggleSettingsModal.bind(this)} />
                <main className="content">
                    <TilerBody photos={this.state.photos} />
                </main>
                <SettingsModal show={this.state.show}/>
            </Aux>
        ); 
    };
};

export default ImageTiler;
