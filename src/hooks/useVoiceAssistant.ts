import { useState, useEffect, useRef } from 'react';
import { VoiceAssistantState, BookingData } from '../types/booking';

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

export const useVoiceAssistant = (language: 'en' | 'es' = 'en') => {
  const [state, setState] = useState<VoiceAssistantState>({
    isListening: false,
    isProcessing: false,
    transcript: '',
    response: ''
  });

  const recognitionRef = useRef<any>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.lang = language === 'en' ? 'en-US' : 'es-ES';
        recognitionRef.current.interimResults = true;
        recognitionRef.current.maxAlternatives = 1;
      }
      synthRef.current = window.speechSynthesis;
    }
  }, [language]);

  const startListening = () => {
    if (!recognitionRef.current) return;

    setState(prev => ({ ...prev, isListening: true, transcript: '' }));
    
    recognitionRef.current.onresult = (event: any) => {
      const transcript = Array.from(event.results)
        .map((result: any) => result[0])
        .map((result: any) => result.transcript)
        .join('');

      setState(prev => ({ ...prev, transcript }));
    };

    recognitionRef.current.onend = () => {
      setState(prev => ({ ...prev, isListening: false }));
    };

    recognitionRef.current.start();
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    setState(prev => ({ ...prev, isListening: false }));
  };

  const speak = (text: string) => {
    if (!synthRef.current) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language === 'en' ? 'en-US' : 'es-ES';
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 0.8;

    synthRef.current.speak(utterance);
  };

  const processVoiceCommand = async (transcript: string): Promise<string> => {
    setState(prev => ({ ...prev, isProcessing: true }));
    
    // Simulate AI processing - in production, integrate with your AI service
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const lowerTranscript = transcript.toLowerCase();
    let response = '';

    if (language === 'en') {
      if (lowerTranscript.includes('book') || lowerTranscript.includes('ride') || lowerTranscript.includes('shuttle')) {
        response = "I'd be happy to help you book a ride! Are you going to or from the airport, or do you need transportation between hotels?";
      } else if (lowerTranscript.includes('price') || lowerTranscript.includes('cost') || lowerTranscript.includes('rate')) {
        response = "Our rate starts at $35 for standard service. Hotel guests get special rates!";
      } else if (lowerTranscript.includes('hotel') || lowerTranscript.includes('charleston')) {
        response = "We serve 5 partner hotels in Charleston: The Ocean House, Charleston Harbor Resort, Historic Downtown Inn, Waterfront Suites, and Garden District Hotel.";
      } else if (lowerTranscript.includes('airport')) {
        response = "Airport transfers are available 24/7. We monitor flights for delays and provide meet-and-greet service. Would you like to book now?";
      } else if (lowerTranscript.includes('cancel')) {
        response = "You can cancel your booking up to 1 hour before pickup with no charge through our app or by calling us.";
      } else {
        response = "I'm here to help with your Charleston transportation needs. Ask about booking, rates, hotel shuttles, or airport transfers!";
      }
    } else {
      if (lowerTranscript.includes('reservar') || lowerTranscript.includes('viaje') || lowerTranscript.includes('transporte')) {
        response = "¡Me complace ayudarle a reservar un viaje! ¿Va hacia o desde el aeropuerto, o necesita transporte entre hoteles?";
      } else if (lowerTranscript.includes('precio') || lowerTranscript.includes('costo') || lowerTranscript.includes('tarifa')) {
        response = "Nuestras tarifas comienzan en $35 para servicio estándar. ¡Los huéspedes del hotel obtienen tarifas especiales!";
      } else if (lowerTranscript.includes('hotel') || lowerTranscript.includes('charleston')) {
        response = "Servimos 5 hoteles asociados en Charleston: The Ocean House, Charleston Harbor Resort, Historic Downtown Inn, Waterfront Suites, y Garden District Hotel.";
      } else if (lowerTranscript.includes('aeropuerto')) {
        response = "Los traslados al aeropuerto están disponibles 24/7. Monitoreamos vuelos por retrasos y proporcionamos servicio de recibimiento. ¿Le gustaría reservar ahora?";
      } else if (lowerTranscript.includes('cancelar')) {
        response = "Puede cancelar su reserva hasta 1 hora antes de la recogida sin cargo a través de nuestra aplicación o llamándonos.";
      } else {
        response = "Estoy aquí para ayudarle con sus necesidades de transporte en Charleston. ¡Pregunte sobre reservas, tarifas, traslados de hotel o aeropuerto!";
      }
    }

    setState(prev => ({ ...prev, isProcessing: false, response }));
    speak(response);
    return response;
  };

  return {
    ...state,
    startListening,
    stopListening,
    speak,
    processVoiceCommand,
    isSupported: !!recognitionRef.current
  };
};