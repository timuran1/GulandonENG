import React from 'react';
import { COMPANY_NAME, CONTACTS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">{COMPANY_NAME}</h3>
            <p className="text-sm leading-6">
              Direct supplies of non-metallic materials for industry and construction from Uzbekistan's rich deposits.
            </p>
            <p className="mt-4 text-xs text-slate-500">
              Operating with Buyuk Turan LLC for manufacturing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Materials</h3>
            <ul className="space-y-2 text-sm">
              <li>High-Purity Quartz</li>
              <li>Quarry Quartz Sand</li>
              <li>Enriched Kaolin</li>
              <li>Construction Gypsum</li>
            </ul>
          </div>

          {/* Contact Snippet */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              {CONTACTS.map((contact, index) => (
                <li key={index}>
                  <span className="block text-slate-300">{contact.name}</span>
                  <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="text-red-500 hover:text-red-400">
                    {contact.phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-900 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;