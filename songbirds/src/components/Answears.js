import React,{ Component } from 'react';
import Data from './Data';

export default class Asnwears extends Component {
  constructor(prop) {
    super(prop)
  }
  render() {
    return (
      <div className='answears__block'>
        <ul className='answears__birds_list'>
          <li
            id={Data[0].id}
            name={Data[0].name}
            className='answears__birds_item'>{Data[0].name}</li>
          <li
            id={Data[1].id}
            name={Data[1].name}
            className='answears__birds_item'>{Data[1].name}</li>
          <li
            id={Data[2].id}
            name={Data[2].name}
            className='answears__birds_item'>{Data[2].name}</li>
          <li
            id={Data[3].id}
            name={Data[3].name}
            className='answears__birds_item'>{Data[3].name}</li>
          <li
            id={Data[4].id}
            name={Data[4].name}
            className='answears__birds_item'>{Data[4].name}</li>
          <li
            id={Data[5].id}
            name={Data[5].name}
            className='answears__birds_itemm'>{Data[5].name}</li>
        </ul>
      </div>

    )
  }


}