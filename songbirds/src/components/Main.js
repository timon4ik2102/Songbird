import React,{ Component } from 'react';

import Header from './Header';
import Player from './Player';
import Answears from './Answears';
import Description from './Description'



export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='wrapper'>
        <Header />
        <Player />
        <div className="answears-description">
          <Answears />
          <Description />
        </div>
        <footer>
          <button type="" className="btn__next"></button>
        </footer>
      </div>
    );
  }
}
