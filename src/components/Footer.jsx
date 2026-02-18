import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const footerLinks = [
  { title: 'COMPANY', links: ['About', 'Features', 'Works', 'Career'] },
  { title: 'HELP', links: ['Support', 'FAQs', 'Contact', 'Returns'] },
  { title: 'FAQ', links: ['Shipping', 'Payments', 'Orders', 'Privacy'] },
  { title: 'RESOURCES', links: ['Blog', 'Guides', 'Community', 'Affiliates'] },
];

const socials = [
  { Icon: FaFacebookF, href: '#', label: 'Facebook' },
  { Icon: FaInstagram, href: '#', label: 'Instagram' },
  { Icon: FaTwitter, href: '#', label: 'Twitter' },
  { Icon: FaGithub, href: '#', label: 'GitHub' },
];

const Footer = () => (
  <footer style={{ background: '#0A0A0A', color: '#9CA3AF', paddingTop: '3rem' }}>
    <div className="container-app pb-12">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
        
        {/* Brand Column */}
        <div className="col-span-2 sm:col-span-3 lg:col-span-1">
          <Link
            to="/"
            className="text-white font-black text-2xl block mb-4"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.04em' }}
          >
            SHOP.CO
          </Link>
          <p className="text-sm leading-relaxed mb-6" style={{ color: '#6B7280', maxWidth: '220px' }}>
            We have clothes that suit your style and that you're proud to wear. From women to men.
          </p>
          <div className="flex gap-3">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-full flex items-center justify-center text-sm transition-all duration-200"
                style={{
                  background: '#1A1A1A',
                  color: '#9CA3AF',
                  border: '1px solid #2A2A2A',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#fff';
                  e.currentTarget.style.color = '#000';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = '#1A1A1A';
                  e.currentTarget.style.color = '#9CA3AF';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Link Columns */}
        {footerLinks.map(({ title, links }) => (
          <div key={title}>
            <h3
              className="text-white font-bold mb-4 text-xs tracking-widest"
              style={{ letterSpacing: '0.12em' }}
            >
              {title}
            </h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm transition-all duration-200 hover:text-white"
                    style={{ color: '#6B7280' }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    {/* Footer Bottom */}
    <div
      className="py-5 text-center text-xs"
      style={{
        borderTop: '1px solid #1A1A1A',
        color: '#4B5563',
      }}
    >
      <p>
        © {new Date().getFullYear()} SHOP.CO · All rights reserved ·{' '}
        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        {' · '}
        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
      </p>
    </div>
  </footer>
);

export default Footer;
