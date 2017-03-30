import React, { Component } from 'react';
import './Sheet.css';
import API from 'fetch-api';
import crypto from 'crypto';

import DataSheet from './DataSheet';



class Sheet extends Component {
  constructor(props,context) {
    super(props);
    let url = document.URL;
    let idCharacter = url.split("/")[4];
    let api = new API({
      baseURI: 'http://localhost:3000'
    });
    let API_PRIVATE = "b0223681fced28de0fe97e6b9cd091dd36a5b71d";
    let API_PUBLIC = "298bab46381a6daaaee19aa5c8cafea5"
    let nowTimestamp = Math.floor(Date.now() / 1000);
    let hash =crypto.createHash('md5').update(nowTimestamp+API_PRIVATE+API_PUBLIC).digest('hex')
    api.get('/v1/public/characters/' + idCharacter + '?apikey='+API_PUBLIC +'&ts='+nowTimestamp + '&hash='+hash ,(err, res, data) => {
      if (err) throw err;  
      console.log(data)
      let temp = data.data.results[0]
      console.log(temp)
      this.setState({
        hero : temp
      })
    });
    this.state = {
      hero : {},
      hash : hash,
      apiPublic : API_PUBLIC,
      ts: nowTimestamp
    };
  }
  contextTypes: {
    router: React.PropTypes.func.isRequired
  }
  render() {
    return (
      <div className="sheet">
      <h2>{this.state.hero.name}</h2>
      
      </div>
    );
  }
}

export default Sheet;
