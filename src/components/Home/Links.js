import React, { Component } from 'react';
 
class Links extends Component {
    constructor(props) {
	    super();
	    let temp = props.url.slice();
	    this.state = {
	    	url:temp
	    };
	}
  	render() {
		return (
		    <div className="links">
			{ this.state.url.map(function(item) {
	                return <a target="_blanc" key={item.type} href={item.url}> {item.type} / </a>
	            })
	        }
		    </div>
		);
  }
}
export default Links;