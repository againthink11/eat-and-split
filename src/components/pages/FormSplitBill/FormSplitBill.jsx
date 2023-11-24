import React from 'react'
import Button from '../../common/Button/Button'

const FormSplitBill = ({
selectedUser, 
handleSplitBill,
totalBill,
setTotalBill,
userExpense,
setUserExpense,
friendsExpense,
setFriendsExpense,
payingExpense,
setPayingExpense,
}) => {
  console.log(selectedUser)
  return (
    <form className='form-split-bill'>
      <h2>Split a bill with {selectedUser.name}</h2>
      <label>💰 Bill Value</label>
      <input type="text" value={totalBill} onChange={(e)=>setTotalBill(e.target.value)}/>
      <label>🧑 your expense</label>
      <input  type="text" value={userExpense} onChange={(e)=>setUserExpense(e.target.value)}/>
      <label>🧔 {selectedUser.name || 'X'}'s expense</label>
      <input type="text" value={(totalBill - userExpense)} disabled onChange={setFriendsExpense(totalBill - userExpense)}/>
      <label>💰 who is paying the bill</label>
      <select value={payingExpense} onChange={(e)=> setPayingExpense(e.target.value)}>
        <option value="you" defaultChecked>You</option>
        <option value={selectedUser.name}>{selectedUser.name}</option>
      </select>
      <Button onHandleClick={handleSplitBill}>Split</Button>
    </form>
  )
}

export default FormSplitBill