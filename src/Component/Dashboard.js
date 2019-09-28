import React, { Component } from "react";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <center style ={{paddingTop:"20%"}}>
          <div class=" ui raised card" style ={{background:"linear-gradient(to bottom, #000000 0%, #ffffff 100%)"}}>
            <div class="content">
              <h1 style ={{color:"white"}}>Hi Welcome</h1>
              <h1 style ={{color:"white"}}>Hello {this.props.username}</h1>
            </div>
          </div>
        </center>
      </div>
    );
  }
}
export default Dashboard;
