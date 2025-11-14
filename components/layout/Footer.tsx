import Link from 'next/link';
import { contactInfo } from '@/data/contact';
import { siteConfig } from '@/lib/config/site';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Quick links yang disederhanakan
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Semua Mobil', href: '/mobil' },
    { name: 'Kontak', href: '/kontak' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-honda-red rounded-full flex items-center justify-center">
                <span className="text-white font-bold">H</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">{siteConfig.company.name}</h3>
                <p className="text-gray-400 text-sm">Dealer Resmi Honda</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              {siteConfig.company.description}
            </p>
            <div className="flex space-x-4">
              {contactInfo.socialMedia.instagram && (
                <a
                  href={`https://instagram.com/${contactInfo.socialMedia.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition"
                >
                  <span className="flex items-center space-x-2">
                    <span>📷</span>
                    <span className="hidden sm:inline">Instagram</span>
                  </span>
                </a>
              )}
              {contactInfo.socialMedia.facebook && (
                <a
                  href={contactInfo.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition"
                >
                  <span className="flex items-center space-x-2">
                    <span>📘</span>
                    <span className="hidden sm:inline">Facebook</span>
                  </span>
                </a>
              )}
            </div>
          </div>

          {/* Quick Links - Sederhana */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Menu</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak Kami</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-gray-400">📍</span>
                <div>
                  <p className="text-gray-300">{contactInfo.dealer.address}</p>
                  <p className="text-gray-300">{contactInfo.dealer.city}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-gray-400">📞</span>
                <a
                  href={`tel:${contactInfo.phones.primary}`}
                  className="text-gray-300 hover:text-white transition"
                >
                  {contactInfo.phones.primary}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-gray-400">✉️</span>
                <a
                  href={`mailto:${contactInfo.emails.primary}`}
                  className="text-gray-300 hover:text-white transition"
                >
                  {contactInfo.emails.primary}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-gray-400">🕐</span>
                <div>
                  <p className="text-gray-300">{contactInfo.workingHours.days}</p>
                  <p className="text-gray-300">{contactInfo.workingHours.hours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} {siteConfig.company.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={`https://wa.me/${contactInfo.whatsapp.number}?text=${encodeURIComponent(contactInfo.whatsapp.message)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-200 flex items-center justify-center w-16 h-16"
          title="Chat via WhatsApp"
        >
          <span className="text-2xl">💬</span>
        </a>
      </div>
    </footer>
  );
}