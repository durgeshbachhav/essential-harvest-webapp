import React from "react";

const Accordion = ({ data, style }) => {
  return (
    <div className="flex flex-col gap-1">
      {data.map((item, index) => (
        <details
          key={index}
          className={`group border-white  border-t  mx-4 ${style}`}
        >
          <summary className="flex items-center justify-between p-4 cursor-pointer outline-none  ">
            <div className="flex items-center justify-center gap-2">
              <span className="text-xs font-semibold sm:text-xl md:text-xl lg:text-xl  font-tienne">
                {item.title}
              </span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5  group-open:rotate-180"
            >
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </summary>
          <div className="px-4 pb-4">
            {item.desc.map((paragraph, idx) => (
              <p key={idx} className="text-[14px] py-2 georgia-regular">
                {paragraph}
              </p>
            ))}
          </div>
        </details>
      ))}
    </div>
  );
};

export default Accordion;
