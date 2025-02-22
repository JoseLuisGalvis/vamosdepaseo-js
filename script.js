// Inicializar EmailJS (agregar al inicio del script si no está)
emailjs.init("deQ8LIjzglGZDYhFR");

// Función para manejar el envío del formulario
function setupContactForm() {
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_6wxs1pt", "template_t1egspu", form)
      .then(() => {
        alert("Mensaje enviado correctamente ✅");
        form.reset();
      })
      .catch((error) => {
        alert("Error al enviar el mensaje ❌");
        console.error(error);
      });
  });

  document.getElementById("backToHomeContact").addEventListener("click", () => {
    window.location.href = "/";
  });

  document.getElementById("shareFacebook").addEventListener("click", () => {
    window.open(
      "https://www.facebook.com/sharer/sharer.php?u=" +
        encodeURIComponent(window.location.href),
      "_blank"
    );
  });

  document.getElementById("shareInstagram").addEventListener("click", () => {
    window.open(
      "https://www.instagram.com/?url=" +
        encodeURIComponent(window.location.href),
      "_blank"
    );
  });
}

// Llamar a la función en la inicialización
setupContactForm();

// Traducciones Navbar
// Traducciones unificadas para todos los componentes
const translations = {
  es: {
    navbarTitle: "Vamos De Paseo con Yrsa Bello",
    inicio: "Inicio",
    destinos: "Nosotros",
    experiencias: "Video",
    destacados: "Playlist",
    comunidad: "Comunidad",
    contacto: "Contacto",
    map: "Mapa",
    darkMode: "🌞 Modo Claro",
    lightMode: "🌙 Modo Oscuro",
    language: "Español",
    english: "Inglés",
    videoTitle: "Vamos de Paseo con Yrsa Bello",
    youtubeLink: "Visita: @YrsaBello",
    authorText: "Autor del Video:",
    aboutTitle: "Conócenos",
    aboutSubtitle: "Vamos de Paseo con Yrsa Bello",
    aboutDescription:
      "Descubre nuevos lugares, culturas y experiencias a través de los ojos de Yrsa Bello. Nuestro canal está dedicado a compartir aventuras auténticas, consejos de viaje y mostrar la belleza de destinos únicos alrededor del mundo.",
    aboutButtonText: "Ver más videos",
    aboutBack: "Volver al Inicio",
    statsSubscribers: "Suscriptores",
    statsVideos: "Videos",
    statsViews: "Visualizaciones",
    latestVideoTitle: "Último Video",
    latestVideoSubtitle: "Mantente al día con nuestras aventuras",
    latestVideoDescription:
      "No te pierdas nuestro contenido más reciente. Suscríbete a nuestro canal para recibir notificaciones de nuevos videos cada semana.",
    subscribeButton: "Suscríbete",
    backToHome: "Volver al Inicio",
    playlistTitle: "Playlist Destacada",
    playlistViews: "vistas",
    playlistTimeAgo: "hace 1 semana",
    seeAllPlaylists: "Ver todas las playlists",
    playlistSubscribe: "Suscríbete",
    playlistBack: "Volver al Inicio",
    communityTitle: "Únete a Nuestra Comunidad de YouTube",
    communitySubtitle: "¡Ayúdanos a alcanzar 2000 suscriptores!",
    communityDescription:
      "Tu apoyo es fundamental para seguir creando contenido de calidad. Cada suscripción nos acerca más a nuestra meta de 2000 suscriptores, lo que nos permitirá traerte más aventuras, consejos de viaje y experiencias únicas.",
    communityButton: "Suscribirme ahora",
    communityCurrentCount: "Suscriptores actuales:",
    communityTargetCount: "Meta:",
    communityBenefits: [
      "Notificaciones de nuevos videos",
      "Contenido exclusivo para la comunidad",
      "Posibilidad de influir en futuros destinos",
      "Participación en sorteos y eventos especiales",
    ],
    communityBack: "Volver al Inicio",
    contactTitle: "Contacto",
    contactName: "Nombre",
    contactLastName: "Apellidos",
    contactEmail: "Correo Electrónico",
    contactCountry: "País",
    contactState: "Estado o Provincia",
    contactMunicipality: "Municipio",
    contactMessage: "Mensaje",
    contactSend: "Enviar",
    contactBack: "Volver al Inicio",
    contactPlaceholderMessage:
      "Por favor incluya el lugar que desea evaluemos para visitar o el mensaje con su aporte o sugerencia. Gracias!",
    contactShareText: "Comparte en Redes Sociales",
    contactShare: "Compartir",
    mapTitle: "Sitios Visitados",
    footerCopyright: "© 2024 VamosDePaseo. Todos los derechos reservados.",
    footerAbout: "Acerca de",
    footerPrivacy: "Política de Privacidad",
    footerTerms: "Términos y Condiciones",
    footerContact: "Contacto",
  },
  en: {
    navbarTitle: "Let's Go for a Walk with Yrsa Bello",
    inicio: "Home",
    destinos: "About Us",
    experiencias: "Video",
    destacados: "Playlist",
    comunidad: "Community",
    contacto: "Contact",
    map: "Map",
    darkMode: "🌞 Light Mode",
    lightMode: "🌙 Dark Mode",
    language: "Spanish",
    english: "English",
    videoTitle: "Let's go for a walk with Yrsa Bello",
    youtubeLink: "Visit: @YrsaBello",
    authorText: "Video Author:",
    aboutTitle: "About Us",
    aboutSubtitle: "Let's Go for a Walk with Yrsa Bello",
    aboutDescription:
      "Discover new places, cultures, and experiences through Yrsa Bello's eyes. Our channel is dedicated to sharing authentic adventures, travel tips, and showcasing the beauty of unique destinations around the world.",
    aboutButtonText: "Watch more videos",
    aboutBack: "Back to Home",
    statsSubscribers: "Subscribers",
    statsVideos: "Videos",
    statsViews: "Views",
    latestVideoTitle: "Latest Video",
    latestVideoSubtitle: "Stay updated with our adventures",
    latestVideoDescription:
      "Don't miss our latest content. Subscribe to our channel to receive notifications of new videos every week.",
    subscribeButton: "Subscribe",
    backToHome: "Back to Home",
    playlistTitle: "Featured Playlist",
    playlistViews: "views",
    playlistTimeAgo: "1 week ago",
    seeAllPlaylists: "See all playlists",
    playlistSubscribe: "Subscribe",
    playlistBack: "Back to Home",
    communityTitle: "Join Our YouTube Community",
    communitySubtitle: "Help us reach 2000 subscribers!",
    communityDescription:
      "Your support is essential for us to continue creating quality content. Each subscription brings us closer to our goal of 2000 subscribers, which will allow us to bring you more adventures, travel tips, and unique experiences.",
    communityButton: "Subscribe now",
    communityCurrentCount: "Current subscribers:",
    communityTargetCount: "Goal:",
    communityBenefits: [
      "Notifications of new videos",
      "Exclusive community content",
      "Influence on future destinations",
      "Participation in giveaways and special events",
    ],
    communityBack: "Back to Home",
    contactName: "Name",
    contactLastName: "Last Name",
    contactEmail: "Email",
    contactCountry: "Country",
    contactState: "State or Province",
    contactMunicipality: "Municipality",
    contactMessage: "Message",
    contactSend: "Send",
    contactBack: "Back to Home",
    contactPlaceholderMessage:
      "Please include the place you would like us to evaluate for a visit or your message with contributions or suggestions. Thank you!",
    contactShareText: "Share on social media",
    contactShare: "Share",
    mapTitle: "Visited Sites",
    footerCopyright: "© 2024 VamosDePaseo. All rights reserved.",
    footerAbout: "About",
    footerPrivacy: "Privacy Policy",
    footerTerms: "Terms & Conditions",
    footerContact: "Contact",
  },
};

// Lista de sitios visitados (mismo array del componente original)
const visitedSites = [
  { position: [-34.6206, -58.3738], name: "San Telmo" },
  { position: [-34.62, -58.3665], name: "Puerto Madero" },
  { position: [-34.5948, -58.3973], name: "Librería El Ateneo" },
  { position: [-37.9957, -57.5497], name: "Mar del Plata" },
  { position: [-34.5702, -58.4233], name: "Planetario" },
  { position: [-34.9186, -57.975], name: "República de los Niños" },
  { position: [-34.5625, -58.4583], name: "Barrio Chino" },
  { position: [-34.5567, -58.5167], name: "Tierra Santa" },
  { position: [-34.4251, -58.5797], name: "Tigre" },
  { position: [-34.5882, -58.3945], name: "Recoleta" },
  { position: [-34.6394, -58.3626], name: "Caminito" },
  { position: [-34.5772, -58.4317], name: "Expo Rural" },
  { position: [-34.5563, -58.5222], name: "Tecnópolis" },
  { position: [-34.7058, -58.2532], name: "Quilmes" },
  { position: [-34.5756, -58.4217], name: "Jardín Japonés" },
  { position: [-34.5933, -58.4], name: "Av Santa Fe" },
  { position: [-23.5489, -46.6388], name: "Sao Paulo" },
  { position: [-34.9212, -57.956], name: "La Plata" },
  { position: [-34.5778, -58.4294], name: "Distrito Arcos Palermo" },
  { position: [-34.7443, -58.5719], name: "Campanópolis" },
  { position: [-37.3667, -56.8333], name: "Pinamar" },
  { position: [-36.3603, -56.7342], name: "San Clemente del Tuyú" },
  { position: [-41.1456, -71.3082], name: "Bariloche" },
  { position: [-34.6486, -58.36], name: "Barrio Coreano" },
];

// Estado global
let currentLanguage = "es";
let darkMode = localStorage.getItem("darkMode") === "true";

// Elementos del DOM (Navbar)
const navbar = document.querySelector(".navbar");
const navbarTitle = document.querySelector(".navbar-title");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
const toggleDarkModeBtn = document.getElementById("toggleDarkMode");
const languageDropdownBtn = document.getElementById("languageDropdown");

// Elementos del DOM (VideoBackground)
const videoTitle = document.querySelector(".video-title-video");
const youtubeLink = document.querySelector(".youtube-link a");
const authorText = document.querySelector(".author-info");

// Elementos del DOM (AboutSection)
const aboutTitle = document.querySelector(".section-title-about");
const aboutSubtitle = document.querySelector(".section-subtitle");
const aboutDescription = document.querySelector(".section-description");
const aboutButtonText = document.querySelector(".btn-walk:first-child");
const backButton = document.getElementById("backToHome");
const statLabels = document.querySelectorAll(".stat-label");

// Función para actualizar todos los textos según el idioma
function updateLanguage(lang) {
  const t = translations[lang];

  // Navbar
  navbarTitle.textContent = t.navbarTitle;
  navLinks[0].textContent = t.inicio;
  navLinks[1].textContent = t.destinos;
  navLinks[2].textContent = t.experiencias;
  navLinks[3].textContent = t.destacados;
  navLinks[4].textContent = t.comunidad;
  navLinks[5].textContent = t.contacto;
  navLinks[6].textContent = t.map;
  toggleDarkModeBtn.textContent = darkMode ? t.darkMode : t.lightMode;
  languageDropdownBtn.textContent = lang === "es" ? t.language : t.english;

  // VideoBackground
  videoTitle.textContent = t.videoTitle;
  youtubeLink.textContent = t.youtubeLink;
  authorText.innerHTML = `${t.authorText} <strong>Google Earth</strong>`;

  // AboutSection
  aboutTitle.textContent = t.aboutTitle;
  aboutSubtitle.textContent = t.aboutSubtitle;
  aboutDescription.textContent = t.aboutDescription;
  aboutButtonText.innerHTML = `${t.aboutButtonText} <i class="bi bi-youtube"></i>`;
  backButton.textContent = t.aboutBack;
  statLabels[0].textContent = t.statsSubscribers;
  statLabels[1].textContent = t.statsVideos;
  statLabels[2].textContent = t.statsViews;

  // LatestVideoSection
  document.querySelector(".section-title-latest").textContent =
    t.latestVideoTitle;
  document.querySelector("#latest-video .section-subtitle").textContent =
    t.latestVideoSubtitle;
  document.querySelector("#latest-video .section-description").textContent =
    t.latestVideoDescription;
  document.querySelector(
    "#latest-video .btn-walk.cta-button"
  ).innerHTML = `${t.subscribeButton} <i class="bi bi-youtube"></i>`;
  document.getElementById("backToHomeLatest").textContent = t.backToHome;

  // PlaylistSection
  document.querySelector(".card-title-playlist").textContent = t.playlistTitle;
  document.querySelectorAll(".video-stats-playlist").forEach((stat) => {
    stat.textContent = `2.5K ${t.playlistViews} • ${t.playlistTimeAgo}`;
  });
  document.querySelector(".card-link-playlist").textContent = t.seeAllPlaylists;
  document.querySelector(
    "#playlist .btn-walk.cta-button"
  ).innerHTML = `${t.playlistSubscribe} <i class="bi bi-youtube"></i>`;
  document.getElementById("backToHomePlaylist").textContent = t.playlistBack;

  // CommunitySection
  document.querySelector(".section-title-youtube").textContent =
    t.communityTitle;
  document.querySelector(".section-subtitle-youtube").textContent =
    t.communitySubtitle;
  document.querySelector(".youtube-description").textContent =
    t.communityDescription;
  document.querySelector(
    "#youtubeSubscribeBtn"
  ).innerHTML = `<i class="bi bi-youtube me-2"></i>${t.communityButton}`;
  document.querySelector("#backToHomeCommunity").textContent = t.communityBack;
  document.querySelectorAll(".counter-label")[0].textContent =
    t.communityCurrentCount;
  document.querySelectorAll(".counter-label")[1].textContent =
    t.communityTargetCount;
  document.querySelectorAll(".benefit-text").forEach((text, index) => {
    text.textContent = t.communityBenefits[index];
  });

  // ContactFormSection
  document.querySelector(".text-center-contact").textContent = t.contactTitle;
  document.querySelectorAll("#contact .form-label")[0].textContent =
    t.contactName;
  document.querySelectorAll("#contact .form-label")[1].textContent =
    t.contactLastName;
  document.querySelectorAll("#contact .form-label")[2].textContent =
    t.contactEmail;
  document.querySelectorAll("#contact .form-label")[3].textContent =
    t.contactCountry;
  document.querySelectorAll("#contact .form-label")[4].textContent =
    t.contactState;
  document.querySelectorAll("#contact .form-label")[5].textContent =
    t.contactMunicipality;
  document.querySelectorAll("#contact .form-label")[6].textContent =
    t.contactMessage;
  document.querySelector("#contactForm button[type='submit']").textContent =
    t.contactSend;
  document.getElementById("backToHomeContact").textContent = t.contactBack;
  document.querySelector("#contact textarea").placeholder =
    t.contactPlaceholderMessage;
  document.querySelector(".social-share p").textContent = t.contactShareText;
  // Corrección para los botones de compartir
  document.querySelectorAll(".btn-outline-contact").forEach((btn) => {
    const icon = btn.querySelector("i");
    // Verificar si hay un ícono y si no es el enlace de YouTube
    if (icon && (!btn.href || !btn.href.includes("youtube.com"))) {
      const iconType = icon.classList[1].split("-")[1]; // Extrae "facebook", "instagram", etc.
      btn.innerHTML = `<i class="bi bi-${iconType} me-1"></i>${t.contactShare}`;
    }
  });

  // MapSection
  document.querySelector(".map-title").textContent = t.mapTitle;

  // Footer
  document.querySelector(".copyright").textContent = t.footerCopyright;
  document.querySelectorAll(".footer-links a")[0].textContent = t.footerAbout;
  document.querySelectorAll(".footer-links a")[1].textContent = t.footerPrivacy;
  document.querySelectorAll(".footer-links a")[2].textContent = t.footerTerms;
  document.querySelectorAll(".footer-links a")[3].textContent = t.footerContact;
}

// Modo oscuro (global)
function toggleDarkMode() {
  darkMode = !darkMode;
  document.body.classList.toggle("dark-mode", darkMode);
  localStorage.setItem("darkMode", darkMode);
  toggleDarkModeBtn.textContent = darkMode
    ? translations[currentLanguage].darkMode
    : translations[currentLanguage].lightMode;
}

// Efecto scroll (Navbar)
function handleScroll() {
  if (window.scrollY > 50) {
    navbar.classList.add("navbar-shrink");
  } else {
    navbar.classList.remove("navbar-shrink");
  }
}

// Cerrar menú en móviles al hacer clic (Navbar)
function setupNavbarMobile() {
  document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 992) {
        document.querySelector(".navbar-toggler").click();
      }
    });
  });
}

// Inicialización de AOS (global, usado por VideoBackground y AboutSection)
function initAOS() {
  AOS.init({
    duration: 3000, // Ajustado a 3000 como en AboutSection
    once: false, // Animaciones se repiten al hacer scroll
    offset: -100,
    mirror: false,
  });
  setTimeout(() => {
    AOS.refresh();
  }, 100);
}

// Volver al inicio (AboutSection)
function setupBackButton() {
  backButton.addEventListener("click", () => {
    window.location.href = "/"; // O ajustá según la navegación deseada
  });
}

// Inicialización general
if (darkMode) {
  document.body.classList.add("dark-mode");
}
updateLanguage(currentLanguage);
window.addEventListener("scroll", handleScroll);
setupNavbarMobile();
initAOS();
setupBackButton();

// Evento modo oscuro
toggleDarkModeBtn.addEventListener("click", toggleDarkMode);

// Cambio de idioma
document.querySelectorAll(".dropdown-item").forEach((item) => {
  item.addEventListener("click", () => {
    currentLanguage = item.getAttribute("data-lang");
    updateLanguage(currentLanguage);
  });
});

// Al final de las funciones existentes
function setupBackButtonLatest() {
  document.getElementById("backToHomeLatest").addEventListener("click", () => {
    window.location.href = "/";
  });
}

// Llamar a la función en la inicialización
setupBackButtonLatest();

// Al final de las funciones existentes
function setupBackButtonPlaylist() {
  document
    .getElementById("backToHomePlaylist")
    .addEventListener("click", () => {
      window.location.href = "/";
    });
}

// Llamar a la función en la inicialización
setupBackButtonPlaylist();

// Al final de las funciones existentes
function setupCommunityButtons() {
  document
    .getElementById("youtubeSubscribeBtn")
    .addEventListener("click", () => {
      window.open("https://www.youtube.com/@YrsaBello/community", "_blank");
    });
  document
    .getElementById("backToHomeCommunity")
    .addEventListener("click", () => {
      window.location.href = "/";
    });
}

// Llamar a la función en la inicialización
setupCommunityButtons();

// Función para inicializar el mapa
function setupMap() {
  const buenosAiresPosition = [-34.6037, -58.3816];
  const map = L.map("leaflet-map", {
    center: buenosAiresPosition,
    zoom: 5,
    scrollWheelZoom: false,
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // Crear ícono violeta personalizado
  const violetIcon = new L.Icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  // Agregar marcadores con el ícono violeta
  visitedSites.forEach(({ position, name }) => {
    L.marker(position, { icon: violetIcon }).addTo(map).bindPopup(name);
  });

  console.log("Mapa inicializado con ícono violeta (URL externa):", map);
}
document.addEventListener("DOMContentLoaded", () => {
  // ... otras inicializaciones ...
  setupMap();
});
