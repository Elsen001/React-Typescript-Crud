import React from 'react';
import {useState} from "react"
import './App.css';
import Table from './components/Table';
import Form from './pages/Form';
import { User } from './types/Type';
import Edit from './pages/Edit';
import { Provider } from 'react-redux';


function App() {
  const [userList,setUserList]=useState([] as User[])
  const [data,setData]=useState({} as User)

  const addUser =(data:User)=>{
        setUserList([...userList,data])
  }

  const deleteUser = (data: User) => {
    const updatedUserList = userList.filter((user) => user.id !== data.id);
    setUserList(updatedUserList);
  }

  const editUserData = (data:User)=>{
    setData(data)
  }

  const editUser = (data: User) => {
    const updatedUserList = userList.map((user) =>
      user.id === data.id ? data : user
    );
    setUserList(updatedUserList);
  };
  

  return (
    <>
       <Table editUserData={editUserData} userList={userList} deleteUser={deleteUser} />
       <Form userList={userList}  addUser={addUser}/>
       <Edit data={data} editUser={editUser}/>
    </>
  );
}

export default App;
