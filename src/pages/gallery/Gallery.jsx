
import Layout from "../../components/layout/Layout";
import { Link } from "react-router-dom";
import review1 from '../../assets/reviews/review1.jpeg'
import review2 from '../../assets/reviews/review2.jpeg'

const Gallery = () => {

     return (
          <Layout>
               <div className="bg-white py-6 sm:py-8 lg:py-12">
                    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                         <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl xl:mb-12">Our Gallery</h2>
                         {/* <p className="text-center text-gray-600">We are in the process of uploading new content. Please check back soon!</p> */}

                         <div className="mb-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mb-8 md:grid-cols-4 md:gap-6 xl:gap-8">
                              <Link href="#" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                                   <img src={review1} loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                                   <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                                   <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">dishita</span>
                              </Link>
                              <Link href="#" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                                   <img src={review2} loading="lazy" alt="Photo by Magicle" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                                   <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                                   <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">manvi</span>
                              </Link>

                         </div>
                    </div>
               </div>
          </Layout>
     )
};

export default Gallery;
