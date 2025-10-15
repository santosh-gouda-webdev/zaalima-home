const About = () => {
  return (
<section className="py-12 relative xl:mr-0 lg:mr-5 mr-0" id="about">
  <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
    <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
      <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
        <div className="w-full flex-col justify-center items-start gap-8 flex">
          <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
            <h6 className="text-gray-400 text-base font-normal leading-relaxed">
              About Us
            </h6>
            <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
              <h2 className="text-indigo-700 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                Driving Digital Transformation with Technology
              </h2>
              <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                We are a team of passionate IT professionals dedicated to building 
                scalable, secure, and innovative solutions. From cloud deployments 
                to custom software development, we empower businesses to grow and 
                stay ahead in the ever-evolving digital world.
              </p>
            </div>
          </div>
          <div className="w-full flex-col justify-center items-start gap-6 flex">
            <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
              <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                  05+ Years
                </h4>
                <p className="text-gray-500 text-base font-normal leading-relaxed">
                  Delivering Next-Gen IT Solutions
                </p>
              </div>
              <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                  250+ Projects
                </h4>
                <p className="text-gray-500 text-base font-normal leading-relaxed">
                  Successful Deployments Worldwide
                </p>
              </div>
            </div>
            <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
              <div className="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                  20+ Tech Experts
                </h4>
                <p className="text-gray-500 text-base font-normal leading-relaxed">
                  Skilled Professionals in Modern Technologies
                </p>
              </div>
              <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                  98% Client Retention
                </h4>
                <p className="text-gray-500 text-base font-normal leading-relaxed">
                  Building Long-Term Partnerships Globally
                </p>
              </div>
            </div>
          </div>
        </div>
        <button className="sm:w-fit w-full group px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex">
          <span className="px-1.5 text-indigo-600 text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">
            Learn More
          </span>
          <svg
            className="group-hover:translate-x-0.5 transition-all duration-700 ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
            width={18}
            height={18}
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996"
              stroke="#4F46E5"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="w-full lg:justify-start justify-center items-start flex">
        <div className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
          <img
            className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
            src="/about.jpg"
            alt="IT services image"
          />
        </div>
      </div>
    </div>
  </div>
</section>


  )
}

export default About