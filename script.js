(function () {
  "use strict";

  /* ===================== i18n ===================== */
  const translations = {
    en: {
      "nav.offline": "Offline-first",
      "nav.collect": "Data",
      "nav.permissions": "Permissions",
      "nav.rights": "Your rights",
      "nav.contact": "Contact",

      "hero.eyebrow": "Legal & Trust",
      "hero.kicker": "Privacy Policy",
      "hero.subtitle": "Your privacy matters. DeTauro works completely offline and processes everything locally on your device — nothing is uploaded, ever.",
      "hero.updatedLabel": "Last updated",
      "hero.offlineBadge": "100% offline · no cloud",
      "hero.viewPermissions": "View permissions",

      "intro.eyebrow": "Introduction",
      "intro.title": "A short, honest explanation",
      "intro.p1": "DeTauro is a focus and app-blocking application built to help you spend less time on distracting apps and more time on what matters. This policy explains, in plain language, what information DeTauro interacts with, why, and how it is protected.",
      "intro.p2": "DeTauro is completely offline-first: there is no user account, no cloud database, and no remote server. Everything described in this Policy happens locally, on your device.",
      "intro.p3": "By using DeTauro, you agree to the practices described in this Privacy Policy. If you do not agree with any part of it, please discontinue use of the application.",

      "offline.eyebrow": "Offline-first",
      "offline.title": "Built to work entirely offline",
      "offline.desc": "DeTauro has no Firebase, no cloud database, no online user accounts, no remote analytics, and no server-side processing of any kind. Privacy isn't a setting — it's how the app is built.",
      "offline.deviceHeading": "What stays on your device",
      "offline.device1": "Your settings remain on your device",
      "offline.device2": "Focus sessions remain on your device",
      "offline.device3": "Blocking configuration remains on your device",
      "offline.device4": "Statistics remain on your device",
      "offline.device5": "Accessibility processing happens locally",
      "offline.device6": "Usage Access is processed locally",
      "offline.device7": "No browsing history is uploaded",
      "offline.device8": "No application usage information is uploaded",
      "offline.device9": "No personal information is transmitted to external servers",
      "offline.principlesHeading": "Our privacy principles",
      "offline.principle1": "Everything is processed locally",
      "offline.principle2": "No user account is required",
      "offline.principle3": "No registration is required",
      "offline.principle4": "No cloud synchronization exists",
      "offline.principle5": "No personal data is sold",
      "offline.principle6": "No personal data is shared",
      "offline.principle7": "No advertising identifiers are collected",
      "offline.principle8": "No behavioral profiling is performed",

      "collect.eyebrow": "Data collection",
      "collect.title": "Information we collect",
      "collect.p1": "DeTauro only collects the minimum information necessary for the app to function — nothing more. Everything DeTauro reads, such as which app is currently open, is processed locally on your device to apply the focus rules you configured. It is never uploaded and is not linked to your identity.",
      "collect.p2": "Your personal information is never sold. DeTauro does not build advertising profiles and does not share your data with data brokers.",
      "collect.card1": "Minimum data by design",
      "collect.card2": "Never sold to third parties",
      "collect.card3": "100% processed on your device",
      "collect.card4": "No account or sign-in required",

      "perm.eyebrow": "Transparency",
      "perm.title": "Permissions used, and why",
      "perm.desc": "Every permission DeTauro requests exists to make a specific feature work. Here is exactly what each one does.",

      "perm.notif.title": "Notifications",
      "perm.notif.body": "Used to send focus reminders, blocker alerts, and other important messages about your active sessions.",

      "perm.usage.title": "Usage Access",
      "perm.usage.body": "Used to detect which app is currently in use, so DeTauro can apply the focus and blocking rules you set up. This is processed entirely on your device and is never uploaded.",

      "perm.access.title": "Accessibility Service",
      "perm.access.body": "Used exclusively to help you reduce distractions, by detecting configured apps or websites and applying the blocking rules you chose. All of this happens locally, in real time, on your device.",
      "perm.access.not1": "Not used to collect personal conversations",
      "perm.access.not2": "Not used to read passwords",
      "perm.access.not3": "Not used to sell data",
      "perm.access.not4": "Not used for advertising",
      "perm.access.not5": "Never transmitted off your device",
      "perm.access.note": "All data stays on your device. Nothing is uploaded, synced, or transmitted anywhere.",

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
      "use.note": "All of this happens locally on your device — DeTauro does not use cloud infrastructure to deliver these features.",

      "sec.eyebrow": "Protection",
      "sec.title": "Data security",
      "sec.p1": "DeTauro follows industry best practices to protect the information it handles. Preferences and focus data are kept in secure local storage on your device, protected by Android's own operating-system-level security.",
      "sec.p2": "Because DeTauro has no server, no cloud database, and no remote infrastructure, your data is never exposed to network transmission, server breaches, or third-party cloud providers. DeTauro takes reasonable technical measures to protect your information against loss and unauthorized local access, such as biometric locks for sensitive settings.",

      "kids.eyebrow": "Who DeTauro is for",
      "kids.title": "Designed for every age",
      "kids.p1": "DeTauro is designed for users of all ages. It includes optional parental supervision features, and can also be used independently by adults who simply want to stay focused.",
      "kids.p2": "The application does not knowingly collect personal information from children. As explained throughout this Policy, DeTauro does not collect, transmit, or store personal information on any server, regardless of the user's age.",

      "third.eyebrow": "Third parties",
      "third.title": "Third-party services",
      "third.p1": "DeTauro relies only on trusted platform components to operate correctly on Android, such as the Android Operating System itself, Google Play Services (where available on the device), and, if integrated in the future, Google Play Billing for optional purchases.",
      "third.p2": "These are system-level components required for the OS or the Play Store to function — DeTauro does not send your personal data to them, and does not use any remote database, analytics, or authentication service.",

      "ret.eyebrow": "Retention",
      "ret.title": "Data retention",
      "ret.p1": "Because everything is stored locally, information is retained only for as long as it stays on your device — there is no server-side copy to retain. You may delete your application data at any time from your device settings, or by uninstalling the app.",

      "rights.eyebrow": "Control",
      "rights.title": "Your rights",
      "rights.li1": "Review the information associated with the app",
      "rights.li2": "Delete application data at any time",
      "rights.li3": "Uninstall the application",
      "rights.li4": "Contact the developer with any questions",
      "rights.note": "Because there is no account and no server, uninstalling DeTauro permanently removes all of your data — there is nothing left behind on any server.",

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
      "meta.description": "DeTauro Privacy Policy — how the offline-first DeTauro focus & app-blocking app for Android processes everything locally, with no cloud, no accounts, and no data transmission.",
      "lang.switchLabel": "العربية"
    },

    ar: {
      "nav.offline": "غير متصل بالإنترنت",
      "nav.collect": "البيانات",
      "nav.permissions": "الأذونات",
      "nav.rights": "حقوقك",
      "nav.contact": "تواصل معنا",

      "hero.eyebrow": "الخصوصية والثقة",
      "hero.kicker": "سياسة الخصوصية",
      "hero.subtitle": "خصوصيتك تهمنا. يعمل DeTauro بالكامل دون اتصال بالإنترنت ويعالج كل شيء محلياً على جهازك — لا يتم رفع أي شيء إلى الخارج أبداً.",
      "hero.updatedLabel": "آخر تحديث",
      "hero.offlineBadge": "يعمل بالكامل دون إنترنت · بدون سحابة",
      "hero.viewPermissions": "عرض الأذونات",

      "intro.eyebrow": "مقدمة",
      "intro.title": "شرح مختصر وصريح",
      "intro.p1": "DeTauro تطبيق للتركيز وحظر التطبيقات، صُمم لمساعدتك على تقليل الوقت الذي تقضيه في التطبيقات المشتتة وزيادة الوقت المخصص لما يهمك فعلاً. توضح هذه السياسة، بلغة بسيطة، ما هي المعلومات التي يتعامل معها DeTauro، ولماذا، وكيف تتم حمايتها.",
      "intro.p2": "يعمل DeTauro بالكامل دون اتصال بالإنترنت: لا يوجد حساب مستخدم، ولا قاعدة بيانات سحابية، ولا خادم عن بُعد. كل ما هو موضح في هذه السياسة يحدث محلياً، على جهازك.",
      "intro.p3": "باستخدامك لتطبيق DeTauro، فإنك توافق على الممارسات الموضحة في سياسة الخصوصية هذه. إذا كنت لا توافق على أي جزء منها، يُرجى التوقف عن استخدام التطبيق.",

      "offline.eyebrow": "غير متصل بالإنترنت",
      "offline.title": "مصمم للعمل بالكامل دون إنترنت",
      "offline.desc": "لا يحتوي DeTauro على Firebase، ولا قاعدة بيانات سحابية، ولا حسابات مستخدمين عبر الإنترنت، ولا تحليلات عن بُعد، ولا أي معالجة على خوادم من أي نوع. الخصوصية ليست إعداداً يمكن تفعيله أو إلغاؤه — بل هي طريقة بناء التطبيق نفسها.",
      "offline.deviceHeading": "ما يبقى على جهازك",
      "offline.device1": "إعداداتك تبقى على جهازك",
      "offline.device2": "جلسات التركيز تبقى على جهازك",
      "offline.device3": "إعدادات الحظر تبقى على جهازك",
      "offline.device4": "الإحصائيات تبقى على جهازك",
      "offline.device5": "معالجة إمكانية الوصول تتم محلياً",
      "offline.device6": "الوصول إلى بيانات الاستخدام يُعالج محلياً",
      "offline.device7": "لا يتم رفع سجل التصفح إلى أي خادم",
      "offline.device8": "لا يتم رفع معلومات استخدام التطبيقات إلى أي خادم",
      "offline.device9": "لا يتم إرسال أي معلومات شخصية إلى خوادم خارجية",
      "offline.principlesHeading": "مبادئ الخصوصية لدينا",
      "offline.principle1": "كل شيء تتم معالجته محلياً",
      "offline.principle2": "لا حاجة لحساب مستخدم",
      "offline.principle3": "لا حاجة للتسجيل",
      "offline.principle4": "لا توجد مزامنة سحابية",
      "offline.principle5": "لا تُباع أي بيانات شخصية",
      "offline.principle6": "لا تُشارك أي بيانات شخصية",
      "offline.principle7": "لا يتم جمع أي معرّفات إعلانية",
      "offline.principle8": "لا يتم إجراء أي تحليل سلوكي للمستخدم",

      "collect.eyebrow": "جمع البيانات",
      "collect.title": "المعلومات التي نجمعها",
      "collect.p1": "يجمع DeTauro فقط الحد الأدنى من المعلومات اللازمة لعمل التطبيق، ولا شيء أكثر من ذلك. كل ما يقرأه DeTauro، مثل التطبيق المفتوح حالياً، تتم معالجته محلياً على جهازك لتطبيق قواعد التركيز التي قمت بإعدادها. لا يتم رفعه إلى أي مكان ولا يرتبط بهويتك.",
      "collect.p2": "معلوماتك الشخصية لا تُباع أبداً. لا يقوم DeTauro ببناء ملفات تعريف إعلانية ولا يشارك بياناتك مع جهات تجارة البيانات.",
      "collect.card1": "أقل قدر من البيانات بالتصميم",
      "collect.card2": "لا تُباع أبداً لأي طرف ثالث",
      "collect.card3": "تتم معالجتها بالكامل على جهازك",
      "collect.card4": "لا حاجة لحساب أو تسجيل دخول",

      "perm.eyebrow": "شفافية",
      "perm.title": "الأذونات المستخدمة وأسبابها",
      "perm.desc": "كل إذن يطلبه DeTauro موجود لتشغيل ميزة محددة. إليك بالضبط ما تفعله كل واحدة منها.",

      "perm.notif.title": "الإشعارات",
      "perm.notif.body": "تُستخدم لإرسال تذكيرات التركيز، وتنبيهات الحظر، والرسائل المهمة الأخرى المتعلقة بجلساتك النشطة.",

      "perm.usage.title": "الوصول إلى بيانات الاستخدام",
      "perm.usage.body": "يُستخدم لمعرفة التطبيق المستخدم حالياً، حتى يتمكن DeTauro من تطبيق قواعد التركيز والحظر التي أعددتها. تتم معالجة ذلك بالكامل على جهازك ولا يتم رفعه إلى أي مكان.",

      "perm.access.title": "خدمة إمكانية الوصول (Accessibility)",
      "perm.access.body": "تُستخدم حصرياً لمساعدتك على تقليل المشتتات، من خلال التعرف على التطبيقات أو المواقع التي حددتها وتطبيق قواعد الحظر التي اخترتها. يحدث كل ذلك محلياً وبشكل لحظي على جهازك.",
      "perm.access.not1": "لا تُستخدم لجمع المحادثات الشخصية",
      "perm.access.not2": "لا تُستخدم لقراءة كلمات المرور",
      "perm.access.not3": "لا تُستخدم لبيع البيانات",
      "perm.access.not4": "لا تُستخدم لأغراض إعلانية",
      "perm.access.not5": "لا تُنقل مطلقاً خارج جهازك",
      "perm.access.note": "تبقى جميع بياناتك على جهازك. لا شيء يُرفع أو يُزامَن أو يُنقل إلى أي مكان.",

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
      "use.note": "كل هذا يحدث محلياً على جهازك — لا يعتمد DeTauro على أي بنية تحتية سحابية لتقديم هذه الميزات.",

      "sec.eyebrow": "الحماية",
      "sec.title": "أمان البيانات",
      "sec.p1": "يتبع DeTauro أفضل الممارسات المتبعة في هذا المجال لحماية المعلومات التي يتعامل معها. يتم الاحتفاظ بالتفضيلات وبيانات التركيز في تخزين محلي آمن على جهازك، محمي بواسطة الأمان الخاص بنظام تشغيل أندرويد نفسه.",
      "sec.p2": "نظراً لأن DeTauro لا يمتلك أي خادم أو قاعدة بيانات سحابية أو بنية تحتية عن بُعد، فإن بياناتك لا تتعرض أبداً لنقل عبر الشبكة أو اختراق خوادم أو أي مزوّد سحابي خارجي. يتخذ DeTauro إجراءات تقنية معقولة لحماية معلوماتك من الفقدان والوصول المحلي غير المصرح به، مثل قفل البصمة أو الوجه للإعدادات الحساسة.",

      "kids.eyebrow": "لمن صُمم DeTauro",
      "kids.title": "مصمم لجميع الأعمار",
      "kids.p1": "صُمم DeTauro ليناسب المستخدمين من جميع الأعمار. يتضمن ميزات اختيارية للرقابة الأبوية، ويمكن أيضاً استخدامه بشكل مستقل من قبل البالغين الذين يرغبون ببساطة في الحفاظ على تركيزهم.",
      "kids.p2": "لا يقوم التطبيق عمداً بجمع معلومات شخصية من الأطفال. وكما هو موضح في جميع أجزاء هذه السياسة، لا يقوم DeTauro بجمع أو نقل أو تخزين أي معلومات شخصية على أي خادم، بغض النظر عن عمر المستخدم.",

      "third.eyebrow": "أطراف ثالثة",
      "third.title": "خدمات الأطراف الثالثة",
      "third.p1": "يعتمد DeTauro فقط على مكونات المنصة الموثوقة اللازمة لعمله بشكل صحيح على أندرويد، مثل نظام تشغيل أندرويد نفسه، وخدمات Google Play (إن كانت متوفرة على جهازك)، وخدمة Google Play Billing لعمليات الشراء الاختيارية إن تم دمجها مستقبلاً.",
      "third.p2": "هذه مكونات على مستوى النظام مطلوبة لعمل نظام التشغيل أو متجر Play — لا يرسل DeTauro بياناتك الشخصية إليها، ولا يستخدم أي قاعدة بيانات عن بُعد أو خدمة تحليلات أو خدمة مصادقة.",

      "ret.eyebrow": "الاحتفاظ بالبيانات",
      "ret.title": "مدة الاحتفاظ بالبيانات",
      "ret.p1": "بما أن كل شيء مُخزَّن محلياً، يتم الاحتفاظ بالمعلومات فقط طالما بقيت على جهازك — فلا توجد نسخة على أي خادم للاحتفاظ بها. يمكنك حذف بيانات التطبيق في أي وقت من إعدادات جهازك، أو عبر إلغاء تثبيت التطبيق.",

      "rights.eyebrow": "التحكم",
      "rights.title": "حقوقك",
      "rights.li1": "مراجعة المعلومات المرتبطة بالتطبيق",
      "rights.li2": "حذف بيانات التطبيق في أي وقت",
      "rights.li3": "إلغاء تثبيت التطبيق",
      "rights.li4": "التواصل مع المطوّر لأي استفسار",
      "rights.note": "نظراً لعدم وجود حساب أو خادم، فإن إلغاء تثبيت DeTauro يزيل جميع بياناتك بشكل نهائي — ولا يبقى منها أي أثر على أي خادم.",

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
      "meta.description": "سياسة خصوصية DeTauro — كيف يعالج تطبيق DeTauro، العامل دون اتصال بالإنترنت بالكامل، كل شيء محلياً على جهازك دون سحابة أو حسابات أو نقل بيانات.",
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

  /* ===================== Active nav link (scroll-spy) ===================== */
  const navLinks = Array.from(document.querySelectorAll(".nav-links a"));
  const navSectionIds = navLinks
    .map((a) => a.getAttribute("href"))
    .filter((href) => href && href.startsWith("#"))
    .map((href) => href.slice(1));
  const navSections = navSectionIds
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  function setActiveNavLink(id) {
    navLinks.forEach((a) => {
      a.classList.toggle("active", a.getAttribute("href") === "#" + id);
    });
  }

  if ("IntersectionObserver" in window && navSections.length) {
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveNavLink(entry.target.id);
      });
    }, { rootMargin: "-45% 0px -45% 0px", threshold: 0 });

    navSections.forEach((section) => navObserver.observe(section));
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
