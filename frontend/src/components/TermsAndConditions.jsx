import { Link } from 'react-router-dom';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-blue-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-600 px-6 py-4">
          <h1 className="text-2xl font-bold text-white">Terms and Conditions</h1>
        </div>
        <div className="px-6 py-8 space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-blue-800 mb-3">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing or using LifeVault’s services, you agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, you may not access our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-800 mb-3">2. Use of Services</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              LifeVault provides secure file storage, sharing, and management solutions. By using our platform, you acknowledge and agree that:
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed">
              <li>LifeVault serves as a secure repository, but we are not liable for any data loss due to unforeseen circumstances.</li>
              <li>Users should exercise caution when sharing sensitive files and ensure they have proper access controls.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-800 mb-3">3. User Accounts</h2>
            <p className="text-gray-700 leading-relaxed">
              You may need to create an account to access certain features of LifeVault. It is your responsibility to safeguard your login credentials and manage your account securely.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-800 mb-3">4. Data Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              LifeVault is committed to protecting your data. We process personal information in accordance with our Privacy Policy. By using our services, you consent to this processing and affirm that all data provided is accurate.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-800 mb-3">5. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed">
              All LifeVault content, features, and functionality are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-800 mb-3">6. Termination</h2>
            <p className="text-gray-700 leading-relaxed">
              We may suspend or terminate your account if you violate these Terms. Termination may occur without notice and at our discretion.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-800 mb-3">7. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              LifeVault reserves the right to amend these Terms at any time. You will be notified of significant changes with at least 30 days’ notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-800 mb-3">8. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              For any inquiries about these Terms, feel free to reach out to us at:
            </p>
            <address className="mt-2 not-italic text-blue-700">
              LifeVault<br />
              Varanasi, India<br />
              Email: support@lifevault.com<br />
              LinkedIn: <a href="https://www.linkedin.com/in/vastavikadi" className="text-blue-600 hover:underline">@vastavikadi</a>
            </address>
          </section>
        </div>
        <div className="bg-blue-100 px-6 py-4">
          <p className="text-sm text-blue-800">
            By using LifeVault, you acknowledge and agree to these Terms and Conditions.
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
  );
}