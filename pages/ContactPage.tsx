import React from 'react';
import { CONTACTS, WHATSAPP } from '../constants';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-slate-900 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-white mb-4">Get In Touch</h1>
          <p className="text-slate-400 max-w-xl mx-auto">
            Our team is ready to discuss your industrial material needs. Reach out for quotes, logistics planning, or technical specifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Sales Reps */}
            <div className="space-y-6">
                <h2 className="text-xl font-bold text-white border-b border-slate-700 pb-4">Sales Representatives</h2>
                {CONTACTS.map((contact, idx) => (
                    <div key={idx} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-red-500/50 transition-colors">
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-slate-700 flex items-center justify-center text-slate-300">
                                <span className="text-lg font-bold">{contact.name.charAt(0)}</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-white">{contact.name}</h3>
                                <p className="text-sm text-slate-500 mb-2">{contact.role}</p>
                                <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="flex items-center text-red-500 font-bold hover:text-red-400 transition-colors">
                                    <Phone className="h-4 w-4 mr-2" />
                                    {contact.phone}
                                </a>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="bg-green-900/20 p-6 rounded-xl border border-green-800/50">
                     <div className="flex items-center gap-3 mb-2">
                        <MessageCircle className="h-6 w-6 text-green-500" />
                        <h3 className="text-lg font-medium text-white">WhatsApp Support</h3>
                     </div>
                     <p className="text-slate-400 mb-4 text-sm">Available for instant messaging regarding orders.</p>
                     <a href={`https://wa.me/${WHATSAPP.replace(/\D/g, '')}`} className="text-green-500 font-bold hover:text-green-400">
                        {WHATSAPP}
                     </a>
                </div>
            </div>

            {/* Mock Form */}
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-xl">
                <h2 className="text-xl font-bold text-white mb-6">Send a Message</h2>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">Full Name</label>
                        <input type="text" id="name" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-red-500 focus:outline-none" placeholder="John Doe" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">Email Address</label>
                        <input type="email" id="email" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-red-500 focus:outline-none" placeholder="john@company.com" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1">Inquiry Details</label>
                        <textarea id="message" rows={4} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-red-500 focus:outline-none" placeholder="I am interested in ordering..."></textarea>
                    </div>
                    <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center">
                        Send Request <Mail className="ml-2 h-4 w-4" />
                    </button>
                </form>
            </div>

        </div>

        {/* Location / Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-slate-800/30 p-8 rounded-xl">
             <div>
                <h3 className="text-white font-bold text-lg flex items-center mb-4">
                    <MapPin className="h-5 w-5 mr-2 text-red-500" />
                    Manufacturing & Logistics
                </h3>
                <p className="text-slate-400 mb-2">
                    <strong>Legal Entity:</strong> Buyuk Turan LLC
                </p>
                <p className="text-slate-400 mb-2">
                    <strong>Address:</strong> Tashkent city, Mirzo Ulugbek, Ulug'bek shaharchasi OYDIN MFY.
                </p>
                <p className="text-slate-400">
                    <strong>TIN:</strong> 310894046
                </p>
             </div>
             <div className="h-48 w-full bg-slate-700 rounded-lg relative overflow-hidden flex items-center justify-center">
                 {/* Placeholder for map */}
                 <div className="text-center">
                     <MapPin className="h-12 w-12 text-slate-500 mx-auto mb-2" />
                     <span className="text-slate-400 text-sm">Map Integration Placeholder</span>
                 </div>
             </div>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;