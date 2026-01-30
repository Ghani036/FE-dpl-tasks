import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { Product } from '../../../types';
import { useNavigate } from 'react-router-dom';
import Badge from '../../../components/Badge';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(`/product-details/${product.id}`)}
            className="group bg-white rounded-md border border-slate-100 shadow-sm hover:shadow-md transition-all duration-500 overflow-hidden cursor-pointer flex flex-col"
        >
            <div className="aspect-[10/9] relative overflow-hidden bg-[#fbfcfe]">
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-full object-contain p-6 transition-transform duration-700 "
                />
                <div className="absolute top-4 left-4">
                    <Badge variant="emerald" className="bg-white/70 backdrop-blur-md">
                        {product.category}
                    </Badge>
                </div>
                {product.discountPercentage > 12 && (
                    <div className="absolute top-4 right-4">
                        <span className="bg-emerald-500/80 backdrop-blur-md text-white text-[10px] font-black px-2 py-1 rounded-md border border-white/20 shadow-sm">
                            -{Math.round(product.discountPercentage)}%
                        </span>
                    </div>
                )}
            </div>
            <div className="p-7 flex-1 flex flex-col">
                <div className="mb-3">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{product.brand}</p>
                    <h3 className="text-lg font-black text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-1 leading-tight">
                        {product.title}
                    </h3>
                </div>

                <p className="text-sm font-medium text-slate-500 line-clamp-2 mb-6 h-10 leading-relaxed">
                    {product.description}
                </p>

                <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                    <div>
                        <span className="text-2xl font-black text-slate-900 tracking-tighter">${product.price}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-100">
                        <Star size={14} className="text-amber-500 fill-amber-500" />
                        <span className="text-xs font-black text-amber-700">{product.rating}</span>
                    </div>
                </div>
            </div>

            <div className="px-7 pb-7">
                <button className="w-full border-[0.5px] rounded-md border-green-600 group/btn py-3 text-sm flex items-center justify-center gap-2">
                    <span>View Details</span>
                    <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
