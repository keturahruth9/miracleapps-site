const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const effectiveDate = "August 23, 2026";
const supportEmail = "support@miracleapps.in";

const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
}[character]));

function section(title, paragraphs, link) {
  return { title, paragraphs: Array.isArray(paragraphs) ? paragraphs : [paragraphs], link };
}

function supportSection(policyName) {
  return section("Contact us", `If you have questions about this ${policyName}, need help with the app, or want to report a privacy concern, contact Miracle Apps at ${supportEmail}.`, {
    href: `mailto:${supportEmail}`,
    label: supportEmail,
  });
}

function privacyClosing(app) {
  return [
    section("Children’s privacy", `${app.name} is not directed to children under 13, and Miracle Apps does not knowingly collect personal information from children through the app.`),
    section("Policy updates", `We may update this Privacy Policy when the app, platform requirements, or applicable services change. The effective date at the top of this page identifies the current version.`),
    section("Terms and Conditions", `The Terms and Conditions for ${app.name} are available at https://www.miracleapps.in/${app.slug}/terms/.`, {
      href: `/${app.slug}/terms/`,
      label: "Open Terms & Conditions",
    }),
    supportSection("Privacy Policy"),
  ];
}

function termsClosing(app) {
  return [
    section("Privacy Policy", `Your use of ${app.name} is also subject to its Privacy Policy at https://www.miracleapps.in/${app.slug}/privacy/.`, {
      href: `/${app.slug}/privacy/`,
      label: "Open Privacy Policy",
    }),
    section("Changes to these terms", "We may update these terms when the app, its features, or legal requirements change. Continued use after an update means you accept the revised terms."),
    section("Governing terms", "These terms apply to the extent permitted by applicable law. If one provision cannot be enforced, the remaining provisions continue to apply."),
    supportSection("Terms and Conditions"),
  ];
}

function examApp(config) {
  const app = { ...config };
  app.privacy = [
    section("Overview", `${app.name} is an independent study and practice app for people preparing for the ${app.examName}. This policy explains how study information, purchases, reminders, and support messages are handled.`),
    section("Data the app does not collect", `Miracle Apps does not collect or share personal data from your use of ${app.name}. The current store disclosures identify the app as collecting no data. We do not sell personal information or require an account for normal study use.`),
    section("Study data stored on your device", `Practice answers, quiz results, readiness indicators, saved and missed questions, study streaks, exam preferences, and study-plan progress may be stored locally on your device so the app can preserve your learning history.`),
    section("Notifications and widgets", "If you enable study reminders, notifications or widgets, the app uses the permissions and scheduling features provided by your device. You can change or disable them at any time in the app or system settings."),
    section("Purchases and premium access", "Apple or Google processes in-app purchases, subscriptions, restorations, billing, cancellations, and refunds. Miracle Apps does not receive your full payment-card details. The platform may provide purchase status so the app can unlock premium access."),
    section("Device and platform services", "The app relies on operating-system storage, notification, purchase, and backup services. Apple and Google process information under their own privacy policies when you use those platform features."),
    section("Your choices and deletion", "You can reset study progress where that option is available, disable notifications in system settings, and remove locally stored app data by deleting the app. Reinstalling or restoring a device backup may restore data according to your platform settings."),
    section("Support messages", `If you email ${supportEmail}, we receive the address and information you choose to include so we can respond. Support correspondence is separate from normal in-app study activity and is retained only as reasonably needed to resolve the request and maintain support records.`),
    section("Security", "We use the safeguards available through the mobile platform and keep collection to a minimum. No storage or transmission method can be guaranteed completely secure, so keep your device and store account protected."),
    ...privacyClosing(app),
  ];
  app.terms = [
    section("Acceptance of these terms", `By downloading or using ${app.name}, you agree to these Terms and Conditions. If you do not agree, do not use the app.`),
    section("Personal study use", `You may use the app for your own ${app.examName} study, practice, and review. You may not copy, scrape, extract, resell, publish, reverse engineer, or misuse the question bank, explanations, design, or app services.`),
    section("Independent preparation resource", `${app.name} is an independent study aid. It is not affiliated with, endorsed by, sponsored by, or approved by ${app.organization}. Certification names and related trademarks belong to their respective owners and are used only to identify the exam being studied.`),
    section("No guaranteed result", "Practice scores, readiness indicators, study plans, reminders, explanations, and mock exams are educational tools. They do not guarantee an exam score, first-attempt pass, certification, employment, promotion, or professional outcome."),
    section("Content accuracy and syllabus changes", "We work to keep study content useful, but exam outlines, terminology, rules, fees, and testing policies may change. Confirm current requirements with the official certification organization before registering for or taking an exam."),
    section("Your study decisions", "You are responsible for deciding how to prepare, when to schedule the exam, and whether to rely on a practice result. The app does not provide legal, financial, cybersecurity, accounting, or other professional advice."),
    section("Premium access and billing", "Some questions, explanations, tests, analytics, or study tools may require an in-app purchase or subscription. Apple or Google handles payment, renewal, cancellation, and refund requests under the terms shown at purchase."),
    section("App availability", "Features, question counts, study modes, platform availability, and content may change as we improve the app or respond to exam-outline and operating-system updates. We do not promise uninterrupted or error-free availability."),
    section("Intellectual property", "The app’s original question content, explanations, interface, artwork, branding, and website materials belong to Miracle Apps or its licensors. Third-party certification names and marks remain the property of their respective owners."),
    section("Limitation of responsibility", "To the maximum extent permitted by law, Miracle Apps is not responsible for exam fees, missed appointments, certification decisions, lost study progress, indirect losses, or outcomes based on use of the app."),
    ...termsClosing(app),
  ];
  return app;
}

const apps = [
  {
    slug: "qr-code-reader",
    name: "QR Code Reader",
    shortName: "QR Reader",
    color: "#ffb21a",
    color2: "#ff5f57",
    icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/2d/9b/a8/2d9ba814-62c6-bb74-c569-10361338f00a/AppIcon-0-0-1x_U007epad-0-11-0-85-220.png/512x512bb.jpg",
    privacy: [],
    terms: [],
  },
  {
    slug: "translate-all",
    name: "Translate All - Podcast, Files",
    shortName: "Translate All",
    color: "#3165e8",
    color2: "#00b8d9",
    icon: "/traslator/Translator_Appicon.png",
    privacy: [],
    terms: [],
  },
  {
    slug: "admob-revenue-tracker",
    name: "AdMob Revenue Tracker",
    shortName: "AdMob Tracker",
    color: "#ffb000",
    color2: "#ff5c35",
    icon: "https://play-lh.googleusercontent.com/585rBJRT2E9Rpbb2U05_hXiMDNGi97LIRdnd6UyKWFeXNPCCtHpApgkJQLiaI6joMq9PnhTcUKu2Yvb4lOvi",
    privacy: [],
    terms: [],
  },
  {
    slug: "chitcalculator",
    name: "ChitCalculator",
    shortName: "ChitCalculator",
    color: "#18a878",
    color2: "#5bd09d",
    icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/d9/95/e5/d995e549-d1f4-0797-c84e-0f134af2a3f0/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    privacy: [],
    terms: [],
  },
  examApp({
    slug: "cfp-exam",
    name: "CFP Exam — Financial Planner",
    shortName: "CFP Prep",
    examName: "Certified Financial Planner exam",
    organization: "CFP Board",
    color: "#1265d6",
    color2: "#4cc9f0",
    icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/1f/d6/59/1fd659f9-45d6-c621-e992-7064665c9b44/AppIcon-0-0-1x_U007emarketing-0-11-0-sRGB-85-220.png/512x512bb.jpg",
  }),
  examApp({
    slug: "cissp-exam",
    name: "CISSP Exam Preparation",
    shortName: "CISSP Prep",
    examName: "Certified Information Systems Security Professional exam",
    organization: "ISC2",
    color: "#0f5d8f",
    color2: "#33d1b7",
    icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/b5/9a/c5/b59ac524-42c9-8d32-d57d-bdb282cab054/AppIcon-0-0-1x_U007emarketing-0-11-0-sRGB-85-220.png/512x512bb.jpg",
  }),
  examApp({
    slug: "cma-part1",
    name: "CMA Part 1 Exam Preparation",
    shortName: "CMA Part 1",
    examName: "Certified Management Accountant Part 1 exam",
    organization: "the Institute of Management Accountants (IMA)",
    color: "#3562d9",
    color2: "#f6b73c",
    icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/2b/d1/e8/2bd1e87e-0c73-fba0-b662-5bf41ed0b708/AppIcon-0-0-1x_U007epad-0-11-0-sRGB-85-220.png/512x512bb.jpg",
  }),
  examApp({
    slug: "ctp-exam",
    name: "CTP Exam Preparation",
    shortName: "CTP Prep",
    examName: "Certified Treasury Professional exam",
    organization: "the Association for Financial Professionals (AFP)",
    color: "#1d7d73",
    color2: "#5ed0ae",
    icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/54/2a/34/542a343d-c24b-d995-68bf-0e68f973b73a/AppIcon-0-0-1x_U007emarketing-0-8-0-sRGB-85-220.png/512x512bb.jpg",
  }),
];

const qr = apps.find((app) => app.slug === "qr-code-reader");
qr.privacy = [
  section("Overview", "QR Code Reader helps you scan QR codes and barcodes, create codes, organize saved items, and act on scan results. This policy explains how permissions, code content, local history, and external actions are handled."),
  section("Data the app does not collect", "Miracle Apps does not collect or share personal data from QR Code Reader. The current store disclosure identifies the app as collecting no data. We do not sell scan history, created-code content, or personal information."),
  section("Camera and photo access", "Camera access is used only to scan a code when you open the scanner. Photo-library access is used only when you choose an image to scan or save. The app does not continuously record, monitor, or upload your camera feed."),
  section("Saved codes and history", "Scanned codes, created codes, folders, labels, and history may be stored locally on your device so you can return to them. Information you place inside a code remains under your control until you choose to save, export, or share it."),
  section("Contacts, events, locations, and Wi-Fi codes", "When you create a code for contact details, calendar events, map locations, Wi-Fi access, messages, email, or payment information, the app uses the values you enter for that code. It does not independently verify the information or send it anywhere unless you choose an external action."),
  section("Opening and sharing results", "Links and supported actions are shown to you before they are opened. If you choose to open a website, map, messaging app, email client, payment app, or sharing destination, that third-party service receives the information needed to complete your action under its own privacy policy."),
  section("Your choices and deletion", "You can delete individual items or clear saved history where those controls are available. Deleting the app removes locally stored app data unless your device restores it from a system backup."),
  section("Security", "The app keeps ordinary scan and creation data on your device and asks you to confirm external actions. No method of storage is completely secure, so review sensitive code content before saving or sharing it."),
  ...privacyClosing(qr),
];
qr.terms = [
  section("Acceptance of these terms", "By downloading or using QR Code Reader, you agree to these Terms and Conditions. If you do not agree, do not use the app."),
  section("Personal and lawful use", "You may use the app to scan, create, organize, and share supported QR codes and barcodes. Do not use it to distribute malware, phishing links, deceptive payment requests, unlawful material, or content that violates another person’s rights."),
  section("Review before acting", "A QR code can contain a website, contact, message, location, Wi-Fi credential, payment detail, or another instruction. Review the decoded result and destination before opening, sharing, paying, signing in, or providing information."),
  section("User-created content", "You are responsible for the accuracy, legality, and permissions associated with information you place in a code. Creating a code does not establish ownership of third-party names, logos, links, or content."),
  section("Scanning accuracy", "Lighting, camera quality, damaged labels, unsupported formats, and encoded content can affect scan results. Confirm important information independently before relying on it."),
  section("Third-party destinations", "The app may hand off links or actions to websites and other apps. Miracle Apps does not control those services, their content, availability, security, purchases, or privacy practices."),
  section("App availability", "Supported formats, creation types, organization tools, and external actions may change with app updates, device capabilities, or operating-system requirements."),
  section("Intellectual property", "The app interface, original artwork, branding, and website materials belong to Miracle Apps or its licensors. QR and barcode standards and third-party marks remain the property of their respective owners."),
  section("Limitation of responsibility", "To the maximum extent permitted by law, Miracle Apps is not responsible for losses caused by malicious codes, incorrect encoded information, third-party destinations, payments, connectivity, or actions you choose after reviewing a result."),
  ...termsClosing(qr),
];

const translate = apps.find((app) => app.slug === "translate-all");
translate.privacy = [
  section("Overview", "Translate All - Podcast, Files provides text, voice, camera, image, file, and podcast-creation tools. This policy explains how the content you choose, device permissions, local history, online processing, ads, and purchases are handled."),
  section("Data collection and sharing", "Miracle Apps does not sell your personal information. The current store disclosure identifies the app as collecting and sharing no user data. Content may still be processed transiently by a translation, speech, OCR, text-to-speech, or podcast service when that processing is necessary to complete the feature you request."),
  section("Content you choose to process", "The app processes only the text, speech, images, audio, or files you select or create. Online features may securely transmit that selected content to a service provider to return a translation, transcription, extracted text, generated voice, or podcast result."),
  section("Camera, photos, microphone, speech, and files", "The app asks for access only when a feature needs it—for example, camera or photo access for image translation, microphone and speech access for voice translation, or file access for document and audio processing. You can change permissions in system settings."),
  section("History and generated files", "Translation history, saved results, downloaded language models, generated audio, and exported files may be stored on your device. You control what is retained, deleted, exported, or shared through the app and your device’s file tools."),
  section("Online and offline processing", "Some translations and content tools require an internet connection and third-party processing. Supported offline translation uses language models stored on your device after download. Available languages and processing methods may change by platform and app version."),
  section("Advertising", "The free version may display ads. Advertising providers may process device identifiers, ad interactions, approximate technical information, or consent choices under their own policies and the privacy controls available on your device."),
  section("Purchases and subscriptions", "Apple or Google processes in-app purchases, subscription billing, renewals, cancellations, and refunds. Miracle Apps does not receive your complete payment-card details; the platform provides purchase status needed to unlock paid features."),
  section("Sharing and external services", "When you choose to copy, export, play, or share a result, the receiving app or service handles that content under its own privacy terms. Review sensitive content before sending it outside Translate All."),
  section("Your choices and deletion", "You can deny optional permissions, manage history and generated files, clear app data, and uninstall the app. Content already shared or exported must be managed in the destination where you sent or saved it."),
  ...privacyClosing(translate),
];
translate.terms = [
  section("Acceptance of these terms", "By downloading or using Translate All - Podcast, Files, you agree to these Terms and Conditions. If you do not agree, do not use the app."),
  section("Permitted use", "You may use the app for lawful personal translation, communication, learning, travel, work, accessibility, file processing, and podcast creation. Do not use it to violate privacy, copyright, confidentiality, export, or other applicable laws."),
  section("Your content and permissions", "You retain responsibility for text, speech, images, audio, documents, and other files you submit. Only process content you own or are permitted to use, and avoid uploading confidential information unless you understand how the selected online feature works."),
  section("Translation and generated-output accuracy", "Translations, OCR, transcription, speech recognition, generated audio, language detection, and podcast results may contain errors or omit context. Review important output before using it for legal, medical, financial, safety, academic, or professional decisions."),
  section("Third-party processing", "Online features may rely on translation, speech, OCR, text-to-speech, model, hosting, or platform services. Their availability, supported languages, speed, limits, and results can change outside Miracle Apps’ control."),
  section("Podcasts and generated audio", "You are responsible for the script, source audio, voices, rights, and distribution of podcasts or audio you create. Do not impersonate people, mislead listeners, or use protected content without permission."),
  section("Subscriptions and paid features", "Some tools may require a monthly, yearly, lifetime, or other in-app purchase. Apple or Google handles billing, renewal, cancellation, and refund requests under the terms shown before purchase."),
  section("Advertising", "The free version may contain ads. Ad availability and personalization depend on your region, consent choices, device settings, and the advertising provider."),
  section("App availability", "Language support, offline models, file formats, voice options, podcast features, usage limits, and online providers may change as the app evolves."),
  section("Intellectual property", "The app design, original branding, icon, and website materials belong to Miracle Apps or its licensors. You retain applicable rights in content you lawfully provide, while third-party services and content remain subject to their own terms."),
  section("Limitation of responsibility", "To the maximum extent permitted by law, Miracle Apps is not responsible for decisions, losses, misunderstandings, publication claims, or third-party actions based on an inaccurate translation or generated result."),
  ...termsClosing(translate),
];

const admob = apps.find((app) => app.slug === "admob-revenue-tracker");
admob.privacy = [
  section("Overview", "AdMob Revenue Tracker is a reporting companion for app publishers. It connects to Google services with your permission to display authorized AdMob reporting data in a mobile dashboard."),
  section("Google sign-in and authorization", "Sign-in is handled through Google’s authorization flow. The app may receive account identifiers, basic profile information, authorization tokens, and the permissions needed to request reporting data. Miracle Apps does not ask for or receive your Google password."),
  section("AdMob reporting data", "The app retrieves earnings, impressions, clicks, ad requests, match rate, eCPM, app, ad-unit, country, and date-range reporting available to the connected account. The app is designed to request this data directly from Google services rather than route it through a Miracle Apps reporting server."),
  section("Local storage", "Account session details, display preferences, cached summaries, selected date ranges, and exported reports may be stored on your device. Exported CSV files remain wherever you choose to save or share them."),
  section("Data-safety disclosure", "The current Google Play disclosure identifies personal information as a data type the app may collect, states that no data is shared with third parties, and states that data is encrypted in transit. Google and the mobile platform still process sign-in and reporting requests under their own policies."),
  section("Advertising", "The app may display ads. Advertising providers may process device identifiers, ad interactions, consent choices, and technical information under their own policies and your device’s privacy controls."),
  section("Your controls", "You can revoke the app’s Google account access from your Google Account security settings, sign out where available, clear app storage, delete exported files, or uninstall the app. Revoking access prevents new reporting requests but does not delete files you previously exported elsewhere."),
  section("Security", "Authorization credentials are handled using platform and Google security mechanisms, and network requests use encrypted transport. Keep your device, Google account, and exported reports secure."),
  section("Support messages", `If you contact ${supportEmail}, we receive the address and details you choose to provide. Do not email access tokens, passwords, or confidential revenue exports.`),
  ...privacyClosing(admob),
];
admob.terms = [
  section("Acceptance of these terms", "By downloading or using AdMob Revenue Tracker, you agree to these Terms and Conditions. If you do not agree, do not use the app."),
  section("Authorized account use", "Connect only a Google account and AdMob data that you are authorized to access. You are responsible for account security, permissions, device access, exported reports, and compliance with Google’s applicable terms."),
  section("Independent reporting companion", "AdMob Revenue Tracker is an independent app and is not an official Google or AdMob product. Google, AdMob, and related names and marks belong to Google LLC and are used only to identify the compatible service."),
  section("Reporting accuracy", "Dashboard values depend on Google APIs, reporting delays, time zones, filters, currency settings, account configuration, and data availability. Confirm important figures in the official AdMob interface before making business, tax, payment, or financial decisions."),
  section("Not financial or tax advice", "Revenue views, trends, comparisons, and exports are informational tools. They do not provide accounting, tax, legal, investment, or business advice and do not guarantee future earnings."),
  section("Google service availability", "Sign-in, authorization, reporting fields, quotas, API behavior, and account access are controlled by Google and may change or become unavailable. Miracle Apps cannot restore a suspended Google or AdMob account."),
  section("Exports and confidentiality", "You are responsible for protecting exported CSV files and any confidential publisher or revenue information. Review the destination before sharing a report."),
  section("Advertising and paid features", "The app may contain ads and may offer paid features. Google Play handles in-app billing and refund requests where applicable; advertising providers operate under their own terms."),
  section("Intellectual property", "The app interface, original reporting presentation, branding, and website materials belong to Miracle Apps or its licensors. Google service names, data, and marks remain subject to Google’s rights and terms."),
  section("Limitation of responsibility", "To the maximum extent permitted by law, Miracle Apps is not responsible for reporting delays, API changes, account actions, missed revenue, tax filings, business decisions, or losses based on displayed or exported data."),
  ...termsClosing(admob),
];

const chit = apps.find((app) => app.slug === "chitcalculator");
chit.privacy = [
  section("Overview", "ChitCalculator helps you calculate chit amounts, organize chit cycles, track members and payments, and share selected details. This policy explains how financial-planning entries and sharing actions are handled."),
  section("Data the app does not collect", "Miracle Apps does not collect personal data from ChitCalculator. The current App Store disclosure identifies the app as collecting no data. The app does not connect to your bank account or ask for online-banking credentials."),
  section("Information stored on your device", "Chit names, member names, dates, month counts, bid amounts, contribution figures, payment status, and calculation history may be stored locally on your device so you can manage ongoing chits."),
  section("Calculations", "Amounts you enter are processed to provide the calculation or schedule you request. Ordinary calculations do not need an internet connection and are not sent to Miracle Apps."),
  section("Sharing through other apps", "When you choose to send chit details through WhatsApp, Messages, email, or another share destination, the selected content is passed to that service. The receiving app processes it under its own privacy policy, and you are responsible for choosing the recipients."),
  section("Advertising", "The app may display ads. Advertising providers may process device identifiers, ad interactions, consent choices, or technical information under their own policies and your device settings."),
  section("Your choices, backup, and deletion", "You can edit or delete chit and member entries where the app provides those controls. Deleting the app removes local data unless it is restored through a device backup. Keep a separate secure record of information you cannot afford to lose."),
  section("Security", "Your chit information depends on the security of your device and any backup or sharing destination you use. Protect your device with a passcode and review recipients before sharing sensitive financial information."),
  ...privacyClosing(chit),
];
chit.terms = [
  section("Acceptance of these terms", "By downloading or using ChitCalculator, you agree to these Terms and Conditions. If you do not agree, do not use the app."),
  section("Calculation and organization tool", "ChitCalculator provides arithmetic, schedules, member organization, payment tracking, and sharing tools. It does not operate a chit fund, hold money, process payments, collect installments, or act as a bank or financial institution."),
  section("Your information and permissions", "You are responsible for the accuracy and lawful use of chit, member, contribution, bid, date, and payment-status information you enter. Obtain permission before storing or sharing another person’s details."),
  section("Verify every calculation", "Results depend on the amounts, duration, bid, rules, rounding, and other inputs you provide. Confirm final contributions, payouts, commissions, interest, taxes, and obligations with the chit organizer and a qualified adviser."),
  section("No financial or legal advice", "The app provides general calculation and record-keeping assistance. It does not recommend a chit, evaluate risk, guarantee a return, or provide financial, investment, tax, accounting, or legal advice."),
  section("Sharing responsibilities", "When you share a result or payment status, verify the content and recipient. Miracle Apps is not responsible for a message sent to the wrong person or for how a recipient uses shared information."),
  section("Local records and backups", "You are responsible for maintaining accurate primary records and secure backups. App data may be lost through deletion, device failure, software updates, or backup settings."),
  section("Advertising and availability", "The app may display ads. Features, formulas, formats, platform support, and availability may change as the app is maintained and updated."),
  section("Intellectual property", "The app interface, original design, branding, icon, and website materials belong to Miracle Apps or its licensors."),
  section("Limitation of responsibility", "To the maximum extent permitted by law, Miracle Apps is not responsible for financial loss, disputes, missed payments, incorrect entries, reliance on an estimate, lost records, or actions taken by a chit organizer or member."),
  ...termsClosing(chit),
];

function renderSections(sections) {
  return sections.map((item) => {
    const paragraphs = item.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("");
    const link = item.link ? `<a class="policy-link" href="${escapeHtml(item.link.href)}">${escapeHtml(item.link.label)}</a>` : "";
    return `<section class="policy-section reveal"><h2>${escapeHtml(item.title)}</h2>${paragraphs}${link}</section>`;
  }).join("");
}

function renderPage(app, type) {
  const isPrivacy = type === "privacy";
  const label = isPrivacy ? "Privacy Policy" : "Terms and Conditions";
  const otherLabel = isPrivacy ? "Terms" : "Privacy";
  const otherPath = isPrivacy ? "terms" : "privacy";
  const headline = isPrivacy ? `Privacy, explained for ${app.shortName}.` : `Clear terms for using ${app.shortName}.`;
  const canonical = `https://www.miracleapps.in/${app.slug}/${type}/`;
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>${escapeHtml(label)} - ${escapeHtml(app.name)}</title>
  <meta name="description" content="${escapeHtml(label)} for ${escapeHtml(app.name)} by Miracle Apps.">
  <meta name="author" content="Miracle Apps">
  <meta name="theme-color" content="${escapeHtml(app.color)}">
  <meta property="og:title" content="${escapeHtml(label)} - ${escapeHtml(app.name)}">
  <meta property="og:description" content="${escapeHtml(label)} for ${escapeHtml(app.name)} by Miracle Apps.">
  <meta property="og:type" content="website">
  <meta property="og:image" content="${escapeHtml(app.icon.startsWith("/") ? `https://www.miracleapps.in${app.icon}` : app.icon)}">
  <link rel="canonical" href="${canonical}">
  <link rel="icon" href="${escapeHtml(app.icon)}">
  <link rel="apple-touch-icon" href="${escapeHtml(app.icon)}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@500;600;700;800&amp;family=Manrope:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/assets/site.css?v=legal-pages-1">
</head>
<body class="legal-page" style="--app:${escapeHtml(app.color)};--app-2:${escapeHtml(app.color2)}">
  <nav class="nav">
    <div class="shell nav-inner">
      <a class="brand" href="/${escapeHtml(app.slug)}/"><img src="${escapeHtml(app.icon)}" alt="${escapeHtml(app.name)} icon"><span>${escapeHtml(app.shortName)}</span></a>
      <div class="nav-links">
        <a href="/${escapeHtml(app.slug)}/">App</a>
        <a href="/${escapeHtml(app.slug)}/${otherPath}/">${otherLabel}</a>
        <a class="nav-cta" href="mailto:${supportEmail}">Support</a>
      </div>
    </div>
  </nav>
  <main>
    <header class="hero">
      <div class="shell reveal">
        <div class="kicker">${label}</div>
        <h1 class="legal-title">${escapeHtml(headline)}</h1>
        <p class="hero-copy">${escapeHtml(label)} for ${escapeHtml(app.name)} by Miracle Apps. Effective Date: ${effectiveDate}.</p>
      </div>
    </header>
    <section class="section">
      <div class="shell policy-layout">
        <aside class="policy-aside reveal"><img src="${escapeHtml(app.icon)}" alt="${escapeHtml(app.name)} icon"><strong>${escapeHtml(app.name)}</strong><span>${label}</span></aside>
        <div class="policy-stack">${renderSections(app[type])}</div>
      </div>
    </section>
  </main>
  <footer class="footer">
    <div class="shell footer-inner">
      <div class="footer-brand"><strong>Miracle Apps</strong>Simple, reliable mobile apps made around real needs.</div>
      <div class="footer-links"><a href="/${escapeHtml(app.slug)}/">${escapeHtml(app.shortName)}</a><a href="/${escapeHtml(app.slug)}/privacy/">Privacy</a><a href="/${escapeHtml(app.slug)}/terms/">Terms</a><a href="mailto:${supportEmail}">${supportEmail}</a></div>
    </div>
  </footer>
  <script src="/assets/site.js?v=legal-pages-1"></script>
</body>
</html>
`;
}

for (const app of apps) {
  for (const type of ["privacy", "terms"]) {
    const destination = path.join(root, app.slug, type);
    fs.mkdirSync(destination, { recursive: true });
    fs.writeFileSync(path.join(destination, "index.html"), renderPage(app, type));
  }
}

const translateApp = apps.find((app) => app.slug === "translate-all");
fs.writeFileSync(path.join(root, "traslator", "privacy", "index.html"), renderPage(translateApp, "privacy"));
fs.writeFileSync(path.join(root, "traslator", "terms", "index.html"), renderPage(translateApp, "terms"));

console.log(`Generated ${apps.length * 2} legal pages and 2 legacy compatibility copies.`);
