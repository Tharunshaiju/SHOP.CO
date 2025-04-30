import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 px-4 sm:px-6 md:px-16 py-10">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">
      
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">SHOP.CO</h2>
          <p className="text-sm mb-6 leading-relaxed">
            We have clothes that suit your style and that you’re proud to wear. From women to men.
          </p>
          <div className="flex space-x-4 sm:justify-start justify-center">
            <a href="#" className="text-gray-400 hover:text-white transition text-lg">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition text-lg">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition text-lg">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition text-lg">
              <FaGithub />
            </a>
          </div>
        </div>

       
        {[
          { title: 'COMPANY', links: ['About', 'Features', 'Works', 'Career'] },
          { title: 'HELP', links: ['Support', 'FAQs', 'Contact', 'Returns'] },
          { title: 'FAQ', links: ['Shipping', 'Payments', 'Orders', 'Privacy'] },
          { title: 'RESOURCES', links: ['Blog', 'Guides', 'Community', 'Affiliates'] },
        ].map((section, idx) => (
          <div key={idx}>
            <h3 className="font-semibold mb-3 text-sm text-white">{section.title}</h3>
            <ul className="space-y-2 text-sm">
              {section.links.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white transition">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-xs sm:text-sm text-gray-500">
        © {new Date().getFullYear()} SHOP.CO. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
