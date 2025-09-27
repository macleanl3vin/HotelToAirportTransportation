import {Eye} from "lucide-react";

interface InitialTermsModalProps {
  isOpen: boolean;
  onAcceptBoth: () => void;
  onReadDetails: () => void;
  onDecline: () => void;
}

const InitialTermsModal = ({isOpen, onAcceptBoth, onReadDetails, onDecline}: InitialTermsModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        {/* Backdrop */}
        <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />

        {/* Modal */}
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full">
          {/* Header */}
          <div className="flex items-center justify-center p-8 border-b border-gray-200">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <img src="/logoTCL.png" alt="HTAT Logo" className="w-12 h-18 object-contain" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Hotel To Airport Transportation LLC</h2>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Terms and Conditions</h3>
              <p className="text-gray-600">Please accept our Terms of Service and Privacy Policy to continue.</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="text-center mb-8">
              <div className="max-w-lg mx-auto space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Terms of Service</h4>
                  <p className="text-blue-800 text-sm leading-relaxed">
                    Covers your use of our transportation platform, including eligibility requirements, payment policies, safety
                    conduct, and our service limitations.
                  </p>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Privacy Policy</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Explains how we collect, use, and protect your personal information, ride data, and location information for our
                    transportation services.
                  </p>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed">
                  By accepting, you agree to both documents and confirm you meet our age requirement (18+) to use our transportation
                  services.
                </p>
              </div>
            </div>
          </div>

          {/* Footer with Action Buttons */}
          <div className="p-6 border-t border-gray-200 bg-gray-50 space-y-4">
            {/* Primary Actions */}
            <div className="flex space-x-4 justify-center">
              <button
                onClick={onDecline}
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Decline
              </button>
              <button
                onClick={onAcceptBoth}
                className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Accept Terms & Privacy Policy
              </button>
            </div>

            {/* Secondary Action */}
            <div className="flex justify-center">
              <button
                onClick={onReadDetails}
                className="flex items-center space-x-2 px-4 py-2 text-blue-600 hover:text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <Eye className="h-4 w-4" />
                <span>Read Full Terms (Long Version)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InitialTermsModal;
