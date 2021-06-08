import React from 'react';
import { motion, AnimatePresence } from "framer-motion"
import './video-overlay.css';

const VideoOverlay = ({onPlayMedia, variants, overlay }) => (                
    
    <AnimatePresence>
        {
            overlay &&  (
                <motion.div className="video-overlay" 
                    key = 'overlay'
                    onClick = {onPlayMedia}
                    initial = "hidden"
                    animate = "visible"
                    exit = {{opacity: 0}}
                    variants = {variants}
                >
                    <div className= 'video-overlay-container'>
                        <h2>dépôt: tenant une fleur</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, eos fugiat! Nam veritatis voluptatem fuga omnis dicta est molestias numquam fugiat odio maxime, sed veniam dolores rem iusto laudantium delectus!</p>
                        <button className= 'play-btn'  onClick= {onPlayMedia}>Play</button>
                    </div>
                </motion.div>

            )
        }
            
        
    </AnimatePresence>
);

export default VideoOverlay;