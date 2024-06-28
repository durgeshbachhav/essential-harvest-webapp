import React, { useState, useRef, useEffect } from 'react';
import music from '../../assets/music/websitebg.mp3';
import { IoMusicalNote } from 'react-icons/io5';
import { FaPause, FaPlay } from 'react-icons/fa';

const MusicPlayer = () => {
     const [isPlaying, setIsPlaying] = useState(false);
     const [isExpanded, setIsExpanded] = useState(true);
     const [audioLoaded, setAudioLoaded] = useState(false);
     const audioRef = useRef(null);

     useEffect(() => {
          audioRef.current = new Audio(music);
          audioRef.current.loop = true;
          audioRef.current.addEventListener('canplaythrough', () => setAudioLoaded(true));

          return () => {
               if (audioRef.current) {
                    audioRef.current.pause();
                    audioRef.current.src = '';
               }
          };
     }, []);

     const togglePlay = () => {
          if (audioLoaded) {
               if (isPlaying) {
                    audioRef.current.pause();
               } else {
                    audioRef.current.play().catch(error => {
                         console.error("Error playing audio:", error);
                    });
               }
               setIsPlaying(!isPlaying);
          } else {
               console.log("Audio is not loaded yet");
          }
     };

     const toggleExpand = () => {
          setIsExpanded(!isExpanded);
     };

     return (
          <div className="fixed bottom-4 right-4 z-[9999]">
               {isExpanded ? (
                    <aside className="flex items-center justify-center gap-4 rounded-lg bg-black px-2 py-1 text-white">
                         <button 
                              onClick={togglePlay} 
                              className="text-sm font-medium p-2 hover:opacity-75 " 
                              disabled={!audioLoaded}
                              style={{touchAction: 'manipulation'}}
                         >
                              {isPlaying ? <FaPause size={15} /> : <FaPlay size={15} />}
                         </button>
                         <button 
                              className="rounded bg-white/20 p-2 hover:bg-white/10" 
                              onClick={() => setIsExpanded(false)}
                              style={{touchAction: 'manipulation'}}
                         >
                              <span className="sr-only">Close</span>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                   <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                         </button>
                    </aside>
               ) : (
                    <button
                         onClick={toggleExpand}
                         className="bg-black text-white p-4 rounded-full hover:bg-gray-800"
                         style={{touchAction: 'manipulation'}}
                    >
                         <IoMusicalNote size={24} />
                    </button>
               )}
          </div>
     );
};

export default MusicPlayer;