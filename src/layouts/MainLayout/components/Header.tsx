import React from 'react';
import { Menu } from 'lucide-react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { RootState } from '../../../store';

interface HeaderProps {
    onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
    const { user } = useSelector((state: RootState) => state.auth);
    const location = useLocation();

    const getPageTitle = () => {
        const path = location.pathname;
        if (path === '/') return 'Dashboard';
        if (path.startsWith('/products')) return 'Our Products';
        if (path === '/profile') return 'My Account';
        return 'Dashboard';
    };

    return (
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-100/50 flex items-center justify-between px-6 lg:px-10 sticky top-0 z-30">
            <div className="flex items-center gap-4">
                <button
                    className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
                    onClick={onMenuClick}
                >
                    <Menu size={24} />
                </button>
                <h2 className="text-xl font-black text-slate-900 tracking-tight">{getPageTitle()}</h2>
            </div>

            <div className="flex items-center gap-3 lg:gap-6">

                <div className="h-8 w-[1px] bg-slate-100 hidden sm:block" />

                <div className="hidden sm:flex items-center gap-3">
                    <div className="text-right">
                        <p className="text-xs font-black text-slate-900">{user?.firstName}</p>
                        <p className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md">Online</p>
                    </div>
                    <img src={user?.image} className="w-10 h-10 rounded-xl shadow-sm border border-slate-100" alt="Avatar" />
                </div>
            </div>
        </header>
    );
};

export default Header;
