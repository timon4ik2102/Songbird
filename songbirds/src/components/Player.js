import React,{ Component } from 'react';
import Data from './Data';
import ReactAudioPlayer from 'react-audio-player';


export default class Player extends Component {
  constructor(prop) {
    super(prop)
  }
  render() {
    return (
      <div className='audioplayer'>
        <img src={Data[0].image}></img>
        <ReactAudioPlayer src={Data[0].audio} controls />
      </div>

    )
  }
}

