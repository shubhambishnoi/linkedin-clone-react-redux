import React from 'react'
import './Post.css'
import {Avatar} from "@material-ui/core"
import InputOption from './InputOption'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined'
function Post({name,description,msg,photourl}) {
    return (
        <div className="post">
            <div className="post_header">
                <Avatar />
                <div className="post_info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className="post_body">
                <p>{msg}</p>
            </div>

            <div className="post_buttons">
                <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like"/>
                <InputOption Icon={ChatOutlinedIcon} title="Comment"/>
                <InputOption Icon={ShareOutlinedIcon} title="Share"/>
                <InputOption Icon={SendOutlinedIcon} title="Send"/>
            </div>
        </div>
    )
}

export default Post;
