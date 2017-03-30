import React, { Component } from 'react';
import crypto from 'crypto';
import Links from './Links';
import {Link} from 'react-router-dom'
 
class Card extends Component {
    constructor() {
	    super();
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
				<div className="card">
					<div className="crop">
						<a href={ "/character/" + this.props.hero.id}>
				    		<img className="img-card" src={this.props.hero.thumbnail.path + '.' +this.props.hero.thumbnail.extension  + '?hash=' + this.state.hash +'&apikey='+ this.state.apiPublic +'&ts='+ this.state.ts }  alt="Norway"  />
				    	</a>
				    </div>
				    <h3>{this.props.hero.name}</h3>
				    <Links url={this.props.hero.urls} />
			    </div>
			</div>
		);
  }
}
export default Card;