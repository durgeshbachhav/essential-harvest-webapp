// import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import underline from "../../assets/home/underline.png";
import "./Other.scss";

function Privacy() {
  return (
    <Layout>
      <div className="flex items-center justify-center flex-col  py-20  bg-gray-50 ">
        <div className="heading-content flex items-center justify-center flex-col gap-2">
          <h3 className="primary-font text-3xl text-black">Faq</h3>
          <h4 className="secondary-font text-2xl">Privacy Policy</h4>
          <img src={underline} alt="" />
        </div>
        <ul className="max-w-2xl mx-4 mt-20 divide-y gap-2  rounded-xl">
          <li className="w-full">
            <details className="group  max-w-sm">
              <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer bg-leaf mb-2">
                <svg
                  className="w-5 h-5 text-heading-color transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
                <span className="text-heading-color max-w-sm primary-font">
                  Data Collection
                </span>
              </summary>

              <article className="px-4 pb-4 py-2 max-w-sm">
                <p className="secondary-font">
                  Essential Harvest collects personal information from customers
                  when they make a purchase, sign up for newsletters, or
                  interact with the website. This includes name, email address,
                  shipping address, and payment details.
                </p>
              </article>
            </details>
          </li>
          <li className="w-full">
            <details className="group  max-w-sm">
              <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer bg-leaf mb-2">
                <svg
                  className="w-5 h-5 text-heading-color transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
                <span className="text-heading-color max-w-sm primary-font">
                  Purpose of Data Collection
                </span>
              </summary>

              <article className="px-4 pb-4 py-2 max-w-sm">
                <p className="secondary-font">
                  The collected data is used for order processing, shipping,
                  customer support, and marketing communication. It helps
                  Essential Harvest provide personalized services and improve
                  customer experience.
                </p>
              </article>
            </details>
          </li>
          <li className="w-full">
            <details className="group  max-w-sm">
              <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer bg-leaf mb-2">
                <svg
                  className="w-5 h-5 text-heading-color transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
                <span className="text-heading-color max-w-sm primary-font">
                  Consent
                </span>
              </summary>

              <article className="px-4 pb-4 py-2 max-w-sm">
                <p className="secondary-font">
                  Customers provide consent for data collection and usage by
                  actively providing their information during checkout or
                  newsletter sign-up. They can also manage their preferences or
                  opt-out at any time.
                </p>
              </article>
            </details>
          </li>
          <li className="w-full">
            <details className="group  max-w-sm">
              <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer bg-leaf mb-2">
                <svg
                  className="w-5 h-5 text-heading-color transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
                <span className="text-heading-color max-w-sm primary-font">
                  Cookie Policy
                </span>
              </summary>

              <article className="px-4 pb-4 py-2 max-w-sm">
                <p className="secondary-font">
                  Essential Harvest's website uses cookies to enhance user
                  experience and track website analytics. Customers can manage
                  their cookie preferences through their web browser settings.
                </p>
              </article>
            </details>
          </li>
          <li className="w-full">
            <details className="group  max-w-sm">
              <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer bg-leaf mb-2">
                <svg
                  className="w-5 h-5 text-heading-color transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
                <span className="text-heading-color max-w-sm primary-font">
                  Updates To Policy
                </span>
              </summary>

              <article className="px-4 pb-4 py-2 max-w-sm">
                <p className="secondary-font">
                  This privacy policy may be updated periodically to reflect
                  changes in legal requirements or business practices. Customers
                  will be notified of any significant changes through email or
                  website notifications.
                </p>
              </article>
            </details>
          </li>
          <li className="w-full">
            <details className="group  max-w-sm">
              <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer bg-leaf mb-2">
                <svg
                  className="w-5 h-5 text-heading-color transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
                <span className="text-heading-color max-w-sm primary-font">
                  Contact Information
                </span>
              </summary>

              <article className="px-4 pb-4 py-2 max-w-sm">
                <p className="secondary-font">
                  For any questions or concerns regarding this privacy policy or
                  the handling of personal data, customers can contact Essential
                  Harvest's customer support team at care@essentialharvest.in or
                  +91 9881900022.
                </p>
              </article>
            </details>
          </li>
        </ul>
        <div>
          <p>
            By providing this comprehensive privacy policy, Essential Harvest
            aims to build trust with customers and demonstrate a commitment to
            protecting their privacy
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Privacy;
