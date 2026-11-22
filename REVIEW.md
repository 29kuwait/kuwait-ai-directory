`# قواعد المراجعة الأسبوعية | Weekly review rules
`
`[العربية](#العربية) · [English](#english)
`
`## العربية
`
`الدليل يتراجع كل أسبوع (آلياً)، وهذي القواعد اللي تمشي عليها المراجعة. أي تغيير يتسجل في [CHANGELOG.md](CHANGELOG.md).
`
`### 1) الأسعار
`- كل أداة تنفتح صفحتها الرسمية (صفحة الأسعار أو الخطط).
`- إذا تغير السعر أو الخطة المجانية (صارت مدفوعة، أو صار لها خطة مجانية) يتعدل الحقل \`price\`: \`free\` أو \`part\` أو \`paid\`.
`- ما يتغير شي إلا إذا الصفحة الرسمية تأكد التغيير. إذا ما قدرت المراجعة تتأكد، ما تغيّر شي وتتركها للأسبوع الجاي.
`
`### 2) الحذف
`- تنشال الأداة إذا:
`  - الجهة المالكة أعلنت إيقافها رسمياً، أو
`  - رابطها الرسمي ما اشتغل (404 أو الموقع ما يفتح) في **مراجعتين متتاليتين**، ولا لقت المراجعة رابطاً رسمياً بديلاً.
`- رفض الفحص الآلي (مثل 403 من مواقع معروفة) **ما يعتبر عطل**.
`- إذا تغير الرابط الرسمي، يتحدث الرابط ولا تنشال الأداة.
`
`### 3) الإضافة (الأدوات الرائجة)
`- تنضاف الأداة إذا كانت **منتشرة فعلاً**: أخبار موثوقة أو إحصائيات استخدام أو نجوم GitHub كثيرة، ولها موقع رسمي واضح.
`- حد أقصى **3 أدوات جديدة في المراجعة الواحدة**.
`- ما تنضاف: أدوات العملات الرقمية والمقامرة والمحتوى للبالغين، وأدوات التحايل أو سرقة الحسابات، وأدوات بدون موقع رسمي، ولا الأدوات اللي تطلب بيانات حساسة بدون سبب.
`- تنكتب بنفس شكل الأدوات الموجودة (وصف وطريقة بدء بالعربي والإنجليزي).
`
`### 4) بعد كل مراجعة
`- يتحدث \`REVIEWED\` في \`index.html\` وتتبنى README: \`node scripts/update-readme.js\`
`- يتسجل كل تغيير في CHANGELOG.md مع المصدر.
`
`> المراجعة قد تخطئ. إذا لقيت معلومة غلط، [افتح Issue](https://github.com/29kuwait/kuwait-ai-directory/issues).
`
`---
`
`## English
`
`The directory is reviewed automatically every week. These are the rules. Every change is logged in [CHANGELOG.md](CHANGELOG.md).
`
`### 1) Prices
`- Each tool's official page (pricing or plans) is opened.
`- If the price or free plan changed (became paid, or gained a free plan), the \`price\` field is updated: \`free\`, \`part\` or \`paid\`.
`- Nothing changes unless the official page confirms it. If the review cannot confirm, it changes nothing and tries again next week.
`
`### 2) Removal
`- A tool is removed if:
`  - its owner officially announced it is shut down, or
`  - its official link fails (404 or the site does not open) in **two consecutive reviews** and no replacement official link is found.
`- Automated-check refusals (such as 403 from well-known sites) **do not count as failures**.
`- If the official link moved, the link is updated and the tool is kept.
`
`### 3) Additions (popular tools)
`- A tool is added if it is **genuinely popular**: reputable news, usage statistics or many GitHub stars, with a clear official site.
`- At most **3 new tools per review**.
`- Not added: crypto, gambling and adult tools, scam or account-stealing tools, tools without an official site, and tools that ask for sensitive data for no reason.
`- Entries follow the existing format (description and "how to start" in Arabic and English).
`
`### 4) After every review
`- \`REVIEWED\` in \`index.html\` is updated and the README is rebuilt: \`node scripts/update-readme.js\`
`- Every change is logged in CHANGELOG.md with its source.
`
`> The review can be wrong. If you find incorrect information, [open an issue](https://github.com/29kuwait/kuwait-ai-directory/issues).
