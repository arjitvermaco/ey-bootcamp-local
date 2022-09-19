import React,{useEffect, useState} from 'react'
import './App.css'
export default function App() {

  let [newUser,setNewUser] = useState({
    firstName:"",
    lastName : "",
    age:"",
    location:"",
    pinCode:"",
    password:"",
    option:""
  })

  let [allUsers,setAllUsers] = useState(getLSStatus());

  function getLSStatus(){
    if(localStorage.getItem('users')){
      return JSON.parse(localStorage.getItem('users'))
    }else{
      localStorage.setItem('users',JSON.stringify([]));
      return JSON.parse(localStorage.getItem('users'))
    }
  }

  function saveUserToLS(users){
    localStorage.setItem('users',JSON.stringify(users))
  }

  function getUsersFromLS(){
    setAllUsers(JSON.parse(localStorage.getItem('users')))
  }

  useEffect(()=>{
    console.log(newUser)
  },[newUser])

  function handleSubmit(event){
   event.preventDefault();
   console.log(newUser);
   //Update the local array for all users
   setAllUsers([...allUsers,newUser]);
   // Upload the localstorage with the updated user
   saveUserToLS([...allUsers,newUser]);
   //Get all the updated users from local storage
   getUsersFromLS();
   //Clear the form
   setNewUser({
    firstName:"",
    lastName : "",
    age:"",
    location:"",
    pinCode:"",
    password:"",
    option:""
  })
  }

  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <input type="text" required value={newUser.firstName} onChange={(event)=>{
            setNewUser({...newUser,firstName:event.target.value})
        }} placeholder="Enter your First Name"/>
        <input type="text" required  value={newUser.lastName} onChange={(event)=>{
            setNewUser({...newUser,lastName:event.target.value})
        }}   placeholder="Enter your Last  Name"/>
        <input type="text" required value={newUser.age} onChange={(event)=>{
            setNewUser({...newUser,age:event.target.value})
        }}  placeholder="Enter your Age"/>
        <input type="text" required value={newUser.location} onChange={(event)=>{
            setNewUser({...newUser,location:event.target.value})
        }}  placeholder="Enter your Location"/>
        <input type="text" required value={newUser.pinCode} onChange={(event)=>{
            setNewUser({...newUser,pinCode:event.target.value})
        }}  placeholder="Enter your Pincode"/>
        <input type="password" value={newUser.password} onChange={(event)=>{
            setNewUser({...newUser,password:event.target.value})
        }}  placeholder="Enter your Password"/>
        <select value={newUser.option} onChange={(event)=>{
            setNewUser({...newUser,option:event.target.value})
        }} >
          <option value="Option 1">Option 1</option>
          <option  value="Option 2">Option 2</option>
          <option  value="Option 3">Option 3</option>
          <option  value="Option 4">Option 4</option>
          <option  value="Option 5">Option 5</option>
        </select>
        <button type='submit'>Save Details</button>
      </form>
      <div>
        <table>
          <thead>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Age</th>
              <th>Location</th>
              <th>Pincode</th>
            </tr>
          </thead>

          <tbody>
           
            {allUsers.map((user)=>{
                return(
                  <tr>
                  <td> {user.firstName}</td>
                  <td> {user.lastName}</td>
                  <td> {user.age}</td>
                  <td> {user.location}</td>
                  <td> {user.pinCode}</td>
                  </tr>
                )
            })}

          </tbody>
        </table>
      </div>
    </div>
  )
}