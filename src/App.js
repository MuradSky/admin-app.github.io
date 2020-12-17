import React, { useState, useEffect } from 'react';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';
import Filter from './forms/Filter';
import { mockUsersData } from "./tables/mockUsersData";


const App = () =>{
  
  if(localStorage.getItem('userData') == null) {
    localStorage.setItem('userData', JSON.stringify(mockUsersData));
  }

  const localUsersData = JSON.parse(localStorage.getItem('userData'));
  const [users, setUsers] = useState(localUsersData);
  const [editing, setEditing] = useState(false);
  const initFormState = {id: null, email: '', password: '', tel: '', user: '', status: ''}
  const [currentUser, setCurrentUser] = useState(initFormState)
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('')
  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(users))
  })
  const addUser = (user) => {

    user.id = users[users.length - 1].id + 1
    const date = new Date(),
          dateDay = date.getDate(),
          dateMonth = date.getMonth(),
          dateYear = date.getFullYear();
    user.createDate = `${dateDay}.${dateMonth + 1},${dateYear}`;
    setUsers([...users, user])
  } 
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
    users.splice(--id, 1)
    users.map((user,i) => user.id = ++i)
  }
  const editUser = (user)=> {
    setEditing(true)

    setCurrentUser({
      id: user.id,
      email: user.email,
      password: user.password,
      tel: user.tel,
      user: user.user,
      status: user.status,
    })
  }
  const updateUser = (id, updatedUser) => {
    setEditing(false)
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
  
    const i = --id
    const date = new Date(),
          dateDay = date.getDate(),
          dateMonth = date.getMonth(),
          dateYear = date.getFullYear();
    updatedUser.createDate = users[i].createDate
    updatedUser.updateDate = `${dateDay}.${dateMonth + 1},${dateYear}`;
    users.splice(i, 1, updatedUser);
  }

  const handleSearch = (e) => {
    const searchVal = e.target.value;
    setSearch(searchVal);
  }

  const handleFilter = (e) => {
    const filterval = e.target.value;
    setFilter(filterval)
  }

  // Filtereds Table List
  let userTable = users,
      searchSrting = search.trim().toLowerCase(),
      filterString = filter.trim(),
      regexpTel = /^\d+$/;

  userTable = userTable.filter((e)=> e.status.toLowerCase().match(filterString));
  if(filterString === 'all') {
    userTable = users;
  } else if(searchSrting.match(regexpTel)) {
    userTable = userTable.filter((e)=> e.tel.toLowerCase().match(searchSrting))
  } else if(searchSrting.length > 0) {
    userTable = userTable.filter((e)=> e.email.toLowerCase().match(searchSrting))
  } 

  return (
    <div className="container">
      <div className="flex-row">
        <div className="flex-large">
          { editing ? (
            <>
              <h2 className="title">Редактировать пользователя</h2>
              <EditUserForm 
                setEditing={setEditing} 
                currentUser={currentUser}
                updateUser={updateUser}
                editing={editing}
              />
            </>
          ) : (
          <>
              <h2 className="title">Добавить пользователя</h2>
              <AddUserForm addUser={addUser} />
          </>
          )

          }
        </div>
        <div className="flex-large">
          <h2 className="title">Просмотр пользователей</h2>
          <Filter 
            userTable={userTable}
            handleSearch={handleSearch}
            onClick={handleFilter}
          />
          <UserTable users={userTable} deleteUser={deleteUser} editUser={editUser}/>
        </div>
      </div>
    </div>
  );

}

export default App;
