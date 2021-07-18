import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderLink from './HeaderLink';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
    return (
        <div className="header">

            <div className="header_left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt=""/>
                <div className="header_search">
                        <SearchIcon/>
                        <input type="text"/>
                </div>
            </div>

            <div className="header_right">
                <HeaderLink Icon={HomeIcon} title="Home" />
                <HeaderLink Icon={SupervisorAccountIcon} title="My Network"/>
                <HeaderLink Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderLink Icon={ChatIcon} title="Messaging"/>
                <HeaderLink Icon={NotificationsIcon} title="Notifications" />
                <HeaderLink avatar="https://icon-library.com/images/coder-icon/coder-icon-26.jpg" title="me"/>
                
            </div>
        </div>
    )
}

export default Header
