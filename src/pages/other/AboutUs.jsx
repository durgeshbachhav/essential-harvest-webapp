import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import HeroSection from "../../components/heroSection/HeroSection";
import underline from "../../assets/home/underline.png";
import { GiTwirlyFlower } from "react-icons/gi";

function About() {
  return (
    <Layout>
      <HeroSection head="Essential Harvest" para="Our Story" />
      <div className="about">
        <div className=" py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-5xl lg:text-center flex flex-col justify-center items-center">
              <h3 className=" text-3xl md:text-4xl font-bold  text-primary-800 text-center primary-font">
                Essential Harvest :
                <span className="text-transparent bg-clip-text bg-black  to-chestnut primary-font">
                  {" "}
                  Where Nature Meets You
                </span>
              </h3>
              <p className="secondary-font mt-6 text-md text-sub-heading-color max-w-lg text-center">
                Welcome to Essential Harvest, your one-stop shop for harnessing
                the power of nature's goodness for your well-being. We believe
                that true beauty radiates from within, and health is the
                ultimate treasure.
              </p>
            </div>
            <div className="w-full  mt-8 ">
              <div className=" flex flex-col items-center justify-center gap-4">
                <div className=" flex items-center justify-center flex-col gap-2">
                  <img
                    src={underline}
                    alt=""
                    className="content-center rotate-180"
                  />
                  <div className="font-bold primary-font text-2xl py-2">
                    Our Story: From Backyard Blooms to Essential Harvest
                  </div>
                  <img src={underline} alt="" className="content-center" />
                  <div className="secondary-font text-base leading-7 text-sub-heading-color">
                    Hey there! We're Priyanka and Purvi, the faces behind
                    Essential Harvest. Our story began in Nashik, India, a
                    peaceful town nestled amidst rolling hills.
                  </div>
                </div>
                <div className="flex items-center justify-center flex-col gap-2 ">
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-20 h-20 flex items-center justify-center">
                      <GiTwirlyFlower color="green" size={20} />
                    </div>
                    <div className="font-bold primary-font text-2xl py-2">
                      Priyanka's Passion Sprouts
                    </div>
                    <div className="w-20 h-20 flex items-center justify-center">
                      <GiTwirlyFlower color="green" size={20} />
                    </div>
                  </div>
                  <div className="mt-2 secondary-font text-base leading-7 text-sub-heading-color">
                    Priyanka, juggling the busy world of consulting, found
                    solace in her backyard garden. There, amongst the vibrant
                    blooms, she discovered a love for rose geranium. Its
                    delicate fragrance and potential benefits sparked a
                    curiosity that grew into a passion.
                  </div>
                  <div className="secondary-font mt-2 text-base leading-7 text-sub-heading-color">
                    Wanting to share this newfound joy, Priyanka reached out to
                    Purvi, her brilliant sister-in-law with a talent for tech.
                    Purvi, instantly drawn to the idea, saw a chance to combine
                    their skills. Priyanka's consulting background could create
                    a strategic plan, while Purvi's engineering expertise could
                    optimize the process.
                  </div>
                </div>
                <div className="flex items-center justify-center flex-col gap-2">
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-20 h-20 flex items-center justify-center">
                      <GiTwirlyFlower color="green" size={20} />
                    </div>
                    <div className="font-bold primary-font text-2xl py-2">
                      A Dream Takes Root
                    </div>
                    <div className="w-20 h-20 flex items-center justify-center">
                      <GiTwirlyFlower color="green" size={20} />
                    </div>
                  </div>

                  <div className="secondary-font  text-base leading-7 text-sub-heading-color">
                    Together, they envisioned a venture that celebrated nature's
                    bounty. They dreamt of bringing the goodness of rose
                    geranium to their community and beyond. Thus, Essential
                    Harvest was born – a name symbolizing the essence of
                    nature's harvest.
                  </div>
                </div>
                <div className="flex items-center justify-center flex-col gap-2">
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-20 h-20 flex items-center justify-center">
                      <GiTwirlyFlower color="green" size={20} />
                    </div>
                    <div className="font-bold primary-font text-2xl py-2">
                      From Hobby to Flourishing Business
                    </div>
                    <div className="w-20 h-20 flex items-center justify-center">
                      <GiTwirlyFlower color="green" size={20} />
                    </div>
                  </div>

                  <div className="secondary-font text-base leading-7 text-sub-heading-color">
                    What began as a simple hobby cultivating rose geranium in
                    Priyanka's backyard soon blossomed into a thriving business.
                    Leveraging their unique skillset, they meticulously crafted
                    high-quality, 100% pure rose geranium essential oil and
                    hydrosol.
                  </div>
                </div>
                <div className="flex items-center justify-center flex-col gap-2">
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-20 h-20 flex items-center justify-center">
                      <GiTwirlyFlower color="green" size={20} />
                    </div>
                    <div className="font-bold primary-font text-2xl py-2">
                      More Than Just a Business
                    </div>
                    <div className="w-20 h-20 flex items-center justify-center">
                      <GiTwirlyFlower color="green" size={20} />
                    </div>
                  </div>

                  <div className="secondary-font text-base leading-7 text-sub-heading-color">
                    Essential Harvest wasn't just about selling products; it was
                    about cultivating a movement. They wanted to inspire people
                    to reconnect with nature and embrace its power to enhance
                    well-being.
                  </div>
                </div>
                <div className="flex items-center justify-center flex-col gap-2">
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-20 h-20 flex items-center justify-center">
                      <GiTwirlyFlower color="green" size={20} />
                    </div>
                    <div className="font-bold primary-font text-2xl py-2">
                      Growing Together
                    </div>
                    <div className="w-20 h-20 flex items-center justify-center">
                      <GiTwirlyFlower color="green" size={20} />
                    </div>
                  </div>

                  <div className="secondary-font text-base leading-7 text-sub-heading-color">
                    As their business flourished, Priyanka and Purvi focused on
                    building a loyal community. They expanded their product
                    range, offering a variety of natural skincare, haircare, and
                    aromatherapy products. Each product is a testament to their
                    commitment to quality and sustainability.
                  </div>
                </div>
                <div className="flex items-center justify-center flex-col gap-2">
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-20 h-20 flex items-center justify-center">
                      <GiTwirlyFlower color="green" size={20} />
                    </div>
                    <div className="font-bold primary-font text-2xl py-2">
                      The Journey Continues
                    </div>
                    <div className="w-20 h-20 flex items-center justify-center">
                      <GiTwirlyFlower color="green" size={20} />
                    </div>
                  </div>
                  <div className="secondary-font text-base leading-7 text-sub-heading-color">
                    Today, Essential Harvest stands as a symbol of dedication,
                    collaboration, and a love for nature's gifts. Priyanka and
                    Purvi remain passionate about sharing the power of essential
                    oils and empowering people to embrace a holistic approach to
                    well-being.
                  </div>
                </div>
                <div className="flex items-center justify-center flex-col gap-2">
                  {/* <img
                    src={underline}
                    alt=""
                    className="content-center rotate-180"
                  /> */}
                  <div className="secondary-font">
                    {" "}
                    Join us on this journey! Explore our website and discover
                    how Essential Harvest can help you cultivate your natural
                    radiance.
                  </div>
                  {/* <img src={underline} alt="" className="content-center " /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
