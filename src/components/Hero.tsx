import React from "react";

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden bg-white pt-10">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 flex justify-center items-center">
        {/* ↓ shrink to 90 % (lg: 80 %) and center */}
        <div className="relative w-full lg:w-12/12 xl:w-5/5 h-full mx-auto">
          <img
            src="/764036-1921x1282-desktop-hd-charleston-south-carolina-wallpaper.jpg"
            srcSet="/764036-1921x1282-desktop-hd-charleston-south-carolina-wallpaper.jpg 1921w"
            sizes="(max-width: 768px) 90vw, 80vw"
            alt="Charleston cityscape at twilight"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {/* Dark overlay with grain effect */}
          <div className="absolute inset-0 bg-black/60"></div>
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        {/* Main Heading */}
        <h1
          className="text-5xl md:text-7xl font-light text-white mb-6 italic tracking-wide"
          style={{textShadow: "2px 2px 4px rgba(0,0,0,0.7)"}}
        >
          Hotel To Airport Transportation
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl font-light tracking-wide"
          style={{textShadow: "1px 1px 3px rgba(0,0,0,0.7)"}}
        >
          Proud Partners of Charleston's Premier Hotels & Accommodations
        </p>

        {/* Book My Ride Button */}
        <a
          href="https://calendly.com/hoteltoairportllc/30min?month=2025-07&date=2025-07-09"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-12 py-4 rounded-full text-lg font-light hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-wider shadow-lg mb-16 inline-block"
          style={{textShadow: "1px 1px 2px rgba(0,0,0,0.5)"}}
        >
          Book My Ride
        </a>
      </div>
    </section>
  );
};

export default Hero;
