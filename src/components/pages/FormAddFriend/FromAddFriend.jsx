import React from 'react'
import Button from '../../common/Button/Button'

const FromAddFriend = ({name, setName, image, setImage, showForm, onHandleGetFriend, error}) => {
  return (
    <form className={`form-add-friend ${showForm || `form-hidden` }`}>
        <label>👩🏽‍🤝‍👩🏽Friend Name</label>
        <div>
        <input type="text" value={name} onChange={e=> setName(e.target.value)}/>
        {error && <p className='red'>This field is required</p>}
        </div>
        <label>🌃Image Url</label>
        <input type="text" placeholder='https://i.pravatar.cc/48' value={image} onChange={setImage('https://i.pravatar.cc/48')}/>
        <Button onHandleClick={onHandleGetFriend}>Add</Button>
    </form>
  )
}

export default FromAddFriend