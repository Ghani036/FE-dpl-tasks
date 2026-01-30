import { cn } from 'helpers/className';
import React from 'react';

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'brand' | 'emerald' | 'rose' | 'amber' | 'purple' | 'slate';
    className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, variant = 'brand', className }) => {
    const variants = {
        brand: 'bg-emerald-50 text-emerald-600 border-emerald-100',
        emerald: 'bg-emerald-50 text-emerald-600 border-emerald-100',
        rose: 'bg-rose-50 text-rose-600 border-rose-100',
        amber: 'bg-amber-50 text-amber-600 border-amber-100',
        purple: 'bg-purple-50 text-purple-600 border-purple-100',
        slate: 'bg-slate-50 text-slate-600 border-slate-100',
    };

    return (
        <span className={cn(
            "px-3 py-1 text-[10px] font-black uppercase tracking-wider rounded-lg border",
            variants[variant],
            className
        )}>
            {children}
        </span>
    );
};

export default Badge;
