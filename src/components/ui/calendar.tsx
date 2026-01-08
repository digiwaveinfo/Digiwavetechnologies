"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { format, setMonth, setYear } from "date-fns";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  const [currentMonth, setCurrentMonth] = React.useState(
    props.defaultMonth || props.month || new Date()
  );

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const years = React.useMemo(() => {
    const currentYear = new Date().getFullYear();
    const yearList = [];
    for (let i = currentYear; i <= currentYear + 5; i++) {
      yearList.push(i);
    }
    return yearList;
  }, []);

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newMonth = parseInt(e.target.value);
    const newDate = setMonth(currentMonth, newMonth);
    setCurrentMonth(newDate);
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newYear = parseInt(e.target.value);
    const newDate = setYear(currentMonth, newYear);
    setCurrentMonth(newDate);
  };

  return (
    <div className={cn("p-3 bg-white", className)}>
      {/* Month/Year Selector */}
      <div className="flex items-center justify-center gap-2 mb-4">
        <select
          value={currentMonth.getMonth()}
          onChange={handleMonthChange}
          className="px-2 py-1.5 text-sm font-medium bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-[#00BFD2] focus:border-transparent outline-none"
        >
          {months.map((month, index) => (
            <option key={month} value={index}>
              {month}
            </option>
          ))}
        </select>
        <select
          value={currentMonth.getFullYear()}
          onChange={handleYearChange}
          className="px-2 py-1.5 text-sm font-medium bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-[#00BFD2] focus:border-transparent outline-none"
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <DayPicker
        showOutsideDays={showOutsideDays}
        month={currentMonth}
        onMonthChange={setCurrentMonth}
        classNames={{
          months: "flex flex-col sm:flex-row gap-4",
          month: "flex flex-col gap-4",
          month_caption: "flex justify-center pt-1 relative items-center h-10",
          caption_label: "text-sm font-medium",
          nav: "flex items-center gap-1",
          button_previous: cn(
            buttonVariants({ variant: "outline" }),
            "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute left-1"
          ),
          button_next: cn(
            buttonVariants({ variant: "outline" }),
            "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute right-1"
          ),
          month_grid: "w-full border-collapse",
          weekdays: "flex w-full",
          weekday: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem] text-center",
          week: "flex w-full mt-2",
          day: "h-9 w-9 text-center text-sm p-0 relative",
          day_button: cn(
            buttonVariants({ variant: "ghost" }),
            "h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-accent hover:text-accent-foreground"
          ),
          selected: "bg-[#00BFD2] text-white hover:bg-[#00a5b5] hover:text-white focus:bg-[#00BFD2] focus:text-white",
          today: "bg-accent text-accent-foreground",
          outside: "text-muted-foreground opacity-50",
          disabled: "text-muted-foreground opacity-50 cursor-not-allowed",
          hidden: "invisible",
          ...classNames,
        }}
        components={{
          Chevron: (props) => {
            if (props.orientation === "left") {
              return <ChevronLeft className="h-4 w-4" />;
            }
            return <ChevronRight className="h-4 w-4" />;
          },
        }}
        {...props}
      />
    </div>
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
