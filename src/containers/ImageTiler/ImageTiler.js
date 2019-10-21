import React from 'react';
import Aux from '../../hoc/Auxiliary';
import TilerBody from '../../components/TilerBody/TilerBody';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

const ImageTiler = (props) => {
    return (
        <Aux>
            {/* Navbar? */}
            <Toolbar></Toolbar>
            <main className="content">
                <TilerBody />
            </main>
        </Aux>
    );
};

export default ImageTiler;
