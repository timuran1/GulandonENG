import React from 'react';
import { PRODUCTS } from '../constants';
import { CheckCircle2, Package, Layers } from 'lucide-react';

const ProductsPage: React.FC = () => {
  return (
    <div className="bg-slate-900 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Product Catalog</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            High-grade non-metallic materials sourced and processed for industrial excellence.
          </p>
        </div>

        <div className="space-y-16">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 shadow-xl hover:bg-slate-800 transition-colors">
              
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                
                {/* Header & Meta */}
                <div className="lg:w-1/3 space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-3">{product.name}</h2>
                    <div className="w-20 h-1 bg-red-600 rounded-full"></div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 bg-slate-900/50 p-4 rounded-lg border border-slate-700/50">
                        <div className="bg-red-600/20 p-2 rounded-md">
                            <Layers className="h-5 w-5 text-red-500" />
                        </div>
                        <div>
                            <span className="block text-xs text-slate-500 uppercase font-semibold">Grade</span>
                            <span className="text-white font-medium">{product.grade}</span>
                        </div>
                    </div>

                    <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700/50">
                        <div className="flex items-center gap-2 mb-2">
                             <Package className="h-4 w-4 text-slate-400" />
                             <span className="text-xs text-slate-500 uppercase font-semibold">Primary Applications</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {product.applications.map(app => (
                                <span key={app} className="inline-flex items-center px-2.5 py-1 rounded-md text-sm font-medium bg-slate-700 text-slate-200 border border-slate-600">
                                    {app}
                                </span>
                            ))}
                        </div>
                    </div>
                  </div>
                </div>

                {/* Description & Specs */}
                <div className="lg:w-2/3">
                  <p className="text-slate-300 text-lg leading-relaxed mb-8">
                    {product.description}
                  </p>

                  <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
                    <h3 className="text-lg font-semibold text-white mb-4">Key Characteristics</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {product.specs.map((spec, i) => (
                        <div key={i} className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-300">{spec}</span>
                        </div>
                        ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;