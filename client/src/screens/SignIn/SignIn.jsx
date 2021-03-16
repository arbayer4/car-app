import React, { useState } from "react";
import "./SignIn.css";
import { signIn } from "../../services/users";
import { useHistory } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";
import { Link } from "react-router-dom";

const SignIn = (props) => {
  const history = useHistory();

  const [form, setForm] = useState({
    username: "",
    password: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const onSignIn = (event) => {
    event.preventDefault();

    const { setUser } = props;

    signIn(form)
      .then((user) => {
        setUser(user);
      })
      .then(() => history.push("/mycars"))
      .catch((error) => {
        console.error(error);
        setForm({
          isError: true,
          errorMsg:
            "Invalid Credentials: Your Username or Password is incorrect. Try Again",
          username: "",
          password: "",
        });
      });
  };

  const renderError = () => {
    if (form.isError) {
      return (
        <div className="invalid-on-signin">
          <p>{form.errorMsg}</p>
          <button className="signin-btn" type="submit">
            Login
          </button>
        </div>
      );
    } else {
      return (
        <button className="signin-btn" type="submit">
          Login
        </button>
      );
    }
  };

  const { username, password } = form;

  return (
    <Layout user={props.user}>
      <div className="signin">
        <h3 className="sign-in">Login</h3>
        <form className="signin-form" onSubmit={onSignIn}>
          <input
            className="signin-input"
            required
            type="text"
            name="username"
            value={username}
            placeholder="Enter Username"
            onChange={handleChange}
          />
          <input
            className="signin-input"
            required
            name="password"
            value={password}
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
          {renderError()}
          <button className="orsignup-btn">
            <Link to="/sign-up">Create Account</Link>
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default SignIn;
