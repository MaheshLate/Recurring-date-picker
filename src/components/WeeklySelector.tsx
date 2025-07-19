import { useRecurrenceStore } from "./recurrenceStore";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function WeeklySelector() {
  const { selectedWeekDays, toggleWeekDay } = useRecurrenceStore();

  return (
    <div className="flex gap-2">
      {days.map((day, idx) => (
        <button
          key={idx}
          onClick={() => toggleWeekDay(idx)}
          className={`px-2 py-1 border rounded ${
            selectedWeekDays.includes(idx) ? "bg-blue-500 text-white" : ""
          }`}
        >
          {day}
        </button>
      ))}
    </div>
  );
}
