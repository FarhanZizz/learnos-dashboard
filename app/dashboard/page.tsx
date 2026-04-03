"use client";
import { useState } from "react";
import {
  TrendingUp,
  Clock,
  Award,
  Flame,
  ChevronRight,
  Star,
} from "lucide-react";
import Sidebar from "../components/Sidebar";
import {
  currentUser,
  leaderboard,
  enrolledCourses,
  stats,
  recentActivity,
} from "../lib/data";

const statConfig = [
  { iconEl: Award, accent: "text-brand", iconBg: "bg-brand/10" },
  { iconEl: Clock, accent: "text-sky2", iconBg: "bg-sky2/10" },
  { iconEl: Star, accent: "text-amber2", iconBg: "bg-amber2/10" },
  { iconEl: Flame, accent: "text-emerald2", iconBg: "bg-emerald2/10" },
];

const courseBarColors: Record<string, string> = {
  "#7c6af7": "bg-brand",
  "#38bdf8": "bg-sky2",
  "#22d3a0": "bg-emerald2",
};
const courseTextColors: Record<string, string> = {
  "#7c6af7": "text-brand",
  "#38bdf8": "text-sky2",
  "#22d3a0": "text-emerald2",
};
const courseBgColors: Record<string, string> = {
  "#7c6af7": "bg-brand/10",
  "#38bdf8": "bg-sky2/10",
  "#22d3a0": "bg-emerald2/10",
};
const activityStyles: Record<string, string> = {
  lesson: "bg-emerald2/10 border-emerald2/20",
  quiz: "bg-brand/10 border-brand/20",
  cert: "bg-amber2/10 border-amber2/20",
};

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<"week" | "month" | "all">("week");

  return (
    <div className="flex min-h-screen bg-bg">
      <Sidebar />
      <main className="ml-60 flex-1 px-9 py-8">
        {/* Header */}

        <div>
          <p className="text-muted text-[13px] mb-1">Good morning 👋</p>
          <h1 className="font-display text-[28px] font-extrabold text-textprimary tracking-tight leading-tight">
            Welcome back, {currentUser.name.split(" ")[0]}
          </h1>
          <p className="text-muted mt-1.5 text-sm">
            You're ranked <span className="text-amber2 font-semibold">#3</span>{" "}
            on the leaderboard this week
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {stats.map((s, i) => {
            const { iconEl: Icon, accent, iconBg } = statConfig[i];
            return (
              <div
                key={s.label}
                className="bg-surface border border-border rounded-2xl p-5 relative overflow-hidden animate-fade-up"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[12px] text-muted font-medium">
                    {s.label}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg ${iconBg} flex items-center justify-center`}
                  >
                    <Icon size={15} className={accent} />
                  </div>
                </div>
                <p className="font-display text-[26px] font-bold text-textprimary tracking-tight">
                  {s.value}
                </p>
                <p
                  className={`mt-1 text-[11px] flex items-center gap-1 ${s.up ? "text-emerald2" : "text-muted"}`}
                >
                  {s.up && <TrendingUp size={11} />} {s.delta}
                </p>
              </div>
            );
          })}
        </div>

        {/* 2-col layout */}
        <div className="grid grid-cols-[1fr_320px] gap-6 mb-6">
          {/* Continue Learning */}
          <div className="bg-surface border border-border rounded-2xl p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-display text-[17px] font-bold text-textprimary">
                Continue Learning
              </h2>
              <button className="text-[12px] text-brand bg-transparent border-0 cursor-pointer flex items-center gap-1 hover:opacity-80 transition-opacity">
                View all <ChevronRight size={13} />
              </button>
            </div>
            <div className="flex flex-col gap-3">
              {enrolledCourses.map((c, i) => {
                const bar = courseBarColors[c.color] ?? "bg-brand";
                const textCol = courseTextColors[c.color] ?? "text-brand";
                const bg = courseBgColors[c.color] ?? "bg-brand/10";
                return (
                  <div
                    key={c.id}
                    className="bg-surface2 border border-border rounded-xl flex items-center gap-4 px-4 py-3.5 cursor-pointer hover:border-border2 transition-colors"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div
                      className={`w-11 h-11 rounded-xl ${bg} flex items-center justify-center shrink-0`}
                    >
                      {/* Play triangle */}
                      <div
                        className={`w-0 h-0 border-y-[7px] border-y-transparent border-l-[12px] ml-0.5 ${bar.replace("bg-", "border-l-")}`}
                        style={{ borderLeftColor: c.color }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[13px] font-semibold text-textprimary truncate mb-0.5">
                        {c.title}
                      </p>
                      <p className="text-[11px] text-muted mb-1.5">
                        {c.completedLessons}/{c.totalLessons} lessons ·{" "}
                        {c.lastAccessed}
                      </p>
                      <div className="h-1 bg-border2 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${bar} rounded-full transition-all duration-700`}
                          style={{ width: `${c.progress}%` }}
                        />
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <p
                        className={`font-display text-[15px] font-bold ${textCol}`}
                      >
                        {c.progress}%
                      </p>
                      <p className="text-[10px] text-muted">{c.category}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-surface border border-border rounded-2xl p-6">
            <h2 className="font-display text-[17px] font-bold text-textprimary mb-5">
              Recent Activity
            </h2>
            <div className="flex flex-col">
              {recentActivity.map((a, i) => (
                <div
                  key={i}
                  className={`flex gap-3 ${i < recentActivity.length - 1 ? "pb-4 mb-4 border-b border-border" : ""}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-[13px] shrink-0 border ${activityStyles[a.type]}`}
                  >
                    {a.icon}
                  </div>
                  <div>
                    <p className="text-[12px] font-medium text-textprimary leading-snug">
                      {a.text}
                    </p>
                    <p className="text-[11px] text-muted mt-0.5">
                      {a.course} · {a.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Leaderboard */}
        <div
          id="leaderboard"
          className="bg-surface border border-border rounded-2xl p-6 animate-fade-up"
        >
          <div>
            <h2 className="font-display text-[17px] font-bold text-textprimary">
              🏆 Leaderboard
            </h2>
            <p className="text-[12px] text-muted mt-0.5">
              Weekly rankings · resets every Sunday
            </p>
          </div>

          {/* Table */}
          <div>
            <div className="grid grid-cols-[40px_1fr_100px_80px_60px] gap-2 px-4 py-2 text-[10px] font-semibold text-muted uppercase tracking-widest border-b border-border mb-1">
              <span>#</span>
              <span>Student</span>
              <span>XP</span>
              <span>Streak</span>
              <span>Courses</span>
            </div>
            {leaderboard.map((u, i) => (
              <div
                key={u.rank}
                className={`grid grid-cols-[40px_1fr_100px_80px_60px] gap-2 items-center px-4 py-3 rounded-xl mb-1 border transition-colors ${
                  u.isMe
                    ? "bg-brand/5 border-brand/20"
                    : "border-transparent hover:bg-surface2"
                }`}
              >
                <span
                  className={`font-display font-bold text-sm ${
                    i === 0
                      ? "text-amber2"
                      : i === 1
                        ? "text-gray-400"
                        : i === 2
                          ? "text-orange-500"
                          : "text-muted"
                  }`}
                >
                  {u.badge || `#${u.rank}`}
                </span>
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0 ${
                      u.isMe
                        ? "bg-gradient-to-br from-brand to-brand2 text-white"
                        : "bg-surface2 text-muted border border-border2"
                    }`}
                  >
                    {u.avatar}
                  </div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span
                      className={`text-[13px] ${u.isMe ? "font-semibold text-brand" : "text-textprimary"}`}
                    >
                      {u.name}
                    </span>
                    {u.isMe && (
                      <span className="text-[10px] bg-brand/15 text-brand px-1.5 py-0.5 rounded">
                        you
                      </span>
                    )}
                  </div>
                </div>
                <span className="font-display font-semibold text-sm text-textprimary">
                  {u.xp.toLocaleString()}
                </span>
                <span className="text-[12px] text-muted">🔥 {u.streak}d</span>
                <span className="text-[12px] text-muted">{u.courses}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
