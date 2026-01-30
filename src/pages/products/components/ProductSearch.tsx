import React from 'react';
import { Search } from 'lucide-react';

interface ProductSearchProps {
    search: string;
    setSearch: (search: string) => void;
    total: number;
}

const ProductSearch: React.FC<ProductSearchProps> = ({ search, setSearch, total }) => {
    return (
        <header className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-white p-8 rounded-md shadow-sm border border-slate-100/50">
            <div>
                <h1 className="text-3xl font-black text-slate-900 tracking-tight">Products </h1>
                <p className="text-slate-500 font-medium">Browse through {total} products.</p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <div className="relative group min-w-[300px]">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-600 transition-colors" size={20} />
                    <input
                        type="text"
                        placeholder="Search Products..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-100 rounded-md focus:bg-white focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all font-medium"
                    />
                </div>

            </div>
        </header>
    );
};

export default ProductSearch;
