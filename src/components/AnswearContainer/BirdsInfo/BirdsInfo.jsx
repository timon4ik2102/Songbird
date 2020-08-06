import React from 'react';
import Player from 'react-h5-audio-player';
// import Player from '../../Player/Player';
import 'react-h5-audio-player/lib/styles.css';

import s from './BirdsInfo.module.css';



class BirdsInfo extends React.Component {

    onPauseOtherPlayer = () =>{
        console.log('Hello22', this.props)

    }

    render() {
        const {
            birdImage,
            birdName,
            birdLatineName,
            birdSound,
            birdsDesc,
            refInfoPlayer,
            refQuestionPlayer
        } = this.props;


        return (
            <>
                <div className={s.BirdsInfoImage}>
                    <img
                        className={s.BirdImage}
                        src={birdImage}
                        alt=''/>
                </div>
                <div className={s.BirdsInfoAudio}>
                    <p>{birdName}</p>
                    <p>{birdLatineName}</p>
                    <div>
                        <Player
                            onPlay={this.onPauseOtherPlayer}
                            refQuestionPlayer={refQuestionPlayer}
                            refInfoPlayer = {refInfoPlayer}
                            autoPlay={false}
                            autoPlayAfterSrcChange={false}
                            src={birdSound}
                        />
                    </div>
                </div>
                <div className={s.BirdsDesc}>
                    {birdsDesc}
                </div>
            </>
        );
    }
}

export default BirdsInfo;