import React from 'react'
import './HeaderLink.css'
import {Avatar} from "@material-ui/core"

function HeaderLink({Icon,title,avatar}) {
    return (
        <div className="headerLink">
            {Icon && <Icon className="headerLink_icon"/>}
            {avatar && <Avatar className="headerLink_icon" src={avatar}/>}
            <h3 className="headerLink_title">{title}</h3>
        </div>
    )
}

export default HeaderLink
