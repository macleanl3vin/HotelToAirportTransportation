import {useState} from "react";
import {FileText} from "lucide-react";

interface TermsModalProps {
  isOpen: boolean;
  onBack: () => void;
}

const TermsModal = ({isOpen, onBack}: TermsModalProps) => {
  const [activeTab, setActiveTab] = useState<"terms" | "privacy">("terms");

  if (!isOpen) return null;

  const termsContent = {
    title: "Terms of Service",
    lastUpdated: "September 23, 2025",
    sections: [
      {
        title: "1. Eligibility",
        content:
          "You must be at least 18 years of age (or the legal age of majority in your jurisdiction) to use our Services. By using HTAT, you represent and warrant that you meet this requirement and that the information you provide is accurate and truthful.",
      },
      {
        title: "2. Our Services",
        content:
          "HTAT provides a platform that connects riders with drivers for transportation services. HTAT does not own, operate, or control the vehicles used by drivers. All drivers are independent contractors.",
      },
      {
        title: "3. User Accounts",
        content:
          "To use the Services, you must create an account and provide accurate personal information. You are responsible for maintaining the confidentiality of your login credentials and all activity occurring under your account.",
      },
      {
        title: "4. Payments",
        content:
          "By booking a ride, you authorize HTAT to charge your payment method for the applicable fare, fees, surcharges, and taxes. Fare estimates are provided for convenience and may vary. Cancellation fees may apply if you cancel after a driver accepts.",
      },
      {
        title: "5. Safety & Conduct",
        content:
          "You agree to use the Services safely and respectfully. Riders must wear seat belts, obey all laws, and refrain from harassment or unsafe conduct. Violations may result in suspension or termination.",
      },
      {
        title: "6. Disclaimers",
        content:
          "HTAT provides the Services 'AS IS' and does not guarantee availability, safety, timeliness, or error-free operation.",
      },
      {
        title: "7. Limitation of Liability",
        content:
          "HTAT and its affiliates are not liable for indirect, incidental, or consequential damages. HTAT's total liability will not exceed the amount paid for the ride giving rise to the claim.",
      },
      {
        title: "8. Indemnification",
        content:
          "You agree to indemnify and hold harmless HTAT, its affiliates, and employees from claims and expenses arising from your use of the Services or violation of these Terms.",
      },
      {
        title: "9. Termination",
        content:
          "HTAT may suspend or terminate your account for violations of these Terms, illegal activity, or misuse of the Services.",
      },
      {
        title: "10. Dispute Resolution",
        content:
          "Disputes will be resolved through binding arbitration in Charleston, SC. You waive the right to a jury trial or class action.",
      },
      {
        title: "11. Changes to Terms",
        content: "HTAT may update these Terms from time to time. Continued use of the Services after changes constitutes acceptance.",
      },
      {
        title: "12. Contact Us",
        content:
          "For questions, contact Hotel To Airport Transportation LLC at Hoteltoairportllc@gmail.com, 843-326-0220, 6650 Rivers Ave, Suite 100, North Charleston, South Carolina 29406.",
      },
    ],
  };

  const privacyContent = {
    title: "Privacy Policy",
    lastUpdated: "September 23, 2025",
    sections: [
      {
        title: "1. Information We Collect",
        content:
          "We may collect personal information (name, email, phone), ride information (locations, times), device data, and driver information (license, insurance, background checks).",
      },
      {
        title: "2. How We Use Your Information",
        content:
          "We use your information to provide and improve Services, process payments, match riders with drivers, ensure safety, send updates, and conduct analytics.",
      },
      {
        title: "3. Sharing of Information",
        content:
          "We do not sell your personal information. We may share data with drivers, payment processors, service providers, and as required by law.",
      },
      {
        title: "4. Data Retention",
        content: "We retain information as long as necessary for operations, legal compliance, and dispute resolution.",
      },
      {
        title: "5. Security",
        content: "We implement safeguards to protect your data but cannot guarantee absolute security.",
      },
      {
        title: "6. Your Rights & Choices",
        content: "You may request access, correction, deletion, or a copy of your data, and opt out of marketing communications.",
      },
      {
        title: "7. Children's Privacy",
        content: "Our Services are not for individuals under 18. We do not knowingly collect data from children.",
      },
      {
        title: "8. Location Information",
        content:
          "We collect precise location data for pickups and drop-offs. You may disable location services but this may limit functionality.",
      },
      {
        title: "9. Policy Updates",
        content: "We may update this policy periodically. Continued use after updates means you accept the revised policy.",
      },
      {
        title: "10. Contact Us",
        content:
          "For questions, contact Hotel To Airport Transportation LLC at Hoteltoairportllc@gmail.com, 843-326-0220, 6650 Rivers Ave, Suite 100, North Charleston, South Carolina 29406.",
      },
    ],
  };

  const currentContent = activeTab === "terms" ? termsContent : privacyContent;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        {/* Backdrop */}
        <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />

        {/* Modal */}
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Terms of Service</h2>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab("terms")}
              className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                activeTab === "terms"
                  ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              Terms of Service
            </button>
            <button
              onClick={() => setActiveTab("privacy")}
              className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                activeTab === "privacy"
                  ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              Privacy Policy
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Hotel To Airport Transportation LLC</h3>
                <p className="text-lg font-semibold text-blue-600">{currentContent.title}</p>
                <p className="text-sm text-gray-500">Effective Date: {currentContent.lastUpdated}</p>
              </div>

              <div className="prose max-w-none">
                <p className="text-gray-600 leading-relaxed mb-6">
                  {activeTab === "terms"
                    ? 'Welcome to Hotel To Airport Transportation LLC ("HTAT," "we," "our," or "us"). These Terms of Service ("Terms") govern your access to and use of the HTAT website, mobile application, and services (collectively, the "Services"). By creating an account, booking a ride, or clicking "I Agree," you confirm that you have read, understood, and agree to be legally bound by these Terms.'
                    : 'This Privacy Policy explains how Hotel To Airport Transportation LLC ("HTAT") collects, uses, and safeguards your information when you use our website, mobile application, and services.'}
                </p>

                <div className="space-y-6">
                  {currentContent.sections.map((section, index) => (
                    <div key={index} className="border-l-4 border-blue-200 pl-4">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{section.title}</h4>
                      <p className="text-gray-700 leading-relaxed">{section.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer with Action Buttons */}
          <div className="p-6 border-t border-gray-200 bg-gray-50">
            <p className="text-sm text-gray-600 mb-4 text-center">
              Please review both the Terms of Service and Privacy Policy above in their entirety. Once you've finished reading, please
              return to the previous page to accept both documents.
            </p>
            <div className="flex justify-center">
              <button
                onClick={onBack}
                className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                ← Back to Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsModal;
