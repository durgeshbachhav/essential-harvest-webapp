
import Layout from "../../components/layout/Layout";
import { Link } from "react-router-dom";

const Gallery = () => {

     const audio = document.getElementById('backgroundAudio');
     const playPauseButton = document.getElementById('playPauseButton');
     const playIcon = document.getElementById('playIcon');
     const pauseIcon = document.getElementById('pauseIcon');
     const playPauseIcon = document.getElementById('playPauseIcon');

     function togglePlayPause() {
          if (audio.paused) {
               audio.play();
               playIcon.classList.add('hidden');
               pauseIcon.classList.remove('hidden');
               playPauseIcon.innerText = 'Pause';
          } else {
               audio.pause();
               playIcon.classList.remove('hidden');
               pauseIcon.classList.add('hidden');
               playPauseIcon.innerText = 'Play';
          }
     }


     return (
          <Layout>
               <div className="bg-white py-6 sm:py-8 lg:py-12">
                    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                         <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl xl:mb-12">Our Gallery</h2>
                         <div className="mb-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mb-8 md:grid-cols-4 md:gap-6 xl:gap-8">
                              <Link href="#" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                                   <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                                   <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                                   <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VR</span>
                              </Link>
                              <Link href="#" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                                   <img src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Magicle" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                                   <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                                   <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Tech</span>
                              </Link>
                              <Link href="#" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                                   <img src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Martin Sanchez" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                                   <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                                   <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Dev</span>
                              </Link>
                              <Link href="#" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                                   <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Lorenzo Herrera" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                                   <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                                   <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Retro</span>
                              </Link>
                         </div>
                    </div>
               </div>

               <aside
                    className="fixed bottom-4 end-4 z-50 flex items-center justify-center gap-4 rounded-lg bg-black px-5 py-3 text-white"
               >
                    <a href="#" target="_blank" rel="noreferrer" className="text-sm font-medium hover:opacity-75">
                         Hey! Come Check This Out 👋
                    </a>

                    <button className="rounded bg-white/20 p-1 hover:bg-white/10">
                         <span className="sr-only">Close</span>
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                              <path
                                   fillRule="evenodd"
                                   d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                   clipRule="evenodd"
                              />
                         </svg>
                    </button>

                    <button id="playPauseButton" className="rounded bg-white/20 p-1 hover:bg-white/10" onClick={togglePlayPause}>
                         <span id="playPauseIcon" className="sr-only">Play</span>
                         <svg id="playIcon" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M6 4l10 6-10 6V4z" />
                         </svg>
                         <svg id="pauseIcon" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 hidden" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M5 4h3v12H5V4zm7 0h3v12h-3V4z" clipRule="evenodd" />
                         </svg>
                    </button>

                    <audio id="backgroundAudio" src="your-audio-file-url.mp3"></audio>
               </aside>
          </Layout>
     )
};

export default Gallery;
