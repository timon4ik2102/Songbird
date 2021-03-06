import React from 'react';
import Variant from './AnswearVariant/Answears';
import BirdsInfo from './BirdsInfo/BirdsInfo';
import s from './AnswearContainer.module.css';


class Answear extends React.Component {

    render() {
        const {
            currentArr,
            rightAnswerNumber,
            changeState,
            rightAnswer,
            userAnswer,
            gamePoints,
            currentScore,
            activePage,
            gameOver,
        } = this.props;
        console.log(this.props)


        return (
            <div className={s.AnswerBlock}>
                <ul className={s.AnwearList}>
                    {currentArr.map((data, i) => {
                        return (
                            <Variant
                                key={`${data.name}${i}`}
                                id={data.id}
                                data={data.name}
                                rightAnswerNumber={rightAnswerNumber}
                                changeState={changeState}
                                rightAnswer={rightAnswer}
                                userAnswer={userAnswer}
                                gamePoints={gamePoints}
                                currentScore={currentScore}
                                gameOver={gameOver}
                                activePage={activePage}

                            />
                        )
                    })}
                </ul>
                <div className={s.BirdsInfoWrapper}>
                    {userAnswer !== null ?
                        <BirdsInfo
                            birdImage={currentArr[userAnswer].image}
                            birdName={currentArr[userAnswer].name}
                            birdLatineName={currentArr[userAnswer].species}
                            birdSound={currentArr[userAnswer].audio}
                            birdsDesc={currentArr[userAnswer].description}
                            refQuestionPlayer={this.props.refQuestionPlayer}
                            refInfoPlayer={this.props.refInfoPlayer}
                        />
                        :
                        <p>Прослушайте аудио и выберите ответ</p>}
                </div>
            </div>
        );

    }
}

export default Answear;