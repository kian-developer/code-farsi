const i18n = {
  fa: {
    siteTitle: "سوسیه همش گوشته",
    enterSite: "ورود به سوسیه همش گوشته",
    passwordPrompt:
      "لطفاً رمز عبور را وارد کنید تا به داخل سایت دسترسی پیدا کنید.",
    password: "رمز عبور",
    unlock: "ورود به سایت",
    wrongPassword: "رمز عبور اشتباه است. دوباره تلاش کنید.",
    enterHint: "کلید Enter هم برای ورود کار می‌کند",
    navHome: "صفحه اصلی",
    navGallery: "گالری تصاویر",
    navPdf: "جزوه آموزشی",
    navVocab: "واژه‌های فارسی نهم",
    heroDesc:
      "سایت شخصی و پر انیمیشن — دو عکس و جزوه <strong>داخل سایت</strong> هستند نه بیرون. طراحی برای دسکتاپ، رنگ گوشت و سوسیس.",
    btnGallery: "مشاهده تصاویر",
    btnPdf: "بخوانی جزوه",
    galleryTitle: "گالری تصاویر",
    galleryDesc:
      "این دو عکس مستقیماً در کد سایت هستند، لینک خارجی ندارند. کلیک کنید تا بزرگ شود.",
    img1Title: "عکس اول",
    img1Desc: "توضیحات کوتاه در مورد عکس اول اینجا قرار می‌گیرد.",
    img2Title: "عکس دوم",
    img2Desc: "توضیحات کوتاه در مورد عکس دوم اینجا قرار می‌گیرد.",
    pdfTitle: "جزوه آموزشی",
    pdfDesc: "فایل جزوه به صورت داخلی در سایت نمایش داده می‌شود.",
    pdfCardTitle: "جزوه سوسیه همش گوشته",
    pdfCardDesc: "محتوای آموزشی داخل سایت، امن و سریع",
    pdfMissing: "فایل جزوه پیدا نشد",
    pdfMissingDesc: "فایل booklet.pdf را کنار index.html بگذارید.",
    footer:
      "ساخت با ❤️ و گوشت برای سوسیه همش گوشته — انیمیشن‌پذیر و دسکتاپ‌فوکس",
    close: "بستن",
  },
  en: {
    siteTitle: "Sosisie Hamsh Goshthe",
    enterSite: "Enter Sosisie Hamsh Goshthe",
    passwordPrompt: "Please enter the password to access the site.",
    password: "Password",
    unlock: "Unlock",
    wrongPassword: "Wrong password. Try again.",
    enterHint: "Press Enter to unlock",
    navHome: "Home",
    navGallery: "Gallery",
    navPdf: "Booklet",
    navVocab: "Grade 9 Vocabulary",
    heroDesc:
      "A personal animated website — two images and the booklet are inside the site, not outside. Desktop-focused, meat & sausage colors.",
    btnGallery: "View Images",
    btnPdf: "Read Booklet",
    galleryTitle: "Gallery",
    galleryDesc:
      "These two images are directly in the site code, no external links. Click to enlarge.",
    img1Title: "Image One",
    img1Desc: "Short description about image one goes here.",
    img2Title: "Image Two",
    img2Desc: "Short description about image two goes here.",
    pdfTitle: "Educational Booklet",
    pdfDesc: "The booklet file is displayed inside the site.",
    pdfCardTitle: "Sosisie Hamsh Goshthe Booklet",
    pdfCardDesc: "Educational content inside the site, secure and fast",
    pdfMissing: "Booklet file not found",
    pdfMissingDesc: "Place booklet.pdf next to index.html.",
    footer:
      "Made with ❤️ and meat for Sosisie Hamsh Goshthe — animated and desktop-focused",
    close: "Close",
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
  document.title = i18n[lang].siteTitle + (lang === "fa" ? " | سایت شخصی و انیمیشن‌پذیر" : " | Personal Animated Website");
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
      i18n[lang].unlock === "ورود به سایت" ? "در حال ورود..." : "Unlocking...";
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

  document.querySelectorAll("a, button, .image-card, input").forEach((el) => {
    el.addEventListener("mouseenter", () => outline.classList.add("hovered"));
    el.addEventListener("mouseleave", () =>
      outline.classList.remove("hovered"),
    );
  });

  document.querySelectorAll("[data-tilt]").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rx = ((y - cy) / cy) * -7;
      const ry = ((x - cx) / cx) * 7;
      card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-10px)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";
    });
  });
}

const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lightbox-img");
const lbCaption = document.getElementById("lightbox-caption");

document.querySelectorAll(".image-card").forEach((card) => {
  card.addEventListener("click", () => {
    const img = card.querySelector("img");
    const src = img ? img.src : "";
    const caption = card.querySelector(".caption h3")?.textContent || "";
    if (src) {
      lbImg.src = src;
      lbCaption.textContent = caption;
      lightbox.classList.add("open");
      document.body.style.overflow = "hidden";
    }
  });
});

function closeLightbox() {
  lightbox.classList.remove("open");
  lbImg.src = "";
  document.body.style.overflow = "auto";
}

document
  .getElementById("closeLightbox")
  .addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && lightbox.classList.contains("open"))
    closeLightbox();
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("active");
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -90px 0px" },
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

function scrollTo(id) {
  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
}

const embed = document.querySelector("embed");
const fallback = document.getElementById("pdfFallback");
if (embed && fallback) {
  embed.addEventListener("error", () => {
    embed.style.display = "none";
    fallback.style.display = "block";
  });
}

function initApp() {
  document.querySelectorAll(".reveal").forEach((el, i) => {
    setTimeout(() => el.classList.add("active"), i * 130);
  });
}
