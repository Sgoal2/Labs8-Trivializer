import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import "./Components.css";
import "./LandingPage.css";

class LandingPage extends React.Component {
  constructor() {
    super();
    this.state = {
      registerURL: "http://testsdepl.herokuapp.com/users/register",
      signinURL: "http://testsdepl.herokuapp.com/users/login",
      signup_username: "",
      signup_email: "",
      signup_password: "",
      signup_password2: "",
      signin_username: "",
      signin_password: "",
      username_error: "",
      email_error: "",
      password_error: "",
      confirm_error: ""
    };
  }

  redirect = e => {
    // Note from nicky: This redirect function, and the reload in it, is here because I was using <Link> before, and whenever I clicked it to direct it to /gameslist, the background would stay blurred as if the modal is still open. If there's a better fix for it, please let me know :)
    window.location.reload();
    this.props.history.push("/gameslist");
  };

  // Sets users input to local state
  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value, error: "" });
  };

  // Checks input credentials and returns 1 if successful, 0 if unsuccessful
  // There's a double checking below because I want to check several things: #1 if there's no errors AT ALL, return 1, and we get redirected. #2 if there is an error, show the flash message on what the error is (these errors are not mutually exclusive so I made several if statements, so like, not having a valid username doesn't mean the no valid email won't pop up. ) #3 there's an else statement in each one because if the user fills in something correctly, and does it again, it should check if that particular item is done, and if it is, the flash message for it should go away.
  validateRegister = () => {
    if (
      this.state.signup_password !== this.state.signup_password2 ||
      !this.state.signup_username ||
      !this.state.signup_email ||
      !this.state.signup_password
    ) {
      if (
        this.state.signup_password !== this.state.signup_password2 ||
        (!this.state.signup_password && !this.state.signup_password2)
      ) {
        this.setState({ confirm_error: "Passwords do not match, try again." });
      } else {
        this.setState({ confirm_error: "" });
      }
      if (!this.state.signup_username) {
        this.setState({ username_error: "Please enter a valid Username." });
      } else {
        this.setState({ username_error: "" });
      }
      if (!this.state.signup_email) {
        this.setState({ email_error: "Please enter an email address." });
      } else {
        this.setState({ email_error: "" });
      }
      if (!this.state.signup_password) {
        this.setState({ password_error: "Please enter a password." });
      } else {
        this.setState({ password_error: "" });
      }
      return 0;
    } else {
      return 1;
    }
  };

  validateSignin = () => {
    if (!this.state.signin_username || !this.state.signin_password) {
      if (!this.state.signin_username) {
        this.setState({ username_error: "Please enter a valid Username." });
      } else {
        this.setState({ username_error: "" });
      }
      if (!this.state.sign_password) {
        this.setState({ password_error: "Wrong password, please try again." });
      } else {
        this.setState({ password_error: "" });
      }
      return 0;
    } else {
      return 1;
    }
  };

  // Handles the submit call on the Register modal
  handleSubmit = e => {
    e.preventDefault();

    let credentials;
    let url;

    if (e.target.name === "register" && this.validateRegister()) {
      credentials = {
        username: this.state.signup_username,
        password: this.state.signup_password,
        email: this.state.signup_email
      };
      url = this.state.registerURL;
    } else if (e.target.name === "signin" && this.validateSignin()) {
      credentials = {
        username: this.state.signin_username,
        password: this.state.signin_password
      };
      url = this.state.signinURL;
    } else {
      return;
    }

    axios
      .post(url, {
        username: credentials.username,
        password: credentials.password,
        email: credentials.email || ""
      })
      .then(res => {
        const token = res.data;

        sessionStorage.setItem("jwt", token);
        this.redirect();
      })
      .catch(err => {
        console.log("err.response: ", err.response);
        this.setState({ error: err.message });
      });
  };

  render() {
    return (
      <div className="landing-page">
        <div className="landingpage-top">
          {/************  Sign up  Button and Modal ************/}
          <div className="signup">
            <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#signup"
            >
              Sign Up
            </button>

            <div
              className="modal fade"
              id="signup"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5
                      className="signup-title modal-title"
                      id="exampleModalLabel"
                    >
                      Sign Up Below
                    </h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="signup-body modal-body">
                    <form name="register" className="signup-body" onSubmit={this.handleSubmit}>
                      <input
                        name="signup_username"
                        onChange={this.handleInput}
                        value={this.state.signup_username}
                        placeholder="Username"
                      />
                      <label
                        className="validation-label"
                        style={
                          this.state.username_error
                            ? { visibility: "visible" }
                            : { visibility: "hidden" }
                        }
                      >
                        {this.state.username_error
                          ? this.state.username_error
                          : null}
                      </label>
                      <input
                        name="signup_email"
                        onChange={this.handleInput}
                        value={this.state.signup_email}
                        placeholder="Email"
                      />
                      <label
                        className="validation-label"
                        style={
                          this.state.email_error
                            ? { visibility: "visible" }
                            : { visibility: "hidden" }
                        }
                      >
                        {this.state.email_error ? this.state.email_error : null}
                      </label>
                      <input
                        type="password"
                        name="signup_password"
                        onChange={this.handleInput}
                        value={this.state.signup_password}
                        placeholder="Password"
                      />
                      <label className="validation-label">
                        {this.state.password_error
                          ? this.state.password_error
                          : null}
                      </label>
                      <input
                        type="password"
                        name="signup_password2"
                        onChange={this.handleInput}
                        value={this.state.signup_password2}
                        placeholder="Confirm Password"
                      />
                      <label
                        className="validation-label"
                        style={
                          this.state.confirm_error
                            ? { visibility: "visible" }
                            : { visibility: "hidden" }
                        }
                      >
                        {this.state.confirm_error}
                      </label>
                    </form>
                  </div>
                  <button
                    name="register"
                    onClick={this.handleSubmit}
                    type="button"
                    className="create-button btn btn-primary"
                  >
                    Create My Account
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/************  Sign in  Button and Modal ************/}
          <div className="signin">
            <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#signin"
            >
              Sign In
            </button>

            <div
              className="modal fade"
              id="signin"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="login-modal modal-content">
                  <div className="modal-header">
                    <h5
                      className="login-title modal-title"
                      id="exampleModalLabel"
                    >
                      Login Below
                    </h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form name="signin" className="signup-body" onSubmit={this.handleSubmit}>
                      <input
                        name="signin_username"
                        onChange={this.handleInput}
                        value={this.state.signin_username}
                        placeholder="Username"
                      />
                      <label className="validation-label">
                        {this.state.username_error
                          ? this.state.username_error
                          : null}
                      </label>
                      <input
                        type="password"
                        name="signin_password"
                        onChange={this.handleInput}
                        value={this.state.signin_password}
                        placeholder="Password"
                      />
                      <label className="validation-label">
                        {this.state.password_error
                          ? this.state.password_error
                          : null}
                      </label>
                    </form>
                  </div>
                  <button
                    name="signin"
                    onClick={this.handleSubmit}
                    className="login-button btn btn-primary"
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/************  Main Landing Page ************/}
        <div className="landingpage main">
          <div className="main-text card">
            <div className="card-body">
              <h5 className="card-title">Welcome to Bar Trivia</h5>
              <p className="card-text">
                Trivializer helps bar trivia hosts create their question sets and answer sheets by
                pulling from a large and free API of trivia questions. There are free and paid tiers
                of the app.
              </p>
              <p>
                Users who register get a welcome email and can reset their password via email as
                well.
              </p>
              <Link to="/billing" className="btn btn-success">
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default withRouter(
  connect(
    mapStateToProps,
    {
      /*mapped functions here*/
    }
  )(LandingPage)
);
