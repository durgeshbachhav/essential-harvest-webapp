import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import HeroSection from "../../components/heroSection/HeroSection";

function About() {
  return (
    <Layout>
      <HeroSection head="Essential Harvest" para="ABOUT US" />
      <div className="about">
        <div className=" py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-5xl lg:text-center flex flex-col justify-center items-center">
              <h1 className="lg:text-7xl text-4xl md:text-5xl font-bold tracking-tight text-primary-400 text-center primary-font">
                About
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-yellow-450 to-primary-500 primary-font">
                  {" "}
                  Essential Harvest
                </span>
              </h1>
              <p className="secondary-font mt-6 text-md text-sub-heading-color max-w-lg text-center">
                Crafting products with meticulous attention to detail and
                integrity. Experience our natural luxury at an affordable price.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-sub-heading-color">
                    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center  bg-gradient-to-l from-primary-900 to-primary-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-6 w-6 text-white"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                        ></path>
                      </svg>
                    </div>
                    Customized Healthcare Plans
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-sub-heading-color">
                    Tailor your coverage to your specific needs with our
                    customizable plans. Only pay for what matters most to you.
                  </dd>
                </div>
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-sub-heading-color">
                    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center  bg-gradient-to-l from-primary-900 to-primary-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-6 w-6 text-white"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
                        ></path>
                      </svg>
                    </div>
                    Expert Risk Assessment
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-sub-heading-color">
                    Our cutting-edge model provides accurate insights into
                    potential risks, ensuring your coverage aligns perfectly
                    with your risk profile.
                  </dd>
                </div>
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-sub-heading-color">
                    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center bg-gradient-to-l from-primary-900 to-primary-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-6 w-6 text-white"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                    Affordable Premiums
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-sub-heading-color">
                    Experience cost-effective insurance solutions with
                    competitive premiums, ensuring optimal coverage without
                    overspending.
                  </dd>
                </div>
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-sub-heading-color">
                    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center  bg-gradient-to-l from-primary-900 to-primary-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-6 w-6 text-white"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                        ></path>
                      </svg>
                    </div>
                    24/7 Customer Support
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-sub-heading-color">
                    Our dedicated team is here day and night to promptly address
                    your insurance inquiries.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
