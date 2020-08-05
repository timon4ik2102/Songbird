import React from 'react';
import birdImg from '../../assets/img/bird.png'

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import s from './QuestionContainer.module.css';
// import Modal from "../Modal/Modal";


class QuestionContainer extends React.Component {
    playerOfQuestionBlock = React.createRef();
    // constructor(props) {
    //     super(props);
    //
    // }

    componentDidMount() {
        let { changeState, rightAnswerNumber } = this.props;
        rightAnswerNumber = Math.floor(Math.random() * 6) + 1;
        changeState('rightAnswerNumber', rightAnswerNumber);
    }

    componentDidUpdate() {
        const { rightAnswer } = this.props;
        if (rightAnswer) {

            this.playerOfQuestionBlock.current.audio.current.pause()
        }
    }


    render() {
        const { currentArr, rightAnswer, rightAnswerNumber } = this.props;


        return (

            <div className={s.questionContainer}>
                <div className={s.pictureContainer}>
                    <img src={rightAnswer ? currentArr[rightAnswerNumber - 1].image : birdImg}  alt=""/>

                </div>
                <div className={s.nameMusicContainer}>
                    <p className={s.questionBirdName}>{rightAnswer ? `${currentArr[rightAnswerNumber - 1].name}` :'******'}</p>
                    <AudioPlayer
                        className={s.AudioPlayer}
                        src={currentArr[rightAnswerNumber - 1].audio}
                        autoPlayAfterSrcChange={false}
                        // ref={c => (this.player = c)}
                        ref = {this.playerOfQuestionBlock }
                    />

                </div>


            </div>

        )
    }
}


export default QuestionContainer;