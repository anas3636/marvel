import React, { Component } from 'react';
import API from 'fetch-api';
import crypto from 'crypto';
// CSS
import './Home.css';
// Componentes 
import Card from './HomeComponents/Card';
import Navbar from '../Navbar/Navbar';
// Const
import {baseURI, API_PUBLIC, API_PRIVATE} from '../../const/const';

class Home extends Component {
  constructor() {
    super();
    // SET State
    this.state = {
      heros : []
    };

    //Call API 
    let api = new API({
      baseURI: baseURI
    });
    let nowTimestamp = Math.floor(Date.now() / 1000);
    let hash =crypto.createHash('md5').update(nowTimestamp+API_PRIVATE+API_PUBLIC).digest('hex')
    api.get('/v1/public/characters?apikey='+API_PUBLIC +'&ts='+nowTimestamp + '&hash='+hash ,(err, res, data) => {
      if (err) throw err;  
      // SET State With data
      this.setState({
        heros : data.data.results
      })
    });
    
  }
  render() {
    return (
      <div>
        <Navbar />
        { this.state.heros.map(function(item) {
                return <Card key={item.id} hero={item}/>
            })
        }
      </div>
    );
  }
}

export default Home;
