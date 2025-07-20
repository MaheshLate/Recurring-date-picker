// components/YearlyPattern.tsx
import { useRecurrenceStore } from "./recurrenceStore";

export default function YearlyPattern() {
  const { selectedYearlyDate, setSelectedYearlyDate } = useRecurrenceStore();

  return (
    <div className="space-y-2">
      <label className="block font-semibold">Select Yearly Date:</label>
      <input
        type="month"
        value={selectedYearlyDate}
        onChange={(e) => setSelectedYearlyDate(e.target.value)}
        className="border rounded px-3 py-2"
      />
    </div>
  );
}
