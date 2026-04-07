/**
 * Program Overview Section
 *
 * White card with text and image - overlaps the video section above
 */

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface ProgramOverviewSectionProps {
  onLearnMoreClick: () => void;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function useCountdown(targetDate: string): TimeLeft {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetDate]);

  return timeLeft;
}

function TimerUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="bg-gray-100 text-gray-900 border border-gray-200 rounded-lg w-14 h-14 flex items-center justify-center font-mono text-xl font-bold tabular-nums shadow-sm">
        {String(value).padStart(2, "0")}
      </div>
      <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
}

function Separator() {
  return (
    <span className="text-gray-300 font-light text-2xl self-start mt-3 select-none px-0.5">
      :
    </span>
  );
}

export const ProgramOverviewSection: React.FC<ProgramOverviewSectionProps> = () => {
  const BATCH_DATE = "2026-07-06T00:00:00";
  const timeLeft = useCountdown(BATCH_DATE);
  const isOver =
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  return (
    <div className="relative -mt-32 sm:-mt-40 md:-mt-48 px-4 sm:px-6 md:px-8 pb-6 sm:pb-8">
      <div className="max-w-6xl mx-auto">
        {/* White Content Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12">
          {/* Two Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-8 gap-10 items-start">
            {/* Left Column */}
            <div className="lg:col-span-5">

              {/* Top Row: Countdown and Apply Button */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-7">
                {/* Batch Date + Countdown Block */}
                <div className="p-5 rounded-xl border-2 border-red-100 bg-gradient-to-br from-red-50 to-orange-50 w-full sm:w-auto shadow-sm">
                  {/* Badge row */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    <span className="text-sm font-bold text-red-700 uppercase tracking-wider">
                      Next Batch:
                    </span>
                    <span className="text-base font-extrabold text-red-600 ml-1">
                      6th July 2026
                    </span>
                  </div>

                  {/* Countdown */}
                  {!isOver ? (
                    <div className="flex items-start gap-2">
                      <TimerUnit value={timeLeft.days} label="Days" />
                      <Separator />
                      <TimerUnit value={timeLeft.hours} label="Hrs" />
                      <Separator />
                      <TimerUnit value={timeLeft.minutes} label="Min" />
                      <Separator />
                      <TimerUnit value={timeLeft.seconds} label="Sec" />
                    </div>
                  ) : (
                    <span className="text-xs font-bold text-red-600 uppercase tracking-widest">
                      Batch has started!
                    </span>
                  )}

                  {/* Sub-label */}
                  {!isOver && (
                    <p className="text-[11px] text-gray-400 mt-3 font-medium">
                      Enroll before the batch fills up
                    </p>
                  )}
                </div>

                {/* Apply Now Button */}
                <Link
                  href="/admissions"
                  className="ml-auto mr-10 inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-gray-900 to-black text-white text-lg font-semibold rounded-full shadow-md shadow-black/20 hover:scale-105 hover:shadow-xl transition-transform duration-200 group mt-2 sm:mt-0"                >
                  <span>Apply Now</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>

              <h2 className="font-mono text-2xl md:text-3xl font-bold mb-4 text-gray-900 leading-tight">
                FLAGSHIP PROGRAM OVERVIEW
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
                A high-intensity transformation program designed to build elite
                developers for the AI era. We prioritize &ldquo;Mental Muscle&rdquo; by
                enforcing a No-AI environment during the foundational phases,
                ensuring you master the logic before you automate it. This is a
                6-month rigorous training journey followed by a guaranteed
                6-month internship.
              </p>

            </div>

            {/* Right Column - Image */}
            <div className="lg:col-span-3">
              <div className="relative h-64 lg:h-80 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/students-learning.jpg"
                  alt="Engineering Lab Students"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};