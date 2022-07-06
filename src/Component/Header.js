import React, {useState} from 'react';
import './Header.css';
import REACTLOGO from '../images/pngwing.com.png';
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallICon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationIcon from "@material-ui/icons/Notifications";
import Avatar from '@material-ui/core/Avatar';
import {Link} from "react-router-dom";


function Header() {
  const [inputSearch, setInputSearch] = useState('');
  return (
    <div className= "header">
     <div className="header__left">
        <MenuIcon/>
        <Link to="/">
          <img className='header__logo' src= {REACTLOGO}  alt=""/>
        </Link>
     </div>
      
      <div className="header__input">
        <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} type="text" placeholder='Search'/>
        <Link to={`/search/${inputSearch}`}>

        <SearchIcon className='header__inputButton'/>
        </Link>
        
      </div>
      <div className="header__icons">
        <VideoCallICon className='header__icon'/>
        <AppsIcon className='header__icon'/>
        <NotificationIcon className='header__icon'/>
        <Avatar/>
      </div>

    </div>
  )
}

export default Header