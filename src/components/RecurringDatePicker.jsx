import { useState } from "react";
import { addDays, addWeeks, addMonths, format } from "date-fns";

export default function RecurringDatePicker() {
  const [startDate, setStartDate] = useState("");
  const [recurrence, setRecurrence] = useState("daily");
  const [occurrences, setOccurrences] = useState([]);

  const generateDates = () => {
    if (!startDate) return;

    const result = [];
    let current = new Date(startDate);

    for (let i = 0; i < 5; i++) {
      result.push(format(current, "yyyy-MM-dd"));
      current =
        recurrence === "daily"
          ? addDays(current, 1)
          : recurrence === "weekly"
          ? addWeeks(current, 1)
          : addMonths(current, 1);
    }

    setOccurrences(result);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold text-center">📆 Recurring Date Picker</h2>

      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        className="w-full px-4 py-2 border rounded-md"
      />

      <select
        value={recurrence}
        onChange={(e) => setRecurrence(e.target.value)}
        className="w-full px-4 py-2 border rounded-md"
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
      </select>

      <button
        onClick={generateDates}
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
      >
        Generate Recurring Dates
      </button>

      {occurrences.length > 0 && (
        <ul className="mt-4 space-y-1">
          {occurrences.map((date, idx) => (
            <li key={idx} className="text-gray-700">
              {idx + 1}. {date}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
