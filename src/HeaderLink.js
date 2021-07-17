import React from 'react'
import './HeaderLink.css'

function HeaderLink({Icon,title}) {
    return (
        <div className="headerLink">
            {Icon && <Icon className="headerLink_icon"/>}
            <h3 className="headerLink_title">{title}</h3>
        </div>
    )
}

export default HeaderLink
