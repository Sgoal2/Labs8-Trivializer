import React from "react";
import "./Components.css";
import { Link } from "react-router-dom";

class LandingPage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  redirect = () => {
    // Note from nicky: This redirect function, and the reload in it, is here because I was using <Link> before, and whenever I clicked it to direct it to /gameslist, the background would stay blurred as if the modal is still open. If there's a better fix for it, please let me know :)
    window.location.reload();
    this.props.history.push("/gameslist");
  };
  render() {
    return (
      <React.Fragment>
        <div className="landingpage-top">
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
                    <h5 className="modal-title" id="exampleModalLabel">
                      Sign up for an account below
                    </h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form className="signup-body">
                      <input placeholder="username" />
                      <input placeholder="email" />
                      <input placeholder="password" />
                      <input placeholder="please confirm password" />
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">
                      Close
                    </button>
                    <button onClick={this.redirect} type="button" className="btn btn-primary">
                      Create My Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Login Below
                    </h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form className="signup-body">
                      <input placeholder="username" />
                      <input placeholder="password" />
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">
                      Close
                    </button>
                    <button onClick={this.redirect} className="btn btn-primary">
                      Sign In
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
              <Link to="/billing" className="btn btn-primary">
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LandingPage;
