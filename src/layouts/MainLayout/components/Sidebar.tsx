import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, ShoppingBag, UserCircle, LogOut } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { logout } from '../../../store/authSlice';
import { cn } from 'helpers/className';

interface SidebarItemProps {
    to: string;
    icon: React.ReactNode;
    label: string;
    onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ to, icon, label, onClick }) => (
    <NavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) => cn(
            "flex items-center gap-3 px-4 py-3.5 rounded-md transition-all duration-300 group relative overflow-hidden",
            isActive
                ? "bg-emerald-600 text-white shadow-lg shadow-emerald-100"
                : "text-slate-500 hover:bg-emerald-50 hover:text-emerald-600"
        )}
    >
        <div className={cn("transition-transform duration-300 group-hover:scale-110")}>
            {icon}
        </div>
        <span className="font-bold tracking-tight">{label}</span>
    </NavLink>
);

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
    const dispatch = useDispatch();

    const navItems = [
        { to: '/', icon: <LayoutDashboard size={22} />, label: 'Dashboard' },
        { to: '/products', icon: <ShoppingBag size={22} />, label: 'Products' },
        { to: '/profile', icon: <UserCircle size={22} />, label: 'Profile' },
    ];

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <aside className={cn(
            "fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-100 transform transition-transform duration-500 ease-in-out lg:translate-x-0 lg:static lg:inset-0",
            isOpen ? "translate-x-0" : "-translate-x-full"
        )}>
            <div className="h-full flex flex-col p-6">
                <div className="flex items-center gap-4 px-2 mb-12">

                    <span className="text-2xl font-black tracking-tighter text-slate-900">
                    Product Dashboard
                    </span>
                </div>

                <nav className="flex-1 space-y-2">
                    {navItems.map((item) => (
                        <SidebarItem
                            key={item.to}
                            {...item}
                            onClick={onClose}
                        />
                    ))}
                </nav>

                <div className="mt-auto  border-t border-slate-50">

                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 w-full px-4 py-3.5 text-slate-500 hover:bg-rose-50 hover:text-rose-600 rounded-2xl transition-all font-bold group"
                    >
                        <LogOut size={20} className="group-hover:translate-x-1 transition-transform" />
                        <span>Logout</span>
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
