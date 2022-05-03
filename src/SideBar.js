import React from 'react';
import './SideBar.css';
import SidebarOptions from './SidebarOptions';
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from './DataLayer';
import LogoutIcon from '@mui/icons-material/Logout';
import Logout from './Logout';

function SideBar() {
  const [{playlists}, dispatch] = useDataLayerValue(); 

  return (
    <div className='sidebar'>
        <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />

      <SidebarOptions Icon={HomeIcon} title='Home' /> 
      <SidebarOptions Icon={SearchIcon} title='Search' /> 
      <SidebarOptions Icon={LibraryMusicIcon} title='Your Library '/> 
      <Logout Icon={LogoutIcon}  />
      
      <br/>
      <strong className='sidebar__title'>Playlists</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOptions title={playlist.name} />
      ))}

    </div>
  )
}

export default SideBar; 