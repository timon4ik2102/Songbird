import React from 'react';
import s from './Modal.module.css';

const Modal = ({changeState, currentScore}) => {
    const playAgainHandler = () => {
        const newRightAnswerNumber = Math.floor(Math.random() * 6) + 1;
        changeState('currentScore', 0);
        changeState('gamePoints', 5);
        changeState('rightAnswer', false);
        changeState('rightAnswerNumber', newRightAnswerNumber);
        changeState('userAnswer', null);
        changeState('gameOver', false);
    }

    return currentScore === 30 ?
        <div className={s.GameFinish}>
            <p className={s.Congrats}>Поздравляем!</p>
            <p className={s.CongratsMessage}>Невероятно! Вы набрали максимальное число баллов! (30/30)</p>
            <button className={s.endGame} onClick={playAgainHandler}>Закрепить знания</button>
        </div> : currentScore > 10 ?
            <div className={s.GameFinish}>
                <p className={s.Congrats}>Поздравляем!</p>
                <p className={s.CongratsMessage}>{`Вы прошли игру и набрали ${currentScore}/30 балов`}</p>
                <button className={s.endGame} onClick={playAgainHandler}>Играть снова</button>
            </div> :
            <div className={s.GameFinish}>
                <p className={s.Congrats}>Очень жаль!</p>
                <p className={s.CongratsMessage}>{`Вы прошли игру и набрали всего ${currentScore}/30 балов`}</p>
                <button className={s.endGame} onClick={playAgainHandler}>Играть снова</button>
            </div>
}

export default Modal;