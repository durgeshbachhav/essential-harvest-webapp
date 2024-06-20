import React from "react";
import Layout from "../../components/layout/Layout";
import underline from "../../assets/home/underline.png";
import { TermAndCondition } from "../../customData/other/TermAndCondition";


const TermsAndCondition = () => {
  return (
    <Layout>
      <div className="flex items-center justify-center flex-col  py-20   ">
        <div className="heading-content flex items-center justify-center flex-col gap-2">

          <h4 className="secondary-font text-2xl">Term And Conditions</h4>
          <img src={underline} alt="" />
        </div>
        <ul className="max-w-2xl mx-4 mt-20 divide-y gap-2  ">
          {
            Object.entries(TermAndCondition).map(([sectionTitle, sectionContent]) => (
              <li key={sectionTitle}>
                <details className="group">
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
                    <span className="text-heading-color primary-font">{sectionTitle}</span>
                  </summary>
                  <article className="px-4 pb-4 py-2 max-w-sm">
                    {sectionContent}
                  </article>
                </details>
              </li>
            ))
          }

        </ul>
      </div>
    </Layout>
  )
};

export default TermsAndCondition;