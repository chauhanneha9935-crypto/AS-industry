import React from "react";

const services = [
  {
    title: "AADHAAR VERIFICATION",
    description:
      "Secure Aadhaar verification for customers and businesses.",
    image:
      "https://as2.ftcdn.net/v2/jpg/15/36/17/17/1000_F_1536171746_FCR8giTKcmWNdn39ue1V0Q5jnjIZeKFq.jpg",
    link: "https://myaadhaar.uidai.gov.in/", // Official MyAadhaar Portal
  },
  {
    title: "PAN VERIFICATION",
    description:
      "Verify PAN card details for customers and businesses.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    link: "https://www.incometax.gov.in/iec/foportal/verify-your-pan", // Official Income Tax PAN Verification Portal
  },
  {
    title: "VOTER ID VERIFICATION",
    description:
      "Authenticate EPIC details securely against the national electoral roll registry.",
    image:
      "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=800&q=80",
    link: "https://voters.eci.gov.in/", // Official National Voters' Services Portal
  },
  {
    title: "DRIVING LICENSE VERIFICATION",
    description:
      "Instantly verify driving licenses with Sarathi database integration.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    link: "https://sarathi.parivahan.gov.in/", // Official Parivahan Sarathi Portal
  },
];

function Verification() {
  return (
    <section className="bg-white pt-16 pb-0 px-2 sm:px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">
            PEHCHAAN ID
          </h2>
          <div className="w-24 h-1 bg-[#f26522] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
          {services.map((service, index) => {
            return (
              <div key={index}>
                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full group"
                >
                  <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 mb-4 sm:mb-8 h-full flex flex-col border border-transparent hover:border-slate-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-32 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                    <div className="p-3 sm:p-6 flex-grow">
                      <h3 className="text-sm sm:text-xl font-bold text-[#2563eb] group-hover:text-[#1d4ed8] mb-1 sm:mb-3 line-clamp-2 transition-colors duration-200">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-base text-gray-600 line-clamp-3 sm:line-clamp-none">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Verification;