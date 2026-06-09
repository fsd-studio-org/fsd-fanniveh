import React from "react";

type HighlightVariant = 'purple' | 'blue';

type TitleProps = {
    children: React.ReactNode;
    className?: string;
    variant?: HighlightVariant;
}

const variantClasses: Record<HighlightVariant, string> = {
    purple: 'text-[#7450c2] bg-purple-100',
    blue: 'text-[#4c8eb1] bg-cyan-100',
};

export function Highlight({ children, className = "", variant = 'purple' }: TitleProps) {
    return (
        <span className={`whitespace-nowrap p-1 px-2 font-black h-fit rounded-xl ${variantClasses[variant]} ${className}`}>
            {children}
        </span>
    );
}

export function HighlightSmall({ children, className = "", variant = 'purple' }: TitleProps) {
    return (
        <span className={`whitespace-nowrap p-1.5 py-0.5 font-black h-fit rounded-xl ${variantClasses[variant]} ${className}`}>
            {children}
        </span>
    );
}