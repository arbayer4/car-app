import React, { useEffect, useState } from "react";
import "./SignUp.css";
import { allUsers, signIn, signUp } from "../../services/users";
<<<<<<< HEAD
import { useHistory } from "react-router-dom";
=======
import { useHistory, Link, Redirect } from "react-router-dom";

>>>>>>> 7d0997fd94d39bb7cb914b9344a52633fa707e04
import Layout from "../../components/shared/Layout/Layout";

const SignUp = (props) => {
  const history = useHistory();

  const [form, setForm] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    passwordConfirmation: "",
    isError: false,
    errMsg: "",
  });
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const all = await allUsers();
      setUsers(all);
    };
    fetchUsers();
  }, []);

  const handleChange = (event) =>
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });

  const onSignUp = (event) => {
    event.preventDefault();
    const { setUser } = props;

    signUp(form)
      .then(() => signIn(form))
      .then((user) => setUser(user))
      .then(() => history.push("/"))
      .catch((error) => {
        console.error(error);
        setForm({
          email: "",
          phone: "",
          password: "",
          passwordConfirmation: "",
          isError: true,
          errMsg: "Sign Up Invalid",
        });
      });
  };
  const renderError = () => {
    const toggleForm = form.isError ? "danger" : "";
    if (form.isError) {
      return (
        <div className="invalid-on-signup">
          <p> {form.errMsg}</p>
          <button type="submit" className={toggleForm}>
            Create
          </button>
        </div>
      );
    } else if (form.password !== form.passwordConfirmation) {
      return <p className="invalid-on-signup">Passwords Do Not Match</p>;
    } else if (users.some((user) => user.username === form.username)) {
      return <p className="invalid-on-signup">Username Already Taken</p>;
    } else if (users.some((user) => user.email === form.email)) {
      return (
        <div>
          <p className="invalid-on-signup">
            Email Already Associated With Account.
          </p>
        </div>
      );
    } else {
      return (
        <button className="signup-btn" type="submit">
          Create
        </button>
      );
    }
  };

  const { email, username, password, passwordConfirmation, phone } = form;

  return (
    <Layout>
      <div className="signup">
        <form className="signup-form" onSubmit={onSignUp}>
          <h3 className="sign-up">Create Account</h3>
          <input
            className="signin-input"
            required
            type="text"
            name="username"
            value={username}
            placeholder="Username:"
            onChange={handleChange}
          />

          <input
            className="signin-input"
            required
            type="email"
            name="email"
            value={email}
            placeholder="Email:"
            onChange={handleChange}
          />

          <input
            className="signin-input"
            type="phone"
            name="phone"
            value={phone}
            placeholder="Phone Number:"
            onChange={handleChange}
          />

          <input
            className="signin-input"
            required
            name="password"
            value={password}
            type="password"
            placeholder="Password:"
            onChange={handleChange}
          />

          <input
            className="signin-input"
            required
            name="passwordConfirmation"
            value={passwordConfirmation}
            type="password"
            placeholder="Confirm Password:"
            onChange={handleChange}
          />
          {renderError()}
        </form>
      </div>
    </Layout>
  );
};

export default SignUp;
