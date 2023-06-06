import React, { Component } from 'react'


export class Navbar extends Component {
  render() {
    return (
      <div >
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <h2 className="navbar-brand" >Show app</h2>
    
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar
