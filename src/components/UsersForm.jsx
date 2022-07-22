import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTimesCircle } from "react-icons/fa";

const UsersForm = ({ getUsers, userSelected, deselectUser }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");

  useEffect(() => {
    if (userSelected !== null) {
      setName(userSelected.first_name);
      setLastName(userSelected.last_name);
      setEmail(userSelected.email);
      setPassword(userSelected.password);
      setBirthday(userSelected.birthday);
    }
  }, [userSelected]);

  const submit = (e) => {
    e.preventDefault();
    const newUser = {
      first_name: name,
      last_name: lastName,
      email: email,
      password: password,
      birthday: birthday,
    };
    if (userSelected !== null) {
      axios
        .put(
          `https://users-crud1.herokuapp.com/users/${userSelected.id}/`,
          newUser
        )
        .then(() => {
          getUsers();
          reset();
          deselectUser();
        });
    } else {
      axios
        .post(`https://users-crud1.herokuapp.com/users/`, newUser)
        .then(() => {
          getUsers();
          reset();
        });
    }
  };

  const clear = () => {
    reset();
    deselectUser();
  };

  const reset = () => {
    setName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setBirthday("");
  };

  return (
    <div>
      <div className="add">
        <a href="#miModal" className="add-text">
          Add New User
        </a>
      </div>
      <div id="miModal" className="modal">
        <form className="modal-contenido">
          <a href="#">
            <FaTimesCircle className="close-form" />
          </a>
          <h1>New User</h1>
          <div className="form__group field">
            <label htmlFor="name" className="form__label">
              Name
            </label>
            <input
              className="form__field"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form__group field">
            <label htmlFor="lastName" className="form__label">
              Last Name
            </label>
            <input
              className="form__field"
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="form__group field">
            <label htmlFor="email" className="form__label">
              Email
            </label>
            <input
              className="form__field"
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form__group field">
            <label htmlFor="pass" className="form__label">
              Password
            </label>
            <input
              className="form__field"
              type="text"
              id="pass"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form__group field">
            <label htmlFor="bairthday" className="form__label">
              Birthday
            </label>
            <input
              className="form__field"
              type="date"
              id="birthday"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
            />
          </div>
          <div className="buttons">
            <button onClick={submit} className="button-submit">
              submit
            </button>
            <button type="button" onClick={clear} className="button-clear">
              clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UsersForm;
