import React, { Component } from 'react';
import './Home.css';
import API from 'fetch-api';
import crypto from 'crypto';

import Card from './Card';

class Home extends Component {
  constructor() {
    super();
    let api = new API({
      baseURI: 'http://localhost:3000'
    });
    let API_PRIVATE = "b0223681fced28de0fe97e6b9cd091dd36a5b71d";
    let API_PUBLIC = "298bab46381a6daaaee19aa5c8cafea5"
    let nowTimestamp = Math.floor(Date.now() / 1000);
    let hash =crypto.createHash('md5').update(nowTimestamp+API_PRIVATE+API_PUBLIC).digest('hex')
    api.get('/v1/public/characters?apikey='+API_PUBLIC +'&ts='+nowTimestamp + '&hash='+hash ,(err, res, data) => {
      if (err) throw err;  
      console.log(data.data.results)
      this.setState({
        heros : data.data.results
      })
    });
    this.state = {
      heros : []
    };
  }
  render() {
    return (
      <div className="App">
        { this.state.heros.map(function(item) {
                return <Card key={item.id} hero={item}/>
            })
        }
      </div>
    );
  }
}

export default Home;
