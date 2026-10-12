import React, { useState } from 'react'; // Imported useState
// Remove this entire line if you don't plan to animate anything in Contact.jsx
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

const Contact = () => {
  // 1. Set up state variables to capture input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // 2. Track input field changes dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // 3. Handle click/submit event when button is pressed
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default page refresh behavior
    
    // Replace this block with your backend API or Email service integrations (Formspree, EmailJS, etc.)
    alert(`Thank you, ${formData.name}! Your message has been captured successfully.`);
    console.log("Captured Form Submission Data:", formData);

    // Optional: Clear form inputs after a successful click event
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="bg-[#334155] min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 lg:px-20">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#f26522] font-bold tracking-[0.3em] uppercase text-xs mb-4"
          >
            Get In Touch
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter"
          >
            Let's Build Something <br />
            <span className="text-[#f26522]">Great Together.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Info Card 1 */}
            <motion.div 
              whileHover={{ x: 10 }}
              className="bg-[#2a3647] p-8 rounded-3xl border border-white/5 flex items-start gap-5 shadow-xl shadow-black/10"
            >
              <div className="w-12 h-12 bg-[#f26522]/10 rounded-2xl flex items-center justify-center text-[#f26522] shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h5 className="text-white font-bold text-lg italic uppercase">Call Us</h5>
                <p className="text-gray-400 text-sm mt-1 font-medium">+91 00000 00000</p>
              </div>
            </motion.div>

            {/* Info Card 2 */}
            <motion.div 
              whileHover={{ x: 10 }}
              className="bg-[#2a3647] p-8 rounded-3xl border border-white/5 flex items-start gap-5 shadow-xl shadow-black/10"
            >
              <div className="w-12 h-12 bg-[#f26522]/10 rounded-2xl flex items-center justify-center text-[#f26522] shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h5 className="text-white font-bold text-lg italic uppercase">Email Us</h5>
                <p className="text-gray-400 text-sm mt-1 font-medium">info@sqestyle.com</p>
              </div>
            </motion.div>

            {/* Info Card 3 */}
            <motion.div 
              whileHover={{ x: 10 }}
              className="bg-[#2a3647] p-8 rounded-3xl border border-white/5 flex items-start gap-5 shadow-xl shadow-black/10"
            >
              <div className="w-12 h-12 bg-[#f26522]/10 rounded-2xl flex items-center justify-center text-[#f26522] shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h5 className="text-white font-bold text-lg italic uppercase">Location</h5>
                <p className="text-gray-400 text-sm mt-1 font-medium">Khalilabad, Sant Kabir Nagar, UP</p>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-2 bg-[#2a3647] p-8 md:p-12 rounded-[40px] border border-white/5 relative overflow-hidden shadow-2xl shadow-black/20"
          >
            {/* Decorative blur circle */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#f26522] rounded-full blur-[120px] opacity-10"></div>

            {/* Attached onSubmit function to form tag */}
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Abhishek..."
                    className="w-full bg-[#334155]/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#f26522] transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="example@gmail.com"
                    className="w-full bg-[#334155]/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#f26522] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Web Development Inquiry"
                  className="w-full bg-[#334155]/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#f26522] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Message</label>
                <textarea 
                  rows="5" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your project..."
                  className="w-full bg-[#334155]/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#f26522] transition-all resize-none"
                ></textarea>
              </div>

              {/* Set type="submit" so the form handles execution native to browser mechanics */}
              <motion.button 
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#f26522] text-white font-black py-5 rounded-2xl uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-[#d54e0d] transition-all shadow-xl shadow-[#f26522]/30"
              >
                Send Message
                <Send size={18} />
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;