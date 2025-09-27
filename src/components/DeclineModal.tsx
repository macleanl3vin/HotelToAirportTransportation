import {AlertCircle} from "lucide-react";

interface DeclineModalProps {
  isOpen: boolean;
  onReconsider: () => void;
}

const DeclineModal = ({isOpen, onReconsider}: DeclineModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        {/* Backdrop */}
        <div className="fixed inset-0 bg-black bg-opacity-50" />

        {/* Modal */}
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full">
          {/* Header */}
          <div className="flex items-center justify-center p-8 border-b border-gray-200">
            <div className="text-center">
              <div className="w-8 h-8 bg-red-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                <AlertCircle className="h-10 w-10 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h2>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="text-center">
              <p className="text-lg text-gray-800 mb-6 leading-relaxed">
                You must accept our Terms of Service and Privacy Policy to use this service.
              </p>
              <p className="text-sm text-gray-600 mb-6">
                Our terms ensure a safe and reliable transportation experience for all users.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-gray-200 bg-gray-50">
            <div className="flex justify-center">
              <button
                onClick={onReconsider}
                className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Review Terms Again
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeclineModal;
