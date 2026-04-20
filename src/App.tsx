import { motion } from "motion/react";
import { 
  Globe, 
  MapPin, 
  Search, 
  Zap, 
  Code, 
  ArrowLeft, 
  CheckCircle2, 
  Menu, 
  X,
  Languages
} from "lucide-react";
import { useState } from "react";

type Lang = 'he' | 'en';

const translations = {
  he: {
    nav: {
      services: "שירותים",
      portfolio: "תיק עבודות",
      contact: "צרו קשר",
    },
    hero: {
      badge: "Professional Digital Solutions",
      title: "אתרים שגוגל אוהב.<br/>לקוחות שמתקשרים.",
      desc: "סוכנות דיגיטל המתמחה בבניית אתרים מהירים (Next.js), קידום אורגני (SEO), ו-Local SEO לעסקים קטנים ובינוניים בישראל ובארה״ב. אנחנו מייצרים פתרונות שפשוט עובדים.",
      cta_primary: "תאמו שיחת ייעוץ",
      cta_secondary: "השירותים שלנו",
    },
    services_brief: [
      { id: "01", title: "Local SEO", desc: "ניהול Google Business Profile ושיפור נוכחות בחיפושים מקומיים.", color: "blue", rot: "-rotate-1", mt: "" },
      { id: "02", title: "GEO & AI", desc: "אופטימיזציה לחיפושי AI (GEO) שתביא את הלקוחות ישר אליכם.", color: "indigo", rot: "rotate-2", mt: "mt-8" },
      { id: "03", title: "Next.js Dev", desc: "בניית אתרים מהירים במיוחד, מותאמים אישית ומוכווני המרה.", color: "purple", rot: "rotate-1", mt: "" },
      { id: "04", title: "CRO & Data", desc: "אופטימיזציית המרות וניתוח נתונים להגדלת מחזור העסק.", color: "cyan", rot: "-rotate-2", mt: "mt-8" }
    ],
    geo: {
      title: "פתרונות דיגיטליים <br /> ש- <span class='text-blue-500 tracking-tighter italic'>מייצרים תוצאות</span>",
      desc: "אנחנו מציעים מעטפת שלמה לעסק שלך בשילוב טכנולוגיית Next.js ואסטרטגיות קידום מתקדמות:",
      list: [
        "פיתוח אתרים ב-Next.js",
        "SEO טכני ואופטימיזציית עמודים",
        "ניהול Google Business Profile",
        "Google & Meta Ads",
        "אופטימיזציית המרות (CRO)",
        "תחזוקה וניטור ביצועים"
      ]
    },
    footer: {
      location: "Israel & USA",
      contact: "office@ya-ace-media.co.il",
      credits: "© 2024 YA ACE MEDIA - פתרונות דיגיטליים",
      locatedIn: "Serving"
    }
  },
  en: {
    nav: {
      services: "Services",
      portfolio: "Portfolio",
      contact: "Contact Us",
    },
    hero: {
      badge: "Professional Digital Solutions",
      title: "Sites Google Loves.<br/>Clients Who Call.",
      desc: "A digital agency specializing in fast websites (Next.js), SEO, and Local SEO for small and medium businesses in Israel and the US. We create solutions that simply work.",
      cta_primary: "Book a Consultation",
      cta_secondary: "Our Services",
    },
    services_brief: [
      { id: "01", title: "Local SEO", desc: "Google Business Profile management and local search presence.", color: "blue", rot: "-rotate-1", mt: "" },
      { id: "02", title: "GEO & AI", desc: "AI Search Optimization (GEO) to bring customers straight to you.", color: "indigo", rot: "rotate-2", mt: "mt-8" },
      { id: "03", title: "Next.js Dev", desc: "Custom-built, ultra-fast, and conversion-oriented websites.", color: "purple", rot: "rotate-1", mt: "" },
      { id: "04", title: "CRO & Data", desc: "Conversion Rate Optimization and data analysis for growth.", color: "cyan", rot: "-rotate-2", mt: "mt-8" }
    ],
    geo: {
      title: "Digital Solutions <br /> That <span class='text-blue-500 tracking-tighter italic'>Deliver Results</span>",
      desc: "We offer a complete wrap-around for your business using Next.js technology and advanced marketing strategies:",
      list: [
        "Next.js Site Development",
        "Technical SEO & On-page Optimization",
        "Google Business Profile Management",
        "Google & Meta Ads",
        "Conversion Rate Optimization (CRO)",
        "Maintenance & Performance Monitoring"
      ]
    },
    footer: {
      location: "Israel & USA",
      contact: "office@ya-ace-media.co.il",
      credits: "© 2024 YA ACE MEDIA - Digital Solutions",
      locatedIn: "Serving"
    }
  }
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState<Lang>('he');

  const t = translations[lang];
  const isRtl = lang === 'he';

  return (
    <div className={`min-h-screen font-sans selection:bg-blue-500/30 ${isRtl ? 'rtl' : 'ltr'}`} dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-brand-dark/50 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-12 h-24 flex items-center justify-between">
          <div className="text-2xl font-black tracking-tighter text-white">
            YA-ACE <span className="text-blue-500 underline decoration-2 underline-offset-4">MEDIA</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest opacity-70">
            <a href="#services" className="hover:text-blue-400 transition-colors">{t.nav.services}</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">{t.nav.portfolio}</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">{t.nav.contact}</a>
            
            <button 
              onClick={() => setLang(lang === 'he' ? 'en' : 'he')}
              className="flex items-center gap-2 px-3 py-1 glass rounded-full hover:bg-white/10 transition-colors ml-4"
            >
              <Languages size={14} className="text-blue-400" />
              <span className="text-[10px] font-bold uppercase">{lang === 'he' ? 'English' : 'עברית'}</span>
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-24 left-0 w-full bg-brand-dark border-b border-white/10 px-12 py-10 flex flex-col gap-6"
          >
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-xl uppercase tracking-widest font-bold">{t.nav.services}</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-xl uppercase tracking-widest font-bold">{t.nav.portfolio}</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-xl uppercase tracking-widest font-bold">{t.nav.contact}</a>
            <button 
              onClick={() => { setLang(lang === 'he' ? 'en' : 'he'); setIsMenuOpen(false); }}
              className="flex items-center gap-3 text-xl uppercase tracking-widest font-bold text-blue-400"
            >
              <Languages size={20} />
              {lang === 'he' ? 'English' : 'עברית'}
            </button>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-20 px-12 overflow-hidden min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col space-y-6"
            >
              <div className="inline-block px-3 py-1 glass rounded-full text-xs font-bold text-blue-400 w-fit uppercase tracking-widest">
                {t.hero.badge}
              </div>
              <h1 
                className="text-6xl md:text-8xl font-bold leading-[0.9] text-white accent-glow"
                dangerouslySetInnerHTML={{ __html: t.hero.title }}
              />
              <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
                {t.hero.desc}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex gap-4 pt-4"
            >
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg shadow-blue-900/20 whitespace-normal text-center">
                {t.hero.cta_primary}
              </button>
              <button className="glass text-white px-8 py-4 rounded-lg font-bold hover:bg-white/5 transition-colors whitespace-normal text-center">
                {t.hero.cta_secondary}
              </button>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {t.services_brief.map((item) => (
              <div 
                key={item.id}
                className={`glass p-6 rounded-2xl flex flex-col space-y-3 transform transition-transform hover:scale-105 ${item.rot} ${item.mt}`}
              >
                <div className={`h-10 w-10 bg-${item.color}-500/20 rounded-lg flex items-center justify-center text-${item.color}-400 font-bold`}>
                  {item.id}
                </div>
                <h3 className="font-bold text-white">{item.title}</h3>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Content Section */}
      <section id="services" className="py-24 px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="flex-1 space-y-8">
            <h2 
              className="text-4xl md:text-6xl font-bold leading-tight text-white accent-glow"
              dangerouslySetInnerHTML={{ __html: t.geo.title }}
            />
            <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
              {t.geo.desc}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {t.geo.list.map((item) => (
                <li key={item} className="flex items-center gap-3 font-medium text-gray-300">
                  <CheckCircle2 size={18} className="text-blue-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 w-full max-w-xl">
            <div className="glass p-8 rounded-3xl relative group overflow-hidden">
              <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <MapPin size={48} className="text-blue-500 mb-6 mx-auto animate-bounce" />
              <div className="text-center space-y-4">
                <p className="text-sm font-bold tracking-[.3em] uppercase text-blue-400">Optimization Active</p>
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="h-full w-1/2 bg-blue-500" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-12 border-t border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-right">
          <div className="flex gap-12">
            <div className={`flex flex-col ${isRtl ? 'items-start' : 'items-start'}`}>
              <span className="text-[10px] uppercase text-gray-500 mb-1 tracking-widest">{t.footer.locatedIn}</span>
              <span className="text-sm text-gray-300 font-medium">{t.footer.location}</span>
            </div>
            <div className={`flex flex-col ${isRtl ? 'items-start' : 'items-start'}`}>
              <span className="text-[10px] uppercase text-gray-500 mb-1 tracking-widest">Contact</span>
              <a href="mailto:yosiasay@gmail.com" className="text-sm text-gray-300 font-medium hover:text-blue-400 transition-colors">
                {t.footer.contact}
              </a>
            </div>
          </div>

          <div className="flex gap-4 opacity-30">
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          </div>

          <div className="text-[10px] uppercase tracking-widest text-gray-600 font-bold">
            {t.footer.credits}
          </div>
        </div>
      </footer>
    </div>
  );
}
