import { addDays, isBefore, isSameDay } from "date-fns";

export function generateRecurringDates({
  startDate,
  endDate,
  interval,
  recurrenceType,
  selectedWeekdays,
}: {
  startDate: Date;
  endDate?: Date;
  interval: number;
  recurrenceType: "daily" | "weekly" | "monthly" | "yearly";
  selectedWeekdays?: number[];
}): Date[] {
  const dates: Date[] = [];
  let current = new Date(startDate);

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
      else if (recurrenceType === "yearly") current.setFullYear(current.getFullYear() + interval);
    }
  }

  return dates;
}
