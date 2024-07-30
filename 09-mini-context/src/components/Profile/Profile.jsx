import React, { useContext } from 'react'
import UserContext from '../../context/UserContext';

function Profile() {
    const {user} = useContext(UserContext);
    if(!user){
        return (
            <h2>Not logged in</h2>
        );
    }
    return (
        <div>Profile : {user.username}</div>
    )
}

export default Profile