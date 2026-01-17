import React from 'react';
import { cn } from '@/lib/utils';

export default function AuroraBackground({ className, children }: { className?: string, children?: React.ReactNode }) {
    return (
        <div className={cn("relative w-full h-full overflow-hidden bg-stone-950", className)}>
            <div className="absolute inset-0 opacity-50">
                <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-aurora mix-blend-screen bg-gradient-to-r from-transparent via-primary/30 to-purple-600/30 blur-[100px]" />
                <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-aurora-2 mix-blend-screen bg-gradient-to-b from-transparent via-amber-500/10 to-transparent blur-[80px]" />
                <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-aurora-3 mix-blend-screen bg-gradient-to-tr from-red-900/40 via-transparent to-stone-900/80 blur-[120px]" />
            </div>
            {children}
        </div>
    );
}
