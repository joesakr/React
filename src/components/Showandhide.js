import React from "react";

class Showandhide extends React.Component {
  state = {
    divcontainer: false,
  };

  render() {
    var Handlechange = (e) => {
      this.setState({ divcontainer: !this.state.divcontainer });
    };

    const x = this.state.divcontainer;
    return (
      <div>
        <center>
          <h2 className="rent">Number of Rentals:</h2>
          
          <a onClick={Handlechange}  className="btn btn-outline-secondary">{x ? "Hide" : "Show"}</a>
          {x && <h2>126</h2>}
        </center>
      </div>
    );
  }
}

export default Showandhide;
