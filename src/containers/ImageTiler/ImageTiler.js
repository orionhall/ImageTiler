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
            showSettingsModal: false,
            searchQuery: null
        };
    };

    componentDidMount() {
        getFlickrData({ text: this.state.searchQuery }).then((response) => {
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

    // This is not correct and makes it run endlessly
    // componentDidUpdate() {
    //     getFlickrData({ text: this.state.searchQuery }).then((response) => {
    //         let photos = response.photos ? response.photos : response.items;
    //         photos = photos.map((photo, index) => {
    //             let newPhotoObj = {...photo},
    //                 photoNumber = index + 1,
    //                 rowNumber = photoNumber % this.state.photosPerRow !== 0 ?
    //                     Math.floor(photoNumber / this.state.photosPerRow) :
    //                     (photoNumber / this.state.photosPerRow - 1);
    //             newPhotoObj.rowNumber = rowNumber;
    //             newPhotoObj.src = makePhotoURL(photo);
    //             return newPhotoObj;
    //         });
    //         this.setState({ photos });
    //     });
    // }

    toggleSettingsModal() {
        this.setState({ showSettingsModal: !this.state.showSettingsModal });
        console.log('Clicked!');
        console.log(this.state.showSettingsModal);
    }

    search() {
        this.setState({ searchQuery: 'Theodore Roosevelt' });
        console.log('it was clicked');
    }

    render() {
        return (
            <Aux>
                <Toolbar toggleModalHandler={this.toggleSettingsModal.bind(this)} />
                <main className="content">
                    <TilerBody photos={this.state.photos} />
                </main>
                <SettingsModal show={this.state.showSettingsModal}
                    close={this.toggleSettingsModal.bind(this)}
                    search={this.search.bind(this)}>
                    {/* Buttons and stuff for changing settings will go here, I guess */}
                    <div>Omg it's a modal (tbh I'm proud)</div>
                </SettingsModal>
            </Aux>
        ); 
    };
};

export default ImageTiler;
