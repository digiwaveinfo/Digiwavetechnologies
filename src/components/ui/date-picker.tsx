"use client";

import * as React from "react";
import { format, parse, isValid } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DatePickerProps {
  value: Date | undefined;
  onChange: (date: Date | undefined) => void;
  placeholder?: string;
  disabled?: boolean;
  minDate?: Date;
  className?: string;
}

export function DatePicker({
  value,
  onChange,
  placeholder = "dd/mm/yyyy",
  disabled = false,
  minDate,
  className,
}: DatePickerProps) {
  const [inputValue, setInputValue] = React.useState<string>(
    value ? format(value, "dd/MM/yyyy") : ""
  );
  const [isOpen, setIsOpen] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  // Sync input value when external value changes
  React.useEffect(() => {
    if (value) {
      setInputValue(format(value, "dd/MM/yyyy"));
    } else {
      setInputValue("");
    }
  }, [value]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;
    
    // Remove any non-numeric characters except /
    const cleanValue = newValue.replace(/[^\d/]/g, "");
    
    // Auto-format as user types
    let formatted = cleanValue;
    const digits = cleanValue.replace(/\//g, "");
    
    if (digits.length >= 2 && !cleanValue.includes("/")) {
      formatted = digits.slice(0, 2) + "/" + digits.slice(2);
    }
    if (digits.length >= 4 && cleanValue.split("/").length < 3) {
      const parts = formatted.split("/");
      if (parts.length === 2 && parts[1].length > 2) {
        formatted = parts[0] + "/" + parts[1].slice(0, 2) + "/" + parts[1].slice(2);
      }
    }
    
    // Limit to dd/mm/yyyy format (10 characters)
    if (formatted.length <= 10) {
      setInputValue(formatted);
    }

    // Try to parse the date when we have a complete input
    if (formatted.length === 10) {
      const parsedDate = parse(formatted, "dd/MM/yyyy", new Date());
      if (isValid(parsedDate)) {
        // Check if date is not before minDate
        if (!minDate || parsedDate >= minDate) {
          onChange(parsedDate);
        }
      }
    }
  };

  const handleInputBlur = () => {
    // Validate and format on blur
    if (inputValue.length === 10) {
      const parsedDate = parse(inputValue, "dd/MM/yyyy", new Date());
      if (isValid(parsedDate) && (!minDate || parsedDate >= minDate)) {
        onChange(parsedDate);
        setInputValue(format(parsedDate, "dd/MM/yyyy"));
      } else {
        // Reset to previous valid value or clear
        if (value) {
          setInputValue(format(value, "dd/MM/yyyy"));
        } else {
          setInputValue("");
        }
      }
    } else if (inputValue.length > 0 && inputValue.length < 10) {
      // Incomplete date, reset
      if (value) {
        setInputValue(format(value, "dd/MM/yyyy"));
      } else {
        setInputValue("");
      }
    }
  };

  const handleCalendarSelect = (date: Date | undefined) => {
    onChange(date);
    if (date) {
      setInputValue(format(date, "dd/MM/yyyy"));
    } else {
      setInputValue("");
    }
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Allow backspace to delete
    if (e.key === "Backspace") {
      return;
    }
    
    // Open calendar on arrow down
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setIsOpen(true);
    }
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <div className={cn("relative", className)}>
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#00BFD2] focus:border-transparent outline-none transition-all"
        />
        <CalendarIcon className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        <PopoverTrigger asChild>
          <button
            type="button"
            disabled={disabled}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 hover:bg-gray-100 rounded-md transition-colors"
            aria-label="Open calendar"
          >
            <CalendarIcon className="w-4 h-4 text-gray-500" />
          </button>
        </PopoverTrigger>
      </div>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={value}
          onSelect={handleCalendarSelect}
          disabled={(date) =>
            (minDate ? date < minDate : false) || date < new Date("1900-01-01")
          }
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}

DatePicker.displayName = "DatePicker";
