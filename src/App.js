import React from 'react';
import ImageTiler from './containers/ImageTiler/ImageTiler';
import SettingsModal from './components/SettingsModal/SettingsModal';

function App() {
  return (
    <div className='App'>
      <ImageTiler />
      <SettingsModal />
    </div>
  );
}

export default App;
