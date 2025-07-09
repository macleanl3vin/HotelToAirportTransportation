import React from "react";

const Testimonial: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">What Our Guests Are Saying</h2>

        {/* Subtitle */}
        <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
          We pride ourselves on providing safe, courteous, and professional service. Here's what one of our guests had to say:
        </p>

        {/* 5 Star Rating */}
        <div className="flex justify-center mb-12">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-8 h-8 text-yellow-400 fill-current mx-1" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>

        {/* Testimonial Quote */}
        <blockquote className="text-2xl lg:text-3xl text-gray-700 leading-relaxed mb-12 max-w-4xl mx-auto font-medium">
          "We had an excellent stay at the Francis Marion. They were so wonderful and changed us to a beautiful room. We used Mitch’s
          transportation for our ride to the airport. It was A++ Our driver Mr. Charles was delightful. Ride was comfortable and quick.
          I highly recommend them!"
        </blockquote>

        {/* Customer Info */}
        <div className="flex items-center justify-center mb-16">
          <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mr-6">
            <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
          <div className="text-left">
            <h4 className="text-2xl font-bold text-gray-800">Barbara A.</h4>
            <p className="text-lg text-gray-600">Francis Marion Hotel Guest</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
