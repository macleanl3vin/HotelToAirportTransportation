import { useState } from 'react';

export type Language = 'en' | 'es';

interface Translations {
  en: Record<string, string>;
  es: Record<string, string>;
}

const translations: Translations = {
  en: {
    // Navigation
    'nav.book': 'Book Now',
    'nav.services': 'Services',
    'nav.hotels': 'Hotels',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Hotel To Airport Transportation',
    'hero.subtitle': 'Book and pay in under 60 seconds. QR code, voice assistant, or web form - your choice.',
    'hero.cta': 'Book Your Ride',
    'hero.phone': 'Call (843) 242-7537',
    
    // Services
    'services.title': 'Transportation Options',
    'services.standard': 'Hotel-to-Airport Complimentary Service',
    'services.standard.desc': 'Comfortable 11-passenger van with professional driver',
    'services.premium': 'Premium Service',
    'services.premium.desc': 'Luxury vehicle with premium amenities',
    'services.group': 'Group Service',
    'services.group.desc': 'Large vehicle for groups up to 8 passengers',
    
    // Booking Form
    'booking.title': 'Book Your Transportation',
    'booking.pickup': 'Pickup Location',
    'booking.dropoff': 'Destination',
    'booking.date': 'Pickup Date',
    'booking.time': 'Pickup Time',
    'booking.passengers': 'Number of Passengers',
    'booking.service': 'Service Type',
    'booking.name': 'Full Name',
    'booking.phone': 'Phone Number',
    'booking.email': 'Email Address',
    'booking.special': 'Special Requests (Optional)',
    'booking.submit': 'Book & Pay Now',
    'booking.processing': 'Processing...',
    
    // Voice Assistant
    'voice.start': 'Tap to speak',
    'voice.listening': 'Listening...',
    'voice.processing': 'Processing...',
    'voice.help': 'Say "book a ride" or ask about rates and availability',
    
    // Features
    'features.title': 'Why Choose Us?',
    'features.safe': 'Trusted Experience',
    'features.safe.desc': 'Over 30 years of dedicated passenger transportation and dedicated to courteous, professional service.',
    'features.comfort': 'Premium Comfort',
    'features.comfort.desc': 'Travel in comfort with our spacious, immaculate 11-passenger van.',
    'features.reliable': 'Always Reliable',
    'features.reliable.desc': 'Exclusive complimentary fares from your hotel to the airport. Prices remain steady no hidden fees or fluctuations, ever.',
    
    // Footer
    'footer.phone': 'Phone',
    'footer.email': 'Email',
    'footer.address': 'Address'
  },
  es: {
    // Navigation
    'nav.book': 'Reservar',
    'nav.services': 'Servicios',
    'nav.hotels': 'Hoteles',
    'nav.about': 'Acerca de',
    'nav.contact': 'Contacto',
    
    // Hero Section
    'hero.title': 'Servicio Premium de Transporte Hotelero en Charleston',
    'hero.subtitle': 'Reserve y pague en menos de 60 segundos. Código QR, asistente de voz o formulario web.',
    'hero.cta': 'Reserve Su Viaje',
    'hero.phone': 'Llame (843) 242-7537',
    
    // Services
    'services.title': 'Opciones de Transporte',
    'services.standard': 'Servicio Estándar',
    'services.standard.desc': 'Sedán cómodo con conductor profesional',
    'services.premium': 'Servicio Premium',
    'services.premium.desc': 'Vehículo de lujo con comodidades premium',
    'services.group': 'Servicio Grupal',
    'services.group.desc': 'Vehículo grande para grupos hasta 8 pasajeros',
    
    // Booking Form
    'booking.title': 'Reserve Su Transporte',
    'booking.pickup': 'Lugar de Recogida',
    'booking.dropoff': 'Destino',
    'booking.date': 'Fecha de Recogida',
    'booking.time': 'Hora de Recogida',
    'booking.passengers': 'Número de Pasajeros',
    'booking.service': 'Tipo de Servicio',
    'booking.name': 'Nombre Completo',
    'booking.phone': 'Número de Teléfono',
    'booking.email': 'Dirección de Email',
    'booking.special': 'Solicitudes Especiales (Opcional)',
    'booking.submit': 'Reservar y Pagar',
    'booking.processing': 'Procesando...',
    
    // Voice Assistant
    'voice.start': 'Toque para hablar',
    'voice.listening': 'Escuchando...',
    'voice.processing': 'Procesando...',
    'voice.help': 'Diga "reservar un viaje" o pregunte sobre tarifas y disponibilidad',
    
    // Features
    'features.title': '¿Por Qué Elegir Mr Charles?',
    'features.safe': 'Seguridad y Protección',
    'features.safe.desc': 'Conductores licenciados, seguimiento GPS y monitoreo 24/7',
    'features.comfort': 'Confort Premium',
    'features.comfort.desc': 'Vehículos de lujo con Wi-Fi y comodidades gratuitas',
    'features.reliable': 'Siempre Confiable',
    'features.reliable.desc': 'Garantía de puntualidad con monitoreo de vuelos en tiempo real',
    
    // Footer
    'footer.phone': 'Teléfono',
    'footer.email': 'Email',
    'footer.address': 'Dirección'
  }
};

export const useTranslation = () => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return {
    language,
    setLanguage,
    t
  };
};
