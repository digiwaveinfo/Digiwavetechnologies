"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { createPortal } from "react-dom";

interface SelectOption {
    value: string;
    label: string;
}

interface CustomSelectProps {
    value: string;
    onChange: (value: string) => void;
    options: SelectOption[];
    placeholder?: string;
    className?: string;
}

export function CustomSelect({
    value,
    onChange,
    options,
    placeholder = "Select...",
    className,
}: CustomSelectProps) {
    const [isOpen, setIsOpen] = React.useState(false);
    const [mounted, setMounted] = React.useState(false);
    const [position, setPosition] = React.useState({ top: 0, left: 0, width: 0, openAbove: false });
    const triggerRef = React.useRef<HTMLButtonElement>(null);
    const dropdownRef = React.useRef<HTMLDivElement>(null);

    const selectedOption = options.find((opt) => opt.value === value);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    // Calculate position
    React.useEffect(() => {
        if (isOpen && triggerRef.current) {
            const rect = triggerRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const dropdownHeight = Math.min(options.length * 44 + 16, 250);
            const spaceBelow = viewportHeight - rect.bottom;
            const spaceAbove = rect.top;
            const openAbove = spaceBelow < dropdownHeight && spaceAbove > spaceBelow;

            setPosition({
                top: openAbove
                    ? rect.top + window.scrollY - dropdownHeight - 4
                    : rect.bottom + window.scrollY + 4,
                left: rect.left + window.scrollX,
                width: rect.width,
                openAbove,
            });
        }
    }, [isOpen, options.length]);

    // Close on outside click
    React.useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target as Node) &&
                triggerRef.current &&
                !triggerRef.current.contains(e.target as Node)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, []);

    const dropdown = isOpen && (
        <div
            ref={dropdownRef}
            style={{
                position: "absolute",
                top: position.top,
                left: position.left,
                width: position.width,
            }}
            className="z-[9999] bg-white rounded-lg shadow-xl border border-gray-200 py-2 max-h-[250px] overflow-y-auto"
        >
            {options.map((option) => (
                <button
                    key={option.value}
                    type="button"
                    onClick={() => {
                        onChange(option.value);
                        setIsOpen(false);
                    }}
                    className={`w-full px-4 py-2.5 text-left text-sm transition-colors ${value === option.value
                            ? "bg-[#00BFD2]/10 text-[#00BFD2] font-medium"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                >
                    {option.label}
                </button>
            ))}
        </div>
    );

    return (
        <>
            <button
                ref={triggerRef}
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full flex items-center justify-between px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-left focus:ring-2 focus:ring-[#00BFD2] focus:border-transparent outline-none transition-all hover:bg-gray-100 ${className}`}
            >
                <span className={selectedOption ? "text-gray-800" : "text-gray-500"}>
                    {selectedOption ? selectedOption.label : placeholder}
                </span>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>
            {mounted && createPortal(dropdown, document.body)}
        </>
    );
}

CustomSelect.displayName = "CustomSelect";
