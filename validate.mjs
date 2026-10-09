import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const idxPath = path.join(root, "apps", "index.json");
const list = JSON.parse(fs.readFileSync(idxPath, "utf-8"));
let fail = false;
const req = ["id", "name", "description", "version", "author", "entryUrl", "icon", "cover", "category"];
for (const m of list) {
  for (const k of req) {
    if (!m[k]) { console.error(`❌ ${m.id || "?"}: eksik alan ${k}`); fail = true; }
  }
  if (m.id && !/^[a-z0-9][a-z0-9-]{2,40}$/.test(m.id)) { console.error(`❌ ${m.id}: id formatı hatalı`); fail = true; }
  if (m.version && !/^\d+\.\d+\.\d+$/.test(m.version)) { console.error(`❌ ${m.id}: version semver olmalı`); fail = true; }
  for (const k of ["icon", "cover"]) {
    if (m[k] && !/^https?:\/\/.+\.(png|jpg|jpeg|svg|webp)(\?.*)?$/.test(m[k])) { console.error(`❌ ${m.id}: ${k} görsel URL olmalı (logo/kapak zorunlu)`); fail = true; }
  }
  if (m.entryUrl && !/^https?:\/\//.test(m.entryUrl)) { console.error(`❌ ${m.id}: entryUrl https olmalı`); fail = true; }
}
if (fail) { console.error("Doğrulama BAŞARISIZ."); process.exit(1); }
console.log(`✅ ${list.length} uygulama doğrulandı (logo+kapak tamam).`);
