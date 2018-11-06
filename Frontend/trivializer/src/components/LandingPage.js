import React from "react";
import "./Components.css";

class LandingPage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <div className="landingpage-top">
          <div className="signup">
            <button
              type="button"
              class="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Sign Up
            </button>

            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Sign up for an account below
                    </h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <form className="signup-body">
                      <input placeholder="username" />
                      <input placeholder="email" />
                      <input placeholder="password" />
                      <input placeholder="please confirm password" />
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">
                      Close
                    </button>
                    <button type="button" class="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="signin">
            <button
              type="button"
              class="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Sign In
            </button>

            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Login Below
                    </h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <form className="signup-body">
                      <input placeholder="username" />
                      <input placeholder="email" />
                      <input placeholder="password" />
                      <input placeholder="please confirm password" />
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">
                      Close
                    </button>
                    <button type="button" class="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="landingpage main">
          <div class="main-text card">
            <div class="card-body">
              <h5 class="card-title">Welcome to Bar Trivia</h5>
              <p class="card-text">
                Trivializer helps bar trivia hosts create their question sets and answer sheets by
                pulling from a large and free API of trivia questions. There are free and paid tiers
                of the app.
              </p>
              <p>
                Users who register get a welcome email and can reset their password via email as
                well.
              </p>
              <a href="#" class="btn btn-primary">
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LandingPage;
