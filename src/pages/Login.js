import React from "react";
import { connect } from "react-redux";
import { authActions } from "../auth";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginForm: {
        username: "",
        password: ""
      }
    };
  }

  updateField(field, value) {
    this.setState(state => ({
      ...state,
      loginForm: {
        ...state.loginForm,
        [field]: value
      }
    }));
  }
  render() {
    const { login } = this.props;
    const {
      loginForm: { username, password }
    } = this.state;
    console.log(username);
    return (
      <div>
        <h1>Login</h1>
        <form
          onSubmit={e => {
            e.preventDefault();
            login({ username, password });
          }}>
          <input
            onChange={e => this.updateField("username", e.target.value)}
            type="text"
            placeholder="username"
          />
          <input
            onChange={e => this.updateField("password", e.target.value)}
            type="text"
            placeholder="password"
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  login: authActions.login
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
