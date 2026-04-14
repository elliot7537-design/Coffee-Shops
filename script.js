/* =========================================================
   RAÍZ — Interactions
   ========================================================= */

// ---------- Translations ----------
const translations = {
  en: {
    "loader": "Brewing.",
    "nav.story": "Story",
    "nav.origin": "Origin",
    "nav.menu": "Menu",
    "nav.craft": "Craft",
    "nav.visit": "Visit",

    "hero.estd": "Est. Oaxaca · 2018",
    "hero.tag": "Specialty Coffee",
    "hero.l1": "Where coffee",
    "hero.l2": "meets",
    "hero.l3": "craft.",
    "hero.scroll": "Scroll to taste",

    "story.label": "01 — Story",
    "story.h1": "A cup is never",
    "story.h2": "just a cup.",
    "story.p1": "RAÍZ began in a tiled courtyard in Oaxaca, where our founders spent summers watching abuela grind beans by hand. What started as a reverence for ritual became a shop devoted to the craft — every bean traced, every pour considered.",
    "story.p2": "We partner directly with highland farms, roast in small batches, and serve in a space built for the slow kind of morning.",
    "story.cta": "Meet the farms",

    "origin.label": "02 — Origin",
    "origin.h1": "From the mountains",
    "origin.h2": "of México.",
    "origin.intro": "Every bean we brew is grown within our borders. Single-origin, shade-grown, and harvested by cooperatives we know by name.",
    "origin.chiapas.p": "Grown at 1,400m in the Sierra Madre. Expect notes of cocoa nib, dried fig, and a soft, syrupy finish.",
    "origin.oaxaca.p": "Our home. Pluma Hidalgo farms deliver bright citrus, milk chocolate, and the gentlest honey sweetness.",
    "origin.veracruz.p": "Coastal heat and volcanic soil yield a clean cup — toasted almond, brown sugar, and a whisper of orange zest.",

    "ethics.1": "Organic certified harvest, no synthetic inputs.",
    "ethics.2": "Cooperatives we pay above fair-trade price.",
    "ethics.3": "Middlemen between the farm and our roaster.",
    "ethics.4": "Compostable cups and returnable ceramics.",

    "menu.label": "03 — Menu",
    "menu.h1": "Brews &",
    "menu.h2": "rituals.",
    "menu.coffee": "Coffee",
    "menu.brewlab": "Brew Lab",
    "menu.bites": "Bites",

    "craft.label": "04 — Craft",
    "craft.h1": "The art",
    "craft.h2": "of the pour.",
    "craft.intro": "Coffee is chemistry, choreography, and a little bit of theater. Our baristas train for months — not to perform, but to disappear behind the cup.",

    "quote.1": "\u201CWe don't sell coffee —",
    "quote.2": "we translate a place into a cup.\u201D",
    "quote.by": "— Lucía Mendoza, Head Roaster",

    "visit.label": "05 — Visit",
    "visit.h1": "Come in.",
    "visit.h2": "Stay a while.",
    "visit.hours": "Hours",
    "visit.days": "Mon – Sun",
    "visit.address": "Address",
    "visit.contact": "Contact",
    "visit.cta": "Reserve a table",

    "footer.h1": "Let's brew",
    "footer.h2": "something together.",
    "footer.note": "Mexican origin coffee. Made slowly.",
    "footer.explore": "Explore",
    "footer.follow": "Follow",
    "footer.subscribe": "Newsletter",
    "footer.thanks": "Thanks.",
    "footer.made": "Made slowly in México."
  },

  es: {
    "loader": "Preparando.",
    "nav.story": "Historia",
    "nav.origin": "Origen",
    "nav.menu": "Menú",
    "nav.craft": "Oficio",
    "nav.visit": "Visita",

    "hero.estd": "Desde Oaxaca · 2018",
    "hero.tag": "Café de Especialidad",
    "hero.l1": "Donde el café",
    "hero.l2": "encuentra",
    "hero.l3": "su oficio.",
    "hero.scroll": "Desliza para probar",

    "story.label": "01 — Historia",
    "story.h1": "Una taza nunca es",
    "story.h2": "solo una taza.",
    "story.p1": "RAÍZ nació en un patio de azulejos en Oaxaca, donde nuestros fundadores pasaban veranos viendo a la abuela moler café a mano. Lo que comenzó como devoción al ritual se volvió un espacio dedicado al oficio — cada grano rastreado, cada vertido considerado.",
    "story.p2": "Trabajamos directamente con fincas de altura, tostamos en lotes pequeños, y servimos en un lugar hecho para las mañanas lentas.",
    "story.cta": "Conoce las fincas",

    "origin.label": "02 — Origen",
    "origin.h1": "Desde las montañas",
    "origin.h2": "de México.",
    "origin.intro": "Cada grano que preparamos crece dentro de nuestras fronteras. De origen único, cultivado bajo sombra, y cosechado por cooperativas que conocemos por nombre.",
    "origin.chiapas.p": "Cultivado a 1,400m en la Sierra Madre. Notas de cacao, higo seco, y un final suave y almibarado.",
    "origin.oaxaca.p": "Nuestra casa. Las fincas de Pluma Hidalgo dan cítricos brillantes, chocolate con leche, y un toque de miel.",
    "origin.veracruz.p": "Calor costero y suelo volcánico para una taza limpia — almendra tostada, azúcar moreno, y un susurro de naranja.",

    "ethics.1": "Cosecha certificada orgánica, sin insumos sintéticos.",
    "ethics.2": "Cooperativas a las que pagamos sobre el precio justo.",
    "ethics.3": "Intermediarios entre la finca y nuestro tostador.",
    "ethics.4": "Vasos compostables y cerámica retornable.",

    "menu.label": "03 — Menú",
    "menu.h1": "Bebidas y",
    "menu.h2": "rituales.",
    "menu.coffee": "Café",
    "menu.brewlab": "Métodos",
    "menu.bites": "Para comer",

    "craft.label": "04 — Oficio",
    "craft.h1": "El arte",
    "craft.h2": "del vertido.",
    "craft.intro": "El café es química, coreografía, y un poco de teatro. Nuestros baristas entrenan durante meses — no para presumir, sino para desaparecer detrás de la taza.",

    "quote.1": "\u201CNo vendemos café —",
    "quote.2": "traducimos un lugar en una taza.\u201D",
    "quote.by": "— Lucía Mendoza, Tostadora Principal",

    "visit.label": "05 — Visita",
    "visit.h1": "Pasa.",
    "visit.h2": "Quédate un rato.",
    "visit.hours": "Horario",
    "visit.days": "Lun – Dom",
    "visit.address": "Dirección",
    "visit.contact": "Contacto",
    "visit.cta": "Reservar mesa",

    "footer.h1": "Preparemos",
    "footer.h2": "algo juntos.",
    "footer.note": "Café de origen mexicano. Hecho despacio.",
    "footer.explore": "Explorar",
    "footer.follow": "Síguenos",
    "footer.subscribe": "Boletín",
    "footer.thanks": "Gracias.",
    "footer.made": "Hecho despacio en México."
  }
};

// ---------- Language switcher ----------
function applyLang(lang) {
  document.documentElement.lang = lang;
  document.body.classList.add("lang-switching");

  setTimeout(() => {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    document.querySelectorAll(".lang-btn").forEach(btn => {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    localStorage.setItem("raiz-lang", lang);
    document.body.classList.remove("lang-switching");
  }, 250);
}

document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => applyLang(btn.dataset.lang));
});

// Init language
const savedLang = localStorage.getItem("raiz-lang") || "en";
if (savedLang !== "en") applyLang(savedLang);

// ---------- Loader ----------
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").classList.add("hide");
  }, 1400);
});

// ---------- Nav scroll state ----------
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 40);
});

// ---------- Mobile menu ----------
const menuToggle = document.getElementById("menuToggle");
if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
  document.querySelectorAll(".nav-links a").forEach(a => {
    a.addEventListener("click", () => nav.classList.remove("open"));
  });
}

// ---------- Reveal on scroll ----------
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = parseInt(entry.target.dataset.delay || "0", 10);
      setTimeout(() => entry.target.classList.add("in"), delay);
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });

document.querySelectorAll(".reveal").forEach(el => io.observe(el));

// ---------- Soft parallax for hero title ----------
const heroTitle = document.querySelector(".hero-title");
if (heroTitle && window.matchMedia("(min-width: 960px)").matches) {
  window.addEventListener("scroll", () => {
    const y = Math.min(window.scrollY, 600);
    heroTitle.style.transform = `translateY(${y * 0.15}px)`;
    heroTitle.style.opacity = `${1 - y / 700}`;
  }, { passive: true });
}
