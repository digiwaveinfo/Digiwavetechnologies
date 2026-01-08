import React from "react";

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

/**
 * Reusable Container component with navbar-aligned width
 * Uses the same width pattern as Header: w-[94%] xl:w-[90%] 2xl:w-[85%]
 */
export default function Container({ children, className = "" }: ContainerProps) {
    return (
        <div className={`w-[94%] xl:w-[90%] 2xl:w-[85%] mx-auto ${className}`}>
            {children}
        </div>
    );
}
