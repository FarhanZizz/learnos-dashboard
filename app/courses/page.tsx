"use client";
import { useState } from "react";
import {
  Search,
  Filter,
  Star,
  Users,
  Clock,
  BookOpen,
  Play,
  Download,
  Check,
} from "lucide-react";
import Sidebar from "../components/Sidebar";
import { allCourses } from "../lib/data";

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Language",
  "Database",
  "Mobile",
  "DevOps",
];
const levels = ["All", "Beginner", "Intermediate", "Advanced"];

type Theme = {
  bg: string;
  border: string;
  text: string;
  bar: string;
  pill: string;
  iconBorder: string;
};

const courseThemes: Record<string, Theme> = {
  "#7c6af7": {
    bg: "bg-brand/10",
    border: "border-brand/20",
    text: "text-brand",
    bar: "bg-brand",
    pill: "bg-brand/15 text-brand border-brand/30",
    iconBorder: "border-brand/30",
  },
  "#38bdf8": {
    bg: "bg-sky2/10",
    border: "border-sky2/20",
    text: "text-sky2",
    bar: "bg-sky2",
    pill: "bg-sky2/15 text-sky2 border-sky2/30",
    iconBorder: "border-sky2/30",
  },
  "#22d3a0": {
    bg: "bg-emerald2/10",
    border: "border-emerald2/20",
    text: "text-emerald2",
    bar: "bg-emerald2",
    pill: "bg-emerald2/15 text-emerald2 border-emerald2/30",
    iconBorder: "border-emerald2/30",
  },
  "#f59e0b": {
    bg: "bg-amber2/10",
    border: "border-amber2/20",
    text: "text-amber2",
    bar: "bg-amber2",
    pill: "bg-amber2/15 text-amber2 border-amber2/30",
    iconBorder: "border-amber2/30",
  },
  "#f43f5e": {
    bg: "bg-danger/10",
    border: "border-danger/20",
    text: "text-danger",
    bar: "bg-danger",
    pill: "bg-danger/15 text-danger border-danger/30",
    iconBorder: "border-danger/30",
  },
  "#a855f7": {
    bg: "bg-brand2/10",
    border: "border-brand2/20",
    text: "text-brand2",
    bar: "bg-brand2",
    pill: "bg-brand2/15 text-brand2 border-brand2/30",
    iconBorder: "border-brand2/30",
  },
};
const fallback = courseThemes["#7c6af7"];

export default function Courses() {
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("All");
  const [level, setLevel] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = allCourses.filter(
    (c) =>
      (cat === "All" || c.category === cat) &&
      (level === "All" || c.level === level) &&
      (c.title.toLowerCase().includes(search.toLowerCase()) ||
        c.instructor.toLowerCase().includes(search.toLowerCase())),
  );

  return (
    <div className="flex min-h-screen bg-bg">
      <Sidebar />
      <main className="ml-60 flex-1 px-9 py-8">
        {/* Header */}
        <div className="mb-7 animate-fade-up">
          <h1 className="font-display text-[28px] font-extrabold text-textprimary tracking-tight">
            All Courses
          </h1>
          <p className="text-muted mt-1">
            {allCourses.length} courses available ·{" "}
            <span className="text-emerald2">
              {allCourses.filter((c) => c.enrolled).length} enrolled
            </span>
          </p>
        </div>

        {/* Search + Level */}
        <div className="flex gap-3 mb-5 flex-wrap items-center">
          <div className="relative flex-1 min-w-50">
            <Search
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
            />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search courses or instructors..."
              className="w-full pl-9 pr-3 py-2.5 bg-surface border border-border rounded-xl text-textprimary text-[13px] outline-none focus:border-brand transition-colors placeholder:text-muted"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter size={14} className="text-muted" />
            {levels.slice(1).map((l) => (
              <button
                key={l}
                onClick={() => setLevel(level === l ? "All" : l)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border cursor-pointer transition-all ${
                  level === l
                    ? "border-brand bg-brand/10 text-brand"
                    : "border-border bg-surface text-muted hover:text-textprimary"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        {/* Category tabs */}
        <div className="flex gap-1.5 mb-6 overflow-x-auto pb-1">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium border cursor-pointer whitespace-nowrap transition-all ${
                cat === c
                  ? "border-brand bg-brand/10 text-brand"
                  : "border-border bg-surface text-muted hover:text-textprimary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid gap-6 grid-cols-1">
          {/* Course Grid */}
          <div className="grid gap-4  grid-cols-3">
            {filtered.map((c, i) => {
              const theme = courseThemes[c.color] ?? fallback;
              const isSelected = selected === c.id;
              return (
                <div
                  key={c.id}
                  onClick={() => setSelected(isSelected ? null : c.id)}
                  className={`bg-surface border rounded-2xl overflow-hidden cursor-pointer transition-all duration-200 animate-fade-up ${
                    isSelected
                      ? "border-brand shadow-[0_0_0_1px_#7c6af7]"
                      : "border-border hover:border-border2"
                  }`}
                  style={{ animationDelay: `${i * 0.06}s` }}
                >
                  {/* Thumbnail */}
                  <div
                    className={`h-28 ${theme.bg} relative flex items-center justify-center border-b border-border`}
                  >
                    <div
                      className={`w-11 h-11 rounded-xl ${theme.bg} border ${theme.iconBorder} flex items-center justify-center`}
                    >
                      <BookOpen size={20} className={theme.text} />
                    </div>
                    <span
                      className={`absolute top-2.5 right-2.5 text-[10px] font-semibold px-2 py-0.5 rounded-md border bg-surface border-border ${theme.text}`}
                    >
                      {c.category}
                    </span>
                    {c.enrolled && (
                      <span className="absolute top-2.5 left-2.5 text-[10px] font-semibold px-2 py-0.5 rounded-md border bg-emerald2/10 border-emerald2/30 text-emerald2 flex items-center gap-1">
                        <Check size={9} /> Enrolled
                      </span>
                    )}
                  </div>

                  {/* Body */}
                  <div className="p-4">
                    <h3 className="font-display text-[14px] font-bold text-textprimary leading-snug mb-2">
                      {c.title}
                    </h3>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div
                        className={`w-5 h-5 rounded-full ${theme.bg} flex items-center justify-center text-[8px] font-bold ${theme.text}`}
                      >
                        {c.instructorAvatar}
                      </div>
                      <span className="text-[11px] text-muted">
                        {c.instructor}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 mb-3 text-[11px] text-muted flex-wrap">
                      <Star size={11} className="fill-amber2 text-amber2" />
                      <span className="text-amber2 font-semibold">
                        {c.rating}
                      </span>
                      <span>·</span>
                      <Users size={10} />
                      <span>{(c.students / 1000).toFixed(1)}k</span>
                      <span>·</span>
                      <Clock size={10} />
                      <span>{c.duration}</span>
                    </div>

                    {c.enrolled && (
                      <div className="mb-3">
                        <div className="flex justify-between text-[10px] mb-1">
                          <span className="text-muted">Progress</span>
                          <span className={`font-semibold ${theme.text}`}>
                            {c.progress}%
                          </span>
                        </div>
                        <div className="h-1 bg-border2 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${theme.bar} rounded-full`}
                            style={{ width: `${c.progress}%` }}
                          />
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <span className="font-display font-bold text-[15px] text-textprimary">
                        ${c.price}
                      </span>
                      <span className="text-[10px] text-muted bg-surface2 border border-border px-2 py-0.5 rounded-md">
                        {c.level}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}

            {filtered.length === 0 && (
              <div className="col-span-3 flex flex-col items-center justify-center py-16 text-muted gap-3">
                <BookOpen size={40} className="opacity-30" />
                <p>No courses match your filters.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
