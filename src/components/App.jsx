import data from '../data/data';

import React, {Component} from 'react';
import Header from './Header/Header';
import QuestionContainer from './QuestionContainer/QuestionContainer';
import AnswearContainer from './AnswearContainer/AnswearContainer';
import Next from './NextLevel/NextLevel';
import Modal from './Modal/Modal';

import s from './App.module.css';

class App extends Component {
    state = {
        currentScore: 0,
        activePage: 0,
        gamePoints: 5,
        rightAnswer: false,
        rightAnswerNumber: 1,
        userAnswer: null,
        gameOver: false,
    }

    changeState = (prop, value) => (
        this.setState((prevState) => ({[prop]: value}))
    );

    render() {
        const {currentScore, activePage, rightAnswer, rightAnswerNumber, userAnswer, gamePoints, gameOver} = this.state;
        if (!gameOver) {
            return (
                <div className={s.wrapper}>
                    <Header
                        score={currentScore}
                        activePage={activePage}
                    />
                    <div className={s.main}>
                        <QuestionContainer
                            currentArr={data[activePage]}
                            rightAnswer={rightAnswer}
                            changeState={this.changeState}
                            rightAnswerNumber={rightAnswerNumber}
                            activePage={activePage}
                        />
                        <AnswearContainer
                            currentArr={data[activePage]}
                            rightAnswerNumber={rightAnswerNumber}
                            changeState={this.changeState}
                            rightAnswer={rightAnswer}
                            userAnswer={userAnswer}
                            gamePoints={gamePoints}
                            currentScore={currentScore}
                            gameOver={gameOver}
                            activePage={activePage}
                        />
                    </div>
                    <Next
                        rightAnswer={rightAnswer}
                        changeState={this.changeState}
                        activePage={activePage}
                        userAnswer={userAnswer}
                        currentScore={currentScore}
                    />

                </div>
            );
        } else {
            return (
                <div className={s.wrapper}>
                    <Header
                        pages={this.pages}
                        score={currentScore}
                        activePage={activePage}/>
                    <Modal
                        changeState={this.changeState}
                        currentScore={currentScore}
                    />
                </div>
            )
        }
    };
};

export default App;
