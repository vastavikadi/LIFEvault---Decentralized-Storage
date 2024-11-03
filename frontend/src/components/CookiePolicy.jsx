import { Link } from 'react-router-dom'

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-blue-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-600 px-6 py-4">
          <h1 className="text-2xl font-bold text-white">Cookie Policy</h1>
        </div>
        <div className="px-6 py-8 space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-blue-800 mb-3">1. What Are Cookies</h2>
            <p className="text-gray-700 leading-relaxed">
              Cookies are small pieces of data stored on your device (computer or mobile device) when you visit a website. They are widely used to make websites work efficiently and provide information to the owners of the site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-800 mb-3">2. How We Use Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              At LifeVault, we use cookies to enhance your experience and provide secure access to your encrypted data. Here are the ways we use cookies:
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed">
              <li>To enable secure login and access to your encrypted data vault</li>
              <li>To remember your preferences and settings across devices</li>
              <li>To enhance the performance and usability of LifeVault</li>
              <li>To analyze how our website and services are used for improvements</li>
              <li>To deliver relevant information and updates about our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-800 mb-3">3. Types of Cookies We Use</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-blue-700">Essential Cookies:</h3>
                <p className="text-gray-700">These are necessary for the website to function securely, allowing access to your encrypted data vault.</p>
              </div>
              <div>
                <h3 className="font-medium text-blue-700">Analytical/Performance Cookies:</h3>
                <p className="text-gray-700">These help us improve LifeVault by understanding how users interact with the platform.</p>
              </div>
              <div>
                <h3 className="font-medium text-blue-700">Functionality Cookies:</h3>
                <p className="text-gray-700">These store your preferences, such as login settings, for a seamless experience.</p>
              </div>
              <div>
                <h3 className="font-medium text-blue-700">Targeting Cookies:</h3>
                <p className="text-gray-700">These collect information to provide relevant updates and enhancements based on your interaction with LifeVault.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-800 mb-3">4. Third-Party Cookies</h2>
            <p className="text-gray-700 leading-relaxed">
              We may use third-party cookies, such as analytics tools, to better understand how LifeVault is being used and to improve the service. These cookies are subject to their respective privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-800 mb-3">5. Managing Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Most web browsers allow you to control cookies through their settings. However, restricting cookies may affect your experience on LifeVault. Here are some ways to manage your preferences:
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed">
              <li>Browser settings: Adjust these in the 'options' or 'preferences' menu of your browser</li>
              <li>Cookie management tools: Use the tools we provide on our website to manage your preferences</li>
              <li>Third-party opt-out: Visit third-party websites to manage cookie preferences specific to their services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-800 mb-3">6. Changes to Our Cookie Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Cookie Policy from time to time. Any changes will be posted on this page, and we will update the "Last updated" date accordingly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-800 mb-3">7. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about our Cookie Policy, feel free to contact us at:
            </p>
            <address className="mt-2 not-italic text-blue-700">
              LifeVault Technologies<br />
              Privacy Office, Varanasi, India<br />
              Email: vastavikadi@gmail.com<br />
              Phone: (123) 456-7890
            </address>
          </section>
        </div>
        <div className="bg-blue-100 px-6 py-4">
          <p className="text-sm text-blue-800">
            By using LifeVault, you consent to our use of cookies as outlined in this Cookie Policy.
          </p>
          <p className="text-sm text-blue-800 mt-2">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
      <div className="mt-8 text-center">
        <Link to="/" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
          Return to Home
        </Link>
      </div>
    </div>
  )
}