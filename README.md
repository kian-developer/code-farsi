# سوسیه همش گوشته 🌭

سایت شخصی و انیمیشن‌پذیر با تمرکز بر دسکتاپ و طراحی رنگی گوشت و سوسیس. شامل صفحه قفل، گالری تصاویر، جزوه آموزشی (PDF) و صفحه واژه‌های فارسی نهم و آرایه‌های ادبی.

## 🖼 ویژگی‌ها
- صفحه ورود با رمز عبور و انیمیشن قفل
- تم Dark / Light قابل تغییر
- گالری دو عکس با لایت‌باکس و تیلت انیمیشن (دسکتاپ)
- نمایش داخلی جزوه آموزشی با fallback اگر PDF پیدا نشد
- صفحه vocab.html با جستجوی زنده در واژه‌ها و آرایه‌های ادبی (بدون نیاز به سرور)
- کرسور سفارشی در دسکتاپ
- پاسخگویی به موبایل و تبلت

## 🚀 نحوه اجرا
فقط فایل `index.html` را در هر مرورگر باز کنید. برای باز کردن صفحه vocab، فایل `src/vocab.html` را باز کنید.

هیچ سرور یا نیازمندی خاصی ندارد (کاملاً استاتیک).

## 🔑 رمز عبور
رمز預فرض سایت: `موزنوتلا`

## 📂 ساختار پروژه
```
index.html                # صفحه اصلی
src/
├── css/
│   ├── style.css         # استایل صفحه اصلی
│   └── vocab.css         # استایل صفحه واژه‌ها
├── js/
│   ├── script.js         # منطق صفحه اصلی (i18n، تم، قفل، گالری، لایت‌باکس)
│   └── vocab.js          # منطق صفحه vocab (داده‌ها، جستجو، رندرینگ)
├── data/
│   ├── vocabulary.json   # واژه‌های درس‌های فارسی نهم
│   └── literary_devices.json # آرایه‌های ادبی با تعریف و مثال
├── image1.png
├── image2.png
├── booklet.pdf           # جزوه آموزشی
├── moon_stars_24dp_...svg # آیکون تم
├── Iranian Sans.ttf      # فونت (اختیاری، فعلاً استفاده نشده)
└── vocab.html            # صفحه واژه‌ها و آرایه‌های ادبی
```

## 🛠 تکنولوژی‌ها
- HTML5, CSS3 (پاسخگویی، انیمیشن، gradienت)
- JavaScript Vanilla (بدن‌بنیared فریم‌ورک)
- Google Fonts: Vazirmatn

## 📝 لایسنس
این پروژه برای استفاده شخصی و آموزشی ساخته شده است.

---

# Sosisie Hamsh Goshthe 🌭

A personal animated website with desktop-focused design and meat & sausage color theme. Includes lock screen, gallery, PDF booklet, and Grade 9 Persian vocabulary & literary devices page.

## 🚀 How to Run
Just open `index.html` in any browser. For the vocab page, open `src/vocab.html`.

No server or build step required (fully static).

## 🔑 Default Password
`موزنوتلا`

## 📂 Project Structure
Same as above.

## 🛠 Tech Stack
- HTML5, CSS3
- Vanilla JavaScript
- Google Fonts: Vazirmatn

---

## 🎁 هدیه ویژه برای اقای اسماعیلی عزیز

این پروژه و فایل مخصوص **اقای اسماعیلی عزیز** است.

> χαρακτηριστیک: خیلی بی‌اعصابه، ولی مهربون است! 😊

**رمز مخصوص سایت:** `موزنوتلا`

---

## 📄 License
Personal and educational use.