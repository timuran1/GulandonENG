import React from 'react';
import { ArrowRight, Globe, TrendingUp, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY_NAME, TAGLINE } from '../constants';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative bg-slate-900 overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-red-600/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block">Non-Metallic Materials</span>
              <span className="block text-red-500 mt-2">for Industry & Construction</span>
            </h1>
            <p className="mt-6 text-base text-slate-300 sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              {TAGLINE}. High-purity Quartz, Kaolin, and Gypsum for global industrial applications.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10 shadow-lg shadow-red-900/20"
              >
                View Catalog
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center justify-center px-8 py-3 border border-slate-600 text-base font-medium rounded-md text-slate-200 bg-transparent hover:bg-slate-800 md:py-4 md:text-lg md:px-10"
              >
                Check Prices
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-slate-850 py-16 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            
            <div className="p-6 bg-slate-800 rounded-xl shadow-sm hover:bg-slate-750 transition-colors">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-red-600/20 text-red-500 mb-4">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Uzbekistan Deposits</h3>
              <p className="text-slate-400">
                Direct access to major sources of non-metallic minerals, ensuring consistent quality and availability for all products.
              </p>
            </div>

            <div className="p-6 bg-slate-800 rounded-xl shadow-sm hover:bg-slate-750 transition-colors">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-blue-600/20 text-blue-500 mb-4">
                <Truck className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Efficient Logistics</h3>
              <p className="text-slate-400">
                Seamless transportation from source to destination, optimizing delivery times and costs for maximum efficiency.
              </p>
            </div>

            <div className="p-6 bg-slate-800 rounded-xl shadow-sm hover:bg-slate-750 transition-colors">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-green-600/20 text-green-500 mb-4">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Worldwide Delivery</h3>
              <p className="text-slate-400">
                Serving a diverse global clientele with precision and reliability, wherever your business operates.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-600 rounded-2xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between shadow-2xl shadow-red-900/40">
            <div className="mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-white mb-4">Ready for Shipment?</h2>
              <p className="text-red-100 max-w-xl text-lg">
                Our extensive inventory guarantees quick processing. Contact our dedicated support team today.
              </p>
            </div>
            <Link to="/contact" className="inline-flex items-center bg-white text-red-600 hover:bg-red-50 font-bold py-4 px-8 rounded-lg transition-colors">
              Contact Sales <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;