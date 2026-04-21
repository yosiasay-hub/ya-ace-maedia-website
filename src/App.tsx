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
import { BrowserRouter, Routes, Route, Link, useLocation, useParams, useNavigate } from "react-router-dom";

type Lang = 'he' | 'en';

const translations = {
  he: {
    nav: {
      home: "בית",
      services: "שירותים",
      portfolio: "תיק עבודות",
      about: "אודות",
      calculator: "מחשבון ROI",
      testimonials: "מה הלקוחות אומרים",
      faq: "שאלות נפוצות",
      contact: "צרו קשר",
      back_to_projects: "חזרה לכל הפרויקטים",
      view_live: "צפייה באתר החי",
      challenge: "האתגר",
      solution: "הפתרון",
      result: "התוצאה",
      challenge_text: "בניית נוכחות דיגיטלית חזקה בשוק תחרותי במיוחד תוך שימוש בטכנולוגיות המתקדמות ביותר.",
      solution_text: "פיתוח ב-Next.js ואופטימיזציית SEO מקומית מעמיקה הכוללת ניהול פרופיל עסק בגוגל (GMB).",
      result_text: "עלייה משמעותית בכמות הלידים, שיפור במהירות הטעינה ודירוגים גבוהים בביטויי מפתח קריטיים.",
    },
      hero: {
        badge: "Boutique Digital Agency",
        title: "אתרים שגוגל אוהב.<br/>לקוחות שמתקשרים.",
        desc: "אני יוסי, מפתח ומשווק עצמאי. אני בונה אתרי Next.js מהירים במיוחד ומייצר לידים דרך Local SEO מדויק לעסקים בישראל (תל אביב, הרצליה, חיפה) ובארה״ב. מודל בוטיק של אדם אחד שעובד ישירות מולך להשגת מקסימום ROI.",
        cta_primary: "דברו איתי בוואטסאפ",
        cta_secondary: "הסיפור שלי",
      },
    services_brief: [
      { 
        id: "01", 
        title: "Local SEO", 
        desc: "ניהול Google Business Profile ושיפור נוכחות בחיפושים מקומיים.", 
        longDesc: "אנחנו מנהלים עבורכם את הנוכחות המקומית במפות של גוגל (GMB). זהו הכלי החזק ביותר היום לעסקים מקומיים - הופעה בשלישייה הראשונה (Map Pack) פירושה זרם בלתי פוסק של שיחות טלפון.",
        features: ["ניהול פרופיל GMB אקטיבי", "בניית ציטוטים מקומיים (Citations)", "ניקוי נתונים כפולים", "אסטרטגיית איסוף ביקורות"],
        color: "blue", rot: "-rotate-1", mt: "" 
      },
      { 
        id: "02", 
        title: "GEO & AI", 
        desc: "אופטימיזציה לחיפושי AI (GEO) שתביא את הלקוחות ישר אליכם.", 
        longDesc: "העולם עובר לחיפושים מבוססי AI. אנחנו מבצעים אופטימיזציה שגורמת למודלים כמו ChatGPT ו-Google Gemini להמליץ על העסק שלכם בתור התשובה הטובה ביותר.",
        features: ["SGE Optimization", "AI Engine Rankings", "Prompt Engineering", "SEO מבוסס הקשר"],
        color: "indigo", rot: "rotate-2", mt: "mt-8" 
      },
      { 
        id: "03", 
        title: "Next.js Dev", 
        desc: "בניית אתרים מהירים במיוחד, מותאמים אישית ומוכווני המרה.", 
        longDesc: "האתר שלכם הוא הפנים של העסק. פיתוח ב-Next.js מאפשר לנו לספק מהירות טעינה אפסית, חוויית משתמש חלקה ודירוגים גבוהים יותר בצורה אורגנית.",
        features: ["ביצועי Next.js מושלמים", "ארכיטקטורת React", "CMS ידידותי למשתמש", "אבטחה ברמת Enterprise"],
        color: "purple", rot: "rotate-1", mt: "" 
      },
      { 
        id: "04", 
        title: "CRO & Data", 
        desc: "אופטימיזציית המרות וניתוח נתונים להגדלת מחזור העסק.", 
        longDesc: "אנחנו לא מנחשים - אנחנו מודדים. אופטימיזציית המרות גורמת ליותר גולשים להפוך ללקוחות משלמים דרך ניתוח דאטה מתקדם ושיפור פסיכולוגיית המכירה באתר.",
        features: ["A/B Testing", "מפות חום ומשפכי מכירה", "הגדרת GA4 מתקדמת", "מעקב אירועים מותאם אישית"],
        color: "cyan", rot: "-rotate-2", mt: "mt-8" 
      }
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
      title: "YA ACE MEDIA: <br /> <span class='text-blue-500 italic'>בוטיק דיגיטל של אדם אחד</span>",
      founder: {
        title: "Yossi — מייסד ומפתח ראשי",
        bio: "מפתח, משווק ומרצה לשעבר ב-John Bryce. בונה אתרים מהירים ומקדם עסקים מקומיים מאז 2017.",
        fullDesc: "אני יוסי, מפתח ומשווק עצמאי שעובד מהגליל. את הלקוחות הראשונים שלי לקחתי ב-2017, אחרי שנים שבהן עזרתי לחברים בעלי עסקים לתקן אתרים, לשפר דירוגים בגוגל, ולהפסיק לזרוק כסף על קמפיינים שלא עובדים. במקביל ללקוחות הפרטיים העברתי קורסים והרצאות בשיווק דיגיטלי במכללת John Bryce, מה שאילץ אותי לנסח לעומק כל מה שלמדתי בשטח ולהפוך את זה לשיטה שאפשר ללמד."
      },
      story: {
        title: "הסיפור",
        content: `YA Ace Media התחילה ב-2017 כעבודה צדדית. בני משפחה וחברים בעלי עסקים בקשו ממני לבנות להם אתרים ולעזור להם להופיע בגוגל, ובהדרגה התברר שיש כאן צורך אמיתי בשוק שאף סוכנות גדולה לא ממלאת — עסקים מקומיים שצריכים מישהו שמבין אותם, לא חבילה גנרית של 'דיגיטל'.

בשנים הראשונות עבדתי בעיקר עם עסקים ישראליים: מתווכי נדל"ן בצפון, מסעדות, בעלי מקצוע. במקביל התחלתי להתמקצע ב-Google Ads, עברתי הסמכות, וקיבלתי הכרה כ-Google Premier Partner. גיליתי שיש פער עצום בין סוכנויות שמוכרות פרסום ובין סוכנויות שמבינות גם איך לבנות את התשתית שגורמת לפרסום הזה לעבוד — האתר עצמו.

במקביל התחלתי להעביר קורסים והרצאות בשיווק דיגיטלי במכללת John Bryce — אחת ממסגרות ההכשרה המקצועית הגדולות בישראל. ההוראה אילצה אותי לקחת את מה שעובד בשטח ולנסח אותו כמערכת ברורה שאפשר ללמד, וגם הכריחה אותי להישאר מעודכן. עד היום אני נשען על אותה שיטתיות בכל פרויקט.

ב-2018 התחלתי לעבוד עם לקוח מנעולן בארה"ב, וזה היה שער לעולם שלם. מנעולנים וטכנאי דלתות מוסך מתמודדים עם רמות חסרות תקדים של ספאם ב-GBP, ואני בניתי תהליך מובנה לשחזור פרופילים, להגנה מפני דיווחי שווא, ולקידום מקומי בסביבה תחרותית במיוחד. היום זאת ההתמחות הגלובלית שלי.`
      },
      model: {
        title: "המודל",
        content: "המודל לא השתנה מאז יום ראשון: מפתח אחד, מערכת יחסים ישירה עם הלקוח, שקיפות מלאה, ואחריות אישית על התוצאה. לא מתכוון לגדול לסוכנות עם עובדים. הסיבה היחידה שלקוחות נשארים היא שהם מקבלים את מי שהבטיחו להם."
      },
      principles: {
        title: "העקרונות שמנחים אותי",
        items: [
          { title: "שקיפות לפני יחסי ציבור", desc: "לא מבטיחים מה שלא יודעים לקיים. אם משהו לא עובד אומרים את זה. דוחות חודשיים מציגים את האמת — גם את החודשים הפחות טובים — כדי שתוכל לקבל החלטות אמיתיות." },
          { title: "מהירות ובסיס איכותי", desc: "אתר מהיר עם פיצ'רים בסיסיים תמיד יביס אתר איטי עם הכל בעולם. כל בנייה מתחילה בבסיס סטטי, נקי ומהיר — ורק אחר כך מוסיפים שכבות." },
          { title: "אתה הבעלים של הכל", desc: "הקוד אצלך ב-GitHub. הדומיין רשום על שמך. החשבונות (Google Ads, Analytics, GBP) שייכים לך. בלי נעילה לספק." },
          { title: "ROI לפני יוקרה", desc: "אתר לא צריך לזכות בפרס עיצוב, הוא צריך להמיר. החלטות עיצוב ופיתוח נמדדות לפי השפעה על הכסף, לא לפי טרנדים." },
          { title: "יחסים ארוכי טווח", desc: "אני מעדיף עשרה לקוחות שעובדים איתי שנים מאשר מאה לקוחות חד-פעמיים. אם אתה לקוח שלי — אני שם בשבילך." }
        ]
      },
      why_us: {
        title: "למה YA Ace Media",
        items: [
          "עובדים ישירות מול המפתח, לא מול מנהל לקוח שמעביר הודעות",
          "אחריות PSI 95+ במובייל בכתב — או החזר כספי",
          "שותף Google Premier Partner עם הסמכות פעילות",
          "מרצה לשעבר לשיווק דיגיטלי במכללת John Bryce",
          "דו-לשוני עברית-אנגלית, עבודה רציפה מול שני שווקים",
          "מומחיות באנטי-ספאם של GBP למנעולנים וטכנאי דלתות מוסך",
          "אתה הבעלים של כל הקוד, הדומיין והחשבונות — בלי נעילה",
          "מודל פעולה של מפתח עצמאי עם יותר מ-8 שנות ניסיון"
        ]
      }
    },
    testimonials: [
      { name: "Eagle Locksmith", text: "התוצאות ב-GMB היו פשוט מדהימות. כמות הפניות עלתה ב-300% תוך חודשיים.", role: "Owner" },
      { name: "970 Locksmith", text: "האתר החדש מהיר בטירוף וה-SEO עובד בדיוק כמו שהבטיחו.", role: "Marketing Director" },
      { name: "Hummus Ashkara", text: "סוף סוף רואים אותנו במפות כשמחפשים חומוס בתל אביב. שירות מעולה.", role: "Manager" }
    ],
    faq: [
      { q: "כמה זמן לוקח לראות תוצאות SEO?", a: "בדרך כלל רואים שיפור ראשוני תוך 2-4 חודשים. בשווקים תחרותיים כמו מנעולנות בארה״ב, תוצאות משמעותיות דורשות 6-12 חודשי עבודה רציפה." },
      { q: "למה Next.js טוב יותר ל-SEO?", a: "מכיוון שהוא מאפשר טעינה מהירה מאוד (PSI 95+) ואינדוקס מושלם על ידי גוגל. מהירות האתר היא פקטור דירוג קריטי בשנת 2024." },
      { q: "איך עובד הקידום המקומי (Local SEO)?", a: "אנחנו מבצעים אופטימיזציה של ה-Google Business Profile שלכם, מטפלים בספאם של מתחרים ומייצרים נוכחות חזקה ב-Map Pack ובחיפושים מקומיים." },
      { q: "מה זה GEO ואיך זה עוזר לעסק שלי?", a: "Generative Engine Optimization הוא קידום במנועי חיפוש מבוססי AI. אנחנו עוזרים לעסק שלכם להופיע כתשובה המומלצת ב-ChatGPT, Gemini ו-Perplexity." }
    ],
    portfolio: {
      title: "הפרויקטים <br /> <span class='text-blue-500 italic'>שלנו</span>",
      desc: "מבחר מתיק העבודות שלנו - אתרים שמשלבים עיצוב מוקפד עם ביצועים ללא פשרות.",
      items: [
        { 
          slug: "eagle-locksmith",
          title: "Eagle Locksmith", 
          tags: ["Local SEO", "GMB", "Dev"], 
          image: "https://images.unsplash.com/photo-1591123720164-de1348b2c4da?auto=format&fit=crop&w=800&q=80", 
          link: "https://www.eaglelocksmithservice.com/",
          fullDesc: "קידום מקומי מאסיבי למנעולן בארה״ב (MD, DC, VA), אופטימיזציית GMB ושיפור יחס המרה בשוק תחרותי במיוחד.",
          challenge: "תחרות קיצונית באזור עיר הבירה (DMV), צורך במתן מענה 24/7 ונוכחות חזקה מול רשתות ענק.",
          solution: "אסטרטגיית 'Hyper-Local' מבוססת תוכן אזורי וניהול יומיומי של פרופיל ה-Google Business.",
          result: "עלייה של 300% בכמות השיחות בחודשיים הראשונים ודירוג יציב ב-Map Pack.",
          psi: "98"
        },
        { 
          slug: "970-locksmith-fort-collins",
          title: "970 Locksmith Fort Collins", 
          tags: ["Next.js", "Local SEO", "Maps"], 
          image: "https://images.unsplash.com/photo-1579208570378-8c970854bc23?auto=format&fit=crop&w=800&q=80", 
          link: "https://970locksmithservices.tech",
          fullDesc: "אתר ממוקד המרות למנעולן 24/7 בפורט קולינס, קולורדו. בנייה, עיצוב וקידום SEO מקומי.",
          challenge: "פריצה לשוק הרווי של צפון קולורדו מול עסקים ותיקים עם מאות ביקורות.",
          solution: "פיתוח אתר Next.js מהיר במיוחד עם חווית משתמש (UX) מוכוונת שיחות דחופות.",
          result: "ציוני PSI מושלמים ודירוג במקום הראשון בביטויים קריטיים בעיר.",
          psi: "100"
        },
        { 
          slug: "eagle-garage-door",
          title: "Eagle Garage Door Services", 
          tags: ["SEO", "Lead Gen", "Garage"], 
          image: "https://images.unsplash.com/photo-1621905235210-9080c3e6601f?auto=format&fit=crop&w=800&q=80",
          link: "https://eaglegaragedoorservices.com/",
          fullDesc: "שיפור נוכחות דיגיטלית וייצור לידים איכותיים עבור שירותי דלתות מוסך במרילנד.",
          challenge: "כיסוי גיאוגרפי רחב (30+ ערים) וצורך בדפי נחיתה ספציפיים לכל אזור.",
          solution: "יצירת מבנה היררכי מורכב של דפי שירות מקומיים ואופטימיזציה טכנית.",
          result: "ירידה דרסטית בעלות רכישת לקוח (CPA) וצמיחה אורגנית עקבית.",
          psi: "92"
        },
        { 
          slug: "kamaaina-locksmith",
          title: "Kama'aina Locksmith", 
          tags: ["Hawaii SEO", "Local Search"], 
          image: "https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?auto=format&fit=crop&w=800&q=80",
          link: "https://golocksmithhonolulu.com/",
          fullDesc: "אסטרטגיית קידום מקומי ייחודית לשוק של הוואי (הונולולו ואוהו), דגש על חיפושי Mobile.",
          challenge: "שוק מבודד עם נאמנות גבוהה לעסקים מקומיים (Kama'aina) ותחרות מותגים לאומית.",
          solution: "מיתוג 'Local-First' ומיקוד בקריאות שירות מהירות (20-30 דקות תגובה).",
          result: "חדירה מוצלחת לשוק המקומי עם נפח שיחות גבוה במיוחד ממובייל.",
          psi: "96"
        },
        { 
          slug: "garage-door-kingdom",
          title: "Garage Door Kingdom LLC", 
          tags: ["Branding", "SEO", "Florida"], 
          image: "https://images.unsplash.com/photo-1599059021750-845100067305?auto=format&fit=crop&w=800&q=80",
          link: "https://garagedoorkingdomllc.biz/",
          fullDesc: "שיפור נוכחות דיגיטלית וייצור לידים איכותיים עבור שירותי דלתות מוסך, שערים וגדרות ב-Sunrise, פלורידה ובכל מחוז Broward.",
          challenge: "תחרות עזה בשוק של דרום פלורידה, צורך בבידול דרך התמחיות ספציפיות כמו דלתות עמידות להוריקנים (HVHZ).",
          solution: "אסטרטגיית קידום ממוקדת אזור גאוגרפי (Sunrise) ושיפור הוכחה חברתית דרך ניהול ביקורות (185+ חוות דעת).",
          result: "דירוג גבוה בביטויי מפתח מקומיים וצמיחה משמעותית בפניות לשירותי התקנה ומוצרים פרימיום.",
          psi: "96"
        },
        { 
          slug: "locksmiths-colorado-springs",
          title: "Locksmiths Of Colorado Springs", 
          tags: ["Local SEO", "GMB", "Maps"], 
          image: "https://images.unsplash.com/photo-1605380591742-835639695d85?auto=format&fit=crop&w=800&q=80",
          link: "https://colorado-locksmith.com/",
          fullDesc: "השתלטות על תוצאות החיפוש המקומיות (Map Pack) באזור קולורדו ספרינגס עבור מותג ותיק הפועל מאז 2008.",
          challenge: "ביסוס דומיננטיות בשוק צפוף בקולורדו ספרינגס מול מאות מתחרים, תוך שימור מוניטין של למעלה מעשור.",
          solution: "אופטימיזציה אגרסיבית לחיפושי 'Near Me', ניהול ציון איכות של 1,204+ ביקורות (4.8 כוכבים) ושיפור מהירות התגובה הדיגיטלית.",
          result: "נראות מקסימלית בחבילת המפות (Map Pack) וגידול עקבי בנפח השיחות לזמני תגובה של פחות מ-20 דקות.",
          psi: "98"
        },
        { 
          slug: "colorado-dependable-locksmith",
          title: "Colorado Dependable Locksmith", 
          tags: ["Technical SEO", "Highlands Ranch"], 
          image: "https://images.unsplash.com/photo-1517646272502-78c392f432a5?auto=format&fit=crop&w=800&q=80",
          link: "https://coloradodependablelocksmith.com/",
          fullDesc: "אופטימיזציה טכנית וקידום ממוקד אזור (Highlands Ranch) עבור שירותי מנעולנות באזור דנבר רבתי.",
          challenge: "פריצה לשווקי נישה גיאוגרפיים דרומית לדנבר ויצירת סמכות כשירות מנעולנות אמין ומהיר (7 בבוקר עד חצות).",
          solution: "בניית דפי שירות מבוססי מיקום (Geo-Targeting) ואופטימיזציה טכנית לשיפור אינדוקס וזחילה של גוגל.",
          result: "עלייה משמעותית בשיחות מאיזור Highlands Ranch ודירוגים גבוהים בחיפושי מנעולן דחופים.",
          psi: "95"
        },
        { 
          slug: "protecvault",
          title: "ProtecVault (NanoBanana)", 
          tags: ["E-commerce", "Collectors"], 
          image: "https://images.unsplash.com/photo-1613771404721-1f92d799e49f?auto=format&fit=crop&w=800&q=80",
          link: "https://protecvault.com/",
          fullDesc: "פיתוח פלטפורמת איקומרס מהירה לאביזרי אספנות (קלפי מסחר) בשוק האמריקאי עבור המותג NanoBanana.",
          challenge: "יצירת אמון מול קהילת אספנים דקדקנית וצורך בחוויית רכישה חלקה עבור מוצרי פרימיום.",
          solution: "בניית אתר Next.js ממוקד המרות עם דגש על איכות (PVC-Free) ומהירות טעינה מקסימלית.",
          result: "אחוז המרה גבוה (CR) וציוני ביצועים כמעט מושלמים.",
          psi: "99"
        },
        { 
          slug: "hummus-ashkara",
          title: "חומוס אשכרה / Hummus Ashkara", 
          tags: ["Restaurant SEO", "Local"], 
          image: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&w=800&q=80",
          link: "https://hummus-ashkara.co.il/",
          fullDesc: "קידום דיגיטלי למסעדת חומוס מיתולוגית הפועלת למעלה מ-4 עשורים ברחוב ירמיהו 45, תל אביב.",
          challenge: "שימור המעמד האיקוני מול דורות חדשים של צרכנים והתחרות הגוברת בסצנת הקולינריה התל-אביבית.",
          solution: "אסטרטגיית Local SEO מקיפה הכוללת נוכחות חזקה ב-Map Pack עבור ביטויים כמו 'חומוס בתל אביב' וניהול ביקורות.",
          result: "חשיפה מקסימלית לקהל מקומי ותיירים, וזרימה קבועה של לקוחות דרך חיפושי מובייל מבוססי מיקום.",
          psi: "92"
        },
        { 
          slug: "limor-asayag",
          title: "לימור אסייג - תיווך נדל\"ן", 
          tags: ["Real Estate", "Personal Branding"], 
          image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
          link: "https://limorasay.co.il/",
          fullDesc: "מיתוג אישי ובניית אתר מנוהל לבית תיווך נדל״ן מוביל בגבעתיים ותל אביב.",
          challenge: "שוק הנדל״ן דורש אמון אישי גבוה והצגה יוקרתית של נכסים.",
          solution: "אתר תיק נכסים (Portfolio) יוקרתי עם דגש על המותג האישי של לימור.",
          result: "חיזוק הסמכות המקצועית וקבלת פניות איכותיות מבעלי נכסים.",
          psi: "92"
        }
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
      calculator: "ROI Calculator",
      testimonials: "Testimonials",
      faq: "FAQ",
      contact: "Contact Us",
      back_to_projects: "Back to all projects",
      view_live: "View Live Site",
      challenge: "The Challenge",
      solution: "The Solution",
      result: "The Result",
      challenge_text: "Building a strong digital presence in a highly competitive market using the most advanced technologies.",
      solution_text: "Developing in Next.js and deep local SEO optimization including Google Business Profile (GMB) management.",
      result_text: "Significant increase in lead volume, improved loading speed, and high rankings for critical keywords.",
    },
      hero: {
        badge: "Boutique Digital Agency",
        title: "Sites Google Loves.<br/>Clients Who Call.",
        desc: "I'm Yossi, an independent developer and marketer. I build ultra-fast Next.js sites and generate leads through precision Local SEO for businesses in Israel and the US (Maryland, Colorado, Florida). A one-man boutique model working directly with you for maximum ROI.",
        cta_primary: "WhatsApp Me",
        cta_secondary: "My Story",
      },
    services_brief: [
      { 
        id: "01", 
        title: "Local SEO", 
        desc: "Google Business Profile management and local search presence.", 
        longDesc: "We manage your local presence on Google Maps (GMB). This is the most powerful tool for local businesses today - appearing in the Top 3 (Map Pack) means a constant stream of phone calls.",
        features: ["Active GMB Management", "Local Citations Building", "Duplicate Data Cleanup", "Review Acquisition Strategy"],
        color: "blue", rot: "-rotate-1", mt: "" 
      },
      { 
        id: "02", 
        title: "GEO & AI", 
        desc: "AI Search Optimization (GEO) to bring customers straight to you.", 
        longDesc: "The world is shifting to AI-based searches. We perform optimization that makes models like ChatGPT and Google Gemini recommend your business as the best answer.",
        features: ["SGE Optimization", "AI Engine Rankings", "Prompt Engineering", "Contextual SEO"],
        color: "indigo", rot: "rotate-2", mt: "mt-8" 
      },
      { 
        id: "03", 
        title: "Next.js Dev", 
        desc: "Custom-built, ultra-fast, and conversion-oriented websites.", 
        longDesc: "Your website is the face of your business. Development in Next.js allows us to provide zero load times, seamless UX, and higher organic rankings.",
        features: ["Perfect Next.js Performance", "React Architecture", "User-friendly CMS", "Enterprise-grade Security"],
        color: "purple", rot: "rotate-1", mt: "" 
      },
      { 
        id: "04", 
        title: "CRO & Data", 
        desc: "Conversion Rate Optimization and data analysis for growth.", 
        longDesc: "We don't guess - we measure. Conversion optimization turns more visitors into paying customers through advanced data analysis and improving on-site sales psychology.",
        features: ["A/B Testing", "Heatmaps & Funnels", "Advanced GA4 Setup", "Custom Event Tracking"],
        color: "cyan", rot: "-rotate-2", mt: "mt-8" 
      }
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
      title: "YA ACE MEDIA: <br /> <span class='text-blue-500 italic'>A One-Man Digital Boutique</span>",
      founder: {
        title: "Yossi — Founder & Lead Developer",
        bio: "Developer, marketer, and former John Bryce lecturer. Building fast sites and promoting local businesses since 2017.",
        fullDesc: "I'm Yossi, an independent developer and marketer working from the Galilee. I took on my first clients in 2017, after years of helping business owner friends fix websites, improve Google rankings, and stop wasting money on campaigns that don't work. Alongside private clients, I taught digital marketing courses at John Bryce, which forced me to deeply formulate everything I learned in the field into a teachable system."
      },
      story: {
        title: "The Story",
        content: `YA Ace Media began in 2017 as a side hustle. Family and friends who owned businesses asked me to build them websites and help them appear on Google. Gradually, it became clear there was a real market need that no large agency was filling — local businesses that need someone who understands them, not a generic 'digital' package.

In the early years, I worked mainly with Israeli businesses: real estate agents, restaurants, professionals. Meanwhile, I specialized in Google Ads and was recognized as a Google Premier Partner. I discovered a huge gap between agencies that sell advertising and those that also understand the foundation — the website itself.

In 2018, I started working with a US locksmith client, which was a gateway to a whole new world. Locksmiths and garage door techs face unprecedented levels of spam in GBP. I built a structured process for profile restoration, protection, and local promotion. Today, this is my global specialty.`
      },
      model: {
        title: "The Model",
        content: "The model hasn't changed since Day 1: One developer, direct relationship, full transparency, and personal responsibility. I don't intend to grow into a large agency. Clients stay because they get exactly who they were promised."
      },
      principles: {
        title: "My Core Principles",
        items: [
          { title: "Transparency First", desc: "No false promises. If it's not working, we say it. Monthly reports show the truth so you can make real decisions." },
          { title: "Speed & Foundation", desc: "A fast site will always beat a slow one. Every build starts with a clean foundation before adding complexity." },
          { title: "You Own Everything", desc: "The code is in your GitHub, the domain is yours, the accounts are yours. No vendor lock-in." },
          { title: "ROI Over Ego", desc: "Sites should convert, not just win design awards. Decisions are measured by impact on revenue." },
          { title: "Long-Term Partners", desc: "I prefer working with 10 long-term clients over 100 one-offs. If you are my client, I'm fully invested." }
        ]
      },
      why_us: {
        title: "Why YA Ace Media",
        items: [
          "Work directly with the dev, not a messenger manager",
          "Guaranteed PSI 95+ on mobile in writing",
          "Google Premier Partner with active certifications",
          "Former John Bryce lecturer — proven methodology",
          "Bilingual (HE/EN) for seamless global work",
          "Specialized GBP expertise for Locksmiths/Garage Door",
          "Complete ownership of code, domain, and accounts",
          "Independent developer with 8+ years of experience"
        ]
      }
    },
    testimonials: [
      { name: "Eagle Locksmith", text: "GMB results were amazing. Leads increased by 300% within two months.", role: "Owner" },
      { name: "970 Locksmith", text: "The new site is lightning fast and SEO works exactly as promised.", role: "Marketing Director" },
      { name: "Hummus Ashkara", text: "Finally we are visible on maps when searching for hummus in TLV. Great service.", role: "Manager" }
    ],
    faq: [
      { q: "How long to see SEO results?", a: "Initial improvements in 2-4 months. In competitive niches like Locksmiths in the US, significant results take 6-12 months of consistent optimization." },
      { q: "Why Next.js for SEO?", a: "Extreme speed (PSI 95+) and perfect indexing. Page speed is a critical ranking factor in 2024, directly impacting conversion rates." },
      { q: "How does Local SEO work?", a: "We optimize your GMB profile, combat competitor spam, and build a strong presence in the Google Map Pack and local searches." },
      { q: "What is GEO and how does it help?", a: "Generative Engine Optimization focuses on AI-based search. We ensure your business is recommended as the top answer by AI models like ChatGPT and Gemini." }
    ],
    portfolio: {
      title: "Our <br /> <span class='text-blue-500 italic'>Case Studies</span>",
      desc: "A selection from our portfolio - websites that combine meticulous design with uncompromising performance.",
      items: [
        { 
          slug: "eagle-locksmith",
          title: "Eagle Locksmith", 
          tags: ["Local SEO", "GMB", "Dev"], 
          image: "https://images.unsplash.com/photo-1591123720164-de1348b2c4da?auto=format&fit=crop&w=800&q=80", 
          link: "https://www.eaglelocksmithservice.com/",
          fullDesc: "Massive local SEO push for a US locksmith (MD, DC, VA), GMB optimization, and conversion improvements in an ultra-competitive market.",
          challenge: "Extreme competition in the DMV area, requiring a 24/7 response and strong presence against national chains.",
          solution: "Hyper-Local strategy based on regional content and daily management of the Google Business Profile.",
          result: "300% increase in call volume within the first two months and stable top rankings in the Map Pack.",
          psi: "98"
        },
        { 
          slug: "970-locksmith-fort-collins",
          title: "970 Locksmith Fort Collins", 
          tags: ["Next.js", "Local SEO", "Maps"], 
          image: "https://images.unsplash.com/photo-1579208570378-8c970854bc23?auto=format&fit=crop&w=800&q=80", 
          link: "https://970locksmithservices.tech",
          fullDesc: "Conversion-focused site for a 24/7 locksmith in Fort Collins, Colorado. Building, design, and local SEO.",
          challenge: "Breaking into the saturated Northern Colorado market against established businesses with hundreds of reviews.",
          solution: "High-speed Next.js development with a UX optimized for emergency service calls.",
          result: "Perfect PSI scores and #1 ranking for critical local keywords in Fort Collins.",
          psi: "100"
        },
        { 
          slug: "eagle-garage-door",
          title: "Eagle Garage Door Services", 
          tags: ["SEO", "Lead Gen", "Garage"], 
          image: "https://images.unsplash.com/photo-1444090542259-0af8fa96557e?auto=format&fit=crop&w=800&q=80",
          link: "https://eaglegaragedoorservices.com/",
          fullDesc: "Enhancing digital presence and generating high-quality leads for garage door services in Maryland.",
          challenge: "Broad geographic coverage (30+ cities) requiring region-specific landing pages.",
          solution: "Creating a complex hierarchical structure of local service pages and technical SEO optimization.",
          result: "Drastic reduction in Customer Acquisition Cost (CPA) and consistent organic growth.",
          psi: "92"
        },
        { 
          slug: "kamaaina-locksmith",
          title: "Kama'aina Locksmith", 
          tags: ["Hawaii SEO", "Local Search"], 
          image: "https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?auto=format&fit=crop&w=800&q=80",
          link: "https://golocksmithhonolulu.com/",
          fullDesc: "Unique local SEO strategy for the Hawaii market (Honolulu & Oahu), emphasis on Mobile search.",
          challenge: "Isolated market with high loyalty to 'Kama'aina' (local) businesses and national brand competition.",
          solution: "Local-First branding focus and optimization for rapid response service (20-30 min response).",
          result: "Successful penetration of the local market with exceptionally high call volume from mobile.",
          psi: "96"
        },
        { 
          slug: "garage-door-kingdom",
          title: "Garage Door Kingdom LLC", 
          tags: ["Branding", "SEO", "Florida"], 
          image: "https://images.unsplash.com/photo-1599059021750-845100067305?auto=format&fit=crop&w=800&q=80",
          link: "https://garagedoorkingdomllc.biz/",
          fullDesc: "Digital presence enhancement and lead generation for garage doors, gates, and fencing services in Sunrise, FL and throughout Broward County.",
          challenge: "Intense competition in the South Florida market, requiring differentiation through specializations like HVHZ hurricane-rated doors.",
          solution: "Localized SEO strategy for Sunrise/Broward County and leveraging social proof from 185+ 5-star reviews.",
          result: "Top rankings for local search terms and a significant increase in high-intent leads for installation and luxury products.",
          psi: "96"
        },
        { 
          slug: "locksmiths-colorado-springs",
          title: "Locksmiths Of Colorado Springs", 
          tags: ["Local SEO", "GMB", "Maps"], 
          image: "https://images.unsplash.com/photo-1605380591742-835639695d85?q=80&w=800&auto=format&fit=crop",
          link: "https://colorado-locksmith.com/",
          fullDesc: "Dominating local search results (Map Pack) in Colorado Springs for an established brand operating since 2008.",
          challenge: "Establishing dominance in a saturated market against hundreds of competitors while maintaining a reputation of over a decade.",
          solution: "Aggressive optimization for 'Near Me' searches, managing a quality score of 1,204+ reviews (4.8 stars), and improving digital response speed.",
          result: "Maximum visibility in the Map Pack and consistent growth in call volume for sub-20 minute response times.",
          psi: "98"
        },
        { 
          slug: "colorado-dependable-locksmith",
          title: "Colorado Dependable Locksmith", 
          tags: ["Technical SEO", "Highlands Ranch"], 
          image: "https://images.unsplash.com/photo-1517646272502-78c392f432a5?auto=format&fit=crop&w=800&q=80",
          link: "https://coloradodependablelocksmith.com/",
          fullDesc: "Technical optimization and geo-targeted SEO (Highlands Ranch) for locksmith services in the Greater Denver area.",
          challenge: "Breaking into niche geographic markets south of Denver and building authority as a reliable, fast service (7 AM - Midnight).",
          solution: "Building location-based service pages (Geo-Targeting) and technical optimization to improve Google's indexing and crawl rates.",
          result: "Significant increase in calls from the Highlands Ranch area and top rankings for urgent locksmith queries.",
          psi: "95"
        },
        { 
          slug: "protecvault",
          title: "ProtecVault (NanoBanana)", 
          tags: ["E-commerce", "Collectors"], 
          image: "https://images.unsplash.com/photo-1613771404721-1f92d799e49f?auto=format&fit=crop&w=800&q=80",
          link: "https://protecvault.com/",
          fullDesc: "High-speed e-commerce platform for collectibles (trading cards) in the US market for the NanoBanana brand.",
          challenge: "Building trust within a meticulous collector community requiring a seamless purchasing flow for premium accessories.",
          solution: "High-performance Next.js site emphasizing quality (PVC-Free), durability, and ultra-fast loading speed.",
          result: "High Conversion Rate (CR) and near-perfect performance scores.",
          psi: "99"
        },
        { 
          slug: "hummus-ashkara",
          title: "Hummus Ashkara", 
          tags: ["Restaurant SEO", "Local"], 
          image: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?q=80&w=800&auto=format&fit=crop",
          link: "https://hummus-ashkara.co.il/",
          fullDesc: "Digital promotion for a legendary hummus restaurant operating for over 4 decades at Yirmiyahu 45, Tel Aviv.",
          challenge: "Maintaining iconic status for new generations of consumers and competing in the increasingly crowded Tel Aviv culinary scene.",
          solution: "Comprehensive Local SEO strategy including dominant Map Pack presence for terms like 'Hummus Tel Aviv' and review management.",
          result: "Maximum exposure to locals and tourists, ensuring a constant flow of customers via location-based mobile searches.",
          psi: "92"
        },
        { 
          slug: "limor-asayag",
          title: "Limor Asayag - Real Estate", 
          tags: ["Real Estate", "Personal Branding"], 
          image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
          link: "https://limorasay.co.il/",
          fullDesc: "Personal branding and managed site for a leading real estate brokerage in Tel Aviv & Givatayim.",
          challenge: "The real estate market requires high personal trust and premium property presentation.",
          solution: "Luxury portfolio site with emphasis on Limor's personal brand and high-end property showcase.",
          result: "Strengthened professional authority and quality leads from property owners.",
          psi: "92"
        }
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
  const navigate = useNavigate();

  const prefix = lang === 'en' ? '/en' : '';
  const getPath = (path: string) => {
    if (path === '/') return prefix === '' ? '/' : prefix;
    return `${prefix}${path}`;
  };

  const toggleLang = () => {
    const newLang = lang === 'he' ? 'en' : 'he';
    const currentPath = location.pathname;
    
    if (newLang === 'en') {
      navigate(`/en${currentPath}`);
    } else {
      navigate(currentPath.replace(/^\/en/, '') || '/');
    }
  };

  return (
    <div className={`min-h-screen font-sans selection:bg-blue-500/30 ${isRtl ? 'rtl' : 'ltr'}`} dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-brand-dark/50 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-12 h-24 flex items-center justify-between">
          <Link to={getPath('/')} className="text-2xl font-black tracking-tighter text-white">
            YA-ACE <span className="text-blue-500 underline decoration-2 underline-offset-4">MEDIA</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest opacity-70">
            <Link to={getPath('/')} className={`hover:text-blue-400 transition-colors ${location.pathname === getPath('/') ? 'text-blue-400 opacity-100' : ''}`}>{t.nav.home}</Link>
            <Link to={getPath('/services')} className={`hover:text-blue-400 transition-colors ${location.pathname === getPath('/services') ? 'text-blue-400 opacity-100' : ''}`}>{t.nav.services}</Link>
            <Link to={getPath('/case-studies')} className={`hover:text-blue-400 transition-colors ${location.pathname === getPath('/case-studies') ? 'text-blue-400 opacity-100' : ''}`}>{t.nav.portfolio}</Link>
            <Link to={getPath('/about')} className={`hover:text-blue-400 transition-colors ${location.pathname === getPath('/about') ? 'text-blue-400 opacity-100' : ''}`}>{t.nav.about}</Link>
            <Link to={getPath('/calculator')} className={`hover:text-blue-400 transition-colors ${location.pathname === getPath('/calculator') ? 'text-blue-400 opacity-100' : ''}`}>{t.nav.calculator}</Link>
            <Link to={getPath('/contact')} className={`hover:text-blue-400 transition-colors ${location.pathname === getPath('/contact') ? 'text-blue-400 opacity-100' : ''}`}>{t.nav.contact}</Link>
            
            <button 
              onClick={toggleLang}
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
            <Link to={getPath('/')} onClick={() => setIsMenuOpen(false)} className="text-xl uppercase tracking-widest font-bold">{t.nav.home}</Link>
            <Link to={getPath('/services')} onClick={() => setIsMenuOpen(false)} className="text-xl uppercase tracking-widest font-bold">{t.nav.services}</Link>
            <Link to={getPath('/case-studies')} onClick={() => setIsMenuOpen(false)} className="text-xl uppercase tracking-widest font-bold">{t.nav.portfolio}</Link>
            <Link to={getPath('/about')} onClick={() => setIsMenuOpen(false)} className="text-xl uppercase tracking-widest font-bold">{t.nav.about}</Link>
            <Link to={getPath('/calculator')} onClick={() => setIsMenuOpen(false)} className="text-xl uppercase tracking-widest font-bold">{t.nav.calculator}</Link>
            <Link to={getPath('/contact')} onClick={() => setIsMenuOpen(false)} className="text-xl uppercase tracking-widest font-bold">{t.nav.contact}</Link>
            <button 
              onClick={() => { toggleLang(); setIsMenuOpen(false); }}
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
              <button 
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg shadow-blue-900/20"
              >
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
      <section className="py-24 px-12 bg-blue-500/5">
        <div className="max-w-7xl mx-auto space-y-16">
          <h2 className="text-4xl font-black text-white text-center uppercase tracking-widest">{t.nav.testimonials}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.testimonials.map((test: any, idx: number) => (
              <div key={idx} className="glass p-10 rounded-3xl space-y-4">
                <p className="text-gray-300 italic leading-relaxed">"{test.text}"</p>
                <div>
                  <div className="font-bold text-white">{test.name}</div>
                  <div className="text-xs text-blue-400 font-bold uppercase">{test.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-12">
        <div className="max-w-3xl mx-auto space-y-12">
          <h2 className="text-4xl font-black text-white uppercase tracking-widest text-center">{t.nav.faq}</h2>
          <div className="space-y-6">
            {t.faq.map((item: any, idx: number) => (
              <div key={idx} className="glass p-8 rounded-2xl space-y-3">
                <h3 className="font-bold text-white text-lg">{item.q}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-24 px-12 border-t border-white/5">
        <div className="max-w-xl mx-auto glass p-12 rounded-[40px] space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-black text-white uppercase">{t.nav.contact}</h2>
            <p className="text-gray-500">Ready to boost your presence?</p>
          </div>
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-blue-500 outline-none transition-colors" />
            <input type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-blue-500 outline-none transition-colors" />
            <textarea placeholder="Message" rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-blue-500 outline-none transition-colors resize-none" />
            <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-5 rounded-xl uppercase tracking-widest transition-all">Submit</button>
          </form>
        </div>
      </section>
    </>
  );
}

function Services({ t }: any) {
  return (
    <div className="py-20 px-12 max-w-7xl mx-auto space-y-24">
      <div className="space-y-4 max-w-2xl">
        <h1 className="text-6xl font-black tracking-tight text-white uppercase leading-none">
          Our <span className="text-blue-500 italic underline decoration-2 underline-offset-8">Solutions</span>
        </h1>
        <p className="text-xl text-gray-400 font-medium italic pr-4 border-r-4 border-blue-500 mt-6">
          מעטפת שיווקית וטכנולוגית המותאמת לעידן החדש של החיפוש וה-AI.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {t.services_brief.map((s: any, idx: number) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-12 rounded-[40px] space-y-8 group hover:bg-white/[0.03] transition-all border border-white/5"
          >
            <div className="flex items-start justify-between">
              <div className="p-5 bg-blue-500/10 rounded-3xl w-fit group-hover:bg-blue-600 group-hover:text-white transition-all text-blue-400">
                <Zap size={36} />
              </div>
              <div className="text-[60px] font-black text-white/5 select-none leading-none">0{idx+1}</div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-white tracking-tight leading-tight">{s.title}</h3>
              <p className="text-gray-400 leading-relaxed text-lg">{s.longDesc}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/5">
              {s.features.map((f: string) => (
                <div key={f} className="flex items-center gap-3 text-xs text-gray-500 font-bold uppercase tracking-widest">
                  <CheckCircle2 size={14} className="text-blue-500 shrink-0" />
                  {f}
                </div>
              ))}
            </div>

            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 text-blue-400 font-black uppercase text-xs tracking-widest group-hover:gap-4 transition-all"
            >
              Learn More <ArrowLeft className="rotate-180" size={14} />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function CaseStudies({ t }: any) {
  const navigate = useNavigate();
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
            onClick={() => navigate(`/case-studies/${item.slug}`)}
          >
            <img 
              src={item.image} 
              alt={item.title} 
              className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-110 transition-all duration-700" 
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
    <div className="py-20 px-6 sm:px-12 max-w-7xl mx-auto space-y-32 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 space-y-12"
        >
          <div className="space-y-6">
            <span className="text-blue-500 font-bold uppercase tracking-[0.4em] text-xs">Innovation & Growth</span>
            <h1 
              className="text-6xl lg:text-7xl font-black tracking-tighter text-white uppercase leading-[0.9] accent-glow"
              dangerouslySetInnerHTML={{ __html: t.about.title }}
            />
            <div className="h-2 w-24 bg-blue-600 rounded-full" />
          </div>
          
          <div className="space-y-8">
            <div className="space-y-3">
               <h2 className="text-3xl font-bold text-blue-400 italic">{t.about.founder.title}</h2>
               <p className="text-xl text-white font-medium bg-white/5 py-4 px-8 rounded-3xl border-l-4 border-blue-500 shadow-2xl shadow-blue-500/5 leading-relaxed">{t.about.founder.bio}</p>
            </div>
            <div className="space-y-6 text-gray-400 leading-relaxed text-lg max-w-2xl bg-white/5 p-8 rounded-[40px] border border-white/5">
              <p>{t.about.story.content}</p>
              <p className="border-t border-white/10 pt-6 font-medium italic text-blue-400">{t.about.model.content}</p>
            </div>
          </div>
          
          <div className="flex gap-12 pt-4">
            <div className="space-y-1">
              <div className="text-5xl font-black text-white leading-none">8+</div>
              <div className="text-[10px] text-blue-400 font-bold uppercase tracking-widest">Years Experience</div>
            </div>
            <div className="w-px h-16 bg-white/10" />
            <div className="space-y-1">
              <div className="text-5xl font-black text-white leading-none">100%</div>
              <div className="text-[10px] text-blue-400 font-bold uppercase tracking-widest">Handmade Quality</div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="lg:col-span-5 relative group"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-indigo-600 opacity-20 blur-3xl rounded-[40px] group-hover:opacity-40 transition-opacity" />
          <div className="glass p-3 rounded-[40px] overflow-hidden relative shadow-2xl">
             <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" className="rounded-[32px] grayscale hover:grayscale-0 transition-all duration-1000 w-full shadow-inner" alt="Yossi - YA Ace Media Founder" referrerPolicy="no-referrer" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-10">
                <div className="text-blue-400 font-black text-xs uppercase tracking-widest mb-1">Based in Israel</div>
                <div className="text-white font-black text-3xl uppercase tracking-tighter italic">YOSSI ASAYAG</div>
             </div>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 py-20 border-y border-white/5 relative">
        <div className="space-y-10">
          <div className="space-y-4">
             <h2 className="text-4xl font-black text-white uppercase flex items-center gap-4">
               <span className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-500"><Info /></span>
               {t.about.story.title}
             </h2>
             <div className="h-1 w-20 bg-blue-500" />
          </div>
          <div className="text-gray-400 leading-relaxed whitespace-pre-wrap text-lg font-light tracking-wide italic pl-6 border-l border-white/10">
            {t.about.story.content}
          </div>
        </div>
        
        <div className="space-y-16">
          <div className="glass p-12 rounded-[40px] space-y-6 border-blue-500/20 bg-blue-500/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-blue-500/5 -rotate-12 translate-x-1/4 -translate-y-1/4"><Target size={180} /></div>
            <h3 className="text-3xl font-black text-white uppercase relative z-10">{t.about.model.title}</h3>
            <p className="text-gray-300 leading-relaxed italic text-lg relative z-10">{t.about.model.content}</p>
          </div>
          
          <div className="space-y-8">
            <div className="space-y-2">
               <h3 className="text-2xl font-black text-white uppercase">{t.about.why_us.title}</h3>
               <div className="h-1 w-12 bg-indigo-500" />
            </div>
            <ul className="grid grid-cols-1 gap-4">
              {t.about.why_us.items.map((item: string, idx: number) => (
                <li key={idx} className="flex items-start gap-4 group p-4 rounded-2xl hover:bg-white/5 transition-colors">
                  <CheckCircle2 className="text-blue-500 shrink-0 mt-1" size={20} />
                  <span className="text-gray-300 group-hover:text-white transition-colors font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="space-y-20">
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-black text-white uppercase tracking-widest">{t.about.principles.title}</h2>
          <p className="text-gray-500 uppercase tracking-widest text-xs">How we operate on every single project</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {t.about.principles.items.map((item: any, idx: number) => (
            <div key={idx} className="glass p-12 rounded-[40px] space-y-6 hover:border-blue-500/30 transition-all group relative overflow-hidden">
              <div className="text-8xl font-black text-blue-500 opacity-5 absolute -bottom-4 -right-4 group-hover:opacity-10 transition-opacity">{idx+1}</div>
              <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500 font-black text-2xl group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xl">
                {idx + 1}
              </div>
              <h4 className="text-2xl font-black text-white uppercase tracking-tight">{item.title}</h4>
              <p className="text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-16 pt-20 border-t border-white/5">
        <div className="text-center space-y-4 font-black">
          <h2 className="text-2xl text-blue-500 uppercase tracking-[0.4em]">Integrated Tech Stack</h2>
          <div className="text-gray-500 text-sm tracking-widest uppercase italic">The specialized engine behind every high-performance digital asset</div>
        </div>
        <div className="flex flex-wrap justify-center gap-16 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700 items-center">
           <Zap size={50} className="hover:text-blue-500 transition-colors" />
           <Code size={50} className="hover:text-indigo-500 transition-colors" />
           <Search size={50} className="hover:text-cyan-500 transition-colors" />
           <Globe size={50} className="hover:text-blue-400 transition-colors" />
           <Users size={50} className="hover:text-purple-500 transition-colors" />
           <Target size={50} className="hover:text-red-500 transition-colors" />
        </div>
      </div>
    </div>
  );
}

function Contact({ t }: any) {
  return (
    <div className="py-20 px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <div className="space-y-4">
            <h1 className="text-6xl font-black text-white uppercase tracking-tighter">LET'S <br/> <span className="text-blue-500 italic">CONNECT</span></h1>
            <p className="text-xl text-gray-400 max-w-md italic border-l-4 border-blue-500 pl-8">מוכנים להזניק את העסק שלכם לראש תוצאות החיפוש?</p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <MapPin size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase text-gray-500 font-bold tracking-widest">Office Location</span>
                <span className="text-white font-medium">Israel & USA Serving Worldwide</span>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Zap size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase text-gray-500 font-bold tracking-widest">Support Email</span>
                <span className="text-white font-medium">office@ya-ace-media.co.il</span>
              </div>
            </div>
          </div>
        </div>

        <div id="contact-form" className="glass p-12 rounded-[40px] space-y-8 border-t border-white/5">
          <div className="space-y-2">
            <h2 className="text-3xl font-black text-white uppercase">{t.nav.contact}</h2>
            <p className="text-gray-500 uppercase tracking-widest text-[10px] font-bold">Fill the form below</p>
          </div>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Name" className="bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-blue-500 outline-none transition-colors" />
              <input type="email" placeholder="Email" className="bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-blue-500 outline-none transition-colors" />
            </div>
            <input type="text" placeholder="Company" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-blue-500 outline-none transition-colors" />
            <textarea placeholder="How can we help?" rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-blue-500 outline-none transition-colors resize-none" />
            <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-5 rounded-xl uppercase tracking-widest transition-all shadow-lg shadow-blue-600/20">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

function Calculator({ t }: any) {
  const [revenue, setRevenue] = useState(10000);
  const [conversion, setConversion] = useState(2);
  const [traffic, setTraffic] = useState(5000);

  const estimatedGrowth = Math.round(revenue * 1.4);
  const additionalLeads = Math.round((traffic * (conversion / 100)) * 0.5);

  return (
    <div className="py-20 px-12 max-w-4xl mx-auto space-y-16">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-black text-white uppercase tracking-tighter">ROI CALCULATOR</h1>
        <p className="text-gray-500">בדקו כמה העסק שלכם יכול לצמוח עם אופטימיזציה נכונה.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="glass p-10 rounded-3xl space-y-8">
          <div className="space-y-4">
            <label className="block text-xs font-bold uppercase tracking-widest text-blue-400">Monthly Revenue ($)</label>
            <input 
              type="range" min="1000" max="100000" step="1000" 
              value={revenue} onChange={(e) => setRevenue(Number(e.target.value))}
              className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
            <div className="text-2xl font-bold text-white">${revenue.toLocaleString()}</div>
          </div>

          <div className="space-y-4">
            <label className="block text-xs font-bold uppercase tracking-widest text-blue-400">Monthly Traffic</label>
            <input 
              type="range" min="100" max="50000" step="100" 
              value={traffic} onChange={(e) => setTraffic(Number(e.target.value))}
              className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
            <div className="text-2xl font-bold text-white">{traffic.toLocaleString()}</div>
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-8">
          <div className="glass p-8 rounded-3xl border-l-4 border-blue-500">
            <div className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Estimated Growth</div>
            <div className="text-4xl font-black text-white">${estimatedGrowth.toLocaleString()}</div>
            <p className="text-xs text-blue-400 mt-2">+40% increase in revenue</p>
          </div>

          <div className="glass p-8 rounded-3xl border-l-4 border-cyan-500">
            <div className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Additional Monthly Leads</div>
            <div className="text-4xl font-black text-white">+{additionalLeads}</div>
            <p className="text-xs text-cyan-400 mt-2">Based on current conversion benchmarks</p>
          </div>
        </div>
      </div>
      
      <div className="text-center">
        <button 
          onClick={() => navigate('/contact')}
          className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest transition-all shadow-xl shadow-blue-600/20"
        >
          Get Your Full Audit
        </button>
      </div>
    </div>
  );
}

function CaseStudyDetail({ t }: any) {
  const { slug } = useParams();
  const project = t.portfolio.items.find((i: any) => i.slug === slug);

  if (!project) return <div className="py-20 text-center text-white">Project not found</div>;

  return (
    <div className="py-20 px-12 max-w-5xl mx-auto space-y-16">
      <Link to="/case-studies" className="inline-flex items-center gap-2 text-blue-400 hover:text-white transition-colors uppercase text-xs font-bold tracking-widest">
        <ArrowLeft size={16} /> {t.nav.back_to_projects}
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl font-black text-white leading-tight uppercase">{project.title}</h1>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex gap-2">
                {project.tags.map((tag: string) => (
                  <span key={tag} className="text-[10px] font-black uppercase tracking-widest text-blue-400 bg-blue-500/10 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              {project.psi && (
                <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 text-green-400 rounded-full border border-green-500/20">
                  <Zap size={14} className="animate-pulse" />
                  <span className="text-[10px] font-black tracking-widest uppercase">PSI SCORE: {project.psi}/100</span>
                </div>
              )}
            </div>
          </div>
          <p className="text-xl text-gray-400 leading-relaxed italic border-r-4 border-blue-500 pr-8">
            {project.fullDesc}
          </p>
          
          {project.link && (
            <button 
              onClick={() => window.open(project.link, '_blank')}
              className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest transition-all"
            >
              {t.nav.view_live}
            </button>
          )}
        </div>

        <div className="glass p-2 rounded-[40px] overflow-hidden shadow-2xl shadow-blue-500/10">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full rounded-[32px] opacity-80" 
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/5">
        <div className="glass p-8 rounded-3xl space-y-4">
          <h3 className="font-bold text-white uppercase tracking-widest text-xs text-blue-400">{t.nav.challenge}</h3>
          <p className="text-sm text-gray-500 leading-relaxed">{project.challenge || t.nav.challenge_text}</p>
        </div>
        <div className="glass p-8 rounded-3xl space-y-4">
          <h3 className="font-bold text-white uppercase tracking-widest text-xs text-blue-400">{t.nav.solution}</h3>
          <p className="text-sm text-gray-500 leading-relaxed">{project.solution || t.nav.solution_text}</p>
        </div>
        <div className="glass p-8 rounded-3xl space-y-4">
          <h3 className="font-bold text-white uppercase tracking-widest text-xs text-blue-400">{t.nav.result}</h3>
          <p className="text-sm text-gray-500 leading-relaxed">{project.result || t.nav.result_text}</p>
        </div>
      </div>

      <div className="pt-20 text-center space-y-8">
        <h4 className="text-gray-500 uppercase tracking-[0.3em] text-[10px] font-bold">Ready to achieve similar results?</h4>
        <Link to="/contact" className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest transition-all shadow-xl shadow-blue-600/20">
          Start Your Project
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState<Lang>('he');
  const t = translations[lang];
  const isRtl = lang === 'he';

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "YA ACE MEDIA",
    "image": "https://ya-ace-media.co.il/logo.png",
    "@id": "https://ya-ace-media.co.il/",
    "url": "https://ya-ace-media.co.il/",
    "telephone": "054-0000000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Yirmiyahu 45",
      "addressLocality": "Tel Aviv",
      "postalCode": "63506",
      "addressCountry": "IL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 32.0911,
      "longitude": 34.7781
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.facebook.com/ya-ace-media",
      "https://www.linkedin.com/company/ya-ace-media"
    ]
  };

  return (
    <BrowserRouter>
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
      <ScrollToTop />
      <LanguageProvider lang={lang} setLang={setLang}>
        <Layout lang={lang} setLang={setLang} isRtl={isRtl} t={t}>
          <Routes>
            {/* Hebrew Routes (Default) */}
            <Route path="/" element={<Home t={t} isRtl={isRtl} />} />
            <Route path="/services" element={<Services t={t} />} />
            <Route path="/case-studies" element={<CaseStudies t={t} />} />
            <Route path="/case-studies/:slug" element={<CaseStudyDetail t={t} />} />
            <Route path="/about" element={<About t={t} />} />
            <Route path="/contact" element={<Contact t={t} />} />
            <Route path="/calculator" element={<Calculator t={t} />} />

            {/* English Routes */}
            <Route path="/en" element={<Home t={translations.en} isRtl={false} />} />
            <Route path="/en/services" element={<Services t={translations.en} />} />
            <Route path="/en/case-studies" element={<CaseStudies t={translations.en} />} />
            <Route path="/en/case-studies/:slug" element={<CaseStudyDetail t={translations.en} />} />
            <Route path="/en/about" element={<About t={translations.en} />} />
            <Route path="/en/contact" element={<Contact t={translations.en} />} />
            <Route path="/en/calculator" element={<Calculator t={translations.en} />} />
          </Routes>
        </Layout>
      </LanguageProvider>
    </BrowserRouter>
  );
}

function LanguageProvider({ children, lang, setLang }: { children: React.ReactNode, lang: Lang, setLang: (l: Lang) => void }) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const isEn = location.pathname.startsWith('/en');
    if (isEn && lang !== 'en') {
      setLang('en');
    } else if (!isEn && lang !== 'he') {
      setLang('he');
    }
  }, [location.pathname]);

  return <>{children}</>;
}
