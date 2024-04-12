import Layout from "../../components/layout/Layout";
import SwiperComponent from "../../components/swiper/Swiper";

import AboutSectionOne from "../../components/heroSection/AboutSectionOne";
import AboutSectionTwo from "../../components/heroSection/AboutSectionTwo";
import ProductCard from "../../components/productCard/ProductCard";
import Track from "../../components/track/Track";

function Home() {
  return (
    <Layout>
      <div className="relative">
        <div className="z-30">
          <SwiperComponent />
        </div>
        <AboutSectionOne />
        <AboutSectionTwo />
        <div className="py-4">
          <ProductCard />
        </div>
        <Track />
      </div>
    </Layout>
  );
}

export default Home;
