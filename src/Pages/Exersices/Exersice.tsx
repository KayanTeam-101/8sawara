"use client";

import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { BsCalendarEvent } from "react-icons/bs";
import { FaFire } from "react-icons/fa6";
import { FiPlus, FiClock, FiEdit3, FiActivity, FiChevronLeft, FiChevronRight } from "react-icons/fi";

type HistoryEntry = {
  day: string;
  exercise: string;
  weight: number;
  date: string;
};

type Panel = "add" | "set" | "weightsHistory" | "fullHistory" | null;

const STORAGE_KEY = "HistoryOfExercises";

const FALLBACK_DAYS = ["Leg Day", "Push Day", "Pull Day", "Arm Day", "Chest Day", "Back Day"];


  const currentWeight = typeof window !== "undefined" ? window.localStorage.getItem("currentWeight") : null;
  const targetWeight = typeof window !== "undefined" ? window.localStorage.getItem("targetWeight") : null;
  const height = typeof window !== "undefined" ? window.localStorage.getItem("height") : null;
  const age = typeof window !== "undefined" ? window.localStorage.getItem("age") : null;
  const gender = typeof window !== "undefined" ? window.localStorage.getItem("SelectedGender") : null;
  const goals = typeof window !== "undefined" ? window.localStorage.getItem("SelectedGoals") : null;
  const challengePeriod = typeof window !== "undefined" ? window.localStorage.getItem("challengePeriod") : null;


const DEFAULT_EXERCISES: Record<string, string[]> = {
  "Leg Day": ["Squat", "Leg Press", "Romanian Deadlift"],
  "Push Day": ["Bench Press", "Incline Press", "Shoulder Press"],
  "Pull Day": ["Pull-Up", "Barbell Row", "Lat Pulldown"],
  "Arm Day": ["Bicep Curl", "Hammer Curl", "Tricep Pushdown"],
  "Chest Day": ["Bench Press", "Dumbbell Fly", "Incline Press"],
  "Back Day": ["Deadlift", "Seated Row", "Lat Pulldown"],
};

function safeReadJSON<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function dayKey(dateLike: string | Date) {
  const d = new Date(dateLike);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function addDays(date: Date, amount: number) {
  const copy = new Date(date);
  copy.setDate(copy.getDate() + amount);
  return copy;
}

function calculateStreak(history: HistoryEntry[]) {
  if (!history.length) return 0;

  const unique = new Set(history.map((h) => dayKey(h.date)));
  const today = dayKey(new Date());
  const yesterday = dayKey(addDays(new Date(), -1));

  let cursor: Date | null = null;
  if (unique.has(today)) cursor = new Date();
  else if (unique.has(yesterday)) cursor = addDays(new Date(), -1);
  else return 0;

  let streak = 0;
  while (cursor) {
    const k = dayKey(cursor);
    if (!unique.has(k)) break;
    streak++;
    cursor = addDays(cursor, -1);
  }
  return streak;
}

const Exersice = () => {
  return "ff"
}
export default Exersice;