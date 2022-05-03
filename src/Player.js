import React from 'react';
import Body from './Body';
import Footer from './Footer';
import './Player.css';
import SideBar from './SideBar';

function Player({spotify}) {
  return (
    <div className='player'>
        <div className='player_body'>
            <SideBar />
            <Body spotify={spotify}/>
            {/* SideBar */}
            {/* Header */}  
            <Footer />
        </div>
        
        {/* Footer */}
    </div>
  )
}

export default Player