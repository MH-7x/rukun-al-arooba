import { ReactNode } from "react";

function FAQs({
  title,
  Faqs,
}: {
  title?: string;
  Faqs: {
    question: string;
    answer: string | ReactNode;
  }[];
}) {
  return (
    <section
      id="faqs"
      className={`mt-36 relative ${Faqs && "md:px-0 px-4"} faq`}
    >
      <div className="max-w-screen-md mx-auto sm:px-6 lg:px-8 flex flex-col justify-between">
        <div className="text-center">
          <p className="mt-4 text-sm leading-7 text-gray-500 font-regular">
            F.A.Q
          </p>
          <h2 className="text-2xl sm:text-4xl leading-normal font-semibold blue">
            {title ? title : "Frequently Asked Questions"}
          </h2>
        </div>

        <div className="md:mt-20 mt-10">
          <div className="">
            {Faqs.map((faq, index) => (
              <div className="md:py-5 py-3" key={index}>
                <details open={index === 0} className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium gap-x-3">
                    <h3 className="md:text-xl text-lg headline">
                      {" "}
                      {faq.question}
                    </h3>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="group-open:animate-fadeIn mt-3 md:px-3 text-neutral-600 md:text-base text-[15px] flex flex-col gap-y-1">
                    {faq.answer}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQs;
