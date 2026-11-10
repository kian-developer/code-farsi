const i18n = {
  fa: {
    siteTitle: "سوسیه همش گوشته",
    enterSite: "ورود به واژه‌های فارسی نهم",
    passwordPrompt:
      "لطفاً رمز عبور را وارد کنید تا به داخل صفحه دسترسی پیدا کنید.",
    password: "رمز عبور",
    unlock: "ورود به صفحه",
    wrongPassword: "رمز عبور اشتباه است. دوباره تلاش کنید.",
    enterHint: "کلید Enter هم برای ورود کار می‌کند",
  },
  en: {
    siteTitle: "Sosisie Hamsh Goshthe",
    enterSite: "Enter Grade 9 Vocabulary",
    passwordPrompt: "Please enter the password to access this page.",
    password: "Password",
    unlock: "Unlock Page",
    wrongPassword: "Wrong password. Try again.",
    enterHint: "Press Enter to unlock",
  },
};

let lang = localStorage.getItem("site_lang") || "fa";
let theme = localStorage.getItem("site_theme") || "dark";

function applyLang() {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (i18n[lang] && i18n[lang][key]) {
      el.innerHTML = i18n[lang][key];
    }
  });
  document.getElementById("langToggle").textContent =
    lang === "fa" ? "FA" : "EN";
}

function applyTheme() {
  document.documentElement.setAttribute("data-theme", theme);
  document.getElementById("themeToggle").textContent =
    theme === "dark" ? "🌙" : "☀️";
}

document.getElementById("themeToggle").addEventListener("click", () => {
  theme = theme === "dark" ? "light" : "dark";
  localStorage.setItem("site_theme", theme);
  applyTheme();
});
document.getElementById("langToggle").addEventListener("click", () => {
  lang = lang === "fa" ? "en" : "fa";
  localStorage.setItem("site_lang", lang);
  applyLang();
});

applyTheme();
applyLang();

const PASSWORD = "موزنوتلا";

const lockScreen = document.getElementById("lock-screen");
const app = document.getElementById("app");
const passInput = document.getElementById("pass");
const unlockBtn = document.getElementById("unlockBtn");
const error = document.getElementById("error");

function attemptUnlock() {
  if (passInput.value === PASSWORD) {
    unlockBtn.disabled = true;
    unlockBtn.textContent =
      i18n[lang].unlock === "ورود به صفحه" ? "در حال ورود..." : "Unlocking...";
    error.style.display = "none";
    setTimeout(() => {
      lockScreen.classList.add("hidden");
      app.style.display = "block";
      document.body.style.overflow = "auto";
      initApp();
    }, 850);
  } else {
    error.style.display = "block";
    passInput.value = "";
    passInput.focus();
    error.classList.remove("shake");
    void error.offsetWidth;
    error.classList.add("shake");
    const card = lockScreen.querySelector(".lock-card");
    card.style.transform = "translateX(-12px)";
    setTimeout(() => (card.style.transform = "translateX(12px)"), 110);
    setTimeout(() => (card.style.transform = "translateX(0)"), 220);
  }
}

unlockBtn.addEventListener("click", attemptUnlock);
passInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") attemptUnlock();
});

/* Custom cursor desktop */
const isDesktop = window.matchMedia("(min-width: 1025px)").matches;
if (isDesktop) {
  const dot = document.createElement("div");
  dot.className = "cursor-dot";
  const outline = document.createElement("div");
  outline.className = "cursor-outline";
  document.body.appendChild(dot);
  document.body.appendChild(outline);
  document.body.classList.add("cursor-active");

  window.addEventListener("mousemove", (e) => {
    dot.style.left = e.clientX + "px";
    dot.style.top = e.clientY + "px";
    outline.animate(
      { left: `${e.clientX}px`, top: `${e.clientY}px` },
      { duration: 500, fill: "forwards" },
    );
  });

  document.querySelectorAll("a, button, .card, input").forEach((el) => {
    el.addEventListener("mouseenter", () => outline.classList.add("hovered"));
    el.addEventListener("mouseleave", () =>
      outline.classList.remove("hovered"),
    );
  });
}

const vocabData = [
  {
    lesson: "درس اول: آفریدگار هستی",
    words: [
      { word: "بساط", meaning: "گسترده، فرش‌شده، سفره", antonym: "جمع، جمع‌آوری" },
      { word: "طراوت", meaning: "تازگی و شادابی", antonym: "پژمردگی، خشکی" },
      { word: "سمن", meaning: "یاسمن، گلی خوشبو", antonym: "—" },
      { word: "منور", meaning: "روشن، نورانی", antonym: "تاریک، ظلمانی" }
    ]
  },
  {
    lesson: "درس دوم: عاقبت بخیری",
    words: [
      { word: "رعیت", meaning: "مردم، توده‌ی مردم، زیردستان", antonym: "پادشاه، حاکم" },
      { word: "تدبیر", meaning: "اندیشیدن، چاره‌اندیشی", antonym: "بی‌تدبیری، تسامح" },
      { word: "سیره", meaning: "روش، راه و رسم زندگی", antonym: "—" },
      { word: "حکایت", meaning: "داستان، سرگذشت", antonym: "—" }
    ]
  },
  {
    lesson: "درس سوم: مثل الماس (نسیم پگاه)",
    words: [
      { word: "پگاه", meaning: "بامداد، سحرگاه", antonym: "شامگاه، غروب" },
      { word: "وثوق", meaning: "اطمینان، اعتماد", antonym: "شك، بی‌اعتمادی" },
      { word: "شعله‌ور", meaning: "آتش‌گرفته، برافروخته", antonym: "خاموش، سرد" },
      { word: "فروغ", meaning: "روشنایی، پرتو", antonym: "تاریکی، ظلمت" }
    ]
  },
  {
    lesson: "درس چهارم: هم‌نشین (نیک‌بختان)",
    words: [
      { word: "صاحب‌دل", meaning: "عارف، اهل دل، انسان آگاه", antonym: "غافل، سنگدل" },
      { word: "انیس", meaning: "هم‌دم، دوست، مونس", antonym: "دشمن، غریبه" },
      { word: "تیره‌روزی", meaning: "بدبختی، سیاه‌روزی", antonym: "خوش‌بختی، سعادت" }
    ]
  },
  {
    lesson: "درس ششم: آداب زندگانی",
    words: [
      { word: "حفظ", meaning: "نگهداری، محافظت", antonym: "فراموشی، ضایع کردن" },
      { word: "مؤدب", meaning: "باادب، با تربیت", antonym: "بی ادب، وقیح" },
      { word: "مصلحت", meaning: "خیر، نیکویی", antonym: "مفسده، زیان" }
    ]
  },
  {
    lesson: "درس هفتم: پرواز قطره",
    words: [
      { word: "جویبار", meaning: "جوی آب، نهر", antonym: "—" },
      { word: "متلاطم", meaning: "طوفانی، موج‌زن", antonym: "آرام، ساکت" },
      { word: "مناجات", meaning: "راز و نیاز با خدا", antonym: "—" }
    ]
  },
  {
    lesson: "درس هشتم: همزیستی با مهربانی",
    words: [
      { word: "همزیستی", meaning: "با هم زیستن، صلح و سازش", antonym: "جنگ، ستیز" },
      { word: "تساهل", meaning: "مدارا، گذشت، نرمی", antonym: "سخت‌گیری، تعصب" },
      { word: "متقابل", meaning: "دوطرفه، متکابل", antonym: "یک‌طرفه" }
    ]
  },
  {
    lesson: "درس دهم: ارکان ادب",
    words: [
      { word: "متعالی", meaning: "بلندمرتبه، والا", antonym: "پست، فرودست" },
      { word: "تواضع", meaning: "فروتنی", antonym: "تکبر، غرور" },
      { word: "کبر", meaning: "بزرگی جستن، تکبر", antonym: "تواضع، فروتنی" }
    ]
  },
  {
    lesson: "درس دوازدهم: بوی خوش نوشتن",
    words: [
      { word: "موسم", meaning: "فصل، هنگام", antonym: "—" },
      { word: "رعنا", meaning: "زیبا، خوش‌استوار", antonym: "زشت، بدترکیب" },
      { word: "مشام", meaning: "استخوان بینی، جای بویایی", antonym: "—" }
    ]
  },
  {
    lesson: "درس چهاردهم: پیدایش شعر",
    words: [
      { word: "روان", meaning: "جاری، روانه؛ روح و جان", antonym: " ایستده، راکد" },
      { word: "پندار", meaning: "گمان، پنداشته", antonym: "حقیقت، واقعیت" },
      { word: "تأثر", meaning: "اندوهگین شدن، اثر پذیرفتن", antonym: "شادی، بی‌توفیقی" }
    ]
  }
];

const literaryData = [
  {
    name: "تشبیه",
    definition: "مثل کردن چیزی به چیز دیگر به دلیل داشتن صفت مشترک.",
    pillars: "مشبه، مشبه‌به، وجه‌شبه، ادات تشبیه",
    example: "«دل همچو سنگت ای دوست، به آب چشم آب شود.»",
    explanation: "دل = مشبه، سنگ = مشبه‌به، همچو = ادات تشبیه"
  },
  {
    name: "تشخیص (جان‌بخشی)",
    definition: " دادن ویژگی‌ها و رفتارهای انسانی به اشیاء بی‌جان، گیاهان یا حیوانات.",
    pillars: "—",
    example: "«ابر شاخه‌های درختان را قلقلک داد.»",
    explanation: "قلقلک دادن کار انسان است که به ابر نسبت داده شده."
  },
  {
    name: "کنایه",
    definition: "سخنی که دارای دو معناست؛ معنای ظاهری که مدنظر نیست و معنای پنهان و مقصودی که در ذهن جا افتاده است.",
    pillars: "معنای ظاهری، معنای پنهان",
    example: "«پایش روی زمین بند نیست.»",
    explanation: "کنایه از بی‌قراری، شادی زیاد یا عجله داشتن."
  },
  {
    name: "مراعات نظیر (تناسب)",
    definition: "آوردن کلماتی در شعر یا نثر که به دلیل جنس، زمان، مکان یا وابستگی با یکدیگر ارتباط معنایی دارند.",
    pillars: "جنس، زمان، مکان، وابستگی معنایی",
    example: "«ابر و باد و مه و خورشید و فلک در کارند...»",
    explanation: "کلمات با هم تناسب دارند."
  },
  {
    name: "تضاد (طباق)",
    definition: "آوردن دو کلمه با معانی متضاد و مخالف در کنار یکدیگر برای ایجاد زیبایی و تأثیرگذاری.",
    pillars: "دو کلمه متضاد",
    example: "«شب تاریک و بیم موج و gardاب چنین حایل / کجا دانند حال ما سبک‌باران ساحل‌ها»",
    explanation: "تضادهای مفهومی مانند شب و روز / تاریک و روشن."
  },
  {
    name: "تکرار",
    definition: "تکرار یک واژه یا عبارت برای تأکید بر مفهوم و ایجاد آهنگ و موسیقی در کلام.",
    pillars: "واژه یا عبارت تکرار شده",
    example: "«باران، باران، باران می‌بارد...»",
    explanation: "تأکید برباران بودن باران."
  },
  {
    name: "سجع",
    definition: "هماهنگی و هم‌آوایی کلمات پایانی در جمله‌های نثر (مانند قافیه در شعر) که به سه نوع متوازی، متوازن و مططرف تقسیم می‌شود.",
    pillars: "هم‌آوایی کلمات پایانی",
    example: "«الهی، عمر مر گران مایه است و علم سرمایه.»",
    explanation: "سجع میان عمر و علم."
  },
  {
    name: "مبالغه (غلو)",
    definition: "بزرگ‌نمایی غیرمعمول و بیش از حد در وصف پدیده‌ها برای تأثیرگذاری بیشتر عواطف و افکار.",
    pillars: "بزرگ‌نمایی بیش از حد",
    example: "«ز فراقت چشم من دریأ خون شد.»",
    explanation: "خون شدن چشم به اندازه یک دریا مبالغه است."
  }
];

function escapeHtml(text) {
  if (!text) return "";
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function renderVocab() {
  const container = document.getElementById("vocabContent");
  container.innerHTML = "";
  let hasVisible = false;
  const q = document.getElementById("searchInput").value.trim().toLowerCase();

  vocabData.forEach((lesson) => {
    let visibleWords = 0;
    const wordsHtml = lesson.words
      .map((w) => {
        const match =
          !q ||
          w.word.toLowerCase().includes(q) ||
          w.meaning.toLowerCase().includes(q) ||
          (w.antonym && w.antonym.toLowerCase().includes(q));
        if (!match) return "";
        visibleWords++;
        hasVisible = true;
        return `
        <div class="word-card">
          <div class="w">${escapeHtml(w.word)}</div>
          <div class="m"><span class="lbl">معنی:</span> ${escapeHtml(w.meaning)}</div>
          ${w.antonym && w.antonym !== "—" ? `<div class="a"><span class="lbl">متضاد:</span> ${escapeHtml(w.antonym)}</div>` : ""}
        </div>
      `;
      })
      .join("");

    if (visibleWords > 0) {
      container.innerHTML += `
        <div class="lesson-card">
          <div class="lesson-header">${escapeHtml(lesson.lesson)}</div>
          <div class="words-grid">${wordsHtml}</div>
        </div>
      `;
    }
  });

  document.getElementById("empty").style.display = hasVisible
    ? "none"
    : "block";
}

function renderLiterary() {
  const container = document.getElementById("literaryContent");
  container.innerHTML = "";
  const q = document.getElementById("searchInput").value.trim().toLowerCase();
  let hasVisible = false;

  literaryData.forEach((item) => {
    const match =
      !q ||
      item.name.toLowerCase().includes(q) ||
      item.definition.toLowerCase().includes(q) ||
      item.example.toLowerCase().includes(q) ||
      (item.explanation && item.explanation.toLowerCase().includes(q));
    if (!match) return;
    hasVisible = true;

    container.innerHTML += `
      <div class="lit-card">
        <div class="tag">${escapeHtml(item.name)}</div>
        <h3>${escapeHtml(item.name)}</h3>
        <div class="def">${escapeHtml(item.definition)}</div>
        ${item.pillars && item.pillars !== "—" ? `<div class="row"><span class="lbl">ارکان:</span> ${escapeHtml(item.pillars)}</div>` : ""}
        <div class="example">${escapeHtml(item.example)}</div>
        ${item.explanation ? `<div class="explanation"><span class="lbl">توضیح مثال:</span> ${escapeHtml(item.explanation)}</div>` : ""}
      </div>
    `;
  });

  document.getElementById("empty").style.display = hasVisible
    ? "none"
    : "block";
}

function renderMode(mode) {
  document
    .querySelectorAll(".vocab-section")
    .forEach((s) => s.classList.remove("active"));
  document
    .querySelectorAll(".mode-btn")
    .forEach((b) => b.classList.remove("active"));
  document.querySelector(`[data-mode="${mode}"]`).classList.add("active");

  if (mode === "vocab") {
    document.getElementById("vocabSection").classList.add("active");
    renderVocab();
  } else {
    document.getElementById("literarySection").classList.add("active");
    renderLiterary();
  }
}

document.getElementById("searchInput").addEventListener("input", () => {
  renderMode(document.querySelector(".mode-btn.active").dataset.mode);
});

document.querySelectorAll(".mode-btn").forEach((btn) => {
  btn.addEventListener("click", () => renderMode(btn.dataset.mode));
});

function initApp() {
  document.querySelectorAll(".reveal").forEach((el, i) => {
    setTimeout(() => el.classList.add("active"), i * 130);
  });
}

renderMode("vocab");
