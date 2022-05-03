import React from 'react'
import './SidebarOptions.css';
import Login from './Login'
import { Link } from 'react-router-dom';

function Logout({Icon}) {
   const logout = () => {
       return (<Link to={'/'}></Link>);
        
    }
  return (
    <div className='sidebarOption'>
        {Icon && <Icon className="sidebarOption__icon" />}
        <a href='/'>Logout</a> 
    </div>
  )
}   

export default Logout;