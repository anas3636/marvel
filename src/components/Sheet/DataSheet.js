import React, { Component } from 'react';
import crypto from 'crypto';
 
class DataSheet extends Component {
    constructor(props) {
	    super(props);
	    console.log(this.props)
	    let API_PRIVATE = "b0223681fced28de0fe97e6b9cd091dd36a5b71d";
	    let API_PUBLIC = "298bab46381a6daaaee19aa5c8cafea5"
	    let nowTimestamp = Math.floor(Date.now() / 1000);
	    let hash =crypto.createHash('md5').update(nowTimestamp+API_PRIVATE+API_PUBLIC).digest('hex')
	    this.state = {
	      hash : hash,
	      apiPublic : API_PUBLIC,
	      ts: nowTimestamp
	    };
	}
  	render() {
		return (
			<div className="col-xs-4">
				<div className="DataSheet">
					<div className="crop">
				    </div>
				    <h3>{this.props.hero.name}</h3>
			    </div>
			</div>
		);
  }
}
export default DataSheet;