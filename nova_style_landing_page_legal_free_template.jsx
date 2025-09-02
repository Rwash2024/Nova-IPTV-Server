import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaPhone, FaEnvelope, FaShieldAlt, FaFilm, FaCubes, FaMoneyBillWave, FaRocket, FaComments } from "react-icons/fa";

export default function NovaSample() {
  const [open, setOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Smooth scroll + scroll-to-top visibility
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.style.scrollBehavior = "smooth";
      const handleScroll = () => setShowScrollTop(window.scrollY > 300);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  // Lightweight dev checks ("test cases") to catch regressions during development
  useEffect(() => {
    if (typeof window !== "undefined" && process.env.NODE_ENV !== "production") {
      console.assert(Array.isArray(tiers) && tiers.length === 4, "[NovaSample] expected 4 pricing tiers");
      console.assert(Array.isArray(features) && features.length === 6, "[NovaSample] expected 6 features in WHY section");
      console.assert(document.querySelector('#pricing'), "[NovaSample] missing #pricing section in DOM");
      console.assert(document.querySelector('#why'), "[NovaSample] missing #why section in DOM");
      console.assert(document.querySelector('#contact'), "[NovaSample] missing #contact section in DOM");
    }
  }, []);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const tiers = [
    { name: "التجربة", price: "مجاناً", period: "", features: ["تجربة مجانية", "دون التزام", "اكتشف الخدمة بنفسك"], featured: true },
    { name: "90 يوم", price: "175 ج.م", period: "/90 يوم", features: ["صلاحية 3 أشهر", "دعم كامل", "تحديثات مستمرة"], featured: false },
    { name: "180 يوم", price: "250 ج.م", period: "/180 يوم", features: ["صلاحية 6 أشهر", "دعم كامل", "تحديثات مستمرة"], featured: false },
    { name: "365 يوم", price: "400 ج.م", period: "/365 يوم", features: ["صلاحية سنة كاملة", "أفضل سعر", "دعم مستمر"], featured: false },
  ];

  const features = [
    { title: "محتوى آمن", desc: "السيرفر خالي من أي مواد إيحائية لتوفير تجربة مشاهدة عائلية آمنة.", Icon: FaShieldAlt },
    { title: "أكبر مكتبة ترفيهية", desc: "جميع الباقات الرياضية والترفيهية بالإضافة لأكثر من 20,000 فيلم ومسلسل.", Icon: FaFilm },
    { title: "تقسيمة مميزة", desc: "محتوى مقسّم بطريقة منظمة لسهولة البحث والمشاهدة.", Icon: FaCubes },
    { title: "أفضل سعر", desc: "أفضل سعر مقابل الخدمة المميزة التي نوفرها لك والدعم الحصري.", Icon: FaMoneyBillWave },
    { title: "سيرفرات سريعة ومستقرة", desc: "سيرفرات تعمل بقوة واستقرار وقت الضغط لتوفر أفضل تجربة مشاهدة بدون تقطيع.", Icon: FaRocket },
    { title: "إمكانية طلب الأفلام والمسلسلات", desc: "تقدر تطلب فيلم أو مسلسل غير متوفر وسيتم رفعه خلال يومين كحد أقصى.", Icon: FaComments },
  ];

  return (
    <div dir="rtl" className="min-h-screen bg-black text-neutral-100">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-black/90 border-b border-neutral-800">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/nova-logo.jpg" alt="نوفا السيرفر الأصلي" className="h-10 w-auto rounded" />
            <span className="text-xl font-bold text-yellow-400">نوفا السيرفر الأصلي</span>
          </div>
          <nav className="flex gap-4 text-sm">
            <a href="#pricing" className="hover:text-yellow-400">الأسعار</a>
            <a href="#why" className="hover:text-yellow-400">ليه تشترك؟</a>
            <a href="#contact" className="hover:text-yellow-400">التواصل</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="text-center py-20 bg-gradient-to-b from-neutral-900 to-black px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
          نوفا - السيرفر الأصلي <span className="text-yellow-400">— بسهولة</span>
        </h2>
        <p className="max-w-2xl mx-auto text-neutral-300 leading-7 mb-6 whitespace-pre-line">
          {`تعالي بقي نقولك نوفا الأصلي عباره ايه ؟ أكبر مكتبه من القنوات العالمية الرياضية
يعني هتشاهد المباريات الأفريقية و العالمـية وانت في بيتك بدون الاحتياج للنزول لأي مكان.
للعملاء الجدد اللى مايعرفوش يعنى ايه سيرفر نوفا
ده سيرفر للاجهزة اللي بتتصل بالنت
زى الريسيفر - أوالموبيل - أوالتاب - أوالكمبيوتر - أواللابتوب - أوالشاشات اللي سمارت أوالاندرويد`}
        </p>
        <button
          className="inline-flex items-center rounded-full bg-yellow-400 text-black px-6 py-2 font-medium hover:bg-yellow-500"
          onClick={() => setOpen(true)}
        >
          أشترك الآن
        </button>
      </section>

      {/* Why Section */}
      <section id="why" className="py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h3 className="text-2xl font-bold text-yellow-400 mb-10">ليه تشترك في سيرفر نوفا الاصلي؟</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map(({ title, desc, Icon }) => (
              <div key={title} className="rounded-[28px] bg-neutral-900/60 border border-neutral-800 p-6 text-right">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-lg font-semibold text-cyan-300">{title}</h4>
                  <Icon aria-hidden className="text-3xl text-yellow-400" />
                </div>
                <p className="text-sm text-neutral-300">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 bg-neutral-900/40">
        <div className="mx-auto max-w-6xl px-4">
          <h3 className="text-2xl font-bold text-yellow-400 mb-8 text-center">باقات بسيطة وواضحة</h3>
          <div className="grid gap-6 md:grid-cols-4">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={`rounded-2xl border border-yellow-500/70 p-6 bg-neutral-900/40 shadow-[0_0_0_1px_rgba(234,179,8,0.2)] ${t.featured ? 'ring-2 ring-yellow-400' : ''}`}
              >
                <div className="flex items-baseline justify-between mb-4">
                  <span className="text-lg font-semibold">{t.name}</span>
                  <span className="text-2xl font-extrabold text-yellow-400">
                    {t.price}
                    <span className="text-base font-medium text-neutral-200">{t.period}</span>
                  </span>
                </div>
                <ul className="space-y-2 text-sm text-neutral-300 mb-6 text-right">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-yellow-400"></span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className="w-full rounded-full bg-yellow-400 text-black py-2 font-medium hover:bg-yellow-500"
                  onClick={() => setOpen(true)}
                >
                  اشترك الآن
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal: تفاصيل الاشتراك */}
      {open && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/70" onClick={() => setOpen(false)} />
          <div role="dialog" aria-modal="true" className="absolute inset-0 flex items-center justify-center p-4">
            <div className="w-full max-w-lg rounded-2xl bg-neutral-950 border border-neutral-800 p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-bold">تفاصيل الاشتراك</h4>
                <button aria-label="إغلاق" className="text-neutral-400 hover:text-white" onClick={() => setOpen(false)}>✕</button>
              </div>
              <p className="text-neutral-300 mb-6">اختر وسيلة التواصل المفضلة لديك لإتمام الاشتراك:</p>
              <div className="grid gap-4">
                <a
                  href="https://wa.me/201022097217"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-green-600/20 border border-green-600/40 rounded-xl p-4 hover:bg-green-600/30"
                >
                  <div className="flex items-center gap-3"><FaWhatsapp className="text-2xl text-green-500" /><span>واتساب</span></div>
                  <span className="font-semibold">01022097217</span>
                </a>
                <a
                  href="tel:01022097217"
                  className="flex items-center justify-between bg-yellow-500/10 border border-yellow-500/40 rounded-xl p-4 hover:bg-yellow-500/20"
                >
                  <div className="flex items-center gap-3"><FaPhone className="text-2xl text-yellow-400" /><span>اتصال مباشر</span></div>
                  <span className="font-semibold">01022097217</span>
                </a>
                <a
                  href="mailto:mohamed.adel.rwash@gmail.com"
                  className="flex items-center justify-between bg-blue-500/10 border border-blue-500/40 rounded-xl p-4 hover:bg-blue-500/20"
                >
                  <div className="flex items-center gap-3"><FaEnvelope className="text-2xl text-blue-400" /><span>البريد الإلكتروني</span></div>
                  <span className="font-semibold">mohamed.adel.rwash@gmail.com</span>
                </a>
              </div>
              <p className="text-xs text-neutral-400 mt-4">* بدّل البريد بعنوانك الفعلي.</p>
            </div>
          </div>
        </div>
      )}

      {/* Contact */}
      <section id="contact" className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h3 className="text-2xl font-bold text-yellow-400 mb-6 text-center">تواصل معنا</h3>
          <form className="grid md:grid-cols-2 gap-4 text-right">
            <input placeholder="الاسم" className="bg-neutral-900 border border-neutral-800 rounded-xl p-3 text-neutral-100" />
            <input placeholder="البريد الإلكتروني" className="bg-neutral-900 border border-neutral-800 rounded-xl p-3 text-neutral-100" />
            <input placeholder="الموضوع" className="bg-neutral-900 border border-neutral-800 rounded-xl p-3 text-neutral-100 md:col-span-2" />
            <textarea placeholder="رسالتك" className="bg-neutral-900 border border-neutral-800 rounded-xl p-3 text-neutral-100 md:col-span-2 min-h-[120px]" />
            <button className="rounded-full bg-yellow-400 text-black hover:bg-yellow-500 py-2 px-5 md:col-span-2">إرسال</button>
          </form>
          <p className="text-xs text-neutral-400 mt-3 text-center">بالنقر على إرسال، فأنت توافق على سياسة الخصوصية وشروط الخدمة.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 text-center py-6 text-sm text-neutral-400">
        © {new Date().getFullYear()} نوفا السيرفر الأصلي — جميع الحقوق محفوظة.
      </footer>

      {/* Scroll-to-top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 md:left-10 bg-yellow-400 text-black rounded-full p-3 shadow-lg hover:bg-yellow-500 transition"
          aria-label="الرجوع للأعلى"
        >
          ⬆️
        </button>
      )}
    </div>
  );
}
