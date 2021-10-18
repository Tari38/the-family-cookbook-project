import React from 'react';

import Header from './components/Header';
import WelcomePage from './pages/WelcomePage';
// import BGImage from "./images/white-parchment-paper-texture.jpg";

function App() {
  
return (
    <>
      <div className="App" id="bg-image">
        <div>
          <Header />
        </div>
        <div>
          <WelcomePage />
        </div>
      </div>
    </>
    )
  }

export default App;
