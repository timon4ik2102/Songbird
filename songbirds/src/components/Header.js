import React,{ Component } from 'react';
import Data from './Data';


export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className='header'>
        <div className='logo'></div>
        <div className="score"><p>Score: </p></div>
        <div className="birds__menu">
          <ul className='menu_items'>
            <li className='menu_item'>Разминка</li>
            <li className='menu_item'>Воробьиные</li>
            <li className='menu_item'>Лесные птицы</li>
            <li className='menu_item'>Певчие птицы</li>
            <li className='menu_item'>Хищные птицы</li>
            <li className='menu_item'>Морские птицы</li>
          </ul>
        </div>
      </header>
    );
  }
}


