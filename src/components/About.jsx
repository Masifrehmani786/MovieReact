import React from "react";
import { useNavigate } from "react-router-dom";
import profile_pic from '../assets/Profile.jpg'

const About = () => {
  const concepts = [
    "Working with external API",
    "context API & useContext",
    "React-router-domv6",
    "Pagination",
    "Reusing code/components",
    "Using EndPoints in API calls",
    "useEffect & useNavigate hooks",
    "useParams hooks"
  ];
  const navigate = useNavigate();
  return (
    < >
      <section className="text-gray-900 body-font scroll-smooth">
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-7">
            <img
              className="object-cover object-center rounded"
              alt="Main profile"
              src={profile_pic}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
              Hi! My name is
              <br className="hidden lg:inline-block" />
              <span className="text-blue-700 font-bold ">M Asif Bashir</span>
            </h1>
            <p className="mb-8 leading-relaxed text-xl">
            Hi Everyone, I am Muhammad Asif Bashir from MUltan, Pakistan.
            I am a junior front end developer and did BS Software Engineering
            </p>
            <div className="flex justify-center">
              <a
                href="#learned"
                className="inline-flex text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg "
              >
                Learnings from this project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* learned concepts  */}
      <section className="text-gray-600 body-font " id="learned">
        <div className="container px-5 py-10 mx-auto">
          <div className="text-center mb-12">
            <h1 className="sm:text-3xl text-2xl font-bold  text-center title-font text-gray-900 mb-4">
              I learned a lot of ReactJS concepts while working on this project,
              <br /> some of them are :
            </h1>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {concepts.map((element,index) => {
              return (
                <div className="p-2 sm:w-1/2 w-full" key={index}>
                  <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      className="text-blue-700 w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span className="title-font font-medium">{element}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <button onClick={()=>{navigate('/contact')}} className="flex mx-auto mt-16 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
            Reach me out!
          </button>
        </div>
      </section>
    </>
  );
};

export default About;
