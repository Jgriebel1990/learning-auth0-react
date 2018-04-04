import React from 'react';

const Profile = props =>(
    <div>
        <h1>Nickname: {props.profile.nickname}</h1>
        <img src={props.profile.picture} style={{borderRadius: 100}}/>
    </div>
)

export default Profile;