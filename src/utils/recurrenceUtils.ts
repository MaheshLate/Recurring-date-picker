import { addDays, isBefore, isSameDay } from "date-fns";

export function generateRecurringDates({
  startDate,
  endDate,
  interval,
  recurrenceType,
  selectedWeekdays,
  selectedYearlyDate,
}: {
  startDate: Date;
  endDate?: Date;
  interval: number;
  recurrenceType: "daily" | "weekly" | "monthly" | "yearly";
  selectedWeekdays?: number[];
  selectedYearlyDate?: string; // ✅ हे नवीन
}): Date[] {
  const dates: Date[] = [];
  let current = new Date(startDate);

  if (recurrenceType === "yearly" && selectedYearlyDate) {
    const [yearMonthYear, yearMonthMonth] = selectedYearlyDate.split("-").map(Number);
    const startYear = new Date(startDate).getFullYear();
    const endYear = endDate ? new Date(endDate).getFullYear() : startYear + 10;

    for (let y = startYear; y <= endYear; y += interval) {
      const date = new Date(y, yearMonthMonth - 1, 1); // Day = 1
      if (date >= new Date(startDate) && (!endDate || date <= new Date(endDate))) {
        dates.push(date);
      }
    }

    return dates;
  }

  while (!endDate || isBefore(current, endDate) || isSameDay(current, endDate)) {
    if (recurrenceType === "weekly" && selectedWeekdays?.length) {
      selectedWeekdays.forEach((day) => {
        const next = new Date(current);
        next.setDate(current.getDate() + ((7 + day - current.getDay()) % 7));
        if (!endDate || isBefore(next, endDate) || isSameDay(next, endDate)) {
          dates.push(next);
        }
      });
      current = addDays(current, 7 * interval);
    } else {
      dates.push(new Date(current));
      if (recurrenceType === "daily") current = addDays(current, interval);
      else if (recurrenceType === "monthly") current.setMonth(current.getMonth() + interval);
    }
  }

  return dates;
}
