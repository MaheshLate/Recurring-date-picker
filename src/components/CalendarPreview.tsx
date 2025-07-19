import { useRecurrenceStore } from "./recurrenceStore";
import { generateRecurringDates } from "./recurrenceUtils";

export default function CalendarPreview() {
  const { recurrence, interval, startDate, endDate, selectedWeekDays } =
    useRecurrenceStore();

  const dates = generateRecurringDates({
    startDate,
    endDate,
    recurrence,
    interval,
    weekDays: selectedWeekDays,
  });

  return (
    <div>
      <h3 className="font-semibold mb-1">Preview:</h3>
      <ul className="max-h-32 overflow-y-auto list-disc list-inside text-sm text-gray-700">
        {dates.map((date, idx) => (
          <li key={idx}>{date}</li>
        ))}
      </ul>
    </div>
  );
}
