import React, { Component } from "react";
import Dashboard from "./Dashboard";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: false,
      userInput: "",
      passInput: "",
      username: "jessa",
      password: "mae@17"
    };
  }
  loginHandler(e) {
    e.preventDefault();
    const { userInput, passInput, username, password } = this.state;
    if (userInput === username && passInput === password) {
      this.setState({ user: true });
      console.log("success");
    } else {
      this.setState({ user: false });
      alert("Invalid Input");
      console.log("error");
    }
  }

  render() {
    if (!this.state.user) {
      return (
        <div>
          <center style={{ paddingTop: "20%" }}>
            <div class="ui raised card">
              <div class="content">
                <h1 style={{ color: "red" }}>Log In Valid Account</h1>
                <form>
                  <div class="ui left icon input focus">
                    <input
                      placeholder="username"
                      onChange={e =>
                        this.setState({ userInput: e.target.value })
                      }
                    ></input>
                    <i aria-hidden="true" class="pencil icon"></i>
                  </div>
                  <br />
                  <br />
                  <div>
                    <div class="ui left icon input focus ">
                      <input
                        type="password"
                        placeholder="password"
                        onChange={e =>
                          this.setState({ passInput: e.target.value })
                        }
                      ></input>
                      <i aria-hidden="true" class="pencil icon"></i>
                    </div>
                  </div>
                  <br />
                  <div>
                    <button class="ui primary button" onClick={e => this.loginHandler(e)}>Submit</button> 
                  </div>
                </form>
              </div>
            </div>
          </center>
        </div>
      );
    }
    if (this.state.user) {
      return (
        <div>
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
          />
          <Dashboard username={this.state.username} />
        </div>
      );
    }
  }
}
export default LoginForm;
