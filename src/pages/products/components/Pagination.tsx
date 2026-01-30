import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from 'helpers/className';

interface PaginationProps {
    page: number;
    totalPages: number;
    total: number;
    limit: number;
    setPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ page, totalPages, total, limit, setPage }) => {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-slate-100 pt-10">
            <p className="text-sm font-bold text-slate-400">
                Showing <span className="text-slate-900">{page * limit + 1}</span> to <span className="text-slate-900">{Math.min((page + 1) * limit, total)}</span> of <span className="text-slate-900 font-black">{total}</span>products
            </p>
            <div className="flex items-center gap-3">
                <button
                    onClick={() => setPage(Math.max(0, page - 1))}
                    disabled={page === 0}
                    className="p-3 bg-white border border-slate-100 rounded-md disabled:opacity-30 hover:bg-slate-50 transition-all shadow-sm"
                >
                    <ChevronLeft size={20} />
                </button>
                <div className="flex items-center gap-1.5">
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                        let pageNum = i;
                        if (totalPages > 5 && page > 2) {
                            pageNum = page - 2 + i;
                            if (pageNum >= totalPages) pageNum = totalPages - 5 + i;
                        }
                        if (pageNum < 0 || pageNum >= totalPages) return null;
                        return (
                            <button
                                key={pageNum}
                                onClick={() => setPage(pageNum)}
                                className={cn(
                                    "w-12 h-12 rounded-md text-sm font-black transition-all",
                                    page === pageNum
                                        ? "bg-emerald-600 text-white shadow-lg shadow-emerald-100 scale-110"
                                        : "bg-white text-slate-500 hover:bg-slate-50 border border-slate-100"
                                )}
                            >
                                {pageNum + 1}
                            </button>
                        );
                    })}
                </div>
                <button
                    onClick={() => setPage(Math.min(totalPages - 1, page + 1))}
                    disabled={page >= totalPages - 1}
                    className="p-3 bg-white border border-slate-100 rounded-md disabled:opacity-30 hover:bg-slate-50 transition-all shadow-sm"
                >
                    <ChevronRight size={20} />
                </button>
            </div>
        </div>
    );
};

export default Pagination;
