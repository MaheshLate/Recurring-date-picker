import { create } from "zustand";

type Recurrence = "daily" | "weekly" | "monthly" | "yearly";

interface RecurrenceState {
  recurrence: Recurrence;
  interval: number;
  startDate: string;
  endDate: string;
  selectedWeekDays: number[];
  setRecurrence: (r: Recurrence) => void;
  setInterval: (n: number) => void;
  setStartDate: (d: string) => void;
  setEndDate: (d: string) => void;
  toggleWeekDay: (day: number) => void;
}

export const useRecurrenceStore = create<RecurrenceState>((set) => ({
  recurrence: "daily",
  interval: 1,
  startDate: "",
  endDate: "",
  selectedWeekDays: [],
  setRecurrence: (recurrence) => set({ recurrence }),
  setInterval: (interval) => set({ interval }),
  setStartDate: (startDate) => set({ startDate }),
  setEndDate: (endDate) => set({ endDate }),
  toggleWeekDay: (day) =>
    set((state) => ({
      selectedWeekDays: state.selectedWeekDays.includes(day)
        ? state.selectedWeekDays.filter((d) => d !== day)
        : [...state.selectedWeekDays, day],
    })),
}));
