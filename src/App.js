import React from 'react';
import ImageTiler from './containers/ImageTiler/ImageTiler';
import SettingsModal from './components/SettingsModal/SettingsModal';
import './index.css';

function App() {
  return (
    <div className='App'>
      <ImageTiler />
      <SettingsModal />
    </div>
  );
}

export default App;
