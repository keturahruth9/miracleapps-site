(function () {
  const ios = (url) => ({ ios: url });
  const android = (url) => ({ android: url });
  const both = (iosUrl, androidUrl) => ({ ios: iosUrl, android: androidUrl });

  function examApp(config) {
    const abbreviation = config.abbreviation;
    const topic = config.topic;
    const domainText = config.domains || `${abbreviation} exam domains`;
    return {
      ...config,
      category: "Exam preparation",
      eyebrow: `${abbreviation} study companion`,
      tagline: `Prepare for ${abbreviation} with a clearer study rhythm.`,
      description: `Build confidence for the ${topic} exam with focused practice, helpful explanations, progress tracking, and review tools designed for consistent daily study.`,
      tags: ["Question bank", "Progress tracking", "Focused review", "Study anywhere"],
      features: [
        ["Focused topic practice", `Work through ${domainText} in manageable sessions instead of one overwhelming study block.`],
        ["Exam-style quizzes", "Switch from learning mode to timed practice when you are ready to test recall under pressure."],
        ["Readiness at a glance", "See progress clearly and understand which areas deserve the next study session."],
        ["Missed-question review", "Turn wrong answers into a focused review queue and close knowledge gaps faster."],
        ["Saved questions", "Bookmark high-value questions and build a personal revision list for the final stretch."],
        ["Daily momentum", "Keep key concepts fresh with quick practice that fits into a busy schedule."],
      ],
      benefits: [
        ["Study with direction", "Always know what to practice next."],
        ["Remember more", "Revisit weak areas before they become exam-day surprises."],
        ["Practice anywhere", "A clean mobile workflow makes short study sessions count."],
      ],
      privacy: "Your study choices, saved questions, and progress are treated as personal learning data. The app uses only the access needed to provide study and purchase features, with store billing handled by Apple or Google.",
      faq: [
        ["Is this an official certification app?", `No. This is an independent study companion and is not affiliated with or endorsed by the ${abbreviation} credential owner.`],
        ["Can I use it for short study sessions?", "Yes. Topic quizzes, saved questions, and missed-question review are designed to work well in focused sessions."],
        ["Does it replace the official exam guide?", "No. Use it alongside the current official exam outline, handbook, and other trusted study materials."],
        ["Can I review questions I missed?", "Yes. Missed-answer review is built into the study loop so weak areas are easy to revisit."],
      ],
      screenLabels: ["Readiness dashboard", "Focused practice", "Review weak areas"],
    };
  }

  window.MIRACLE_APPS = [
    {
      id: "fm_radio",
      slug: "fmradio",
      group: "Everyday apps",
      name: "FM Radio",
      shortName: "FM Radio",
      subtitle: "Listen to over 100,000+ radio stations",
      category: "Music & audio",
      eyebrow: "Live radio · iOS & Android",
      tagline: "The whole world of radio, one tap away.",
      description: "Discover live music, news, sports, talk, and local stations from around the world with fast search, favorites, background playback, and a listening experience made for everyday moments.",
      icon: "/fmradio/FMRadio_Appicon.png",
      colors: ["#16b871", "#000000"],
      stores: both("https://apps.apple.com/app/id6759460192", "https://play.google.com/store/apps/details?id=com.vectorinfo.radio"),
      tags: ["100,000+ stations", "Global discovery", "Favorites", "Background audio"],
      features: [
        ["Worldwide station directory", "Explore music, news, sports, talk, and culture across countries, languages, and genres."],
        ["Fast, useful search", "Find a familiar station or discover something new without digging through complicated menus."],
        ["Favorites and recents", "Keep your regular stations close and jump back into what you played recently."],
        ["Background listening", "Keep the radio playing while you use other apps or put your phone down."],
        ["Made for the road", "Use car-friendly controls and quick actions for a calmer listening experience on the move."],
        ["Listening controls", "Choose audio quality, set a sleep timer, and shape playback around your routine."],
      ],
      benefits: [["More choice", "Move beyond local presets and discover radio globally."], ["Less searching", "Favorites and recents make repeat listening effortless."], ["Fits your day", "Listen while driving, working, studying, or winding down."]],
      privacy: "Favorites, recents, and listening preferences are designed to stay on your device. No account is required to begin listening, and Miracle Apps does not sell your personal information.",
      faq: [["Do I need an account?", "No. You can start discovering and listening without creating an account."], ["Can I listen in the background?", "Yes. Playback can continue while you use other apps or lock your screen."], ["Why can a station become unavailable?", "Streams are provided by radio stations and directory partners, so a station may change or temporarily go offline."], ["Is every station free?", "The app provides access to live streams offered by their respective stations; normal internet data charges may apply."]],
      screenLabels: ["Discover stations", "Now playing", "Favorites & recents"],
      appStoreScreenshots: [
        { src: "/fmradio/appstore-screenshots/01.webp", label: "Discover music you love" },
        { src: "/fmradio/appstore-screenshots/02.webp", label: "Tune by country, language, and genre" },
        { src: "/fmradio/appstore-screenshots/03.webp", label: "Advanced station search" },
        { src: "/fmradio/appstore-screenshots/04.webp", label: "Favorite your stations" },
        { src: "/fmradio/appstore-screenshots/05.webp", label: "Station reminders" },
        { src: "/fmradio/appstore-screenshots/06.webp", label: "Add a custom station" },
      ],
    },
    {
      id: "qr_code_reader",
      slug: "qr-code-reader",
      group: "Everyday apps",
      name: "QR Code Reader",
      shortName: "QR Reader",
      subtitle: "Scan & create QR codes instantly",
      category: "Utilities",
      eyebrow: "Fast scanner · iOS & Android",
      tagline: "Scan it. Understand it. Get on with your day.",
      description: "A quick, focused QR companion for scanning codes, creating your own, and keeping useful results close without unnecessary complexity.",
      icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/2d/9b/a8/2d9ba814-62c6-bb74-c569-10361338f00a/AppIcon-0-0-1x_U007epad-0-11-0-85-220.png/512x512bb.jpg",
      colors: ["#ffb21a", "#ff5f57"],
      stores: both("https://apps.apple.com/app/id6761056096", "https://play.google.com/store/apps/details?id=com.vectorinfo.qrreader"),
      tags: ["Instant scan", "QR creator", "History", "Private by default"],
      features: [["Instant camera scanning", "Point the camera at a supported code and get a clear result in seconds."], ["Create your own codes", "Turn links and useful text into shareable QR codes."], ["Useful result actions", "Open, copy, share, or save a result without retyping it."], ["Scan from photos", "Read supported codes already saved in your photo library."], ["Organized history", "Return to recent scans when you need them again."], ["Broad format support", "Handle common QR and barcode formats in one focused utility."]],
      benefits: [["Save time", "Skip manual typing for links and encoded details."], ["Share simply", "Create clean codes for information you use often."], ["Stay in control", "Choose when a result is opened or shared."]],
      privacy: "Camera and photo access are used only when you choose to scan. Scan results are handled for the feature you request, and nothing is opened or shared until you take action.",
      faq: [["Can I create QR codes too?", "Yes. The app supports creating shareable QR codes, not only scanning them."], ["Can I scan a code from a saved photo?", "Yes, when photo access is available and you select an image."], ["Does scanning automatically open a link?", "No. The result is shown first so you stay in control."], ["Does it support both iPhone and Android?", "Yes. Download links for both stores are available on this page."]],
      screenLabels: ["Live scanner", "Clear scan result", "Create & share"],
    },
    {
      id: "cleanup_ai_photo_cleaner",
      slug: "cleanupai",
      group: "Everyday apps",
      name: "Cleanup AI: Photo Cleaner",
      shortName: "Cleanup AI",
      subtitle: "AI photo cleaner & storage saver",
      category: "Photo & video",
      eyebrow: "Smart cleanup · iOS & Android",
      tagline: "Make space without making cleanup a project.",
      description: "Review similar photos, duplicates, large files, and storage-heavy clutter through a calmer, more visual cleanup flow that keeps you in charge of every deletion.",
      icon: "/cleanupai/appicon.png",
      colors: ["#3c73ff", "#38d5ff"],
      stores: both("https://apps.apple.com/app/id6760357173", "https://play.google.com/store/apps/details?id=com.freespace.cleanup"),
      tags: ["AI sorting", "Similar photos", "Large files", "Storage insights"],
      features: [["Smart photo groups", "Surface duplicates and similar shots so large camera rolls become easier to review."], ["Keep-the-best review", "Compare related photos and decide what stays before anything is removed."], ["Large-file discovery", "Find storage-heavy videos and media that are easy to overlook."], ["Visual storage insights", "Understand what is using space before starting a cleanup session."], ["Guided cleanup", "Work through clutter in clear steps instead of one risky bulk action."], ["You approve every change", "Nothing is deleted without your explicit confirmation."]],
      benefits: [["Reclaim space", "Find high-impact cleanup opportunities quickly."], ["Protect memories", "Review related images before removing anything."], ["Feel organized", "Turn an overwhelming library into small decisions."]],
      privacy: "Photo access is used to analyze the library on your device and show cleanup suggestions. You stay in control of deletions, and Miracle Apps does not sell your personal photos or files.",
      faq: [["Will the app delete photos automatically?", "No. You review and confirm what should be removed."], ["Can I compare similar photos first?", "Yes. The review flow is designed to help you choose the version you want to keep."], ["Where do deleted photos go?", "Deletion follows the photo-library behavior provided by your device, including Recently Deleted where supported."], ["Does it work for large videos?", "The app can help surface storage-heavy media so you can review it deliberately."]],
      screenLabels: ["Storage overview", "Smart photo groups", "Review before delete"],
    },
    {
      id: "translate_all_free",
      slug: "translate-all",
      group: "Everyday apps",
      name: "Translate All Free",
      shortName: "Translate All",
      subtitle: "Translate photos, files & text",
      category: "Productivity",
      eyebrow: "Language tools · iOS & Android",
      tagline: "Understand more, wherever words find you.",
      description: "Translate text, photos, documents, and conversations through one clean workspace built for travel, learning, work, and everyday communication.",
      icon: "/traslator/Translator_Appicon.png",
      colors: ["#3165e8", "#00b8d9"],
      stores: both("https://apps.apple.com/app/id6758547788", "https://play.google.com/store/apps/details?id=com.vectorinfo.translatorpro"),
      tags: ["Text translation", "Photo OCR", "Files", "Voice"],
      features: [["Text translation", "Type or paste text and move between supported languages quickly."], ["Camera and photo translation", "Capture printed words or choose an image to extract and translate text."], ["File translation", "Work with common documents when copying text line by line is not practical."], ["Voice conversation", "Translate spoken phrases for more natural back-and-forth communication."], ["Translation history", "Return to useful translations without starting over."], ["Shareable results", "Copy or share translated content into the apps where you need it."]],
      benefits: [["Travel lighter", "Handle signs, menus, and quick conversations from one app."], ["Work faster", "Translate documents and images with fewer manual steps."], ["Learn in context", "Keep useful results close for later review."]],
      privacy: "Content is processed only to provide the translation you request. Online translation may use service providers, while available offline features keep supported processing on your device.",
      faq: [["Can I translate text in photos?", "Yes. Use the camera or choose a saved image to extract and translate supported text."], ["Can I translate documents?", "Common file types are supported where available on your device and app version."], ["Does it support voice?", "Yes. Spoken phrases can be translated for faster conversation."], ["Is internet access required?", "Some translation services need a connection; supported offline features vary by language and platform."]],
      screenLabels: ["Text workspace", "Camera translation", "Files & conversations"],
    },
    {
      id: "admob_revenue_tracker",
      slug: "admob-revenue-tracker",
      group: "Everyday apps",
      name: "AdMob Revenue Tracker",
      shortName: "AdMob Tracker",
      subtitle: "Track AdMob revenue insights",
      category: "Business",
      eyebrow: "Publisher insights · Android",
      tagline: "Your app revenue, clear at a glance.",
      description: "A focused reporting companion for app publishers who want quick access to AdMob performance, useful trends, and the numbers that matter while away from the desk.",
      icon: "https://play-lh.googleusercontent.com/585rBJRT2E9Rpbb2U05_hXiMDNGi97LIRdnd6UyKWFeXNPCCtHpApgkJQLiaI6joMq9PnhTcUKu2Yvb4lOvi",
      colors: ["#ffb000", "#ff5c35"],
      stores: android("https://play.google.com/store/apps/details?id=com.vectorinfo.admob"),
      tags: ["Revenue overview", "Performance trends", "App breakdown", "Secure sign-in"],
      features: [["Revenue dashboard", "See key earnings metrics in a clean summary made for quick checks."], ["Date-range comparison", "Move between daily, weekly, and broader performance views."], ["App-level insights", "Understand how individual products contribute to the total."], ["Performance metrics", "Review impressions, clicks, eCPM, and other useful reporting signals."], ["Trend visibility", "Spot movement over time without rebuilding a spreadsheet."], ["Google-connected reporting", "Use authorized access to view the reporting data tied to your account."]],
      benefits: [["Check faster", "Get the headline numbers without opening a desktop dashboard."], ["Spot changes", "Use trend views to notice meaningful movement sooner."], ["Stay focused", "A mobile-first interface keeps reporting easy to scan."]],
      privacy: "Account authorization and reporting data are used only to provide the dashboard you request. Sign-in and AdMob reporting are handled through Google services; Miracle Apps does not ask for your Google password.",
      faq: [["Is this an official Google app?", "No. It is an independent reporting companion and is not endorsed by Google."], ["Does the app need my Google password?", "No. Authorization should occur through Google's sign-in flow."], ["Can I view multiple apps?", "The dashboard is designed to surface app-level reporting available to the connected account."], ["Is it available for iPhone?", "The catalog currently provides an Android download only."]],
      screenLabels: ["Revenue overview", "Performance trends", "App-level metrics"],
    },
    {
      id: "chitcalculator",
      slug: "chitcalculator",
      group: "Everyday apps",
      name: "ChitCalculator",
      shortName: "ChitCalculator",
      subtitle: "Manage chit funds easily",
      category: "Finance",
      eyebrow: "Chit planning · iOS",
      tagline: "Clearer chit calculations, fewer loose notes.",
      description: "Plan contributions, understand auction outcomes, and keep important chit-fund calculations organized in a straightforward mobile companion.",
      icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/d9/95/e5/d995e549-d1f4-0797-c84e-0f134af2a3f0/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
      colors: ["#18a878", "#5bd09d"],
      stores: ios("https://apps.apple.com/app/id1489475241"),
      tags: ["Chit planning", "Auction math", "Contribution view", "Simple records"],
      features: [["Chit calculations", "Model common contribution and payout scenarios with less manual arithmetic."], ["Auction outcomes", "Understand how bid values can affect the period and member amounts."], ["Clear schedules", "Keep recurring figures organized in a format that is easy to revisit."], ["Member-friendly summaries", "Turn calculations into a simpler overview for discussion and planning."], ["Local organization", "Keep useful calculation records close on your device."], ["Focused interface", "Get to the number you need without spreadsheet overhead."]],
      benefits: [["Reduce mistakes", "Use consistent calculations instead of scattered manual notes."], ["Plan confidently", "Compare scenarios before making a decision."], ["Keep context", "Return to prior figures when the next period arrives."]],
      privacy: "Chit and calculation details are treated as private financial planning information. The app is designed to avoid unnecessary data collection and does not connect to your bank account.",
      faq: [["Does the app connect to my bank?", "No. It is a calculation and organization tool, not a banking service."], ["Are calculations financial advice?", "No. Results are estimates for planning; confirm final figures with the chit organizer or a qualified adviser."], ["Can I save calculations?", "The app provides organization tools for revisiting useful chit details."], ["Is it available on Android?", "The catalog currently provides an iPhone download only."]],
      screenLabels: ["Chit overview", "Auction calculator", "Contribution summary"],
    },
    {
      id: "secret_vault_pro",
      slug: "vault",
      group: "Everyday apps",
      name: "Secret Vault Pro",
      shortName: "Secret Vault",
      subtitle: "Hide photos & videos securely",
      category: "Privacy",
      eyebrow: "Private media · iOS",
      tagline: "A quieter place for private photos and videos.",
      description: "Organize sensitive media behind a discreet calculator-style lock with biometric access, private albums, and controls designed to keep personal files personal.",
      icon: "/vault/Vault_Appicon.png",
      colors: ["#20242b", "#f2c94c"],
      stores: ios("https://apps.apple.com/app/id1369763159"),
      tags: ["Private albums", "Biometric lock", "Discreet access", "Photo & video"],
      features: [["Private photo vault", "Import and organize personal photos inside protected albums."], ["Private video vault", "Keep sensitive videos away from the everyday camera-roll view."], ["Calculator-style entry", "Use a discreet interface that does not advertise the vault's contents."], ["Biometric unlock", "Use Face ID or Touch ID where supported for quick private access."], ["Album organization", "Create a structure that makes protected media easier to manage."], ["Private browsing tools", "Use privacy-oriented browsing and save selected content intentionally."]],
      benefits: [["More discretion", "Keep private media separate from the main photo library."], ["Faster access", "Biometrics make security feel less cumbersome."], ["Better organization", "Albums bring order to files you want to keep protected."]],
      privacy: "Your private media is protected through device-level access controls and the storage options you choose. Miracle Apps cannot see the contents of your vault, and your passcode remains your responsibility.",
      faq: [["Can Miracle Apps see my vault?", "No. Vault contents are designed to remain under your control through your device and selected storage settings."], ["What if I forget my passcode?", "Recovery options depend on the version and settings you enabled; keep device access and recovery details secure."], ["Does it support Face ID or Touch ID?", "Yes, on supported devices when biometric access is enabled."], ["Should I keep a backup?", "Yes. Maintain a secure backup of irreplaceable files and never rely on one app or device as the only copy."]],
      screenLabels: ["Discreet lock", "Private albums", "Secure media viewer"],
    },
    examApp({
      id: "pmi_pmp_exam_preparation", slug: "pmp", group: "Exam preparation", name: "PMI PMP Exam Preparation", shortName: "PMP Prep", subtitle: "Project Management Professional study tool", abbreviation: "PMP", topic: "Project Management Professional", domains: "project management principles, people, process, and business-environment topics", icon: "/pmp/PMP_Appicon.png", colors: ["#5c4ee5", "#34d5e8"], stores: both("https://apps.apple.com/app/id6737227841", "https://play.google.com/store/apps/details?id=com.exam.pmpquiz")
    }),
    examApp({
      id: "rbt_exam_prep_2nd_edition", slug: "rbt", group: "Exam preparation", name: "RBT Exam Prep — 2nd Edition", shortName: "RBT Prep", subtitle: "Registered Behavior Technician exam prep", abbreviation: "RBT", topic: "Registered Behavior Technician", domains: "the current RBT task-list areas", icon: "/rbt/RBT_Appicon.png", colors: ["#0e879c", "#44d2c1"], stores: both("https://apps.apple.com/app/id6738731714", "https://play.google.com/store/apps/details?id=com.quiz.rbt")
    }),
    examApp({
      id: "acsm_cpt_exam_preparation", slug: "acsmcpt", group: "Exam preparation", name: "ACSM-CPT Exam Preparation", shortName: "ACSM-CPT Prep", subtitle: "ACSM-CPT certification question bank", abbreviation: "ACSM-CPT", topic: "Certified Personal Trainer", domains: "fitness assessment, exercise programming, client consultation, and professional practice", icon: "/acsmcpt/ACSMCPT_Appicon.png", colors: ["#1694a5", "#ffbf47"], stores: both("https://apps.apple.com/app/id1454106031", "https://play.google.com/store/apps/details?id=com.exam.acsmcpt")
    }),
    examApp({
      id: "bcba_exam_prep_6th_edition", slug: "aba", group: "Exam preparation", name: "BCBA Exam Prep — 6th Edition", shortName: "BCBA Prep", subtitle: "Board Certified Behavior Analyst prep", abbreviation: "BCBA", topic: "Board Certified Behavior Analyst", domains: "the 6th-edition behavior-analysis task areas", icon: "/aba/ABA_Appicon.png", colors: ["#5b6e88", "#15c7dc"], stores: both("https://apps.apple.com/app/id6738604267", "https://play.google.com/store/apps/details?id=com.quiz.aba")
    }),
    examApp({
      id: "cfp_exam_financial_planner", slug: "cfp-exam", group: "Exam preparation", name: "CFP Exam — Financial Planner", shortName: "CFP Prep", subtitle: "Certified Financial Planner exam prep", abbreviation: "CFP", topic: "Certified Financial Planner", domains: "professional conduct, financial planning, tax, retirement, estate, insurance, and investment topics", icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/1f/d6/59/1fd659f9-45d6-c621-e992-7064665c9b44/AppIcon-0-0-1x_U007emarketing-0-11-0-sRGB-85-220.png/512x512bb.jpg", colors: ["#1265d6", "#4cc9f0"], stores: both("https://apps.apple.com/app/id6753813007", "https://play.google.com/store/apps/details?id=com.quiz.cfp")
    }),
    examApp({
      id: "cissp_exam_preparation", slug: "cissp-exam", group: "Exam preparation", name: "CISSP Exam Preparation", shortName: "CISSP Prep", subtitle: "Information security certification prep", abbreviation: "CISSP", topic: "Certified Information Systems Security Professional", domains: "security and risk, asset security, architecture, networks, identity, assessment, operations, and software security", icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/b5/9a/c5/b59ac524-42c9-8d32-d57d-bdb282cab054/AppIcon-0-0-1x_U007emarketing-0-11-0-sRGB-85-220.png/512x512bb.jpg", colors: ["#0f5d8f", "#33d1b7"], stores: both("https://apps.apple.com/app/id6754099337", "https://play.google.com/store/apps/details?id=com.quiz.cissp")
    }),
    examApp({
      id: "cma_part1_exam_preparation", slug: "cma-part1", group: "Exam preparation", name: "CMA Part 1 Exam Preparation", shortName: "CMA Part 1", subtitle: "Certified Management Accountant Part 1", abbreviation: "CMA Part 1", topic: "Certified Management Accountant Part 1", domains: "planning, budgeting, performance, cost management, controls, technology, and analytics", icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/2b/d1/e8/2bd1e87e-0c73-fba0-b662-5bf41ed0b708/AppIcon-0-0-1x_U007epad-0-11-0-sRGB-85-220.png/512x512bb.jpg", colors: ["#3562d9", "#f6b73c"], stores: both("https://apps.apple.com/app/id6755318524", "https://play.google.com/store/apps/details?id=com.quiz.cma1")
    }),
    examApp({
      id: "cma_part2_exam_preparation", slug: "cma-part2", group: "Exam preparation", name: "CMA Part 2 Exam Preparation", shortName: "CMA Part 2", subtitle: "Certified Management Accountant Part 2", abbreviation: "CMA Part 2", topic: "Certified Management Accountant Part 2", domains: "financial statements, corporate finance, decision analysis, risk, investment, and ethics", icon: "/cma-part2/CMA_Appicon.png", colors: ["#406be0", "#f6a93b"], stores: both("https://apps.apple.com/app/id6755318438", "https://play.google.com/store/apps/details?id=com.quiz.cma2")
    }),
    examApp({
      id: "ctp_exam_preparation", slug: "ctp-exam", group: "Exam preparation", name: "CTP Exam Preparation", shortName: "CTP Prep", subtitle: "Certified Treasury Professional exam prep", abbreviation: "CTP", topic: "Certified Treasury Professional", domains: "liquidity, capital, risk, treasury operations, technology, and financial management", icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/54/2a/34/542a343d-c24b-d995-68bf-0e68f973b73a/AppIcon-0-0-1x_U007emarketing-0-8-0-sRGB-85-220.png/512x512bb.jpg", colors: ["#1d7d73", "#5ed0ae"], stores: both("https://apps.apple.com/app/id6670214747", "https://play.google.com/store/apps/details?id=com.quiz.ctp")
    }),
  ];
})();
