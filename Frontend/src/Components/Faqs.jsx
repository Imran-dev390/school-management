import React, { useState } from 'react'


const accordionData = [
  {
    title: "Awfera LMS Smart Education Program",
    items: [
      "Shaping minds in Pakistan.",
      "Driving access to smart learning.",
      "Equal learning for every child.",
      "Knowledge that transforms futures.",
      "Scholarships for real talent."
    ]
  },
  {
    title: "Technology Integration",
    items: [
      "Auto-assessments & smart feedback.",
      "In-video quiz tools for learning.",
      "Real-time student tracking systems.",
      "Progress mapped through live insights.",
      "Adaptive learning paths for all."
    ]
  },
  {
    title: "Empowerment & Access",
    items: [
      "Digital tools for every student.",
      "Youth learning in remote regions.",
      "Removing cost barriers to grow.",
      "Smart education across Pakistan.",
      "Growth opportunities unlocked."
    ]
  },
  {
    title: "Talent Identification",
    items: [
      "Bright minds spotted by AI tools.",
      "Performance-based scholarships.",
      "Merit tracking through smart data.",
      "Equal chance, fair evaluation.",
      "Pakistan’s next leaders rise."
    ]
  },
  {
    title: "Future-Ready Curriculum",
    items: [
      "AI, ML, and tech-driven content.",
      "Soft skills for smarter careers.",
      "Real-life problems, real solutions.",
      "Updated with market demand.",
      "Focused on career and impact."
    ]
  },
  {
    title: "Community Transformation",
    items: [
      "Tech skills reach rural areas.",
      "Local students reach global stage.",
      "Career pathways with purpose.",
      "Learning that inspires families.",
      "A smarter, stronger society."
    ]
  }
];
const Faqs = () => {
      const [activeAccordion, setActiveAccordion] = useState(0);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };
  return (
    // <div className="wrapper px-4">
    // <div className='grid grid-cols-2 justify-center items-center gap-8'>
    //   <div className="left w-[60%]">
    //     <img src="https://awferalms.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftution.56c4975c.png&w=1080&q=75" alt="" />
    //   </div>
    //   <div className="right">
    //     <ul>
    //   <li className='px-4 py-2 rounded-sm bg-grey-800'>
    //     <a href="">Awera</a>
    //   </li>
    //     </ul>
    //   </div>
    // </div>
    // </div>


      <div className="pb-[70px]">
      <div className="container mx-auto px-4">
        <div className="mb-5 md:mb-10" data-aos="fade-up">
          {/* <div className="text-center">
            <span className="inline-block bg-blue-600 text-white text-sm px-4 py-2 mb-4 rounded-full">
              Updated
            </span>
          </div> */}
          <h3 className="text-3xl text-pretty md:text-[35px] lg:text-[42px] font-bold text-white text-center pt-5">
           FAQS
          </h3> 
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 xl:col-span-4" data-aos="fade-up">
            {/* <img
              src="/_next/static/media/tution.56c4975c.png"
              alt="Tuition"
              className="w-full rounded-lg"
              loading="lazy"
            /> */}
            <img src="https://awferalms.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftution.56c4975c.png&w=1080&q=75" alt="" className='w-full rounded-lg'/>
          </div>

          <div className="lg:col-span-7 xl:col-span-8" data-aos="fade-up">
            <ul className="space-y-6">
              {accordionData.map((section, index) => (
                <li
                  key={index}
                  className={`border border-gray-200 text-white rounded-t-md bg-[rgb(12,14,43)] ${
                    activeAccordion === index ? 'active' : ''
                  }`}
                >
                  <button
                    className="flex justify-between items-center w-full text-left px-5 py-4 text-xl font-bold text-gray-900 dark:text-white"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className='text-white'>{section.title}</span>
                    <svg
                      className={`w-5 h-5 flex-shrink-0 bg-slate-500 transition-transform duration-500 ${
                        activeAccordion === index ? 'rotate-180' : 'rotate-0'
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </button>
                  <div
                    className={`transition-all duration-500 overflow-hidden ${
                      activeAccordion === index ? 'h-auto' : 'h-0'
                    }`}
                  >
                    <div className="p-4 md:px-8">
                      <ul>
                        {section.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className={`py-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-700 ${
                              itemIndex === section.items.length - 1 ? 'border-b-0' : ''
                            }`}
                          >
                            <h4 className="text-white font-light flex items-center">
                              <i className="icofont-check mr-2"></i>
                              <span className="font-medium">{item}</span>
                            </h4>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Faqs



















  