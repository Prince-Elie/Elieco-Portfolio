import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript,
  SiReact, SiVuedotjs, SiTailwindcss, SiBootstrap,
  SiGit, SiGithub, SiVscodium, SiFigma, SiVercel, SiNotion, SiClaude,
} from "react-icons/si";
import { useLanguage } from "../context/LanguageContext";

const GsapIcon = ({ size = 28 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#88CE02" viewBox="0 0 24 24">
    <path d="m7.83,11.76h0s-.26,1.15-.26,1.15c-.01.06-.08.11-.15.11h-.32s-.04.02-.05.04c-.29.99-.69,1.68-1.21,2.09-.45.35-1,.51-1.73.51-.66,0-1.1-.21-1.48-.63-.5-.55-.7-1.46-.58-2.55.22-2.05,1.29-4.12,3.34-4.12.62,0,1.11.19,1.45.57.36.41.54,1.02.54,1.82,0,.07-.06.13-.13.13h-1.5c-.05,0-.1-.05-.1-.1-.01-.55-.18-.82-.5-.82-.58,0-.91.78-1.09,1.21-.25.6-.38,1.26-.35,1.92.01.3.06.73.35.91.26.16.62.05.84-.12.22-.17.4-.48.47-.75.01-.04.01-.07,0-.08-.01-.01-.04-.02-.06-.02h-.39s-.08-.02-.11-.05c-.02-.02-.03-.06-.02-.09l.26-1.14c.01-.06.07-.1.13-.11h0s2.53,0,2.53,0c0,0,.01,0,.02,0,.07,0,.11.07.11.14h0Z"/><path d="m12.18,10.45c0,.07-.06.13-.13.13h-1.38c-.09,0-.17-.07-.17-.16,0-.4-.14-.6-.42-.6s-.47.18-.47.48c0,.34.19.65.74,1.18.72.68,1.01,1.28,1,2.08-.02,1.29-.9,2.12-2.23,2.12-.68,0-1.2-.18-1.54-.54-.35-.36-.51-.9-.48-1.59,0-.07.06-.13.13-.13h1.43s.08.02.1.05c.02.03.03.06.03.09-.02.25.03.43.13.54.06.07.15.1.26.1.26,0,.42-.19.42-.51,0-.28-.08-.53-.57-1.03-.63-.61-1.19-1.24-1.17-2.23.01-.58.24-1.1.64-1.48.43-.4,1.01-.61,1.69-.61.68,0,1.2.2,1.53.58.32.36.47.88.46,1.54h0Z"/><path d="m16.47,15.43v-6.84c.01-.07-.05-.13-.12-.13,0,0,0,0,0,0h-2.14c-.07,0-.1.06-.12.1l-3.1,6.82h0s0,0,0,0c-.03.08.03.17.12.17h1.5c.08,0,.13-.02.16-.08l.3-.71c.04-.09.04-.1.15-.1h1.43c.1,0,.1,0,.1.1l-.03.66c0,.07.06.13.13.13,0,0,0,0,0,0h1.51s.07-.02.1-.04c.02-.02.03-.06.03-.09Zm-2.65-2.28s-.02,0-.03,0c-.02,0-.03-.02-.03-.04,0,0,0,0,0,0,0-.01,0-.02.01-.04l1.07-2.65s.02-.05.03-.08c.02-.04.04-.04.05-.01,0,.02-.12,2.72-.12,2.72-.01.1-.01.11-.11.11h-.86s0-.01,0-.01h0s0,0,0,0Z"/><path d="m19.51,8.46h-1.14c-.06,0-.13.03-.14.1l-1.58,6.86s0,.06.02.09c.03.03.07.05.11.05h1.42c.08,0,.13-.04.14-.1,0,0,.17-.78.17-.78.01-.06,0-.11-.06-.14-.03-.01-.05-.03-.08-.04l-.25-.13-.24-.13-.09-.05s-.03-.02-.02-.04c0-.03.02-.05.05-.05h.78c.23,0,.47-.01.69-.05,1.61-.3,2.68-1.59,2.71-3.34.03-1.5-.81-2.26-2.48-2.26,0,0,0,0,0,0Zm-.39,4.08h-.03c-.07,0-.08,0-.08,0,0,0,.45-1.98.45-1.98.01-.06.01-.09-.02-.11-.05-.02-.7-.37-.7-.37-.02,0-.03-.02-.02-.04,0-.03.02-.05.05-.05h1.04c.32,0,.5.3.49.79-.01.85-.42,1.74-1.17,1.77h0Z"/>
  </svg>
);

const DECAGON = "polygon(50% 0%, 79% 10%, 98% 35%, 98% 65%, 79% 90%, 50% 100%, 21% 90%, 2% 65%, 2% 35%, 21% 10%)";

const ICONS = {
  html:      { Icon: SiHtml5,       color: "#E34F26" },
  css:       { Icon: SiCss3,        color: "#1572B6" },
  js:        { Icon: SiJavascript,  color: "#F7DF1E" },
  ts:        { Icon: SiTypescript,  color: "#3178C6" },
  react:     { Icon: SiReact,       color: "#61DAFB" },
  vuejs:     { Icon: SiVuedotjs,    color: "#42B883" },
  tailwind:  { Icon: SiTailwindcss, color: "#06B6D4" },
  bootstrap: { Icon: SiBootstrap,   color: "#7952B3" },
  gsap:      { Icon: null, custom: (size) => <GsapIcon size={size} /> },
  git:       { Icon: SiGit,         color: "#F05032" },
  github:    { Icon: SiGithub,      color: null },
  vscode:    { Icon: SiVscodium,    color: "#007ACC" },
  figma:     { Icon: SiFigma,       color: "#F24E1E" },
  vercel:    { Icon: SiVercel,      color: null },
  notion:    { Icon: SiNotion,      color: null },
  claude:    { Icon: SiClaude,      color: "#D97757" },
};

const skills = [
  { name: "HTML5",      level: 95, category: "frontend", icon: "html" },
  { name: "CSS3",       level: 90, category: "frontend", icon: "css" },
  { name: "JavaScript", level: 90, category: "frontend", icon: "js" },
  { name: "TypeScript", level: 75, category: "frontend", icon: "ts" },
  { name: "React",      level: 90, category: "frontend", icon: "react" },
  { name: "Vue.js",     level: 70, category: "frontend", icon: "vuejs" },
  { name: "Tailwind",   level: 90, category: "frontend", icon: "tailwind" },
  { name: "Bootstrap",  level: 80, category: "frontend", icon: "bootstrap" },
  { name: "GSAP",       level: 70, category: "frontend", icon: "gsap" },
  { name: "Git",        level: 90, category: "tools",    icon: "git" },
  { name: "GitHub",     level: 90, category: "tools",    icon: "github" },
  { name: "VS Code",    level: 95, category: "tools",    icon: "vscode" },
  { name: "Figma",      level: 80, category: "tools",    icon: "figma" },
  { name: "Vercel",     level: 85, category: "tools",    icon: "vercel" },
  { name: "Notion",     level: 85, category: "tools",    icon: "notion" },
  { name: "Claude",     level: 90, category: "tools",    icon: "claude" },
];

const SkillIcon = ({ iconKey, size = 28 }) => {
  const entry = ICONS[iconKey];
  if (!entry) return null;
  if (entry.custom) return entry.custom(size);
  const { Icon, color } = entry;
  if (color) return <Icon style={{ width: size, height: size, color, flexShrink: 0 }} />;
  return <Icon className="text-foreground" style={{ width: size, height: size, flexShrink: 0 }} />;
};

const DecaShape = ({ size = 64, children }) => (
  <div className="relative hover:scale-110 transition-transform" style={{ width: size, height: size, clipPath: DECAGON }}>
    <div className="absolute inset-0 bg-primary/40" />
    <div className="absolute flex items-center justify-center bg-card" style={{ inset: "2px", clipPath: DECAGON }}>
      {children}
    </div>
  </div>
);

const SkillBar = ({ level }) => (
  <div className="w-full h-3 bg-secondary/20 rounded-full overflow-hidden">
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: `${level}%` }}
      transition={{ duration: 1.5, delay: 0.2 }}
      className={`h-full rounded-full ${level > 75 ? "bg-gradient-to-r from-green-400 to-emerald-500" : level > 50 ? "bg-gradient-to-r from-yellow-400 to-amber-500" : "bg-gradient-to-r from-red-400 to-pink-500"}`}
    />
  </div>
);

const InfiniteScrollSkills = ({ skills }) => {
  const duplicated = [...skills, ...skills, ...skills];
  return (
    <div className="overflow-hidden py-8">
      <motion.div className="flex gap-8 mb-8" animate={{ x: ["0%", "-100%"] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}>
        {duplicated.map((skill, i) => (
          <div key={`${skill.name}-${i}`} className="flex-shrink-0 flex flex-col items-center gap-2">
            <DecaShape size={64}><SkillIcon iconKey={skill.icon} size={28} /></DecaShape>
            <span className="text-sm font-medium text-center">{skill.name}</span>
          </div>
        ))}
      </motion.div>
      <motion.div className="flex gap-8" animate={{ x: ["-100%", "0%"] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}>
        {[...duplicated].reverse().map((skill, i) => (
          <div key={`${skill.name}-rev-${i}`} className="flex-shrink-0 flex flex-col items-center gap-2">
            <DecaShape size={64}><SkillIcon iconKey={skill.icon} size={28} /></DecaShape>
            <span className="text-sm font-medium text-center">{skill.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const SkillsSection = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all",      label: t.skills.all,      color: "bg-gradient-to-r from-purple-500 to-pink-500" },
    { id: "frontend", label: t.skills.frontend,  color: "bg-gradient-to-r from-blue-500 to-cyan-500" },
    { id: "tools",    label: t.skills.tools,     color: "bg-gradient-to-r from-orange-500 to-yellow-500" },
  ];

  const filteredSkills = skills.filter(s => activeCategory === "all" || s.category === activeCategory);

  return (
    <section id="skills" className="py-28 px-4 bg-gradient-to-br from-background via-secondary/5 to-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            {t.skills.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{t.skills.subtitle}</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <motion.button key={cat.id} onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2.5 rounded-full font-medium border border-transparent hover:shadow-lg ${activeCategory === cat.id ? `${cat.color} text-white shadow-md` : "bg-secondary/50 text-foreground hover:bg-secondary/70"}`}
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              {cat.label}
            </motion.button>
          ))}
        </div>

        {activeCategory === "all" ? (
          <InfiniteScrollSkills skills={skills} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill) => (
                <motion.div key={skill.name} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-card p-6 rounded-2xl border border-border/30 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg group">
                  <div className="flex items-start gap-4 mb-5">
                    <DecaShape size={48}><SkillIcon iconKey={skill.icon} size={22} /></DecaShape>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{skill.name}</h3>
                        <span className={`text-sm font-medium px-2 py-1 rounded-full ${skill.level > 75 ? "bg-emerald-500/10 text-emerald-500" : skill.level > 50 ? "bg-amber-500/10 text-amber-500" : "bg-pink-500/10 text-pink-500"}`}>
                          {skill.level}%
                        </span>
                      </div>
                      <SkillBar level={skill.level} />
                      <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                        <span>{t.skills.basic}</span>
                        <span>{t.skills.advanced}</span>
                        <span>{t.skills.expert}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
};
