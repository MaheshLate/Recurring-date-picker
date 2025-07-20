import { create } from "zustand";

type Recurrence = "daily" | "weekly" | "monthly" | "yearly" | "";

interface RecurrenceState {
  recurrence: Recurrence;
  interval: number;
  startDate: string;
  endDate: string;
  selectedWeekDays: number[];
  selectedYearlyDate: string; 
  setRecurrence: (r: Recurrence) => void;
  setInterval: (n: number) => void;
  setStartDate: (d: string) => void;
  setEndDate: (d: string) => void;
  toggleWeekDay: (dayIndex: number) => void;
  setSelectedYearlyDate: (date: string) => void; 
  // setSelectedYearlyDate: (date) => set({ selectedYearlyDate: date })
}

export const useRecurrenceStore = create<RecurrenceState>((set) => ({
  recurrence: "daily",
  interval: 1,
  startDate: "",
  endDate: "",
  selectedWeekDays: [],
  selectedYearlyDate: "2025-01", // ✅ Initialize it

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
  setSelectedYearlyDate: (date) => set({ selectedYearlyDate: date }), // ✅ Define it
}));
