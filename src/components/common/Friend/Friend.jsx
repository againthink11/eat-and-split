import React from 'react'
import Button from '../Button/Button'

const Friend = ({friend, handleSelectdFriend,  selectedUser}) => {
  return (
    <li className={selectedUser?.id === friend?.id ? 'selected': ''}>
        <img src={friend.image} alt={friend.name} />
        <h3>{friend.name}</h3>
        {friend.balance < 0 && <p className='red'>you awe {friend.name} {Math.abs(friend.balance)} $</p>}
        {friend.balance > 0 && <p className='green'>{friend.name} awes you {Math.abs(friend.balance)} $</p>}
        {friend.balance === 0 && <p>you and {friend.name} are even</p>}
        <Button onHandleClick={()=> handleSelectdFriend(friend.id)}>{selectedUser?.id === friend.id ? 'Close' : 'Select'}</Button>
    </li>
  )
}

export default Friend