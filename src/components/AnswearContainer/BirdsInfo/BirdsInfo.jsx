import React from 'react';
import Player from 'react-h5-audio-player';
// import Player from '../../Player/Player';
import 'react-h5-audio-player/lib/styles.css';

import s from './BirdsInfo.module.css';




class BirdsInfo extends React.Component {

    onPauseOtherPlayer = () =>{
              this.props.refQuestionPlayer.current.audio.current.pause();
    }

    render() {
        const {
            birdImage,
            birdName,
            birdLatineName,
            birdSound,
            birdsDesc,
            refInfoPlayer,
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
                            className={s.smallAudio}
                            onPlay={this.onPauseOtherPlayer}
                            ref = {refInfoPlayer}
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