import React from "react";

type RecurrenceType = "daily" | "weekly" | "monthly" | "yearly";

interface Props {
  recurrenceType: RecurrenceType;
  setRecurrenceType: (value: RecurrenceType) => void;
  interval: number;
  setInterval: (value: number) => void;
}

const RecurrenceOptions: React.FC<Props> = ({
  recurrenceType,
  setRecurrenceType,
  interval,
  setInterval,
}) => {
  const options: RecurrenceType[] = ["daily", "weekly", "monthly", "yearly"];

  return (
    <div className="p-4 bg-white rounded-xl shadow space-y-4">
      {/* Recurrence Type Buttons */}
      <div>
        <label className="block font-semibold mb-1">Recurrence Type:</label>
        <div className="flex gap-2">
          {options.map((type) => (
            <button
              key={type}
              onClick={() => setRecurrenceType(type)}
              className={`px-4 py-2 rounded-full border transition ${
                recurrenceType === type
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Interval Input */}
      <div>
        <label className="block font-semibold mb-1">
          Every{" "}
          {recurrenceType === "daily"
            ? "X days"
            : recurrenceType === "weekly"
            ? "X weeks"
            : recurrenceType === "monthly"
            ? "X months"
            : "X years"}
        </label>
        <input
          type="number"
          min={1}
          value={interval}
          onChange={(e) => setInterval(Number(e.target.value))}
          className="border px-3 py-2 rounded w-24"
        />
      </div>
    </div>
  );
};

export default RecurrenceOptions;
