import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";


const UsersList = ({ users, selectUser, deleteUser }) => {
  return (
    <ul>
      <h1>Users</h1>
      <div className="list">
        {users.map((user) => (
          <li key={user.id} className='list-element'>
            <h3>{user.first_name}</h3>
            <div className="user-container">
              <b>Last Name: </b><br />
              {user.last_name}
            </div>
            <div className="user-container">
              <b>Email: </b><br />
              {user.email}
            </div>
            <div className="user-container">
              <b>Birthday: </b><br />
              {user.birthday}
            </div>
            <button onClick={() => selectUser(user)} className='button-list'><a href="#miModal"><FaEdit className="button-icon"/></a></button>
            <button onClick={()=>deleteUser(user.id)} className='button-list'><a href="#"><FaTrashAlt className="trash"/></a></button>
          </li>
        ))}
      </div>
    </ul>
  );
};

export default UsersList;
