import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion, AnimatePresence } from "framer-motion"
import './video-overlay.css';

const VideoOverlay = ({onPlayMedia, variants }) => (                
    
    <AnimatePresence>
        <motion.div className="video-overlay" 
            key = 'overlay'
            onClick = {onPlayMedia}
            initial = "hidden"
            animate = "visible"
            exit = {{opacity: 0}}
            variants = {variants}
        >
            <h3>dépôt: tenant une fleur</h3>
            <div className = 'video-ovelay-play-icon'>
                <div className = 'play-icon'>
                    <FontAwesomeIcon icon="play-circle"   />
                </div>
            </div>
        </motion.div>
            
        
    </AnimatePresence>
);

export default VideoOverlay;