"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon, Clock } from "lucide-react";
import { createPortal } from "react-dom";

const TIME_SLOTS = [
    "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM",
    "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
    "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM",
];

interface DateTimePickerProps {
    selectedDate: Date | undefined;
    selectedTime: string;
    onDateChange: (date: Date | undefined) => void;
    onTimeChange: (time: string) => void;
    minDate?: Date;
}

export function DateTimePicker({
    selectedDate,
    selectedTime,
    onDateChange,
    onTimeChange,
    minDate = new Date(),
}: DateTimePickerProps) {
    const [showCalendar, setShowCalendar] = React.useState(false);
    const [showTimePicker, setShowTimePicker] = React.useState(false);
    const [mounted, setMounted] = React.useState(false);
    const [calendarPos, setCalendarPos] = React.useState({ top: 0, left: 0, openAbove: false });
    const [timePos, setTimePos] = React.useState({ top: 0, left: 0, width: 0, openAbove: false });
    const dateRef = React.useRef<HTMLButtonElement>(null);
    const timeRef = React.useRef<HTMLButtonElement>(null);
    const calendarPopupRef = React.useRef<HTMLDivElement>(null);
    const timePopupRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    // Position calendar popup - checks space above/below
    React.useEffect(() => {
        if (showCalendar && dateRef.current) {
            const rect = dateRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const calendarHeight = 380; // approximate height
            const spaceBelow = viewportHeight - rect.bottom;
            const spaceAbove = rect.top;
            const openAbove = spaceBelow < calendarHeight && spaceAbove > spaceBelow;

            setCalendarPos({
                top: openAbove
                    ? rect.top + window.scrollY - calendarHeight - 4
                    : rect.bottom + window.scrollY + 4,
                left: rect.left + window.scrollX,
                openAbove,
            });
        }
    }, [showCalendar]);

    // Position time popup - checks space above/below
    React.useEffect(() => {
        if (showTimePicker && timeRef.current) {
            const rect = timeRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const timeHeight = 200; // approximate height
            const spaceBelow = viewportHeight - rect.bottom;
            const spaceAbove = rect.top;
            const openAbove = spaceBelow < timeHeight && spaceAbove > spaceBelow;

            setTimePos({
                top: openAbove
                    ? rect.top + window.scrollY - timeHeight - 4
                    : rect.bottom + window.scrollY + 4,
                left: rect.left + window.scrollX,
                width: rect.width,
                openAbove,
            });
        }
    }, [showTimePicker]);

    // Close popups on outside click
    React.useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (calendarPopupRef.current && !calendarPopupRef.current.contains(e.target as Node) &&
                dateRef.current && !dateRef.current.contains(e.target as Node)) {
                setShowCalendar(false);
            }
            if (timePopupRef.current && !timePopupRef.current.contains(e.target as Node) &&
                timeRef.current && !timeRef.current.contains(e.target as Node)) {
                setShowTimePicker(false);
            }
        };
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, []);

    const calendarPopup = showCalendar && (
        <div
            ref={calendarPopupRef}
            style={{ position: "absolute", top: calendarPos.top, left: calendarPos.left }}
            className="z-[9999] bg-white rounded-lg shadow-xl border border-gray-200"
        >
            <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={(date) => {
                    onDateChange(date);
                    setShowCalendar(false);
                }}
                disabled={(date) => date < minDate || date < new Date("1900-01-01")}
            />
        </div>
    );

    const timePopup = showTimePicker && (
        <div
            ref={timePopupRef}
            style={{ position: "absolute", top: timePos.top, left: timePos.left, minWidth: Math.max(timePos.width, 280) }}
            className="z-[9999] bg-white rounded-lg shadow-xl border border-gray-200 p-3"
        >
            <div className="grid grid-cols-4 gap-2">
                {TIME_SLOTS.map((time) => (
                    <button
                        key={time}
                        type="button"
                        onClick={() => {
                            onTimeChange(time);
                            setShowTimePicker(false);
                        }}
                        className={`py-2 px-2 text-xs font-medium border rounded-lg transition-all ${selectedTime === time
                                ? "bg-[#00BFD2] text-white border-[#00BFD2]"
                                : "bg-white text-gray-700 border-gray-200 hover:border-[#00BFD2] hover:text-[#00BFD2]"
                            }`}
                    >
                        {time}
                    </button>
                ))}
            </div>
        </div>
    );

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Date Field */}
            <div>
                <label className="text-xs text-gray-500 mb-1 block">Date</label>
                <button
                    ref={dateRef}
                    type="button"
                    onClick={() => {
                        setShowCalendar(!showCalendar);
                        setShowTimePicker(false);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-left focus:ring-2 focus:ring-[#00BFD2] focus:border-transparent outline-none transition-all hover:bg-gray-100"
                >
                    <CalendarIcon className="w-4 h-4 text-gray-400" />
                    <span className={selectedDate ? "text-gray-800" : "text-gray-500"}>
                        {selectedDate ? format(selectedDate, "dd/MM/yyyy") : "Select date..."}
                    </span>
                </button>
            </div>

            {/* Time Field */}
            <div>
                <label className="text-xs text-gray-500 mb-1 block">Time</label>
                <button
                    ref={timeRef}
                    type="button"
                    onClick={() => {
                        setShowTimePicker(!showTimePicker);
                        setShowCalendar(false);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-left focus:ring-2 focus:ring-[#00BFD2] focus:border-transparent outline-none transition-all hover:bg-gray-100"
                >
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className={selectedTime ? "text-gray-800" : "text-gray-500"}>
                        {selectedTime || "Select time..."}
                    </span>
                </button>
            </div>

            {/* Portals */}
            {mounted && createPortal(<>{calendarPopup}{timePopup}</>, document.body)}
        </div>
    );
}

DateTimePicker.displayName = "DateTimePicker";
