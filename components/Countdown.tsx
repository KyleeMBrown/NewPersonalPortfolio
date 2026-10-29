
"use client";

import { useEffect, useState } from "react";

const TARGET_DATE = new Date("2027-08-28T00:00:00");

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(): TimeLeft {
  const difference = TARGET_DATE.getTime() - Date.now();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const update = () => setTimeLeft(getTimeLeft());

    update();
    const interval = setInterval(update, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!timeLeft) {
    return <p>Loading countdown...</p>;
  }

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
      <div className="flex flex-wrap gap-2 border rounded-lg">
          
      {units.map(({ label, value }) => (
        <div
          key={label}
          className="min-w-20 rounded-xl p-4 max-[380px]:min-w-18 text-center"
        >
          <p className="text-[12px] font-bold tabular-nums">
            {String(value).padStart(2, "0")}
          </p>
          <p className="text-[12px] max-[380px]:text-[10px] text-muted-foreground">{label}</p>
        </div>
      ))}
    </div>
  );
}
