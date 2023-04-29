import React from 'react';
import './App.css'

function Users({ avatar, url, username }) {
    return (
        <div className="user">
            <img src={avatar} alt="Profile" width="50" height="50" />
            <a href={url} target="_blank" rel="hellow">
                {username}
            </a>
        </div>
    )
}
export default Users;