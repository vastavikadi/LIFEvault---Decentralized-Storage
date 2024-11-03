import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-blue-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-600 px-6 py-4">
          <h1 className="text-2xl font-bold text-white">Privacy Policy</h1>
        </div>
        <div className="px-6 py-8 space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-blue-800 mb-3">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to LifeVault. We are committed to protecting your privacy and ensuring that your personal data is secure. This Privacy Policy explains how we collect, use, and protect your information when you use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-800 mb-3">2. Data We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              LifeVault collects the following types of data to provide our services:
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed">
              <li>Personal information: such as name, email address, and contact information when you sign up</li>
              <li>Encrypted data: all information you store in LifeVault is encrypted before it's uploaded</li>
              <li>Device information: including IP address, browser type, and device type for security purposes</li>
              <li>Usage data: details about how you interact with our service to improve our offerings</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-800 mb-3">3. How We Use Your Data</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              LifeVault uses your data to:
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed">
              <li>Provide secure access to your encrypted data vault</li>
              <li>Improve the functionality and performance of our services</li>
              <li>Communicate with you about updates, security notices, or important changes</li>
              <li>Analyze usage patterns to enhance the user experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-800 mb-3">4. Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              Security is at the core of LifeVault. We use advanced encryption techniques to ensure that your data is protected both in transit and at rest. Your information is encrypted before being uploaded, and only you have access to the decryption keys. Our system is also built on Hive Blockchain to ensure data integrity and tamper-proof transactions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-800 mb-3">5. Data Sharing</h2>
            <p className="text-gray-700 leading-relaxed">
              LifeVault does not sell, trade, or rent your personal information to third parties. We may share your data with trusted service providers who help us operate our platform, such as cloud storage providers, but they are bound by strict confidentiality agreements and cannot access or use your data for any other purpose.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-800 mb-3">6. Your Data Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed">
              <li>Access your data: request a copy of the data you’ve provided to LifeVault</li>
              <li>Delete your data: request the deletion of your account and all associated information</li>
              <li>Correct your data: update any incorrect or outdated information</li>
              <li>Restrict processing: request limits on how we use your personal data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-800 mb-3">7. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed">
              We retain your data for as long as your account is active or as needed to provide our services. If you choose to close your account, we will delete your encrypted data and personal information from our systems, except where retention is required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-800 mb-3">8. Cookies</h2>
            <p className="text-gray-700 leading-relaxed">
              LifeVault uses cookies to enhance your experience on our platform. For detailed information about the types of cookies we use and how we use them, please review our <Link to="/cookie-policy" className="text-blue-600 hover:underline">Cookie Policy</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-800 mb-3">9. Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy periodically. We will notify you of any significant changes by posting the updated policy on this page, along with an updated "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-800 mb-3">10. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions or concerns about our Privacy Policy, please contact us at:
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
