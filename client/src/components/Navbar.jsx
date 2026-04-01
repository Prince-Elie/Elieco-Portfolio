import { useEffect, useState, useRef } from "react";
import { Home, User, Code, Briefcase, Mail, Sun, Moon, Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useLanguage } from "../context/LanguageContext";

const NAV_HREFS = [
  { key: "home",     href: "#hero",     icon: Home },
  { key: "about",    href: "#about",    icon: User },
  { key: "skills",   href: "#skills",   icon: Code },
  { key: "projects", href: "#projects", icon: Briefcase },
  { key: "contact",  href: "#contact",  icon: Mail },
];

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") { document.documentElement.classList.add("dark"); setTheme("dark"); }
  }, []);
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };
  return (
    <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800" title="Toggle theme" aria-label="Toggle theme">
      {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
};

export const Navbar = () => {
  const { t, lang, toggleLang } = useLanguage();
  const [activeSection, setActiveSection] = useState("#hero");
  const [showNavbar, setShowNavbar] = useState(true);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isAudioReady, setIsAudioReady] = useState(false);
  const lastScrollYRef = useRef(0);
  const audioRef = useRef(null);
  const hasStartedRef = useRef(false);

  const navItems = NAV_HREFS.map(item => ({ ...item, name: t.nav[item.key] }));

  useEffect(() => {
    audioRef.current = new Audio("/music.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;
    audioRef.current.preload = "auto";

    const handleCanPlay = () => setIsAudioReady(true);
    audioRef.current.addEventListener("canplaythrough", handleCanPlay);

    const tryPlay = () => {
      if (hasStartedRef.current) return;
      hasStartedRef.current = true;
      audioRef.current.play().then(() => setIsMusicPlaying(true)).catch(() => { hasStartedRef.current = false; });
    };
    audioRef.current.addEventListener("canplaythrough", tryPlay);

    const startOnInteraction = () => {
      tryPlay();
      window.removeEventListener("scroll", startOnInteraction);
      window.removeEventListener("keydown", startOnInteraction);
    };
    window.addEventListener("scroll", startOnInteraction);
    window.addEventListener("keydown", startOnInteraction);

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeEventListener("canplaythrough", handleCanPlay);
        audioRef.current.removeEventListener("canplaythrough", tryPlay);
        audioRef.current = null;
      }
      window.removeEventListener("scroll", startOnInteraction);
      window.removeEventListener("keydown", startOnInteraction);
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current || !isAudioReady) return;
    if (isMusicPlaying) { audioRef.current.pause(); } else { audioRef.current.play().catch(console.error); }
    setIsMusicPlaying(!isMusicPlaying);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(!(currentScrollY > lastScrollYRef.current && currentScrollY > 100));
      lastScrollYRef.current = currentScrollY;
      const scrollPosition = currentScrollY + 100;
      for (const item of navItems) {
        const element = document.querySelector(item.href);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) { setActiveSection(item.href); break; }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  return (
    <>
      {/* Top Right — Music + Lang */}
      <motion.div className="fixed top-4 right-4 z-50 flex gap-2" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
        {/* Language toggle */}
        <motion.button
          onClick={toggleLang}
          className={cn("px-3 py-2 rounded-full bg-white/80 dark:bg-black/80 backdrop-blur-md", "text-primary hover:bg-primary/10 dark:hover:bg-primary/20", "border border-gray-200 dark:border-gray-700 shadow-sm", "flex items-center justify-center text-xs font-bold tracking-wide")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title={lang === "en" ? "Passer en français" : "Switch to English"}
          aria-label="Toggle language"
        >
          {lang === "en" ? "FR" : "EN"}
        </motion.button>

        {/* Music toggle */}
        <motion.button
          onClick={toggleMusic}
          disabled={!isAudioReady}
          className={cn("p-2 rounded-full bg-white/80 dark:bg-black/80 backdrop-blur-md", "text-primary hover:bg-primary/10 dark:hover:bg-primary/20", "border border-gray-200 dark:border-gray-700 shadow-sm", "flex items-center justify-center", !isAudioReady && "opacity-50 cursor-not-allowed")}
          whileHover={{ scale: isAudioReady ? 1.05 : 1 }}
          whileTap={{ scale: isAudioReady ? 0.95 : 1 }}
          title={isAudioReady ? (isMusicPlaying ? t.nav.pauseMusic : t.nav.playMusic) : t.nav.loadingMusic}
          aria-label={isAudioReady ? (isMusicPlaying ? t.nav.pauseMusic : t.nav.playMusic) : t.nav.loadingMusic}
        >
          {isMusicPlaying ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
        </motion.button>
      </motion.div>

      {/* Bottom Navbar */}
      <motion.div
        className={cn("fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50", "transition-transform duration-300 ease-in-out", showNavbar ? "translate-y-0" : "translate-y-full")}
        style={{ willChange: "transform" }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-center bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-full shadow-lg p-2 border border-gray-200 dark:border-gray-700">
          <div className="flex space-x-1 items-center">
            {navItems.map((item) => (
              <a key={item.key} href={item.href}
                className={cn("p-2 rounded-full transition-colors flex flex-col items-center", activeSection === item.href ? "bg-primary text-white" : "text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary")}
                aria-label={item.name}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-xs mt-1 hidden md:block">{item.name}</span>
              </a>
            ))}
            <div className="flex items-center px-2"><ThemeToggle /></div>
          </div>
        </div>
      </motion.div>
    </>
  );
};
