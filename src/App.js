
import './App.css';
import FriendList from './components/common/FriendList/FriendList';
import FromAddFriend from './components/pages/FormAddFriend/FromAddFriend';
import FormSplitBill from './components/pages/FormSplitBill/FormSplitBill';
import Button from './components/common/Button/Button';
import { useState } from 'react';


const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
function App() {
  const [allFriends, setAllFriends] = useState(initialFriends);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [selectedUser, setSelectedUser] = useState({});
  
  // Split bill form 
  const [totalBill, setTotalBill] = useState('');
  const [userExpense, setUserExpense] = useState('');
  const [friendsExpense, setFriendsExpense] = useState('');
  const [payingExpense, setPayingExpense] = useState('you');
  const [showSplitForm, setShowSplitForm] = useState(false);

  
  const handleAddFriend = () => {
    setShowForm((prevState) => !prevState)
  }
  const handleGetFriend = () => { 
      setAllFriends((acc) => [...acc, {id : Math.random(), name, image, balance : 0}] )
      setName('')
      setImage('')
  }
  const handleSelectdFriend = (id) => { 
    const seletedItem = allFriends.find((item) => item.id === id)
    setSelectedUser(seletedItem)
      setShowSplitForm((prevState) => !prevState)
      setTotalBill('')
      setUserExpense('')
      setFriendsExpense('')
      setPayingExpense('you')
    console.log(seletedItem)
  }
  const handleSplitBill = () => {
    // console.log(allFriends, 'allFriends list')
    if(payingExpense === 'you'){
     const Extra =  totalBill - userExpense;
     setAllFriends(allFriends.map((item) => item.id === selectedUser.id ? {...item , balance:Extra + item.balance}: item))
    //  console.log('list', allFriends)
    //  console.log('you are paying', Extra, 'extra')
    }
    else if(payingExpense === selectedUser.name){
      const Extra =  totalBill - friendsExpense;
      setAllFriends(allFriends.map((item) => item.id === selectedUser.id ? {...item , balance:-(Extra - item.balance)}: item))
      // console.log('other is paying', Extra, 'extra', payingExpense )
    }
    const splitedBill = {totalBill, userExpense, friendsExpense, friendsExpense}
    // console.log('split bill', splitedBill, userExpense)
    // setTotalBill('');
    // setUserExpense('');
    // setFriendsExpense('');
    // setPayingExpense('');
    
  }

  return (
    <div className="App">
      <div className='sidebar'>
        <FriendList friend={allFriends} handleSelectdFriend={handleSelectdFriend} selectedUser={selectedUser}/>
        <FromAddFriend showForm={showForm} onHandleGetFriend={handleGetFriend} name={name} setName={setName} image={image} setImage={setImage} />
        <Button onHandleClick={handleAddFriend}>{showForm ? 'Close' : 'Add Friend'}</Button>
      </div>
      {showSplitForm &&
        <FormSplitBill selectedUser={selectedUser} handleSplitBill={handleSplitBill} totalBill={totalBill} setTotalBill={setTotalBill} userExpense={userExpense} setUserExpense={setUserExpense} friendsExpense={friendsExpense} setFriendsExpense={setFriendsExpense} payingExpense={payingExpense} setPayingExpense={setPayingExpense}/>
       }
    </div>
  );
}

export default App;