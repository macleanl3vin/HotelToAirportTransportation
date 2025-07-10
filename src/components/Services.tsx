import React from "react";
import {Car, Shield, Clock, Wifi, Bell} from "lucide-react";
import {useTranslation} from "../hooks/useTranslation";

const Services: React.FC = () => {
  const {t} = useTranslation();

  const services = [
    {
      icon: Car,
      title: "Hourly Hotel-to-Airport Shuttle",
      description: "Comfortable 11-passenger van with licensed professional driver:",
      price: "$25+",
      features: [
        "Licensed Professional Driver",
        "Clean & Sanitized Vehicle",
        "Consistent Pricing (No Hidden Fees)",
        "Hourly Availability",
      ],
    },
    {
      icon: Bell,
      title: "Need Something Else?",
      description: "For all other hotel-related transportation requests, please call:",
      price: "(843) 326-0220",
      features: ["Custom Transportation Solutions", "Group Events & Tours", "Special Occasion Rides", "Flexible Scheduling Available"],
    },
  ];

  const amenities = [
    {
      icon: Shield,
      title: t("features.safe"),
      description: t("features.safe.desc"),
    },
    {
      icon: Clock,
      title: t("features.reliable"),
      description: t("features.reliable.desc"),
    },
    {
      icon: Wifi,
      title: t("features.comfort"),
      description: t("features.comfort.desc"),
    },
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">{t("services.title")}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complimentary hotel-to-airport transportation every hour on the hour, starting at 8:00 AM until 4:00 PM, Monday through Sunday.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isContactCard = index === 1;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-gradient-to-r from-blue-100 to-blue-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="font-bold text-3xl text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 text-lg mb-6">{service.description}</p>

                {/* Pricing/Contact Section */}
                <div className="rounded-xl p-6 mb-3">
                  {isContactCard ? (
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">{service.price}</div>
                      <p className="text-gray-600">Let us know your travel needs and we'll arrange the right service.</p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="text-gray-800">
                        <span className="text-3xl font-bold text-blue-600">$25</span>
                        <span className="text-lg ml-2">First Passenger</span>
                      </div>
                      <div className="text-gray-800">
                        <span className="text-blue-600 text-xl font-bold">+ $15</span>
                        <span className="text-lg ml-2">Each Additional Passenger In the Same Party</span>
                      </div>
                    </div>
                  )}
                </div>

                <ul className="space-y-3 text-left">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="text-gray-800 flex items-center space-x-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="currentColor" stroke="none" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                      </div>
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Features */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">{t("features.title")}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {amenities.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center bg-white p-8 rounded-xl shadow-lg">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-lg">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
