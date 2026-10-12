import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Changed to React Router

const Icons = {
  Location: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  Email: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
};

const gridSections = [
  {
    title: "ABOUT AGENCY",
    color: "bg-blue-600",
    textColor: "text-white",
    content: (
      <p className="text-sm opacity-90 leading-relaxed">
        Khalilabad ki apni professional digital agency, jo business growth ke liye custom strategy aur innovative technology provide karti hai.
      </p>
    ),
  },
  {
    title: "QUICK LINKS",
    color: "bg-white",
    textColor: "text-blue-700",
    content: (
      <ul className="space-y-3 text-sm text-gray-500">
        <li className="hover:text-blue-600 cursor-pointer transition">
          <Link to="/contact" className="block w-full h-full text-inherit no-underline">
            Contact Us
          </Link>
        </li>
        <li className="hover:text-blue-600 cursor-pointer transition">
          <Link to="/about" className="block w-full h-full text-inherit no-underline">
            About Us
          </Link>
        </li>
        <li className="hover:text-blue-600 cursor-pointer transition">
          <Link to="/gallery" className="block w-full h-full text-inherit no-underline">
            Gallery
          </Link>
        </li>
      </ul>
    ),
  },
  {
    title: "SERVICES",
    color: "bg-blue-600",
    textColor: "text-white",
    content: (
      <ul className="space-y-3 text-sm opacity-90">
        <li>Hotels services</li>
        <li>Multiple combination business solutions</li>
        <li>Digital solution</li>
      </ul>
    ),
  },
  {
    title: "CONTACT INFO",
    color: "bg-white",
    textColor: "text-blue-700",
    content: (
      <div className="space-y-4 text-sm text-gray-500">
        <div className="flex items-start space-x-3">
          <Icons.Location />
          <p>Gorakhpur Road, Khalilabad</p>
        </div>
        <div className="flex items-center space-x-3">
          <Icons.Email />
          <p>contact@sqeagency.com</p>
        </div>
      </div>
    ),
  },
];

const InfoGrid = () => {
  return (
    <section className="relative bg-white pt-20 pb-8 mt-auto overflow-hidden border-t border-gray-100 selection:bg-blue-100">
      <div className="absolute bottom-[-50px] left-[-70px] w-64 h-64 bg-blue-100 rounded-full opacity-30"></div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h4 className="text-[#f26522] font-semibold mb-3 tracking-widest uppercase text-xs">Reach Out To Us</h4>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#334155]">Lets Connect</h2>
          <div className="h-1.5 w-24 bg-blue-600 rounded-full mx-auto mt-5"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {gridSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              <div className={`group relative ${section.color} ${section.textColor} shadow-2xl rounded-sm p-10 flex flex-col h-full transform transition-all duration-300 hover:-translate-y-3`}>
                <h3 className="text-xl lg:text-2xl font-bold uppercase tracking-wider mb-6 pb-2 border-b-2 border-current">
                  {section.title}
                </h3>
                <div className="flex-grow">{section.content}</div>
                <button className="mt-8 text-xs font-bold uppercase tracking-widest text-left">More +</button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-[10px] tracking-widest uppercase opacity-80">
          <p>© 2026 SQE DIGITAL AGENCY KHALILABAD</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span>Privacy Policy</span>
            <span>Terms</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoGrid;