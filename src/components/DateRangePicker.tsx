import { useRecurrenceStore } from "./recurrenceStore";

export default function DateRangePicker() {
  const { startDate, endDate, setStartDate, setEndDate } = useRecurrenceStore();

  return (
    <div className="flex flex-col gap-2">
      <label>
        Start Date:
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="ml-2 border p-1 rounded"
        />
      </label>
      <label>
        End Date:
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="ml-2 border p-1 rounded"
        />
      </label>
    </div>
  );
}
