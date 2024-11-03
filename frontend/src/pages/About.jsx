import { Link } from "react-router-dom";
import about from '../assets/aboutlf.png';
import { FaComment } from "react-icons/fa";

function About() {
  return (
    <div className="w-full py-16 px-4 bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8 items-center">
        
        {/* Image Section */}
        <img 
          className="w-full md:w-[500px] mx-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" 
          src={about} 
          alt="About Us" 
        />

        {/* Text Section */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <p className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 inline-block text-transparent bg-clip-text text-5xl font-bold py-1">
          🌐 About LIFEvault
          </p>
          <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold py-4 text-blue-700">
            Strenthening Users' Privacy with Blockchain Driven Solution
          </h1>

          {/* Mission Card */}
          <div className="bg-gradient-to-r from-blue-200 to-blue-400 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 mb-6 h-[200px] my-5">
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">🌟 Our Mission</h2>
            <p className="text-md text-[#000435] leading-relaxed">
              We aim to empower Users with innovative solution that harness the power of Blockchain, enabling them to ensure their control over their own data.
            </p>
          </div>

          {/* How It Works Section with Cards */}
          <div className="w-full">
            <div className="bg-gradient-to-r from-blue-200 to-blue-400 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-[200px] my-5">
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">🤔 How it Works!</h2>
              <p className="text-md text-[#000435] leading-relaxed">
                <span>☑️ Use our intuitive interface to store and categorize your files, with automatic AI-driven sorting and summarization.</span><br />
                <span>☑️ Utilize Hive Keychain to manage permissions and share your information securely, ensuring that only authorized individuals can access your data.</span><br /> 
              </p>
            </div>
          </div>


          {/* Explore Button */}
          <Link
            to="#"
            className="bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-600 hover:to-blue-400 text-white py-3 px-6 rounded-md shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg w-[180px] text-center font-medium my-6 mx-auto md:mx-0"
          >
            Explore Now
          </Link>
        </div>
      </div>

      Fixed message icon with tooltip
      <div className="relative">
        <Link to="/chatbot" className="group fixed bottom-4 right-20 bg-blue-500 rounded-full p-3 shadow-lg transition-transform transform hover:scale-110">
          <FaComment className="text-white text-3xl" />
          <span className="absolute -top-10 -right-4 bg-white text-blue-500 text-sm rounded-md px-2 py-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Try Our ChatBot
          </span>
        </Link>
      </div>
    </div>
  );
}

export default About;
