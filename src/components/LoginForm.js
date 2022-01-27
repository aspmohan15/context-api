import React, { useState } from "react";
import { useUserContext } from "../context/useContext";
// import { useForm } from "react-hook-form";
import './style.css'


// intial value of Guest user
const initialstaeUser = {
  username: "",
  password: ""
}
const LoginForm = () => {

  // destructure the login function from context
  const { logIn } = useUserContext()
  const [userDetails, setUserDetails] = useState(initialstaeUser);


  //form handle
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  //to store the data on onchange
  const onchangevalue = (e) => {
    const { value, name } = e.target

    // set the value of user details
    setUserDetails({
      ...userDetails, [name]: value
    })
  }

  const onSubmitClick = (e) => {
    logIn(userDetails.username)

  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit} className="login__form">
        <h1>Login</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <br></br>
            <input
              id="username"
              type="text"
              name="username"
              placeholder="Username"
              onChange={onchangevalue}

            />
          </div>
          <br></br>

          <div className="field">
            <label>Password</label>
            <br></br>

            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              onChange={onchangevalue}


            />
          </div>
          <br></br>


          <button className="fluid ui button blue" onClick={onSubmitClick}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;