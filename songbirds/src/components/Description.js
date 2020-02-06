import React,{ Component } from 'react';
import Data from './Data';
import ReactAudioPlayer from 'react-audio-player';

export default class Description extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='description__block'>
        <img src={Data[0].image}></img>
        <div className='description__birds'>
          <h3>{Data[0].name}</h3>
          <p>{Data[0].species}</p>
          <ReactAudioPlayer src={Data[0].audio}
            controls />
        </div>
        <p>{Data[0].description}</p>
      </div>
    )
  }

}