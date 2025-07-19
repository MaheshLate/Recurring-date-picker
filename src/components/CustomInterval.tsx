import { useRecurrenceStore } from "./recurrenceStore";

export default function CustomInterval() {
  const { interval, setInterval, recurrence } = useRecurrenceStore();

  return (
    <div>
      <label>
        Every{" "}
        <input
          type="number"
          min={1}
          value={interval}
          onChange={(e) => setInterval(Number(e.target.value))}
          className="border rounded p-1 w-16 mx-2"
        />
        {recurrence}
      </label>
    </div>
  );
}
