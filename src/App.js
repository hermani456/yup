import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';


function App() {
  const [usersList, setUsersList] = useState([])

  const addUserHandler = (uname, uage) =>{
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name: uname, age: uage}]
    })
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={usersList}/>
      {console.log(usersList)}
    </div>
  );
}

export default App;