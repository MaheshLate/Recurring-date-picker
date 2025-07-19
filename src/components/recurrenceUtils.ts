import { addDays, format } from "date-fns";

interface GenerateRecurringOptions {
  startDate: Date;
  endDate?: Date;
  recurrence: string;
  interval: number;
  weekDays?: number[];
}

export function generateRecurringDates({
  startDate,
  endDate,
  recurrence,
  interval,
  weekDays = [],
}: GenerateRecurringOptions): string[] {
  const result: string[] = [];
  const current = new Date(startDate);
  const until = endDate ? new Date(endDate) : addDays(current, 30); 

  while (current <= until) {
    if (recurrence === "weekly" && !weekDays.includes(current.getDay())) {
      current.setDate(current.getDate() + 1);
      continue;
    }

    result.push(format(current, "yyyy-MM-dd"));

    switch (recurrence) {
      case "daily":
        current.setDate(current.getDate() + interval);
        break;
      case "weekly":
        current.setDate(current.getDate() + 1); // already filtered above
        break;
      case "monthly":
        current.setMonth(current.getMonth() + interval);
        break;
      case "yearly":
        current.setFullYear(current.getFullYear() + interval);
        break;
      default:
        break;
    }
  }

  type GenerateRecurringOptions = {
  startDate: Date; 
  interval: number;
  recurrenceType: "daily" | "weekly" | "monthly" | "yearly";
};


  return result;
}
