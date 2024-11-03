import editor from "../assets/Showcase.png";

const Showcase = () => {
  const editorData = {
    title: "🔐 What We Offer 🔐",
features: [
  {
    title: "Unmatched Security",
    description:
      "Protect your sensitive documents with top-tier blockchain technology, ensuring that your data remains secure, private, and accessible only to you.",
  },
  {
    title: "AI-Driven Insights",
    description:
      "Leverage AI to categorize, summarize, and highlight important moments, helping you easily manage and navigate through your stored memories.",
  },
  {
    title: "Seamless Integration",
    description:
      "Effortlessly connect with the Hive blockchain for secure data handling and streamlined interactions with other decentralized platforms.",
  },
  {
    title: "Complete Data Ownership",
    description:
      "Enjoy full control over your information with flexible privacy settings, empowering you to decide who can access or share your valuable data.",
  },
    ],
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-5xl font-extrabold text-center text-blue-600 mb-12">
          {editorData.title}
        </h2>
        <div className="flex flex-col md:flex-row md:space-x-10 items-start">
          <div className="md:w-1/2 space-y-8">
            {editorData.features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-lg shadow-lg border border-blue-200 transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  {feature.title}
                </h3>
                <p className="text-base text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center hover:scale-105 transition-transform duration-300">
            <img
              src={editor}
              alt="Prediction Models"
              className="w-full h-auto max-w-lg rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
