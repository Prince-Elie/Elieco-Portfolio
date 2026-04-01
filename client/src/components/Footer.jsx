import { ArrowUp, Linkedin, Github, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/prince-adetona-56942128b", label: "LinkedIn" },
    { icon: <Github size={18} />,   href: "https://github.com/Prince-Elie",                        label: "GitHub" },
    { icon: <Mail size={18} />,     href: "mailto:obalayeprinceelie.adetona@ynov.com",              label: "Email" },
  ];

  const quickLinks = [
    { name: t.footer.home,    href: "#hero" },
    { name: t.footer.about,   href: "#about" },
    { name: t.footer.work,    href: "#projects" },
    { name: t.footer.contact, href: "#contact" },
  ];

  const contactInfo = [
    { icon: <Mail size={16} />, text: "obalayeprinceelie.adetona@ynov.com", href: "mailto:obalayeprinceelie.adetona@ynov.com" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <footer className="px-6 py-12 mt-20">
      <div className="max-w-6xl mx-auto">
        <motion.div className="backdrop-blur-lg bg-white/70 dark:bg-gray-900/70 rounded-xl p-8 border border-white/20 dark:border-gray-700/50 shadow-lg"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Branding */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">ELIE ADETONA</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{t.footer.tagline}</p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a key={index} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-300"
                    whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Navigation */}
            <motion.div variants={itemVariants}>
              <h4 className="text-gray-900 dark:text-white font-medium mb-4 text-sm uppercase tracking-wider">{t.footer.navigation}</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li key={index} whileHover={{ x: 2 }} transition={{ type: "spring", stiffness: 300 }}>
                    <a href={link.href} className="hover:text-gray-900 dark:hover:text-white transition-colors duration-300 text-sm text-gray-600 dark:text-gray-300">
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div variants={itemVariants}>
              <h4 className="text-gray-900 dark:text-white font-medium mb-4 text-sm uppercase tracking-wider">{t.footer.contactTitle}</h4>
              <ul className="space-y-3">
                {contactInfo.map((info, index) => (
                  <motion.li key={index} className="flex items-start space-x-3 text-sm" whileHover={{ scale: 1.02 }}>
                    <span className="text-gray-600 dark:text-gray-400 mt-0.5">{info.icon}</span>
                    {info.href ? (
                      <a href={info.href} className="hover:text-gray-900 dark:hover:text-white transition-colors duration-300 text-gray-600 dark:text-gray-300">{info.text}</a>
                    ) : (
                      <span className="text-gray-600 dark:text-gray-300">{info.text}</span>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Bottom bar */}
          <motion.div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700/50 flex flex-col items-center text-xs text-gray-600 dark:text-gray-400 space-y-4 sm:space-y-0 sm:flex-row sm:justify-between"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
            <p>© {currentYear} Elie ADETONA. {t.footer.rights}</p>
            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">{t.footer.privacy}</a>
              <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">{t.footer.terms}</a>
              <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">{t.footer.cookies}</a>
              <motion.a href="#hero" aria-label="Back to top"
                className="p-2 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300"
                whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}>
                <ArrowUp size={16} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};
