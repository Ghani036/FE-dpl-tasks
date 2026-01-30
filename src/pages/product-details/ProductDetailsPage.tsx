import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star } from 'lucide-react';
import api from '../../api';
import { Product } from '../../types';
import Loader from '../../components/Loader';

const ProductDetailsPage: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState < Product | null > (null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await api.get(`/products/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Failed to fetch product details', error);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    if (loading) {
        return <Loader message="Loading Product Details..." />;
    }

    if (!product) {
        return (
            <div className="h-[60vh] flex flex-col items-center justify-center">
                <p className="text-xl font-bold text-slate-800">Product not found</p>
                <button onClick={() => navigate('/products')} className="mt-4 text-emerald-600 font-bold underline">
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500">
            <button
                onClick={() => navigate('/products')}
                className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors font-bold"
            >
                <ArrowLeft size={18} />
                Go Back
            </button>

            <div className="bg-white rounded-md border border-slate-100 shadow-sm overflow-hidden p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Image Section */}
                    <div className="space-y-4">
                        <div className="aspect-square rounded-md bg-slate-50 border border-slate-100 p-8 flex items-center justify-center">
                            <img
                                src={product.thumbnail}
                                alt={product.title}
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col">
                        <div className="mb-6">
                            <p className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em] mb-2">{product.brand} • {product.category}</p>
                            <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">{product.title}</h1>
                            <div className="flex items-center gap-2">
                                <div className="flex items-center text-amber-500"><Star size={16} fill="currentColor" /></div>
                                <span className="text-sm font-bold text-slate-500">{product.rating} Global Rating</span>
                            </div>
                        </div>

                        <div className="mb-8">
                            <div className="flex items-baseline gap-3 mb-2">
                                <span className="text-4xl font-black text-slate-900">${product.price}</span>
                                {product.discountPercentage > 0 && (
                                    <span className="text-lg font-bold text-slate-300 line-through">
                                        ${(product.price * (1 + product.discountPercentage / 100)).toFixed(2)}
                                    </span>
                                )}
                            </div>
                            <p className="text-sm font-bold text-emerald-600">Save {product.discountPercentage}% today</p>
                        </div>

                        <div className="space-y-4 mb-10">
                            <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest">Description</h3>
                            <p className="text-slate-600 font-medium leading-relaxed">{product.description}</p>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;
