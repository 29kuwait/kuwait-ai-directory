// يبني README.md (بالعربي والإنجليزي) من بيانات index.html
// الاستخدام:  node scripts/update-readme.js
// Builds README.md (Arabic + English) from the data inside index.html.
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');

function grab(name) {
  const a = html.indexOf('const ' + name + '=[');
  const b = html.indexOf('\n];', a);
  if (a < 0 || b < 0) throw new Error('لا أجد ' + name + ' في index.html');
  const txt = html.slice(a + ('const ' + name + '=').length, b + 2).replace(/,\]/g, ']');
  return JSON.parse(txt);
}
const T = grab('T'), KW = grab('KW');
const CATS = JSON.parse(html.match(/const CATS=(\{.*?\});/)[1].replace(/([{,])(\w+):/g, '$1"$2":'));
const REVIEWED = (html.match(/const REVIEWED="([^"]+)"/) || [])[1] || '';
const PR = { free: ['مجاني', 'Free'], part: ['مجاني جزئياً', 'Freemium'], paid: ['مدفوع', 'Paid'] };

// تحقق من سلامة البيانات قبل الكتابة
const names = new Set();
for (const t of T) {
  if (t.length < 8) throw new Error('صف ناقص: ' + t[0]);
  if (names.has(t[0])) throw new Error('أداة مكررة: ' + t[0]);
  names.add(t[0]);
  if (!CATS[t[4]]) throw new Error('فئة غلط: ' + t[0]);
  if (!PR[t[5]]) throw new Error('سعر غلط: ' + t[0]);
  if (!/^https:\/\//.test(t[3])) throw new Error('رابط غير https: ' + t[0]);
}

function section(i) {
  let o = '';
  for (const c of Object.keys(CATS)) {
    const rows = T.filter(t => t[4] === c);
    if (!rows.length) continue;
    o += `### ${CATS[c][i]}\n\n| ${i ? 'Tool' : 'الأداة'} | ${i ? 'Description' : 'الوصف'} | ${i ? 'Price' : 'السعر'} | ${i ? 'How to start' : 'كيف تبدأ'} |\n|---|---|---|---|\n`;
    for (const t of rows) o += `| [${t[0]}](${t[3]})${t[8] ? (i ? ' (Arabic)' : ' (عربي)') : ''} | ${t[1 + i]} | ${PR[t[5]][i]} | ${t[6 + i]} |\n`;
    o += '\n';
  }
  o += `### ${i ? 'In Kuwait' : 'في الكويت'}\n\n`;
  for (const k of KW) o += `- [${k[i]}](${k[4]}): ${k[2 + i]}\n`;
  return o;
}

const out = `# 🇰🇼 دليل الكويت للذكاء الاصطناعي | Kuwait AI Directory

**موسوعة مجانية مفتوحة المصدر لأدوات الذكاء الاصطناعي بالعربي والإنجليزي.**
**A free, open-source directory of AI tools in Arabic and English.**

🌐 **الموقع | Website:** https://29kuwait.github.io/kuwait-ai-directory/

🔄 **آخر مراجعة | Last review:** ${REVIEWED}

[العربية](#العربية) · [English](#english)

---

## العربية

### هدف المشروع

1. **مجاني 100%:** مفتوح المصدر، بدون اشتراك ولا دفع ولا إعلانات.
2. **كل الأدوات في مكان واحد:** كتابة وصور وبرمجة وصوت، مصنفة وبسيطة.
3. **لأهل الكويت والوطن العربي:** نوضح أفضل الأدوات المجانية وكيف تبدأ فيها.

الموقع يدعم العربية والإنجليزية، ووضع فاتح وداكن، وفيه قسم "الأفضل لك" يرشح لك أدوات حسب اللي تبي تسويه.

> 🔄 **المراجعة الأسبوعية:** الأسعار والروابط تنراجع كل أسبوع. الأدوات اللي تتغير أو تتوقف تنشال، والأدوات الرائجة تنضاف. القواعد في [REVIEW.md](REVIEW.md) والسجل في [CHANGELOG.md](CHANGELOG.md).

### الأدوات (${T.length} أداة)

${section(0)}
> **مجاني** بدون دفع، **مجاني جزئياً** فيه خطة مجانية بحدود، **مدفوع** يحتاج اشتراك. الأسعار تتغير، تأكد من الموقع الرسمي.

### نضيف أدوات

عندك أداة؟ [افتح Issue](https://github.com/29kuwait/kuwait-ai-directory/issues) ونضيفها. التفاصيل في [CONTRIBUTING.md](CONTRIBUTING.md).

---

## English

### Project goals

1. **100% free:** open source, no subscription, no payment, no ads.
2. **All tools in one place:** writing, images, coding and audio, organized and simple.
3. **For Kuwait and the Arab world:** we show the best free tools and how to get started.

The website supports Arabic and English, light and dark themes, and a "Best for you" picker that recommends tools based on what you want to do.

> 🔄 **Weekly review:** prices and links are reviewed every week. Tools that change or shut down are removed, and tools that become popular are added. The rules are in [REVIEW.md](REVIEW.md) and the log is in [CHANGELOG.md](CHANGELOG.md).

### Tools (${T.length})

${section(1)}
> **Free** means no payment, **Freemium** means a free plan with limits, **Paid** requires a subscription. Prices change, so check the official site.

### Contributing

Know a good tool? [Open an issue](https://github.com/29kuwait/kuwait-ai-directory/issues) and we will add it. See [CONTRIBUTING.md](CONTRIBUTING.md).

---

## الملاحظات | Notes

جميع الأدوات المذكورة ملك لشركاتها، وهذا الدليل للإرشاد فقط.
All tools listed belong to their respective owners; this directory is for guidance only.

صنع في الكويت ❤️ | Made in Kuwait ❤️ By saleh ali alfadaghi

رخصة | License: [MIT](LICENSE)
`;
fs.writeFileSync(path.join(root, 'README.md'), out, 'utf8');
console.log('README.md updated: ' + T.length + ' tools, reviewed ' + REVIEWED);
