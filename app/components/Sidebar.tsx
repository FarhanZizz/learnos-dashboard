"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, BookOpen, Trophy, Zap, LogOut } from "lucide-react";
import { currentUser } from "../lib/data";

const nav = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/courses", label: "Courses", icon: BookOpen },
  { href: "/dashboard#leaderboard", label: "Leaderboard", icon: Trophy },
];

export default function Sidebar() {
  const path = usePathname();

  return (
    <aside className="fixed top-0 left-0 z-50 flex flex-col w-60 min-h-screen bg-surface border-r border-border">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-5 py-6 border-b border-border">
        <div className="w-8 h-8 rounded-lg bg-linear-to-br from-brand to-brand2 flex items-center justify-center shrink-0">
          <Zap size={16} color="white" fill="white" />
        </div>
        <span className="font-display font-bold text-lg tracking-tight text-textprimary">
          LearnOS
        </span>
      </div>

      {/* User card */}
      <div className="px-5 py-4 border-b border-border">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-full bg-linear-to-br from-brand to-brand2 flex items-center justify-center text-xs font-bold text-white shrink-0">
            {currentUser.avatar}
          </div>
          <div className="min-w-0">
            <p className="text-[13px] font-semibold text-textprimary truncate">
              {currentUser.name}
            </p>
            <p className="text-[11px] text-muted">
              Level {currentUser.level} · {currentUser.xp.toLocaleString()} XP
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-3">
        <p className="text-[10px] font-semibold text-muted tracking-widest uppercase px-2 mb-1.5">
          Menu
        </p>
        {nav.map(({ href, label, icon: Icon }) => {
          const active =
            path === href ||
            (path.startsWith(href) && !href.includes("#") && href !== "/");
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-2.5 px-2.5 py-2 rounded-lg mb-0.5 text-[13px] transition-all duration-150 no-underline ${
                active
                  ? "bg-brand/10 text-brand font-semibold"
                  : "text-muted hover:text-textprimary hover:bg-surface2"
              }`}
            >
              <Icon size={16} />
              {label}
              {active && (
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-brand" />
              )}
            </Link>
          );
        })}
      </nav>

      <div className="px-5 py-4 border-t border-border">
        <button className="flex items-center gap-2 mt-2.5 px-2.5 py-2 rounded-lg text-muted text-xs bg-transparent border-0 cursor-pointer hover:text-textprimary transition-colors">
          <LogOut size={13} /> Sign out
        </button>
      </div>
    </aside>
  );
}
