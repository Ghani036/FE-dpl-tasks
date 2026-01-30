import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoaderProps {
    message?: string;
    fullScreen?: boolean;
}

const Loader: React.FC<LoaderProps> = ({ message = 'Loading...', fullScreen = false }) => {
    const content = (
        <div className="flex flex-col items-center justify-center gap-6">
            <div className="relative">
                <Loader2 className="animate-spin text-green-600" size={fullScreen ? 64 : 48} />
                <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full" />
            </div>
            <p className="text-slate-400 font-black tracking-widest uppercase text-xs">{message}</p>
        </div>
    );

    if (fullScreen) {
        return (
            <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-[9999] flex items-center justify-center">
                {content}
            </div>
        );
    }

    return <div className="py-20 flex items-center justify-center w-full">{content}</div>;
};

export default Loader;
