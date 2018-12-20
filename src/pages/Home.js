import React from "react";
import { connect } from "react-redux";
import { authActions } from "../auth";

const Home = ({ username, logout }) => (
  <div>
    <h1>Home</h1>
    welcome {username}
    <a
      href="#"
      onClick={e => {
        e.preventDefault();
        return logout();
      }}>
      Logout
    </a>
  </div>
);

const mapDispatchToProps = {
  logout: authActions.logout
};

const mapStateToProps = state => ({
  username: state.auth.username
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
