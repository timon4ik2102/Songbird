import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import s from './BirdsInfo.module.css';

const BirdsInfo = ({ birdImage, birdName, birdLatineName, birdSound, birdsDesc }) => (
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
                <AudioPlayer
                src={birdSound}
                autoPlayAfterSrcChange={false}/>
            </div>
        </div>
        <div className={s.BirdsDesc}>
            {birdsDesc}
        </div>
    </>
);

export default BirdsInfo;