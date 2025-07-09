export interface BookingData {
  id?: string;
  pickupLocation: string;
  dropoffLocation: string;
  pickupDate: string;
  pickupTime: string;
  passengers: number;
  serviceType: 'standard';
  specialRequests?: string;
  contactInfo: {
    name: string;
    phone: string;
    email: string;
  };
  language: 'en' | 'es';
  paymentMethod?: 'card' | 'cash';
  estimatedPrice?: number;
}

export interface VoiceAssistantState {
  isListening: boolean;
  isProcessing: boolean;
  transcript: string;
  response: string;
}