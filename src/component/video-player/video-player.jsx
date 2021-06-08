import React, { useState } from 'react';
import { useEffect } from 'react';
import ReactPlayer from 'react-player';
import VideoOverlay from '../video-overlay/video-overlay';
import './video-player';

const VideoPlayer = () => {
    const [overlay, showOverlay] = useState(true); 
    const [playing, setPlaying] = useState(false); 
    const [controls, setControls] = useState(false);




    const onPlayMedia = () => {
        showOverlay(false);
        setPlaying(true);
        setControls(true);
    }

   const onEndMedia = () => {
       showOverlay(true)
       setControls(false);
    }
    
    useEffect(() => {
        setTimeout(() => 
        showOverlay(false), 5000)
    }, [])


    

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
                    controls = {controls}
                    pip= {true} 
                    onPlay = {onPlayMedia}
                    onEnded = {onEndMedia}
                    playing= {playing}
                    
                /> 
                <VideoOverlay onPlayMedia = {onPlayMedia} variants = {variants} overlay={overlay} />
                
            </div>
        </div>

    )
};

export default VideoPlayer;