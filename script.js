(function () {
  "use strict";

  /* ===================== i18n ===================== */
  const translations = {
    en: {
      "nav.collect": "Data",
      "nav.permissions": "Permissions",
      "nav.rights": "Your rights",
      "nav.contact": "Contact",

      "hero.eyebrow": "Legal & Trust",
      "hero.kicker": "Privacy Policy",
      "hero.subtitle": "Your privacy matters. DeTauro is designed to help you stay focused while respecting and protecting your personal data.",
      "hero.updatedLabel": "Last updated",
      "hero.viewPermissions": "View permissions",

      "intro.eyebrow": "Introduction",
      "intro.title": "A short, honest explanation",
      "intro.p1": "DeTauro is a focus and app-blocking application built to help you spend less time on distracting apps and more time on what matters. This policy explains, in plain language, what information DeTauro interacts with, why, and how it is protected.",
      "intro.p2": "By using DeTauro, you agree to the practices described in this Privacy Policy. If you do not agree with any part of it, please discontinue use of the application.",

      "collect.eyebrow": "Data collection",
      "collect.title": "Information we collect",
      "collect.p1": "DeTauro only collects the minimum information necessary for the app to function — nothing more. Most of what DeTauro reads, such as which app is currently open, is processed on your device to apply the focus rules you configured, and is not linked to your identity.",
      "collect.p2": "Your personal information is never sold. DeTauro does not build advertising profiles and does not share your data with data brokers.",
      "collect.card1": "Minimum data by design",
      "collect.card2": "Never sold to third parties",
      "collect.card3": "Processed on-device when possible",

      "perm.eyebrow": "Transparency",
      "perm.title": "Permissions used, and why",
      "perm.desc": "Every permission DeTauro requests exists to make a specific feature work. Here is exactly what each one does.",

      "perm.notif.title": "Notifications",
      "perm.notif.body": "Used to send focus reminders, blocker alerts, and other important messages about your active sessions.",

      "perm.usage.title": "Usage Access",
      "perm.usage.body": "Used to detect which app is currently in use, so DeTauro can apply the focus and blocking rules you set up.",

      "perm.access.title": "Accessibility Service",
      "perm.access.body": "Used exclusively to help you reduce distractions, by detecting configured apps or websites and applying the blocking rules you chose.",
      "perm.access.not1": "Not used to collect personal conversations",
      "perm.access.not2": "Not used to read passwords",
      "perm.access.not3": "Not used to sell data",
      "perm.access.not4": "Not used for advertising",
      "perm.access.note": "Data stays on your device whenever possible.",

      "perm.fg.title": "Foreground Service",
      "perm.fg.body": "Keeps focus mode and protection features running reliably while you have them enabled.",

      "perm.batt.title": "Ignore Battery Optimization",
      "perm.batt.body": "Lets DeTauro keep protecting you through long focus sessions without being interrupted by aggressive battery-saving features.",

      "perm.bio.title": "Biometric Authentication",
      "perm.bio.body": "Lets you securely lock important settings using fingerprint or face authentication.",
      "perm.bio.note": "Biometric data is processed by Android and is never stored by DeTauro.",

      "perm.storage.title": "Storage (legacy Android)",
      "perm.storage.body": "Used only on older Android versions, when needed to import or export application data. Modern Android versions do not require this permission.",

      "perm.boot.title": "Boot Completed",
      "perm.boot.body": "Lets DeTauro restore your protection automatically after the device restarts.",

      "perm.vib.title": "Vibration",
      "perm.vib.body": "Provides subtle haptic feedback for important interactions.",

      "use.eyebrow": "Purpose",
      "use.title": "How we use information",
      "use.li1": "Provide the features you request",
      "use.li2": "Improve application stability",
      "use.li3": "Maintain your focus sessions",
      "use.li4": "Restore your preferences after restarts or updates",
      "use.li5": "Enhance your overall experience",

      "sec.eyebrow": "Protection",
      "sec.title": "Data security",
      "sec.p1": "DeTauro follows industry best practices to protect the information it handles. Preferences and focus data are kept in secure local storage on your device whenever possible.",
      "sec.p2": "Where Firebase is used to support certain features, it operates under Firebase's own security standards. DeTauro takes reasonable technical and organizational measures to protect your information against loss, misuse, and unauthorized access.",

      "kids.eyebrow": "Children",
      "kids.title": "Children's privacy",
      "kids.p1": "DeTauro is not directed toward children under the age of 13, and we do not knowingly collect personal information from children.",

      "third.eyebrow": "Third parties",
      "third.title": "Third-party services",
      "third.p1": "DeTauro may rely on trusted services to operate correctly, including Google Play Services, Firebase (if enabled), and Android System APIs. These providers maintain their own privacy policies, which govern how they handle data.",

      "ret.eyebrow": "Retention",
      "ret.title": "Data retention",
      "ret.p1": "Information is retained only for as long as necessary to provide DeTauro's features. You may delete your application data at any time from your device settings.",

      "rights.eyebrow": "Control",
      "rights.title": "Your rights",
      "rights.li1": "Review the information associated with the app",
      "rights.li2": "Delete application data at any time",
      "rights.li3": "Uninstall the application",
      "rights.li4": "Contact the developer with any questions",

      "changes.eyebrow": "Updates",
      "changes.title": "Changes to this policy",
      "changes.p1": "This Privacy Policy may be updated from time to time. We encourage you to review it periodically. Continued use of DeTauro after changes are posted constitutes acceptance of those changes.",

      "contact.eyebrow": "Get in touch",
      "contact.title": "Questions about this policy?",
      "contact.desc": "Reach out directly — DeTauro is built and maintained by a single developer who reads every message.",
      "contact.developer": "Developer",
      "contact.company": "Company",
      "contact.email": "Email",
      "contact.github": "GitHub",
      "contact.copy": "Copy",

      "footer.rights": "All rights reserved.",

      "meta.title": "DeTauro — Privacy Policy",
      "meta.description": "DeTauro Privacy Policy — how the DeTauro focus & app-blocking app for Android collects, uses, and protects your information.",
      "lang.switchLabel": "العربية"
    },

    ar: {
      "nav.collect": "البيانات",
      "nav.permissions": "الأذونات",
      "nav.rights": "حقوقك",
      "nav.contact": "تواصل معنا",

      "hero.eyebrow": "الخصوصية والثقة",
      "hero.kicker": "سياسة الخصوصية",
      "hero.subtitle": "خصوصيتك تهمنا. صُمم تطبيق DeTauro لمساعدتك على التركيز مع احترام بياناتك الشخصية وحمايتها بالكامل.",
      "hero.updatedLabel": "آخر تحديث",
      "hero.viewPermissions": "عرض الأذونات",

      "intro.eyebrow": "مقدمة",
      "intro.title": "شرح مختصر وصريح",
      "intro.p1": "DeTauro تطبيق للتركيز وحظر التطبيقات، صُمم لمساعدتك على تقليل الوقت الذي تقضيه في التطبيقات المشتتة وزيادة الوقت المخصص لما يهمك فعلاً. توضح هذه السياسة، بلغة بسيطة، ما هي المعلومات التي يتعامل معها DeTauro، ولماذا، وكيف تتم حمايتها.",
      "intro.p2": "باستخدامك لتطبيق DeTauro، فإنك توافق على الممارسات الموضحة في سياسة الخصوصية هذه. إذا كنت لا توافق على أي جزء منها، يُرجى التوقف عن استخدام التطبيق.",

      "collect.eyebrow": "جمع البيانات",
      "collect.title": "المعلومات التي نجمعها",
      "collect.p1": "يجمع DeTauro فقط الحد الأدنى من المعلومات اللازمة لعمل التطبيق، ولا شيء أكثر من ذلك. معظم ما يقرأه DeTauro، مثل التطبيق المفتوح حالياً، تتم معالجته على جهازك لتطبيق قواعد التركيز التي قمت بإعدادها، ولا يرتبط بهويتك.",
      "collect.p2": "معلوماتك الشخصية لا تُباع أبداً. لا يقوم DeTauro ببناء ملفات تعريف إعلانية ولا يشارك بياناتك مع جهات تجارة البيانات.",
      "collect.card1": "أقل قدر من البيانات بالتصميم",
      "collect.card2": "لا تُباع أبداً لأي طرف ثالث",
      "collect.card3": "تتم معالجتها على جهازك قدر الإمكان",

      "perm.eyebrow": "شفافية",
      "perm.title": "الأذونات المستخدمة وأسبابها",
      "perm.desc": "كل إذن يطلبه DeTauro موجود لتشغيل ميزة محددة. إليك بالضبط ما تفعله كل واحدة منها.",

      "perm.notif.title": "الإشعارات",
      "perm.notif.body": "تُستخدم لإرسال تذكيرات التركيز، وتنبيهات الحظر، والرسائل المهمة الأخرى المتعلقة بجلساتك النشطة.",

      "perm.usage.title": "الوصول إلى بيانات الاستخدام",
      "perm.usage.body": "يُستخدم لمعرفة التطبيق المستخدم حالياً، حتى يتمكن DeTauro من تطبيق قواعد التركيز والحظر التي أعددتها.",

      "perm.access.title": "خدمة إمكانية الوصول (Accessibility)",
      "perm.access.body": "تُستخدم حصرياً لمساعدتك على تقليل المشتتات، من خلال التعرف على التطبيقات أو المواقع التي حددتها وتطبيق قواعد الحظر التي اخترتها.",
      "perm.access.not1": "لا تُستخدم لجمع المحادثات الشخصية",
      "perm.access.not2": "لا تُستخدم لقراءة كلمات المرور",
      "perm.access.not3": "لا تُستخدم لبيع البيانات",
      "perm.access.not4": "لا تُستخدم لأغراض إعلانية",
      "perm.access.note": "تبقى بياناتك على جهازك قدر الإمكان.",

      "perm.fg.title": "الخدمة الأمامية (Foreground Service)",
      "perm.fg.body": "تُبقي وضع التركيز وميزات الحماية تعمل بشكل موثوق طالما أنك فعّلتها.",

      "perm.batt.title": "تجاهل تحسين البطارية",
      "perm.batt.body": "يتيح لتطبيق DeTauro الاستمرار في حمايتك خلال جلسات التركيز الطويلة دون انقطاع بسبب ميزات توفير البطارية القوية.",

      "perm.bio.title": "المصادقة البيومترية",
      "perm.bio.body": "تتيح لك حماية الإعدادات المهمة بأمان باستخدام بصمة الإصبع أو التعرف على الوجه.",
      "perm.bio.note": "تتم معالجة البيانات البيومترية بواسطة نظام أندرويد ولا يخزّنها DeTauro أبداً.",

      "perm.storage.title": "التخزين (لأنظمة أندرويد القديمة)",
      "perm.storage.body": "يُستخدم فقط في إصدارات أندرويد الأقدم، عند الحاجة لاستيراد أو تصدير بيانات التطبيق. إصدارات أندرويد الحديثة لا تتطلب هذا الإذن.",

      "perm.boot.title": "بدء التشغيل (Boot Completed)",
      "perm.boot.body": "يتيح لتطبيق DeTauro استعادة الحماية تلقائياً بعد إعادة تشغيل الجهاز.",

      "perm.vib.title": "الاهتزاز",
      "perm.vib.body": "يوفر استجابة لمسية خفيفة للتفاعلات المهمة.",

      "use.eyebrow": "الغرض",
      "use.title": "كيف نستخدم المعلومات",
      "use.li1": "تقديم الميزات التي تطلبها",
      "use.li2": "تحسين استقرار التطبيق",
      "use.li3": "الحفاظ على جلسات التركيز الخاصة بك",
      "use.li4": "استعادة تفضيلاتك بعد إعادة التشغيل أو التحديثات",
      "use.li5": "تحسين تجربتك بشكل عام",

      "sec.eyebrow": "الحماية",
      "sec.title": "أمان البيانات",
      "sec.p1": "يتبع DeTauro أفضل الممارسات المتبعة في هذا المجال لحماية المعلومات التي يتعامل معها. يتم الاحتفاظ بالتفضيلات وبيانات التركيز في تخزين محلي آمن على جهازك قدر الإمكان.",
      "sec.p2": "في حال استخدام Firebase لدعم بعض الميزات، فإنه يعمل وفق معايير الأمان الخاصة به. يتخذ DeTauro إجراءات تقنية وتنظيمية معقولة لحماية معلوماتك من الفقدان وسوء الاستخدام والوصول غير المصرح به.",

      "kids.eyebrow": "الأطفال",
      "kids.title": "خصوصية الأطفال",
      "kids.p1": "لا يستهدف DeTauro الأطفال دون سن 13 عاماً، ولا نقوم عمداً بجمع معلومات شخصية من الأطفال.",

      "third.eyebrow": "أطراف ثالثة",
      "third.title": "خدمات الأطراف الثالثة",
      "third.p1": "قد يعتمد DeTauro على خدمات موثوقة لضمان عمله بشكل صحيح، مثل خدمات Google Play، وFirebase (إن كانت مفعّلة)، وواجهات نظام أندرويد. تحتفظ هذه الجهات بسياسات خصوصية خاصة بها تحكم طريقة تعاملها مع البيانات.",

      "ret.eyebrow": "الاحتفاظ بالبيانات",
      "ret.title": "مدة الاحتفاظ بالبيانات",
      "ret.p1": "يتم الاحتفاظ بالمعلومات فقط للمدة اللازمة لتقديم ميزات DeTauro. يمكنك حذف بيانات التطبيق في أي وقت من إعدادات جهازك.",

      "rights.eyebrow": "التحكم",
      "rights.title": "حقوقك",
      "rights.li1": "مراجعة المعلومات المرتبطة بالتطبيق",
      "rights.li2": "حذف بيانات التطبيق في أي وقت",
      "rights.li3": "إلغاء تثبيت التطبيق",
      "rights.li4": "التواصل مع المطوّر لأي استفسار",

      "changes.eyebrow": "التحديثات",
      "changes.title": "التغييرات على هذه السياسة",
      "changes.p1": "قد يتم تحديث سياسة الخصوصية هذه من وقت لآخر. نشجعك على مراجعتها بشكل دوري. استمرارك في استخدام DeTauro بعد نشر أي تغييرات يُعد قبولاً لتلك التغييرات.",

      "contact.eyebrow": "تواصل معنا",
      "contact.title": "لديك أسئلة حول هذه السياسة؟",
      "contact.desc": "تواصل معنا مباشرة — يقوم بتطوير DeTauro والحفاظ عليه مطوّر واحد يقرأ كل رسالة تصله.",
      "contact.developer": "المطوّر",
      "contact.company": "الشركة",
      "contact.email": "البريد الإلكتروني",
      "contact.github": "GitHub",
      "contact.copy": "نسخ",

      "footer.rights": "جميع الحقوق محفوظة.",

      "meta.title": "DeTauro — سياسة الخصوصية",
      "meta.description": "سياسة خصوصية DeTauro — كيف يقوم تطبيق DeTauro للتركيز وحظر التطبيقات على أندرويد بجمع معلوماتك واستخدامها وحمايتها.",
      "lang.switchLabel": "English"
    }
  };

  const LANG_KEY = "detauro-lang";
  const THEME_KEY = "detauro-theme";

  const html = document.documentElement;

  function applyLanguage(lang) {
    const dict = translations[lang];
    if (!dict) return;

    html.setAttribute("lang", lang);
    html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-title]").forEach((el) => {
      const key = el.getAttribute("data-i18n-title");
      if (dict[key] !== undefined) el.setAttribute("title", dict[key]);
    });

    document.title = dict["meta.title"];
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", dict["meta.description"]);

    const langLabel = document.getElementById("langLabel");
    if (langLabel) langLabel.textContent = dict["lang.switchLabel"];

    localStorage.setItem(LANG_KEY, lang);
  }

  function initLanguage() {
    const saved = localStorage.getItem(LANG_KEY);
    const browserLang = (navigator.language || "en").toLowerCase().startsWith("ar") ? "ar" : "en";
    applyLanguage(saved || browserLang);
  }

  document.getElementById("langSwitch").addEventListener("click", () => {
    const current = html.getAttribute("lang") === "ar" ? "ar" : "en";
    applyLanguage(current === "ar" ? "en" : "ar");
  });

  /* ===================== Theme ===================== */
  function applyTheme(theme) {
    html.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);
    const toggle = document.getElementById("themeToggle");
    if (toggle) toggle.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
  }

  function initTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved) {
      applyTheme(saved);
    } else {
      const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
      applyTheme(prefersLight ? "light" : "dark");
    }
  }

  document.getElementById("themeToggle").addEventListener("click", () => {
    const current = html.getAttribute("data-theme");
    applyTheme(current === "dark" ? "light" : "dark");
  });

  // Follow system changes only if the user hasn't chosen manually
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (!localStorage.getItem(THEME_KEY + "-manual")) {
      applyTheme(e.matches ? "dark" : "light");
    }
  });
  ["themeToggle"].forEach((id) => {
    document.getElementById(id).addEventListener("click", () => {
      localStorage.setItem(THEME_KEY + "-manual", "1");
    });
  });

  /* ===================== Scroll progress ===================== */
  const progressBar = document.getElementById("scrollProgress");
  function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = pct + "%";
  }

  /* ===================== Back to top ===================== */
  const backToTop = document.getElementById("backToTop");
  function updateBackToTop() {
    if (window.scrollY > 500) backToTop.classList.add("visible");
    else backToTop.classList.remove("visible");
  }
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    updateProgress();
    updateBackToTop();
  }, { passive: true });

  /* ===================== Reveal on scroll ===================== */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });

    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("in-view"));
  }

  /* ===================== Copy email ===================== */
  const copyBtn = document.getElementById("copyEmailBtn");
  const emailText = document.getElementById("emailText");

  copyBtn.addEventListener("click", async () => {
    const email = emailText.textContent.trim();
    try {
      await navigator.clipboard.writeText(email);
    } catch (err) {
      const temp = document.createElement("textarea");
      temp.value = email;
      document.body.appendChild(temp);
      temp.select();
      document.execCommand("copy");
      document.body.removeChild(temp);
    }
    copyBtn.classList.add("copied");
    const label = copyBtn.querySelector(".copy-label");
    const currentLang = html.getAttribute("lang") === "ar" ? "ar" : "en";
    const originalLabel = translations[currentLang]["contact.copy"];
    if (label) label.textContent = currentLang === "ar" ? "تم النسخ" : "Copied";
    setTimeout(() => {
      copyBtn.classList.remove("copied");
      if (label) label.textContent = originalLabel;
    }, 2000);
  });

  /* ===================== Last updated (dynamic, once) ===================== */
  // Fixed policy date — update this constant whenever the policy content changes.
  const POLICY_LAST_UPDATED = new Date("2026-07-18T00:00:00Z");
  function formatDate(lang) {
    return POLICY_LAST_UPDATED.toLocaleDateString(lang === "ar" ? "ar-EG" : "en-US", {
      year: "numeric", month: "long", day: "numeric"
    });
  }
  function updateLastUpdated() {
    const el = document.getElementById("lastUpdated");
    const currentLang = html.getAttribute("lang") === "ar" ? "ar" : "en";
    if (el) el.textContent = formatDate(currentLang);
  }

  /* ===================== Init ===================== */
  initTheme();
  initLanguage();
  updateLastUpdated();
  updateProgress();
  updateBackToTop();

  // Re-run date formatting whenever language toggles
  document.getElementById("langSwitch").addEventListener("click", () => {
    setTimeout(updateLastUpdated, 0);
  });

  // Lucide icons (not used directly — inline SVGs are used instead — kept for future extensibility)
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }
})();