import React from 'react';
import birdImg from '../../assets/img/bird.png'

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import s from './QuestionContainer.module.css';
import './AudioPlayer.css';

// import Player from '../Player/Player';


class QuestionContainer extends React.Component {
    constructor(props) {
        super(props);

    }

    // playerOfQuestionBlock = React.createRef();


    componentDidMount() {
        let {changeState, rightAnswerNumber} = this.props;
        rightAnswerNumber = Math.floor(Math.random() * 6) + 1;
        changeState('rightAnswerNumber', rightAnswerNumber);
    }

    componentDidUpdate() {
        const {rightAnswer} = this.props;
        if (rightAnswer) {
            this.props.refQuestionPlayer.current.audio.current.pause()
        }
    }

    onPauseOtherPlayer = () => {
        console.log('Hello', this.props)
        if (this.props.refInfoPlayer.current){
            this.props.refInfoPlayer.current.audio.current.pause();
        }
    }

    render() {
        const {currentArr, rightAnswer, rightAnswerNumber} = this.props;


        return (
            <div className={s.questionContainer}>
                <div className={s.pictureContainer}>
                    <img src={rightAnswer ? currentArr[rightAnswerNumber - 1].image : birdImg} alt=""/>

                </div>
                <div className={s.nameMusicContainer}>
                    <p className={s.questionBirdName}>{rightAnswer ? `${currentArr[rightAnswerNumber - 1].name}` : '******'}</p>
                    <AudioPlayer
                        onPlay={this.onPauseOtherPlayer}
                        ref={this.props.refQuestionPlayer}
                        src={currentArr[rightAnswerNumber - 1].audio}
                        autoPlayAfterSrcChange={false}
                        // ref={this.playerOfQuestionBlock}
                    />

                </div>


            </div>

        )
    }
}


export default QuestionContainer;