import React from 'react'

import s from './NextLevel.module.css';

const Next = ({ rightAnswer, changeState, activePage, currentScore }) => {
    const nextLevelHandler = () => {
        const newRightAnswerNumber = Math.floor(Math.random() * 6) + 1;

        if (activePage === 5 ) {
            changeState('activePage', 0);
            changeState('rightAnswerNumber', newRightAnswerNumber);
            changeState('userAnswer', null);
            changeState('rightAnswer', false);
            changeState('gamePoints', 5);
            changeState('currentScore', 0);
            return;
        }
        const newPage = activePage += 1;
        changeState('activePage', newPage);
        changeState('rightAnswerNumber', newRightAnswerNumber);
        changeState('userAnswer', null);
        changeState('rightAnswer', false);
        changeState('gamePoints', 5);
    }

    return (
        <button
            onClick={nextLevelHandler}
            className={rightAnswer ? s.NextBtn : s.NextBtnDisabled}
            disabled={!rightAnswer}
        >Дальше</button>
    )
};

export default Next;