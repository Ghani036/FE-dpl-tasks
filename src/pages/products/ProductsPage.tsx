import React, { useEffect, useState, useCallback } from 'react';
import { Search } from 'lucide-react';
import api from '../../api';
import { Product } from '../../types';
import Loader from '../../components/Loader';
import ProductCard from './components/ProductCard';
import Pagination from './components/Pagination';
import ProductSearch from './components/ProductSearch';

const ProductsPage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(0);
    const [total, setTotal] = useState(0);
    const limit = 4;

    const fetchProducts = useCallback(async () => {
        setLoading(true);
        try {
            const skip = page * limit;
            let url = `/products?limit=${limit}&skip=${skip}`;

            if (search) {
                url = `/products/search?q=${search}&limit=${limit}&skip=${skip}`;
            }

            const response = await api.get(url);
            setProducts(response.data.products);
            setTotal(response.data.total);
        } catch (error) {
            console.error('Failed to fetch products', error);
        } finally {
            setLoading(false);
        }
    }, [page, search]);

    useEffect(() => {
        const timer = setTimeout(() => {
            fetchProducts();
        }, 300);
        return () => clearTimeout(timer);
    }, [fetchProducts]);

    const totalPages = Math.ceil(total / limit);

    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-6 duration-700">
            <ProductSearch search={search} setSearch={(val) => { setSearch(val); setPage(0); }} total={total} />

            {loading ? (
                <Loader message="Synchronizing Products..." />
            ) : products.length > 0 ? (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    <Pagination
                        page={page}
                        totalPages={totalPages}
                        total={total}
                        limit={limit}
                        setPage={setPage}
                    />
                </>
            ) : (
                <div className="h-[40vh] flex flex-col items-center justify-center gap-6 bg-white rounded-md border-2 border-dashed border-slate-100">
                    <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center text-slate-300">
                        <Search size={40} />
                    </div>
                    <div className="text-center">
                        <p className="text-slate-900 text-xl font-black">No matches found</p>
                        <p className="text-slate-500 font-medium">Try adjusting your filters or search terms.</p>
                    </div>
                    <button
                        onClick={() => setSearch('')}
                        className="btn-primary"
                    >
                        Reset Search
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProductsPage;
