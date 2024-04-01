import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import underline from "../../assets/home/underline.png";
import "./Other.scss";

function Return() {
  return (
    <Layout>
      <div className="flex items-center justify-center flex-col  py-20  bg-primary-50 ">
        <div className="heading-content flex items-center justify-center flex-col gap-2">
          <h3 className="bilbo-font text-3xl text-black">Faq</h3>
          <h4 className="rale-font text-2xl">Return & Cancellations</h4>
          <img src={underline} alt="" />
        </div>
        <ul className="max-w-2xl mx-auto mt-20 divide-y  rounded-xl">
          <li>
            <details className="group">
              <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer bg-gradient-to-r from-primary-700 to-primary-900 rounded-lg border-1">
                <svg
                  className="w-5 h-5 text-heading-color transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
                <span className="text-heading-color">
                  WHY AM I BEING CHARGED TAXES AND DUTY?
                </span>
              </summary>

              <article className="px-4 pb-4">
                <p>
                  We are a small business and while we pay for shipping, any
                  additional customs duties, foreign taxes or other fees, which
                  may be imposed, will be charged to the customer.
                </p>
              </article>
            </details>
          </li>
          <li>
            <details className="group">
              <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer bg-gradient-to-r from-primary-700 to-primary-900 rounded-lg border-1">
                <svg
                  className="w-5 h-5 text-heading-color transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
                <span className="text-heading-color">
                  RETURN AND REFUND POLICY?
                </span>
              </summary>

              <article className="px-4 pb-4">
                <p>
                  We’re sorry, but as a small business, we are unable to offer
                  returns at this time due to the associated expenses. We
                  recommend reviewing our product descriptions and
                  specifications carefully before making your purchase to ensure
                  it meets your expectations. There won’t be a return or refund.
                </p>
              </article>
            </details>
          </li>
        </ul>
      </div>
    </Layout>
  );
}

export default Return;
