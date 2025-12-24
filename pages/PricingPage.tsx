import React, { useState, useMemo } from 'react';
import { PRICE_LIST, PRICING_NOTES } from '../constants';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';
import { Search, Info, Filter } from 'lucide-react';

const PricingPage: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const categories = ['All', ...Array.from(new Set(PRICE_LIST.map(item => item.category)))];

  const filteredData = useMemo(() => {
    return PRICE_LIST.filter(item => {
      const matchesCategory = filter === 'All' || item.category === filter;
      const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [filter, search]);

  const chartData = useMemo(() => {
    // Top 5 most expensive items in current filter to keep chart readable
    return [...filteredData]
      .sort((a, b) => b.price - a.price)
      .slice(0, 8)
      .map(item => ({
        name: item.name.split(',')[0], // Short name
        price: item.price,
        category: item.category
      }));
  }, [filteredData]);

  const getCategoryColor = (category: string) => {
      switch(category) {
          case 'Quartz': return '#dc2626'; // red-600
          case 'Kaolin': return '#3b82f6'; // blue-500
          case 'Gypsum': return '#e2e8f0'; // slate-200
          default: return '#64748b';
      }
  };

  return (
    <div className="bg-slate-900 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-white mb-2">Price List (Manufactured Products)</h1>
          <p className="text-slate-400">Buyuk Turan LLC / Gulandon Group</p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between items-center">
            {/* Category Tabs */}
            <div className="flex space-x-1 bg-slate-800 p-1 rounded-lg overflow-x-auto max-w-full">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-all whitespace-nowrap ${
                            filter === cat 
                            ? 'bg-slate-600 text-white shadow' 
                            : 'text-slate-400 hover:text-white'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-64">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
                <input 
                    type="text" 
                    placeholder="Search products..." 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 text-white text-sm rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none placeholder-slate-500"
                />
            </div>
        </div>

        {/* Data Visualization */}
        <div className="mb-12 bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg">
            <div className="flex items-center mb-6">
                 <Filter className="h-5 w-5 text-red-500 mr-2" />
                 <h2 className="text-lg font-semibold text-white">Price Comparison (USD / Unit)</h2>
            </div>
            
            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                        <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tick={{fill: '#94a3b8'}} tickMargin={10} />
                        <YAxis stroke="#94a3b8" fontSize={12} tick={{fill: '#94a3b8'}} unit="$" />
                        <Tooltip 
                            contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc' }}
                            itemStyle={{ color: '#f8fafc' }}
                            cursor={{fill: '#334155', opacity: 0.4}}
                        />
                        <Bar dataKey="price" radius={[4, 4, 0, 0]}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={getCategoryColor(entry.category)} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-slate-800 rounded-xl border border-slate-700 shadow-xl">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="bg-slate-900 text-xs uppercase text-slate-400">
              <tr>
                <th scope="col" className="px-6 py-4 font-semibold tracking-wider">Product Name</th>
                <th scope="col" className="px-6 py-4 font-semibold tracking-wider">Size/Fraction</th>
                <th scope="col" className="px-6 py-4 font-semibold tracking-wider">Unit</th>
                <th scope="col" className="px-6 py-4 font-semibold tracking-wider text-right">Price (USD)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {filteredData.length > 0 ? (
                filteredData.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-750 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">
                        {item.name}
                        <span className="block text-xs text-slate-500 mt-1">{item.category} • {item.manufacturer}</span>
                    </td>
                    <td className="px-6 py-4">{item.size}</td>
                    <td className="px-6 py-4 uppercase">{item.unit}</td>
                    <td className="px-6 py-4 text-right font-bold text-red-500 text-base">
                      ${item.price.toFixed(2)}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                    <td colSpan={4} className="px-6 py-8 text-center text-slate-500">
                        No products found matching your criteria.
                    </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Terms */}
        <div className="mt-8 bg-slate-800/50 p-6 rounded-lg border border-slate-700/50">
            <div className="flex items-start gap-3">
                <Info className="h-6 w-6 text-blue-500 flex-shrink-0 mt-0.5" />
                <div>
                    <h3 className="text-white font-medium mb-2">Important Delivery & Packaging Notes</h3>
                    <ul className="space-y-2 list-disc list-inside text-sm text-slate-400">
                        {PRICING_NOTES.map((note, idx) => (
                            <li key={idx}>{note}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default PricingPage;