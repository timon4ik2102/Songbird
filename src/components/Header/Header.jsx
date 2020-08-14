import React from 'react';
import s from './Header.module.css';

const levels = ['Наши птицы', 'Птицы Южной Америки', 'Птицы Австралии', 'Птицы Азии', 'Птицы Северной Америки', 'Птицы Африки'];

class Header extends React.Component {

    render() {
        const {score, activePage} = this.props;

        const levelList = levels.map((levelName, i) => (
            <li key={i.toString() + 5} className={i === activePage ? s.activeLevel : ''}>{levelName}</li>
        ))

        return (

            <div className={s.header}>
                <div className={s.logoSection}>
                    <div className={s.logo}/>
                    <div className={s.totalPoints}>Очки: {score}</div>
                </div>
                <ul className={s.levelSection}>{levelList}</ul>
            </div>
        )
    }
}


export default Header;