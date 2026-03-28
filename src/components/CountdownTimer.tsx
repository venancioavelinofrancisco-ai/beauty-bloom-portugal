import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(() => {
    const saved = localStorage.getItem("countdown-end");
    if (saved) {
      const diff = Math.max(0, Math.floor((parseInt(saved) - Date.now()) / 1000));
      return diff;
    }
    const end = Date.now() + 48 * 60 * 60 * 1000;
    localStorage.setItem("countdown-end", end.toString());
    return 48 * 60 * 60;
  });

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft((t) => Math.max(0, t - 1)), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex items-center justify-center gap-3">
      {[
        { value: hours, label: "Horas" },
        { value: minutes, label: "Min" },
        { value: seconds, label: "Seg" },
      ].map((item) => (
        <div key={item.label} className="flex flex-col items-center">
          <span className="bg-ivory text-rose-deep font-display text-2xl md:text-3xl font-bold rounded-lg w-16 h-16 flex items-center justify-center border border-ivory/50 shadow-elevated">
            {String(item.value).padStart(2, "0")}
          </span>
          <span className="text-ivory/70 text-xs mt-1 font-medium">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
