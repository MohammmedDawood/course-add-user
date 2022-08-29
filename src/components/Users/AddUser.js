import React from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const addUserHandler = (e) => {
    e.preventDefault();
    // props.onAddUser(e.target.name.value, e.target.age.value);
    // e.target.name.value = "";
    // e.target.age.value = "";
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" name="username" />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" name="age" />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
