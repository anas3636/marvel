import React, { Component } from 'react';
import crypto from 'crypto';
//Components 
import Links from './Links';
// Const
import {API_PUBLIC, API_PRIVATE} from '../../../const/const';

class Card extends Component {
    constructor() {
	    super();
      //Set state 
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
				    		<img className="img-card" src={this.props.hero.thumbnail.path + '.' +this.props.hero.thumbnail.extension  + '?hash=' + this.state.hash +'&apikey='+ this.state.apiPublic +'&ts='+ this.state.ts }  alt="Hero"  />
				    	</a>
				    </div>
				    <h3>{this.props.hero.name}</h3>
            <div className="links">
				      <Links url={this.props.hero.urls} />
            </div>
			    </div>
			</div>
		);
  }
}
export default Card;