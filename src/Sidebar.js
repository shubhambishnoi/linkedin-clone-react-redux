import React from 'react'
import "./Sidebar.css"
import {Avatar} from "@material-ui/core"

function Sidebar() {

    const recentTopic = (topic) => (
        <div className="sidebar_recentTopic">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29kZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt=""/>
                <Avatar className="sidebar_avatar"/>
                <h2>Shubham Bishnoi</h2>
                <h4>shubhambishnoi78@gmail.com</h4>
            </div>

            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who viewed you</p>
                    <p className="sidebar_statNumber">100</p>
                </div>

                <div className="sidebar_stat">
                    <p>Views on post</p>
                    <p className="sidebar_statNumber">500</p>
                </div>

            </div>

            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentTopic("frontend developer")}
                {recentTopic("programming")}
                {recentTopic("softwareengineering")}
            </div>
        </div>
    )
}

export default Sidebar
