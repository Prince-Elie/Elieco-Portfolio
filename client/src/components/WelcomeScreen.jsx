import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useTheme } from "next-themes";
import { StarBackground } from "./StarBackground";
import { SiReact, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiCplusplus, SiGit, SiLinux, SiVuedotjs, SiVercel, SiBootstrap } from "react-icons/si";
import { useLanguage } from "../context/LanguageContext";

const WindframeIcon = ({ size = 28 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M3 8c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8Z" stroke="#06B6D4" strokeWidth="1.5"/>
    <path d="M7 12h10M7 15h6" stroke="#06B6D4" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M7 9h4" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const SCATTERED_ICONS = [
  { id: "linux",     Icon: SiLinux,     color: "#FCC624", top: "12%",  left: "3%",   rotate: -12, duration: 6,   delay: 0   },
  { id: "vuejs",     Icon: SiVuedotjs,  color: "#4FC08D", top: "52%",  left: "5%",   rotate:  8,  duration: 7.5, delay: 1.2 },
  { id: "bootstrap", Icon: SiBootstrap, color: "#7952B3", top: "78%",  left: "2.5%", rotate: -6,  duration: 5.5, delay: 2.1 },
  { id: "vercel",    Icon: SiVercel,    color: null,      top: "20%",  right: "4%",  rotate:  10, duration: 8,   delay: 0.5 },
  { id: "windframe", render: (s) => <WindframeIcon size={s} />, top: "62%", right: "3.5%", rotate: -8, duration: 7, delay: 0.9 },
];

const GsapIcon = ({ size = 28 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#88CE02" viewBox="0 0 24 24">
    <path d="m7.83,11.76h0s-.26,1.15-.26,1.15c-.01.06-.08.11-.15.11h-.32s-.04.02-.05.04c-.29.99-.69,1.68-1.21,2.09-.45.35-1,.51-1.73.51-.66,0-1.1-.21-1.48-.63-.5-.55-.7-1.46-.58-2.55.22-2.05,1.29-4.12,3.34-4.12.62,0,1.11.19,1.45.57.36.41.54,1.02.54,1.82,0,.07-.06.13-.13.13h-1.5c-.05,0-.1-.05-.1-.1-.01-.55-.18-.82-.5-.82-.58,0-.91.78-1.09,1.21-.25.6-.38,1.26-.35,1.92.01.3.06.73.35.91.26.16.62.05.84-.12.22-.17.4-.48.47-.75.01-.04.01-.07,0-.08-.01-.01-.04-.02-.06-.02h-.39s-.08-.02-.11-.05c-.02-.02-.03-.06-.02-.09l.26-1.14c.01-.06.07-.1.13-.11h0s2.53,0,2.53,0c0,0,.01,0,.02,0,.07,0,.11.07.11.14h0Z"/><path d="m12.18,10.45c0,.07-.06.13-.13.13h-1.38c-.09,0-.17-.07-.17-.16,0-.4-.14-.6-.42-.6s-.47.18-.47.48c0,.34.19.65.74,1.18.72.68,1.01,1.28,1,2.08-.02,1.29-.9,2.12-2.23,2.12-.68,0-1.2-.18-1.54-.54-.35-.36-.51-.9-.48-1.59,0-.07.06-.13.13-.13h1.43s.08.02.1.05c.02.03.03.06.03.09-.02.25.03.43.13.54.06.07.15.1.26.1.26,0,.42-.19.42-.51,0-.28-.08-.53-.57-1.03-.63-.61-1.19-1.24-1.17-2.23.01-.58.24-1.1.64-1.48.43-.4,1.01-.61,1.69-.61.68,0,1.2.2,1.53.58.32.36.47.88.46,1.54h0Z"/><path d="m16.47,15.43v-6.84c.01-.07-.05-.13-.12-.13,0,0,0,0,0,0h-2.14c-.07,0-.1.06-.12.1l-3.1,6.82h0s0,0,0,0c-.03.08.03.17.12.17h1.5c.08,0,.13-.02.16-.08l.3-.71c.04-.09.04-.1.15-.1h1.43c.1,0,.1,0,.1.1l-.03.66c0,.07.06.13.13.13,0,0,0,0,0,0h1.51s.07-.02.1-.04c.02-.02.03-.06.03-.09Zm-2.65-2.28s-.02,0-.03,0c-.02,0-.03-.02-.03-.04,0,0,0,0,0,0,0-.01,0-.02.01-.04l1.07-2.65s.02-.05.03-.08c.02-.04.04-.04.05-.01,0,.02-.12,2.72-.12,2.72-.01.1-.01.11-.11.11h-.86s0-.01,0-.01h0s0,0,0,0Z"/><path d="m19.51,8.46h-1.14c-.06,0-.13.03-.14.1l-1.58,6.86s0,.06.02.09c.03.03.07.05.11.05h1.42c.08,0,.13-.04.14-.1,0,0,.17-.78.17-.78.01-.06,0-.11-.06-.14-.03-.01-.05-.03-.08-.04l-.25-.13-.24-.13-.09-.05s-.03-.02-.02-.04c0-.03.02-.05.05-.05h.78c.23,0,.47-.01.69-.05,1.61-.3,2.68-1.59,2.71-3.34.03-1.5-.81-2.26-2.48-2.26,0,0,0,0,0,0Zm-.39,4.08h-.03c-.07,0-.08,0-.08,0,0,0,.45-1.98.45-1.98.01-.06.01-.09-.02-.11-.05-.02-.7-.37-.7-.37-.02,0-.03-.02-.02-.04,0-.03.02-.05.05-.05h1.04c.32,0,.5.3.49.79-.01.85-.42,1.74-1.17,1.77h0Z"/>
  </svg>
);

const TECH_ICONS = [
  { Icon: SiReact,      name: "React",  color: "#61DAFB" },
  { Icon: SiJavascript, name: "JS",     color: "#F7DF1E" },
  { Icon: SiTypescript, name: "TS",     color: "#3178C6" },
  { Icon: SiHtml5,      name: "HTML",   color: "#E34F26" },
  { Icon: SiCss3,       name: "CSS",    color: "#1572B6" },
  { Icon: SiCplusplus,  name: "C++",    color: "#00599C" },
  { render: (size) => <GsapIcon size={size} />, name: "GSAP" },
  { Icon: SiGit,        name: "Git",    color: "#F05032" },
];

const LOGO_DELAY = 4200;

const WelcomeScreen = ({ onWelcomeComplete }) => {
  const { t } = useLanguage();
  const [phase, setPhase] = useState(0);
  const [exitAnimation, setExitAnimation] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [showText, setShowText] = useState(false);
  const [logoPhase, setLogoPhase] = useState("appearing");
  const { theme } = useTheme();

  const colors = {
    light: { primary: "hsl(222.2 47.4% 11.2%)", secondary: "hsl(262.1 83.3% 57.8%)", muted: "hsl(215.4 16.3% 46.9%)", link: "hsl(221.2 83.2% 53.3%)" },
    dark:  { primary: "hsl(210 40% 98%)",        secondary: "hsl(263.4 70% 50.4%)",   muted: "hsl(215 20.2% 65.1%)",   link: "hsl(217.2 91.2% 59.8%)" },
  };
  const currentColors = colors[theme] || colors.dark;
  const portfolioUrl = "https://github.com/Prince-Elie";

  const welcomeMessages = [
    t.welcome.badge1,
    t.welcome.badge2,
    t.welcome.badge3,
  ];

  useEffect(() => {
    const t1 = setTimeout(() => setLogoPhase("rotating"), 1200);
    const t2 = setTimeout(() => setLogoPhase("exiting"),  3400);
    const t3 = setTimeout(() => setShowText(true),        LOGO_DELAY);
    const p1 = setTimeout(() => setPhase(1), LOGO_DELAY + 800);
    const p2 = setTimeout(() => setPhase(2), LOGO_DELAY + 1600);
    const p3 = setTimeout(() => setPhase(3), LOGO_DELAY + 2400);
    const done = setTimeout(() => { setExitAnimation(true); setTimeout(onWelcomeComplete, 1000); }, LOGO_DELAY + 5000);
    return () => { [t1,t2,t3,p1,p2,p3,done].forEach(clearTimeout); };
  }, [onWelcomeComplete]);

  useEffect(() => {
    if (phase >= 2) {
      let i = 0;
      const interval = setInterval(() => {
        if (i <= portfolioUrl.length) { setTypedText(portfolioUrl.substring(0, i)); i++; }
        else { clearInterval(interval); }
      }, 40);
      return () => clearInterval(interval);
    }
  }, [phase]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
    exit: { y: "-100vh", opacity: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
  };
  const cursorVariants = { blinking: { opacity: [0, 0, 1, 1], transition: { duration: 1, repeat: Infinity, repeatDelay: 0 } } };

  const RADIUS = 115;
  const iconPositions = TECH_ICONS.map((icon, i) => {
    const angle = (i * 2 * Math.PI) / TECH_ICONS.length - Math.PI / 2;
    return { ...icon, x: RADIUS * Math.cos(angle), y: RADIUS * Math.sin(angle) };
  });

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <StarBackground />
      <motion.div className="h-full w-full flex items-center justify-center p-4 bg-background"
        variants={containerVariants} initial="hidden" animate={exitAnimation ? "exit" : "visible"}>
        <motion.div className="absolute inset-0 -z-10 overflow-hidden opacity-20">
          <motion.div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 rounded-full blur-[50px] md:blur-[100px]"
            style={{ background: `linear-gradient(to right, ${currentColors.primary}, ${currentColors.secondary})` }}
            animate={{ x: [0, 20, 0], y: [0, -30, 0] }} transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }} />
          <motion.div className="absolute top-1/3 right-1/4 w-36 h-36 md:w-72 md:h-72 rounded-full blur-[60px] md:blur-[120px]"
            style={{ background: `linear-gradient(to right, ${currentColors.secondary}, #ec4899)` }}
            animate={{ x: [0, -30, 0], y: [0, 40, 0] }} transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }} />
        </motion.div>

        {/* Scattered side icons */}
        {SCATTERED_ICONS.map((item) => (
          <motion.div key={item.id}
            className="absolute hidden sm:flex items-center justify-center opacity-50 hover:opacity-80 transition-opacity"
            style={{ top: item.top, left: item.left, right: item.right, rotate: `${item.rotate}deg` }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: item.duration, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: item.delay }}>
            <div style={{ filter: "drop-shadow(0 0 6px currentColor)" }}>
              {item.render
                ? item.render(34)
                : <item.Icon style={{ width: 34, height: 34, color: item.color || (theme === "dark" ? "#fff" : "#000") }} />}
            </div>
          </motion.div>
        ))}

        <div className="w-full max-w-2xl mx-auto text-center px-4">
          <AnimatePresence>
            {!showText && (
              <motion.div key="logo-wheel" className="flex items-center justify-center" style={{ height: "300px" }}
                exit={{ opacity: 0, scale: 0.7, transition: { duration: 0.4, ease: "easeIn" } }}>
                <motion.div style={{ position: "relative", width: "260px", height: "260px" }}
                  animate={logoPhase === "rotating" ? { rotate: 360 } : { rotate: 0 }}
                  transition={logoPhase === "rotating" ? { duration: 2.4, ease: [0.4, 0, 0.2, 1] } : {}}>
                  {iconPositions.map((icon, i) => (
                    <motion.div key={icon.name}
                      style={{ position: "absolute", left: "50%", top: "50%", marginLeft: "-28px", marginTop: "-28px" }}
                      initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                      animate={logoPhase === "exiting" ? { x: icon.x, y: icon.y, scale: 0, opacity: 0 } : { x: icon.x, y: icon.y, scale: 1, opacity: 1 }}
                      transition={logoPhase === "exiting" ? { duration: 0.5, delay: i * 0.06, ease: "easeIn" } : { delay: i * 0.13, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
                      <div style={{ width: "58px", height: "58px", clipPath: "polygon(50% 0%, 79% 10%, 98% 35%, 98% 65%, 79% 90%, 50% 100%, 21% 90%, 2% 65%, 2% 35%, 21% 10%)", background: theme === "dark" ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.75)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {icon.render ? icon.render(28) : <icon.Icon style={{ width: "28px", height: "28px", color: icon.color }} />}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showText && (
              <motion.div key="text-content" className="space-y-4 md:space-y-8"
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
                <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="text-sm md:text-lg lg:text-xl font-mono mb-2 md:mb-4 inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-2 rounded-full border"
                  style={{ color: currentColors.primary, backgroundColor: theme === "dark" ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)", borderColor: theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)" }}>
                  <Sparkles className="h-3 w-3 md:h-4 md:w-4" />
                  <AnimatePresence mode="wait">
                    <motion.span key={phase} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35 }}>
                      {welcomeMessages[phase % welcomeMessages.length]}
                    </motion.span>
                  </AnimatePresence>
                </motion.div>

                {phase >= 1 && (
                  <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-tight"
                    style={{ color: currentColors.primary }} initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
                    <span className="inline-block">{t.welcome.hello}</span>
                    <motion.span className="inline-block ml-2 sm:ml-3 relative" style={{ color: currentColors.secondary }}
                      initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>
                      {t.welcome.there}
                      <motion.span className="absolute -bottom-1 sm:-bottom-2 left-0 h-0.5 sm:h-1 w-full" style={{ backgroundColor: currentColors.secondary }}
                        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] }} />
                    </motion.span>
                  </motion.h1>
                )}

                {phase >= 2 && (
                  <motion.div className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed font-light" style={{ color: currentColors.muted }}
                    initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
                    <motion.div className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg font-mono flex justify-center items-center" style={{ color: currentColors.link }}>
                      {typedText}
                      <motion.span className="ml-0.5 h-4 sm:h-5 md:h-6 w-0.5 sm:w-1 inline-block" style={{ backgroundColor: currentColors.link }} variants={cursorVariants} animate="blinking" />
                    </motion.div>
                    <motion.p className="mt-2 sm:mt-4 text-xs sm:text-sm md:text-base" style={{ color: currentColors.muted }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
                      {t.welcome.subtitle}
                    </motion.p>
                  </motion.div>
                )}

                {phase >= 3 && (
                  <motion.div className="pt-4 sm:pt-6 md:pt-8" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
                    <motion.div className="h-1 sm:h-2 w-16 sm:w-20 rounded-full mx-auto" style={{ backgroundColor: currentColors.secondary + "80" }}
                      animate={{ scaleX: [1, 1.5, 1], opacity: [1, 0.7, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
                    <motion.p className="mt-2 sm:mt-4 text-xs sm:text-sm opacity-70" style={{ color: currentColors.muted }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                      {t.welcome.loading}
                    </motion.p>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default WelcomeScreen;
