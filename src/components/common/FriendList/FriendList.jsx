import React from 'react'
import Friend from '../Friend/Friend'

const FriendList = ({ friend, handleSelectdFriend, selectedUser }) => {
    return (
        <>
            <ul>
                {friend.map((item, i) => {
                    return (
                        <Friend friend={item} key={item.id} handleSelectdFriend={handleSelectdFriend} selectedUser={selectedUser}/>
                    )
                })}
            </ul>

        </>
    )
}

export default FriendList