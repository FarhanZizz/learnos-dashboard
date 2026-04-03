export const currentUser = {
  name: "Farhan Zizz",
  role: "Full Stack Developer",
  avatar: "FZ",
  xp: 4820,
  level: 12,
  streak: 14,
  rank: 3,
};

export const leaderboard = [
  { rank: 1, name: "Ayesha Rahman", avatar: "AR", xp: 7240, badge: "🏆", streak: 28, courses: 9 },
  { rank: 2, name: "Nabil Hossain", avatar: "NH", xp: 6110, badge: "🥈", streak: 21, courses: 8 },
  { rank: 3, name: "Farhan Zizz", avatar: "FZ", xp: 4820, badge: "🥉", streak: 14, courses: 6, isMe: true },
  { rank: 4, name: "Tahmid Islam", avatar: "TI", xp: 4210, badge: "", streak: 9, courses: 5 },
  { rank: 5, name: "Sadia Akter", avatar: "SA", xp: 3980, badge: "", streak: 7, courses: 5 },
  { rank: 6, name: "Rakib Hasan", avatar: "RH", xp: 3540, badge: "", streak: 5, courses: 4 },
  { rank: 7, name: "Mim Chowdhury", avatar: "MC", xp: 3020, badge: "", streak: 3, courses: 4 },
  { rank: 8, name: "Junaid Ahmed", avatar: "JA", xp: 2780, badge: "", streak: 2, courses: 3 },
];

export const enrolledCourses = [
  { id: "1", title: "Next.js 14 Mastery", instructor: "Sarah Chen", progress: 68, totalLessons: 42, completedLessons: 28, category: "Frontend", color: "#7c6af7", lastAccessed: "2h ago" },
  { id: "2", title: "TypeScript Deep Dive", instructor: "Alex Kumar", progress: 45, totalLessons: 36, completedLessons: 16, category: "Language", color: "#38bdf8", lastAccessed: "1d ago" },
  { id: "3", title: "PostgreSQL & Prisma", instructor: "Maria Santos", progress: 22, totalLessons: 30, completedLessons: 7, category: "Database", color: "#22d3a0", lastAccessed: "3d ago" },
];

export const stats = [
  { label: "Courses Enrolled", value: "6", delta: "+2 this month", up: true },
  { label: "Hours Learned", value: "84", delta: "+12 this week", up: true },
  { label: "Certificates", value: "3", delta: "1 pending", up: false },
  { label: "Current Streak", value: "14d", delta: "Personal best!", up: true },
];

export const recentActivity = [
  { type: "lesson", text: "Completed: App Router Deep Dive", course: "Next.js 14", time: "2h ago", icon: "✓" },
  { type: "quiz", text: "Scored 92% on TypeScript Generics Quiz", course: "TypeScript", time: "1d ago", icon: "★" },
  { type: "cert", text: "Earned: React Fundamentals Certificate", course: "React", time: "3d ago", icon: "🎓" },
  { type: "lesson", text: "Completed: Prisma Schema Design", course: "PostgreSQL", time: "3d ago", icon: "✓" },
];

export const allCourses = [
  {
    id: "1", title: "Next.js 14 Mastery", instructor: "Sarah Chen", instructorAvatar: "SC",
    rating: 4.9, students: 12400, duration: "28h", lessons: 42,
    price: 89, category: "Frontend", level: "Intermediate",
    color: "#7c6af7", enrolled: true, progress: 68,
    description: "Build production-grade apps with the latest Next.js App Router, Server Components, and more.",
    tags: ["React", "Next.js", "TypeScript"],
    pdf: "nextjs-curriculum.pdf"
  },
  {
    id: "2", title: "TypeScript Deep Dive", instructor: "Alex Kumar", instructorAvatar: "AK",
    rating: 4.8, students: 9800, duration: "22h", lessons: 36,
    price: 79, category: "Language", level: "Advanced",
    color: "#38bdf8", enrolled: true, progress: 45,
    description: "Master TypeScript from generics to advanced type manipulation and real-world patterns.",
    tags: ["TypeScript", "JavaScript", "OOP"],
    pdf: "typescript-curriculum.pdf"
  },
  {
    id: "3", title: "PostgreSQL & Prisma", instructor: "Maria Santos", instructorAvatar: "MS",
    rating: 4.7, students: 7200, duration: "18h", lessons: 30,
    price: 69, category: "Database", level: "Beginner",
    color: "#22d3a0", enrolled: true, progress: 22,
    description: "Learn relational databases with PostgreSQL and the modern Prisma ORM for Node.js.",
    tags: ["PostgreSQL", "Prisma", "SQL"],
    pdf: "prisma-curriculum.pdf"
  },
  {
    id: "4", title: "Node.js & Express API", instructor: "James Wright", instructorAvatar: "JW",
    rating: 4.6, students: 15300, duration: "24h", lessons: 38,
    price: 75, category: "Backend", level: "Intermediate",
    color: "#f59e0b", enrolled: false, progress: 0,
    description: "Build scalable REST APIs with Node.js, Express, JWT authentication, and more.",
    tags: ["Node.js", "Express", "REST API"],
    pdf: "nodejs-curriculum.pdf"
  },
  {
    id: "5", title: "React Native Essentials", instructor: "Priya Nair", instructorAvatar: "PN",
    rating: 4.5, students: 8600, duration: "20h", lessons: 32,
    price: 85, category: "Mobile", level: "Intermediate",
    color: "#f43f5e", enrolled: false, progress: 0,
    description: "Ship cross-platform mobile apps with React Native, Expo, and native device APIs.",
    tags: ["React Native", "Expo", "Mobile"],
    pdf: "reactnative-curriculum.pdf"
  },
  {
    id: "6", title: "Docker & DevOps", instructor: "Carlos Ruiz", instructorAvatar: "CR",
    rating: 4.8, students: 11000, duration: "26h", lessons: 40,
    price: 95, category: "DevOps", level: "Advanced",
    color: "#a855f7", enrolled: false, progress: 0,
    description: "Containerize, orchestrate, and deploy apps with Docker, Kubernetes, and CI/CD pipelines.",
    tags: ["Docker", "Kubernetes", "CI/CD"],
    pdf: "devops-curriculum.pdf"
  },
];
