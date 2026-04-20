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
  Languages,
  LayoutGrid,
  Info,
  Briefcase,
  Users,
  Target
} from "lucide-react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";

type Lang = 'he' | 'en';

const translations = {
  he: {
    nav: {
      home: "בית",
      services: "שירותים",
      portfolio: "תיק עבודות",
      about: "אודות",
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
    about: {
      title: "אנחנו כאן כדי <br /> <span class='text-blue-500 italic'>להצמיח את העסק שלך</span>",
      desc: "YA ACE MEDIA הוקמה מתוך מטרה אחת: לגשר על הפער בין טכנולוגיה עילית לבין תוצאות עסקיות בשטח. אנחנו לא רק בונים אתרים - אנחנו בונים מנועי צמיחה.",
      mission: "המשימה שלנו היא להפוך כל עסק קטן או בינוני למעצמה דיגיטלית בזירה המקומית והבינלאומית.",
      why_us: [
        { title: "טכנולוגיה", desc: "שימוש ב-Next.js ובכלים המתקדמים ביותר בשוק." },
        { title: "מומחיות SEO", desc: "ניסיון מוכח בקידום בזירות תחרותיות בארץ ובארה״ב." },
        { title: "שקיפות", desc: "דוחות מפורטים וקשר אישי ורציף עם הלקוח." }
      ]
    },
    portfolio: {
      title: "הפרויקטים <br /> <span class='text-blue-500 italic'>שלנו</span>",
      desc: "מבחר מתיק העבודות שלנו - אתרים שמשלבים עיצוב מוקפד עם ביצועים ללא פשרות.",
      items: [
        { title: "Eagle Locksmith", tags: ["Local SEO", "GMB", "Dev"], image: "https://picsum.photos/seed/locksmith/800/600", link: "https://www.eaglelocksmithservice.com/" },
        { title: "E-commerce Tech", tags: ["Next.js", "SEO", "CRO"], image: "https://picsum.photos/seed/tech/800/600" },
        { title: "Local Law Firm", tags: ["Local SEO", "UX/UI"], image: "https://picsum.photos/seed/legal/800/600" }
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
      home: "Home",
      services: "Services",
      portfolio: "Case Studies",
      about: "About",
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
    about: {
      title: "We Are Here To <br /> <span class='text-blue-500 italic'>Grow Your Business</span>",
      desc: "YA ACE MEDIA was founded with one goal: to bridge the gap between high-end technology and real-world business results. We don't just build websites - we build growth engines.",
      mission: "Our mission is to turn every small and medium business into a digital powerhouse in local and international arenas.",
      why_us: [
        { title: "Technology", desc: "Using Next.js and the most advanced tools on the market." },
        { title: "SEO Expertise", desc: "Proven experience in ranking in competitive markets (Israel & USA)." },
        { title: "Transparency", desc: "Detailed reports and continuous personal communication with clients." }
      ]
    },
    portfolio: {
      title: "Our <br /> <span class='text-blue-500 italic'>Case Studies</span>",
      desc: "A selection from our portfolio - websites that combine meticulous design with uncompromising performance.",
      items: [
        { title: "Eagle Locksmith", tags: ["Local SEO", "GMB", "Dev"], image: "https://picsum.photos/seed/locksmith/800/600", link: "https://www.eaglelocksmithservice.com/" },
        { title: "E-commerce Tech", tags: ["Next.js", "SEO", "CRO"], image: "https://picsum.photos/seed/tech/800/600" },
        { title: "Local Law Firm", tags: ["Local SEO", "UX/UI"], image: "https://picsum.photos/seed/legal/800/600" }
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

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout({ children, lang, setLang, isRtl, t }: any) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className={`min-h-screen font-sans selection:bg-blue-500/30 ${isRtl ? 'rtl' : 'ltr'}`} dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-brand-dark/50 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-12 h-24 flex items-center justify-between">
          <Link to="/" className="text-2xl font-black tracking-tighter text-white">
            YA-ACE <span className="text-blue-500 underline decoration-2 underline-offset-4">MEDIA</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest opacity-70">
            <Link to="/" className={`hover:text-blue-400 transition-colors ${location.pathname === '/' ? 'text-blue-400 opacity-100' : ''}`}>{t.nav.home}</Link>
            <Link to="/services" className={`hover:text-blue-400 transition-colors ${location.pathname === '/services' ? 'text-blue-400 opacity-100' : ''}`}>{t.nav.services}</Link>
            <Link to="/case-studies" className={`hover:text-blue-400 transition-colors ${location.pathname === '/case-studies' ? 'text-blue-400 opacity-100' : ''}`}>{t.nav.portfolio}</Link>
            <Link to="/about" className={`hover:text-blue-400 transition-colors ${location.pathname === '/about' ? 'text-blue-400 opacity-100' : ''}`}>{t.nav.about}</Link>
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
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-xl uppercase tracking-widest font-bold">{t.nav.home}</Link>
            <Link to="/services" onClick={() => setIsMenuOpen(false)} className="text-xl uppercase tracking-widest font-bold">{t.nav.services}</Link>
            <Link to="/case-studies" onClick={() => setIsMenuOpen(false)} className="text-xl uppercase tracking-widest font-bold">{t.nav.portfolio}</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)} className="text-xl uppercase tracking-widest font-bold">{t.nav.about}</Link>
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

      <main className="pt-24 min-h-[calc(100vh-160px)]">
        {children}
      </main>

      {/* Footer */}
      <footer className="py-12 px-12 border-t border-white/5 bg-black/20" id="contact">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-right">
          <div className="flex gap-12 text-left">
            <div className="flex flex-col items-start">
              <span className="text-[10px] uppercase text-gray-500 mb-1 tracking-widest">{t.footer.locatedIn}</span>
              <span className="text-sm text-gray-300 font-medium">{t.footer.location}</span>
            </div>
            <div className="flex flex-col items-start">
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

function Home({ t, isRtl }: any) {
  return (
    <>
      <section className="relative py-20 px-12 overflow-hidden flex items-center min-h-[80vh]">
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
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg shadow-blue-900/20">
                {t.hero.cta_primary}
              </button>
              <Link to="/services" className="glass text-white px-8 py-4 rounded-lg font-bold hover:bg-white/5 transition-colors">
                {t.hero.cta_secondary}
              </Link>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {t.services_brief.map((item: any) => (
              <div 
                key={item.id}
                className={`glass p-6 rounded-2xl flex flex-col space-y-3 transform transition-transform hover:scale-105 ${item.rot} ${item.mt}`}
              >
                <div className={`h-10 w-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 font-bold`}>
                  {item.id}
                </div>
                <h3 className="font-bold text-white">{item.title}</h3>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-12 border-t border-white/5">
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
              {t.geo.list.map((item: string) => (
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
    </>
  );
}

function Services({ t }: any) {
  const services = [
    { icon: Search, title: t.services_brief[0].title, desc: t.services_brief[0].desc, features: ["GMB Management", "Local Citations", "Citation Cleanup", "Review Strategy"] },
    { icon: Zap, title: t.services_brief[1].title, desc: t.services_brief[1].desc, features: ["Search Generative Experience", "AI Answer Engine Opt", "Prompt Engineering", "Large Context Marketing"] },
    { icon: Code, title: t.services_brief[2].title, desc: t.services_brief[2].desc, features: ["Next.js Performance", "React Architecture", "Headless CMS", "Enterprise Grade Security"] },
    { icon: Target, title: t.services_brief[3].title, desc: t.services_brief[3].desc, features: ["A/B Testing", "Heatmaps & Funnels", "GA4 Configuration", "Custom Event Tracking"] },
  ];

  return (
    <div className="py-20 px-12 max-w-7xl mx-auto">
      <div className="mb-20 space-y-4">
        <h1 className="text-5xl font-black tracking-tight text-white uppercase">{t.nav.services}</h1>
        <div className="h-1 w-20 bg-blue-500" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((s, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="glass p-10 rounded-3xl space-y-6 hover:border-blue-500/50 transition-colors"
          >
            <div className="p-4 bg-blue-500/10 rounded-2xl w-fit">
              <s.icon className="text-blue-400" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">{s.title}</h3>
            <p className="text-gray-400 leading-relaxed italic border-l-2 border-blue-500/30 pl-4">{s.desc}</p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              {s.features.map(f => (
                <div key={f} className="flex items-center gap-2 text-xs text-gray-500 font-bold uppercase tracking-tighter">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  {f}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function CaseStudies({ t }: any) {
  return (
    <div className="py-20 px-12 max-w-7xl mx-auto">
      <div className="mb-20 space-y-4">
        <h1 
          className="text-5xl font-black tracking-tight text-white uppercase"
          dangerouslySetInnerHTML={{ __html: t.portfolio.title }}
        />
        <p className="max-w-xl text-gray-400">{t.portfolio.desc}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {t.portfolio.items.map((item: any, idx: number) => (
          <motion.div 
            key={idx} 
            className="group relative h-[500px] rounded-3xl overflow-hidden glass cursor-pointer"
            whileHover={{ y: -10 }}
            onClick={() => item.link && window.open(item.link, '_blank')}
          >
            <img 
              src={item.image} 
              alt={item.title} 
              className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-0 p-8 w-full space-y-4">
              <div className="flex gap-2">
                {item.tags.map((tag: string) => (
                  <span key={tag} className="text-[10px] font-black uppercase tracking-widest text-blue-400 bg-blue-500/10 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tighter uppercase">{item.title}</h3>
              <div className="h-0.5 w-0 group-hover:w-full bg-blue-500 transition-all duration-500" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function About({ t }: any) {
  return (
    <div className="py-20 px-12 max-w-7xl mx-auto space-y-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-10">
          <h1 
            className="text-6xl font-black tracking-tighter text-white uppercase leading-[0.9]"
            dangerouslySetInnerHTML={{ __html: t.about.title }}
          />
          <div className="space-y-6">
            <p className="text-2xl text-gray-300 font-medium leading-relaxed italic border-r-4 border-blue-500 pr-8">{t.about.desc}</p>
            <p className="text-lg text-gray-500 leading-relaxed">{t.about.mission}</p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-10 bg-blue-500/20 blur-[100px] rounded-full" />
          <div className="glass p-1 rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/10 ring-1 ring-white/10">
             <img src="https://picsum.photos/seed/agency/1200/800" className="rounded-[22px] opacity-80" alt="Agency" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-20">
        {t.about.why_us.map((item: any, idx: number) => (
          <div key={idx} className="space-y-4">
            <div className="text-4xl font-black text-blue-500 opacity-20">0{idx+1}</div>
            <h3 className="text-xl font-bold text-white tracking-widest uppercase">{item.title}</h3>
            <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState<Lang>('he');
  const t = translations[lang];
  const isRtl = lang === 'he';

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout lang={lang} setLang={setLang} isRtl={isRtl} t={t}>
        <Routes>
          <Route path="/" element={<Home t={t} isRtl={isRtl} />} />
          <Route path="/services" element={<Services t={t} />} />
          <Route path="/case-studies" element={<CaseStudies t={t} />} />
          <Route path="/about" element={<About t={t} />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
