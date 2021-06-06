import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import VideoOverlay from '../video-overlay/video-overlay';
import './video-player';

const VideoPlayer = () => {
    const [overlay, showOverlay] = useState(true); 
    const [playing, setPlaying] = useState(true);

    const onPlayMedia = () => {
        showOverlay(false);
        setPlaying(true);
    }

   const onPauseMedia = () => {
        showOverlay(true);
        setPlaying(false);
    }

    const variants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.7
            }
            
        }
    }
    
    return(
        <div className="video-player">
            <div className="player-wrapper">
                <ReactPlayer 
                    className = 'react-player' 
                    url = 'https://res.cloudinary.com/amarachi-2812/video/upload/v1622736920/production_ID_4456999_gr6iy4.mp4' 
                    controls = {true}
                    loop= {true}
                    pip= {true} 
                    onPlay = {onPlayMedia}
                    onPause = {onPauseMedia}
                    playing= {playing}
                    
                />
                {
                    overlay ? <VideoOverlay onPlayMedia = {onPlayMedia} variants = {variants} /> : null
                }
            </div>
        </div>

    )
};

export default VideoPlayer;