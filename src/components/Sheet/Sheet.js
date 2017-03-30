import React, { Component } from 'react';
import API from 'fetch-api';
import crypto from 'crypto';
//CSS
import './Sheet.css';
//components 
import Navbar from '../Navbar/Navbar';
// Const
import {baseURI, API_PUBLIC, API_PRIVATE} from '../../const/const';


class Sheet extends Component {
  constructor(props,context) {
    super(props);
    //Set variables 
    let url = document.URL;
    let idCharacter = url.split("/")[4];
    let api = new API({
      baseURI: baseURI
    });
    let nowTimestamp = Math.floor(Date.now() / 1000);
    let hash =crypto.createHash('md5').update(nowTimestamp+API_PRIVATE+API_PUBLIC).digest('hex')
    //Get Data
    api.get('/v1/public/characters/' + idCharacter + '?apikey='+API_PUBLIC +'&ts='+nowTimestamp + '&hash='+hash ,(err, res, data) => {
      if (err) throw err;  
      //Set temps variables
      let tempArray = data.data.results.slice();
      let temp = tempArray[0];
      console.log(temp);
      let series = temp.series.items;
      let stories = temp.stories.items;
      let thumbnail = temp.thumbnail;
      //Set State
      this.setState({
        hero : temp,
        series:series,
        stories:stories,
        thumbnail:thumbnail, 
      })
    });

    // Define State
    this.state = {
      hero : {},
      hash : hash,
      apiPublic : API_PUBLIC,
      ts: nowTimestamp,
      series:[],
      stories:[],
      thumbnail:{}
    };
  }

  render() {
    return (
      <div className="sheet">
      <Navbar />
      <div className="col-xs-3"></div>
      <div className="col-xs-6">
				<div className="sheet-card">
					<div className="sheet-crop">
						<img className="sheet-img-card" src={this.state.thumbnail.path + '.' +this.state.thumbnail.extension  + '?hash=' + this.state.hash +'&apikey='+ this.state.apiPublic +'&ts='+ this.state.ts }  alt="hero"  />
				    </div>
				    <h2 className="hero-name">{this.state.hero.name}</h2>
				    
				    <h3>Series</h3>
				    <hr/>
						{ this.state.series.map(function(item) {
						        return <a key={item.resourceURI} href={item.resourceURI}>
						        			<h4>{item.name} </h4>
						        	   </a>
						    })
						}
					<h3>Stories</h3>
					<hr/>
						{ this.state.stories.map(function(item) {
						        return <a key={item.resourceURI} href={item.resourceURI}>
						        			<h4>{item.name} </h4>
						        	   </a>
						    })
						}
			    </div>
		</div>
		<div className="col-xs-3"></div>
      </div>
    );
  }
}

export default Sheet;
