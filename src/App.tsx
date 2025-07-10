import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import {MapPin} from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Services />
      <Testimonial />

      {/* Hotels Section */}
      <section id="hotels" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-8">Our Partner Hotels</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            We provide exclusive shuttle services from our partner hotels to Charleston International Airport, with guests enjoying priority booking and special rates.
          </p>

          <div className="grid md:grid-cols-5 gap-6 mb-12">
            {["Francis Marion Hotel", "Charleston Place", "Emeline Hotel", "Hampton Inn", , "Hyatt Place Hotel"].map(
              (hotel, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <MapPin className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">{hotel}</h3>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-8">About Hotel To Airport Transportation LLC</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Mr. Charles has proudly served the passenger transportation industry for over 30 years! He has earned numerous glowing
              reviews on TripAdvisor. Known for his warm personality and genuine love for people, he always prioritizes your comfort
              and safety, ensuring every journey is enjoyable and memorable.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
