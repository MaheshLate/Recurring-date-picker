import React, { useState } from "react";
import RecurrenceOptions from "./components/RecurrenceOptions";

function App() {
  const [recurrenceType, setRecurrenceType] = useState<"daily" | "weekly" | "monthly" | "yearly">("daily");
  const [interval, setInterval] = useState<number>(1);

  return (
    <div className="max-w-xl mx-auto mt-10 space-y-6">
      <h1 className="text-2xl font-bold">Recurring Date Picker</h1>
      <RecurrenceOptions
        recurrenceType={recurrenceType}
        setRecurrenceType={setRecurrenceType}
        interval={interval}
        setInterval={setInterval}
      />
    </div>
  );
}

export default App;
