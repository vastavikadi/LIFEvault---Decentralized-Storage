import { RiRobot2Fill, RiTailwindCssFill } from "react-icons/ri";
import { MdChatBubbleOutline, MdLeaderboard, MdSettings } from "react-icons/md";

const featureData = [
  {
    icon: <RiTailwindCssFill size={23} />,
    title: "Responsive Design",
    description: "Our platform is designed to be fully responsive, ensuring a seamless experience on any device. Users can access our platform on-the-go, whether on a smartphone, tablet, or desktop.",
    gradient: "bg-gradient-to-r from-blue-400 to-blue-600",
  },
  {
    icon: <RiRobot2Fill size={23} />,
    title: "AI-Powered Organization",
    description: "Let our AI assistant categorize, summarize, and highlight key moments from your life events, making it easier to relive and manage your memories.",
    gradient: "bg-gradient-to-r from-blue-600 to-blue-900",
  },
  {
    icon: <MdChatBubbleOutline size={23} />,
    title: "Seamless Blockchain Integration",
    description: "Experience the power of decentralized technology with Hive blockchain support, allowing for secure, transparent, and reliable data handling.",
    gradient: "bg-gradient-to-r from-purple-400 to-purple-600",
  },
  {
    icon: <MdSettings size={23} />,
    title: "User-Controlled Privacy",
    description: "Enjoy complete ownership and control over your data, with the ability to manage access and permissions, keeping your information truly private and secure.",
    gradient: "bg-gradient-to-r from-red-400 to-red-600",
  },
];

const Features = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-blue-100 py-24">
      <div className="container px-5 py-2 mx-auto">
        <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
          <h1 className="sm:text-4xl text-3xl font-bold title-font text-blue-700 mb-4">
            🫴 What We Offer to Our Users 💎
          </h1>
          <p className="text-base text-blue-600 max-w-xl">
            Explore our cutting-edge Blockchain solution crafted to ensure Privacy and <b>Your-Control</b> over Your Data.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {featureData.map((feature, index) => (
            <div key={index} className="xl:w-1/4 md:w-1/2 p-4">
              <div className={`shadow-lg rounded-xl p-6 transition-transform duration-300 hover:scale-105 hover:shadow-2xl ${feature.gradient} h-full flex flex-col justify-between text-white`}>
                <div>
                  <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-opacity-80 mb-4">
                    {feature.icon}
                  </div>
                  <h2 className="text-lg font-semibold mb-2">{feature.title}</h2>
                </div>
                <p className="leading-relaxed mt-4">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
