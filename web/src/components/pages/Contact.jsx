import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { useTheme } from "../ThemeContext";

const Contact = () => {
  const { theme } = useTheme();
  const changetheme = theme === 'dark' ? 'text-white' : 'text-gray-700';

  return (
    <section id="contact" className="container mx-auto px-4 py-16 text-center">
      <motion.h2
        className="text-5xl font-bold mb-6 dark:text-white"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Get In Touch
      </motion.h2>
      
      <p className={`text-xl font-semibold ${changetheme} max-w-2xl mx-auto mb-12`}>
        Currently seeking internships for web and software development positions. Can start Imediately..

        Also looking to build a team for projects & startup ideas or just make professional connections.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <motion.a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=wok.muhammadnihal@gmail.com&su=Portfolio Contact&body=Hi Nihal, I saw your portfolio and would like to connect!"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Mail className="w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">Email</h3>
        </motion.a>

        <motion.a
          href="https://wa.me/3453033270"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            // Fallback for browsers that don't support WhatsApp links
            if (!navigator.userAgent.includes('Chrome') && !navigator.userAgent.includes('Firefox')) {
              e.preventDefault();
              window.open('https://wa.me/3453033270', '_blank');
            }
          }}
        >
          <Phone className="w-12 h-12 text-green-600 mb-4" />
          <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">Phone</h3>
        </motion.a>

        <motion.div
          className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <MapPin className="w-12 h-12 text-red-600 mb-4" />
          <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">Location</h3>
          <p className="text-lg font-semibold text-gray-600 dark:text-white">Pakistan, Karachi</p>
        </motion.div>
      </div>

      <div className="mt-12">
        <h3 className="text-3xl font-bold mb-6 dark:text-white">Follow Me</h3>
        <div className="flex justify-center space-x-6">
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Twitter className="w-6 h-6" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
