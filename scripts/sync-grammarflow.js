// Copies the grammarflow.si home page to /grammarflow/, so the two show the same design and text.
// Run: node scripts/sync-grammarflow.js [path to the grammarflow-site repo]
// It builds that repo for the /grammarflow/ sub-path, then copies the page and the files it uses.
// Re-run after grammarflow.si changes. privacy/, terms/ and the appicon files here are kept.
const fs = require("fs");
const path = require("path");
const os = require("os");
const { execFileSync } = require("child_process");

const root = path.resolve(__dirname, "..");
const source = path.resolve(process.argv[2] || path.join(os.homedir(), "Desktop/Grammarify-main/grammarflow-site"));
const target = path.join(root, "grammarflow");
const base = "/grammarflow/";
const site = "https://grammarflow.si";
const out = fs.mkdtempSync(path.join(os.tmpdir(), "grammarflow-build-"));

execFileSync("node", ["scripts/pages.mjs"], { cwd: source, stdio: "inherit" });
execFileSync("npx", ["vite", "build", "--base", base, "--outDir", out, "--emptyOutDir"], { cwd: source, stdio: "inherit" });

let html = fs.readFileSync(path.join(out, "index.html"), "utf8");
// Section links become #anchors (the page's own path routing only runs at a site root).
for (const id of ["dictation", "writing", "platforms", "faq", "download"]) html = html.replaceAll(`href="/${id}"`, `href="#${id}"`);
// Pages that only exist on grammarflow.si (feature pages, Terms, Privacy) link there. Before the
// home link below, which would otherwise match too.
html = html.replace(/href="\/([a-z-]+\/)"/g, `href="${site}/$1"`);
html = html.replaceAll('href="/"', `href="${base}"`);
// Vite rewrites src and href for the sub-path, but not the screenshot slots' data-src.
html = html.replaceAll('data-src="/images/', `data-src="${base}images/`);
const leftover = [...html.matchAll(/(?:href|src|data-src)="\/(?!grammarflow\/)[^"]*"/g)].map((m) => m[0]);
if (leftover.length) throw new Error(`Paths still pointing at the site root: ${leftover.join(", ")}`);

// Replace the previous copy, keeping the files that belong to this site.
const keep = new Set(["privacy", "terms", "appicon.png", "appicon-180.png", "appicon.svg"]);
for (const name of fs.readdirSync(target)) if (!keep.has(name)) fs.rmSync(path.join(target, name), { recursive: true });
fs.writeFileSync(path.join(target, "index.html"), html);
for (const name of ["static", "images", "logo.png", "wordmark.svg", "qr.svg", "applications-folder.png"]) {
  fs.cpSync(path.join(out, name), path.join(target, name), { recursive: true });
}
fs.rmSync(out, { recursive: true });
console.log(`Copied the grammarflow.si home page to ${target}.`);
