import RecurrenceOptions from "./RecurrenceOptions";
import CustomInterval from "./CustomInterval";
import WeeklySelector from "./WeeklySelector";
import MonthlyPattern from "./MonthlyPattern";
import DateRangePicker from "./DateRangePicker";
import CalendarPreview from "./CalendarPreview";
import { useRecurrenceStore } from "./recurrenceStore";

export default function RecurringDatePicker() {
  const { recurrence } = useRecurrenceStore();

  return (
    <div className="space-y-4 border p-4 rounded-xl shadow-md max-w-lg">
      <RecurrenceOptions />
      <CustomInterval />
      {recurrence === "weekly" && <WeeklySelector />}
      {recurrence === "monthly" && <MonthlyPattern />}
      <DateRangePicker />
      <CalendarPreview />
    </div>
  );
}
