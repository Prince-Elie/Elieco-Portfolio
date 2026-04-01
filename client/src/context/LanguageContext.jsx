import { createContext, useContext, useState } from "react";

const translations = {
  en: {
    // WelcomeScreen
    welcome: {
      badge1: "Crafting digital experiences",
      badge2: "Frontend Developer",
      badge3: "React & Vue.js Specialist",
      hello: "Hello",
      there: "There !",
      subtitle: "(This is my portfolio website)",
      loading: "Loading my best work for you...",
    },
    // Navbar
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      toggleTheme: "Toggle theme",
      playMusic: "Play music",
      pauseMusic: "Pause music",
      loadingMusic: "Loading music...",
    },
    // HeroSection
    hero: {
      openToWork: "Open to Work",
      greeting: "I am Elie",
      title: "Frontend Developer",
      description: "I build <b>beautiful, high-performance interfaces</b> that deliver great user experiences. Specializing in React, Vue.js, and modern frontend technologies.",
      stats: {
        level: "Master Student",
        curiosity: "Curiosity",
        projects: "Projects Built",
        graduating: "Graduating",
      },
      linkedin: "LinkedIn",
      github: "GitHub",
      email: "Email",
      resume: "Resume",
      available: "Available Immediately for Frontend roles",
      explore: "Explore Technical Portfolio",
      builtWith: "Built with",
      solutions: "Solutions",
    },
    // AboutSection
    about: {
      badge: "ABOUT ME",
      title1: "Transforming",
      title2: "Ideas Into Reality",
      subtitle: "Building digital experiences that combine <b>innovation</b>, <b>performance</b>, and <b>elegance</b>",
      stats: {
        level: "Master Student",
        projects: "Projects Built",
        curiosity: "Curiosity",
        tech: "Tech Explored",
      },
      tabs: {
        personal: "Personal",
        professional: "Professional",
        approach: "Approach",
      },
      tabContent: {
        personal: "Passionate about creating digital solutions that make a difference. When I'm not coding, I'm exploring new technologies, contributing to open-source, and mentoring aspiring developers.",
        professional: "Currently pursuing a Master 1 in Computer Science, I've built 7+ projects using modern frontend technologies. I specialize in beautiful interfaces, performance, and continuously expanding my skill set.",
        approach: "I believe in clean code, thorough testing, and user-centered design. My process emphasizes collaboration, agile methodologies, and continuous improvement.",
      },
      techStack: "Tech Stack Overview",
      stackCategories: {
        frontend: "Frontend",
        others: "Others",
        tools: "Tools",
      },
      workTogether: "Let's Work Together",
      startProject: "Start a Project",
      downloadResume: "Download Resume",
      quickConnect: "Quick Connect",
      whyChooseMe: "Why Choose Me",
      features: [
        "Frontend expertise",
        "Clean, maintainable code",
        "Performance optimization",
        "Agile methodology",
        "Fast learner & always improving",
        "Timely delivery",
      ],
      available: "Available",
      forNewProjects: "For new projects",
      responseTime: "⚡ Response time: Under 24 hours",
    },
    // SkillsSection
    skills: {
      title: "My Skills",
      subtitle: "Technologies I've mastered and my proficiency levels",
      all: "All Skills",
      frontend: "Frontend",
      tools: "Tools",
      basic: "Basic",
      advanced: "Advanced",
      expert: "Expert",
    },
    // ProjectsSection
    projects: {
      title: "My Projects",
      subtitle: "A collection of projects I've built to showcase my skills in modern web technologies.",
      featured: "Featured",
      development: "Development",
      live: "Live Demo",
      comingSoon: "Coming Soon",
      code: "Code",
      viewMore: "View More Projects",
      showLess: "Show Less",
      getInTouch: "Get In Touch",
      likeWhatYouSee: "Like what you see?",
      alwaysOpen: "I'm always open to discussing new opportunities and interesting projects.",
      contactMe: "Contact Me",
      viewGithub: "View GitHub",
    },
    // ContactSection
    contact: {
      badge: "Let's Connect",
      title: "Get In Touch",
      subtitle: "Have a project in mind or just want to say hi? My inbox is always open.",
      details: "Contact Details",
      email: "Email",
      location: "Location",
      findMeOn: "Find me on",
      sendMessage: "Send Me a Message",
      yourName: "Your Name",
      namePlaceholder: "John Doe",
      yourEmail: "Your Email",
      emailPlaceholder: "john@example.com",
      yourMessage: "Your Message",
      messagePlaceholder: "Hey, I'd love to collaborate on...",
      send: "Send Message",
      sending: "Sending...",
      errors: {
        nameRequired: "Name is required",
        emailRequired: "Email is required",
        invalidEmail: "Invalid email format",
        messageTooShort: "Message must be at least 10 characters",
      },
      success: "Message sent! 🎉",
      successDesc: "I'll get back to you within 24 hours.",
      errorTitle: "Oops! Something went wrong",
      errorDesc: "Please try again or email me directly at obalayeprinceelie.adetona@ynov.com",
    },
    // Footer
    footer: {
      tagline: "Frontend developer crafting beautiful digital experiences.",
      navigation: "Navigation",
      home: "Home",
      about: "About",
      work: "Work",
      contact: "Contact",
      contactTitle: "Contact",
      privacy: "Privacy",
      terms: "Terms",
      cookies: "Cookies",
      rights: "All rights reserved.",
    },
  },

  fr: {
    // WelcomeScreen
    welcome: {
      badge1: "Créateur d'expériences digitales",
      badge2: "Développeur Frontend",
      badge3: "Spécialiste React & Vue.js",
      hello: "Bonjour",
      there: "à tous !",
      subtitle: "(Bienvenue sur mon portfolio)",
      loading: "Chargement de mes meilleurs projets...",
    },
    // Navbar
    nav: {
      home: "Accueil",
      about: "À propos",
      skills: "Compétences",
      projects: "Projets",
      contact: "Contact",
      toggleTheme: "Changer le thème",
      playMusic: "Lancer la musique",
      pauseMusic: "Mettre en pause",
      loadingMusic: "Chargement...",
    },
    // HeroSection
    hero: {
      openToWork: "Disponible",
      greeting: "Je suis Elie",
      title: "Développeur Frontend",
      description: "Je construis des <b>interfaces belles et performantes</b> qui offrent une expérience utilisateur exceptionnelle. Spécialisé en React, Vue.js et les technologies frontend modernes.",
      stats: {
        level: "Étudiant M1",
        curiosity: "Curiosité",
        projects: "Projets réalisés",
        graduating: "Diplôme prévu",
      },
      linkedin: "LinkedIn",
      github: "GitHub",
      email: "E-mail",
      resume: "CV",
      available: "Disponible immédiatement pour des postes Frontend",
      explore: "Explorer le portfolio",
      builtWith: "Développé avec",
      solutions: "Solutions",
    },
    // AboutSection
    about: {
      badge: "À PROPOS",
      title1: "Transformer",
      title2: "les idées en réalité",
      subtitle: "Créer des expériences digitales qui allient <b>innovation</b>, <b>performance</b> et <b>élégance</b>",
      stats: {
        level: "Étudiant M1",
        projects: "Projets réalisés",
        curiosity: "Curiosité",
        tech: "Techs explorées",
      },
      tabs: {
        personal: "Personnel",
        professional: "Professionnel",
        approach: "Approche",
      },
      tabContent: {
        personal: "Passionné par la création de solutions digitales qui font la différence. Quand je ne code pas, j'explore de nouvelles technologies, je contribue à l'open-source et j'accompagne des développeurs débutants.",
        professional: "Actuellement en Master 1 Informatique, j'ai réalisé 7+ projets avec des technologies frontend modernes. Je me spécialise dans les interfaces élégantes, la performance et l'amélioration continue de mes compétences.",
        approach: "Je crois au code propre, aux tests rigoureux et à la conception centrée sur l'utilisateur. Mon processus met l'accent sur la collaboration, les méthodes agiles et l'amélioration continue.",
      },
      techStack: "Aperçu de la stack technique",
      stackCategories: {
        frontend: "Frontend",
        others: "Autres",
        tools: "Outils",
      },
      workTogether: "Travaillons ensemble",
      startProject: "Démarrer un projet",
      downloadResume: "Télécharger le CV",
      quickConnect: "Me contacter",
      whyChooseMe: "Pourquoi moi ?",
      features: [
        "Expertise Frontend",
        "Code propre et maintenable",
        "Optimisation des performances",
        "Méthodologie agile",
        "Apprentissage rapide & en constante évolution",
        "Livraison dans les délais",
      ],
      available: "Disponible",
      forNewProjects: "Pour de nouveaux projets",
      responseTime: "⚡ Temps de réponse : moins de 24h",
    },
    // SkillsSection
    skills: {
      title: "Mes Compétences",
      subtitle: "Technologies maîtrisées et niveaux de compétence",
      all: "Toutes",
      frontend: "Frontend",
      tools: "Outils",
      basic: "Débutant",
      advanced: "Avancé",
      expert: "Expert",
    },
    // ProjectsSection
    projects: {
      title: "Mes Projets",
      subtitle: "Une sélection de projets réalisés pour illustrer mes compétences en développement web moderne.",
      featured: "En vedette",
      development: "En développement",
      live: "Démo en direct",
      comingSoon: "Bientôt disponible",
      code: "Code",
      viewMore: "Voir plus de projets",
      showLess: "Voir moins",
      getInTouch: "Me contacter",
      likeWhatYouSee: "Ça vous plaît ?",
      alwaysOpen: "Je suis toujours ouvert à de nouvelles opportunités et à des projets intéressants.",
      contactMe: "Me contacter",
      viewGithub: "Voir GitHub",
    },
    // ContactSection
    contact: {
      badge: "Restons en contact",
      title: "Me contacter",
      subtitle: "Un projet en tête ou juste envie de dire bonjour ? Ma boîte mail est toujours ouverte.",
      details: "Coordonnées",
      email: "E-mail",
      location: "Localisation",
      findMeOn: "Me retrouver sur",
      sendMessage: "M'envoyer un message",
      yourName: "Votre nom",
      namePlaceholder: "Jean Dupont",
      yourEmail: "Votre e-mail",
      emailPlaceholder: "jean@exemple.fr",
      yourMessage: "Votre message",
      messagePlaceholder: "Bonjour, j'aimerais collaborer sur...",
      send: "Envoyer",
      sending: "Envoi en cours...",
      errors: {
        nameRequired: "Le nom est requis",
        emailRequired: "L'e-mail est requis",
        invalidEmail: "Format d'e-mail invalide",
        messageTooShort: "Le message doit faire au moins 10 caractères",
      },
      success: "Message envoyé ! 🎉",
      successDesc: "Je vous répondrai dans les 24 heures.",
      errorTitle: "Oups ! Une erreur s'est produite",
      errorDesc: "Réessayez ou contactez-moi directement à obalayeprinceelie.adetona@ynov.com",
    },
    // Footer
    footer: {
      tagline: "Développeur Frontend qui crée de belles expériences digitales.",
      navigation: "Navigation",
      home: "Accueil",
      about: "À propos",
      work: "Projets",
      contact: "Contact",
      contactTitle: "Contact",
      privacy: "Confidentialité",
      terms: "Conditions",
      cookies: "Cookies",
      rights: "Tous droits réservés.",
    },
  },
};

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("en");
  const t = translations[lang];
  const toggleLang = () => setLang((l) => (l === "en" ? "fr" : "en"));

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
