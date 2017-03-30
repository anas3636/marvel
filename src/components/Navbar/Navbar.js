import React, { Component } from 'react';
import LogoImg from '../../img/MARVEL.png';


class Navbar extends Component {
  	render() {
		return (
		    <nav className="navbar navbar-default">
	          <div className="container-fluid">
	            <div className="navbar-header">
	              <a className="navbar-brand" href="/">
	                <img className="brand" alt="Brand" src={LogoImg}/>
	              </a>
	              <p className="navbar-text">Marvel Heros Library</p>
	            </div>
	          </div>
	        </nav>
		);
  }
}
export default Navbar;