import React, {useState} from 'react';
import AddUsers from './components/Users/AddUsers';
import UsersList from './components/Users/UsersList';


function App() {

  const [usersList, setUsersList]= useState([])

  const addUserHandler = (name, age) =>{
    setUsersList((prevUsersList)=>{
      return [...prevUsersList, {name: name, age: age}]
    })
  }

  return (
    <div>
      <AddUsers onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
