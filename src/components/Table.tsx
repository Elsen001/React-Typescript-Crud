import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import { User } from '../types/Type'

type Props = {
  userList: User[]
  deleteUser: (data: User) => void
  editUserData: (data: User) => void
}

const Table = (props: Props) => {
  const { userList, deleteUser, editUserData } = props

  useEffect(()=>{

  },[editUserData])
  
  return (
    <div className='App mt-5'>
      <Link to="/form"><button className='btn btn-primary px-5'>CREATE +</button></Link>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Firstname</th>
            <th scope="col">Lastname</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {
            userList.map((user, i) => (
              <tr key={i}>
                <th scope="row">{user.id}</th>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
                <td><button onClick={() => deleteUser(user)} className='btn btn-danger px-3'>delete</button></td>
                <td><button onClick={() => editUserData(user)} className='btn btn-success px-4'>edit</button></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Table
