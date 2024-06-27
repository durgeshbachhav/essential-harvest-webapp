import React, { useState, useRef, useEffect } from 'react';
import music from '../../assets/music/websitebg.mp3'
import { IoMusicalNote, IoPauseCircle, IoPlayCircle } from 'react-icons/io5';

const MusicPlayer = () => {
     const [isPlaying, setIsPlaying] = useState(true);
     const [isExpanded, setIsExpanded] = useState(true);
     const audioRef = useRef(new Audio(music));

     useEffect(() => {
          audioRef.current.loop = true; // Makes the audio loop
          audioRef.current.playbackRate = 0.8; // Slows down the tempo (adjust as needed)
          audioRef.current.play().catch(error => console.log("Autoplay prevented:", error));
     }, []);

     const togglePlay = () => {
          if (isPlaying) {
               audioRef.current.pause();
          } else {
               audioRef.current.play();
          }
          setIsPlaying(!isPlaying);
     };

     const toggleExpand = () => {
          setIsExpanded(!isExpanded);
     };

     return (
          <div className="fixed bottom-4 end-4 z-50">
               {isExpanded ? (
                    <aside className="flex items-center justify-center gap-4 rounded-lg bg-black px-5 py-3 text-white">
                         <button onClick={togglePlay} className="text-sm font-medium hover:opacity-75">
                              {isPlaying ? <IoPauseCircle size={24} /> : <IoPlayCircle size={24} />}
                         </button>
                         <button className="rounded bg-white/20 p-1 hover:bg-white/10" onClick={() => setIsExpanded(false)}>
                              <span className="sr-only">Close</span>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                   <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                         </button>
                    </aside>
               ) : (
                    <button
                         onClick={toggleExpand}
                         className="bg-black text-white p-2 rounded-full hover:bg-gray-800"
                    >
                         <IoMusicalNote size={24} />
                    </button>
               )}
          </div>
     );
};

export default MusicPlayer;