"use client";
import Head from "next/head";

import { useEffect, useState } from "react";
import { BiStopwatch } from "react-icons/bi";

const Chronometer = () => {
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("08/09/2023 23:59:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center">
      {partyTime ? (
        <>
          <h1>Time is out!</h1>
          <video autoPlay loop muted>
            <source src="/party.mp4" />
          </video>
        </>
      ) : (
        <>
          {" "}
          <div className="flex items-center justify-center space-x-2 mb-2">
            <BiStopwatch className="text-blue-800 text-5xl mb-4" />
            <div className="text-3xl font-medium mb-6">
              <span className="time">{days}</span>
            </div>
            <span className="text-3xl font-medium mb-6">:</span>
            <div className="text-3xl font-medium mb-6">
              <span className="time">{hours}</span>
            </div>
            <span className="text-3xl font-medium mb-6">:</span>
            <div className="text-3xl font-medium mb-6">
              <span className="time">{minutes}</span>
            </div>
            <span className="text-3xl font-medium mb-6">:</span>
            <div className="text-3xl font-medium mb-6">
              <span className="time">{seconds}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Chronometer;
