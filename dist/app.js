// MENU VARIABLES
const menuButton = document.querySelector('#menu-button');
const menuItems = document.querySelector('#menu');
const menuButtonSpans = document.querySelectorAll('#menu-button span');
const links = document.querySelectorAll('#menu a');
const main = document.querySelector('main');
menuButton.addEventListener('click', () => {
  menuItems.classList.toggle('hidden');
  main.classList.toggle('opacity-10');

  menuButtonSpans.forEach((span) => {
    span.classList.toggle('animado');
  });
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    menuItems.classList.add('hidden');
    main.classList.remove('opacity-10');
    menuButtonSpans.forEach((span) => {
      span.classList.remove('animado');
    });
  });
});

// CIERRA MENU ON RESIZE

window.onresize = function () {
  let w = window.outerWidth;
  if (w > 768) {
    menuItems.classList.add('hidden');
    menuButtonSpans.forEach((span) => {
      span.classList.remove('animado');
    });
  }
};

/**DARK MODE*/

const darkButton = document.querySelector('#darkButton');

darkButton.addEventListener('click', function () {
  // if set via local storage previously
  if (localStorage.getItem('color-theme')) {
    if (localStorage.getItem('color-theme') === 'light') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    }

    // if NOT set via local storage previously
  } else {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    }
  }
});

/*VARIABLES  JOBS SECTION*/

const jobSection = document.querySelector('#jobSection');
const articles = document.querySelectorAll('#jobSection article');

jobSection.addEventListener('click', (event) => {
  const id = event.target.dataset.id;

  if (id) {
    articles.forEach((article) => {
      article.classList.add('hidden');
    });
    const element = document.getElementById(id);
    element.classList.remove('hidden');
  }
});

const jobLinks = document.querySelectorAll('#jobSection button');
const firstLink = document.querySelector('#link1');

jobLinks.forEach((link) => {
  link.addEventListener('click', () => {
    firstLink.classList.remove(
      'border-sky-500',
      'bg-white',
      'dark:bg-slate-700'
    );
  });
});


const translations = {
  es: {
  a1:"Quién Soy",
  a2:"Experiencia",
  a3:"Proyectos",
  a4:"Contáctame",
  a5:"Hola, soy",
  a6:"Edwaar Francheski",
  a7:"Desarrollo Aplicaciones WEB para un mundo mejor.",
  a8:"Soy ingeniero de sistemas que se especializa en diseñar y desarrollar aplicaciones WEB excepcionales. Actualmente, estoy enfocado en crear productos accesibles para el mercado de la tecnología educativa.",
  a9:"Contrátame",
  a10:"Experiencia Laboral",
  a11:"InterPrice",
  a12:"Microsoft",
  a13:"IndustriasApollo",
  a14:"Jooble.org",
  a15:"Ingeniero de Sistemas",
  a16:"@InterPrice",
  a17:"Febrero 2024- Presente",
  a18:"He desarrollado aplicaciones modernas, eficientes y fácil de mantener tanto para clientes internos como para clientes externos.",
  a19:"He trabajado con varias tecnologías WEB modernas incluyendo React, TypeScript, Express JS y PostgreSQL.",
  a20:"He brindado apoyo técnico para nuestros clientes durante el lanzamiento de plataformas digitales.",
  a21:"Ingeniero Front-End",
  a22:"@Microsoft",
  a23:"Julio 2022 - Diciembre 2023",
  a24:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, deserunt. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, deserunt.",
  a25:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, deserunt. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, deserunt.",
  a26:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, deserunt. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, deserunt.",
  a27:"Desarrollador WEB",
  a28:"@IndustriasApollo",
  a29:"Enero 2021 - Septiembre 2021",
  a30:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, deserunt. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, deserunt.",
  a31:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, deserunt. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, deserunt.",
  a32:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, deserunt. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, deserunt.",
  a33:"Ingeniero Front-End",
  a34:"@Jooble.org",
  a35:"Enero 2020 - Junio 2020",
  a36:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, deserunt. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, deserunt.",
  a37:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, deserunt. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, deserunt.",
  a38:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, deserunt. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, deserunt.",
  a39:"Mis Ultimos Proyectos",
  a40:"INTELIO - RENTA OFICINAS",
  a41:"HTML",
  a42:"CSS",
  a43:"JS",
  a44:"EXPERTD - MARKETING DIGITAL",
  a45:"SASS",
  a46:"Bootstrap",
  a47:"JS",
  a48:"ARTWEB - UI DESIGN",
  a49:"HTML",
  a50:"SASS",
  a51:"JS",
  a52:"Contáctame",
  a53:"Enviar Mensaje",
  a54:"Diseñado & Desarrollado por Edwaar.",
  a55:"Validación Social",
  a56:"Leticia Fujimori",
  a57:"Arequipa",
  a58:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic.",
  a59:"Melisa Paredes",
  a60:"Piura",
  a61:"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.",
  a62:"Pedro Porro",
  a63:"Lima",
  a64:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti."
  },

  en: {
    a1:"Who I am",
    a2:"Experience",
    a3:"Projects",
    a4:"Contact me at",
    a5:"Hello, I am",
    a6:"Edwaar Francheski",
    a7:"Development of WEB applications for a better world.",
    a8:"I am a systems engineer who specializes in designing and developing exceptional WEB applications. Currently, I am focused on creating affordable products for the educational technology market.",
    a9:"Hire me",
    a10:"Work Experience",
    a11:"InterPrice",
    a12:"Microsoft",
    a13:"IndustriasApollo",
    a14:"Jooble.org",
    a15:"Systems Engineer",
    a16:"@InterPrice",
    a17:"February 2024- Present",
    a18:"I have developed modern, efficient and easy to maintain applications for both internal and external clients.",
    a19:"I have worked with several modern WEB technologies including React, TypeScript, Express JS and PostgreSQL.",
    a20:"I have provided technical support for our clients during the launch of digital platforms.",
    a21:"Front-End Engineer",
    a22:"@Microsoft",
    a23:"July 2022 - December 2023",
    a24:"The customer himself, the customer will be able to pursue the adipiscing of the company. It will be followed, they will leave. The customer himself, the customer will be able to pursue the adipiscing of the company. It will be followed, they will leave.",
    a25:"The customer himself, the customer will be able to pursue the adipiscing of the company. It will be followed, they will leave. The customer himself, the customer will be able to pursue the adipiscing of the company. It will be followed, they will leave.",
    a26:"The customer himself, the customer will be able to pursue the adipiscing of the company. It will be followed, they will leave. The customer himself, the customer will be able to pursue the adipiscing of the company. It will be followed, they will leave.",
    a27:"WEB Developer",
    a28:"@IndustriasApollo",
    a29:"January 2021 - September 2021",
    a30:"The customer himself, the customer will be able to pursue the adipiscing of the company. It will be followed, they will leave. The customer himself, the customer will be able to pursue the adipiscing of the company. It will be followed, they will leave.",
    a31:"The customer himself, the customer will be able to pursue the adipiscing of the company. It will be followed, they will leave. The customer himself, the customer will be able to pursue the adipiscing of the company. It will be followed, they will leave.",
    a32:"The customer himself, the customer will be able to pursue the adipiscing of the company. It will be followed, they will leave. The customer himself, the customer will be able to pursue the adipiscing of the company. It will be followed, they will leave.",
    a33:"Front-End Engineer",
    a34:"@Jooble.org",
    a35:"January 2020 - June 2020",
    a36:"The customer himself, the customer will be able to pursue the adipiscing of the company. It will be followed, they will leave. The customer himself, the customer will be able to pursue the adipiscing of the company. It will be followed, they will leave.",
    a37:"The customer himself, the customer will be able to pursue the adipiscing of the company. It will be followed, they will leave. The customer himself, the customer will be able to pursue the adipiscing of the company. It will be followed, they will leave.",
    a38:"The customer himself, the customer will be able to pursue the adipiscing of the company. It will be followed, they will leave. The customer himself, the customer will be able to pursue the adipiscing of the company. It will be followed, they will leave.",
    a39:"My Latest Projects",
    a40:"INTELIO - OFFICES FOR RENT",
    a41:"HTML",
    a42:"CSS",
    a43:"JS",
    a44:"EXPERTD - DIGITAL MARKETING",
    a45:"SASS",
    a46:"Bootstrap",
    a47:"JS",
    a48:"ARTWEB - UI DESIGN",
    a49:"HTML",
    a50:"SASS",
    a51:"JS",
    a52:"Contact me at",
    a53:"Send Message",
    a54:"Designed & Developed by Edwaar.",
    a55:"Social Validation",
    a56:"Leticia Fujimori",
    a57:"Arequipa",
    a58:"It is very important for the customer to pay attention to the adipiscing process. That they are bound by the duties here which he seeks to want from here.",
    a59:"Melisa Paredes",
    a60:"Piura",
    a61:"For to come to the smallest detail, none of us undertakes any exercise of the body which is laborious, except as something of convenience.",
    a62:"Pedro Porro",
    a63:"Lima",
    a64:"But in truth we both accuse those who are deserving of just hatred, who have been softened and corrupted by the flattery of present pleasures."
  },

  fs: {
  a1:"Qui suis-je ?",
  a2:"Expérience",
  a3:"Projets",
  a4:"Contactez-moi à l'adresse suivante",
  a5:"Bonjour, je suis",
  a6:"Edwaar Francheski",
  a7:"Développement d'applications WEB pour un monde meilleur.",
  a8:"Je suis un ingénieur système spécialisé dans la conception et le développement d'applications WEB exceptionnelles. Actuellement, je me concentre sur la création de produits abordables pour le marché de la technologie éducative.",
  a9:"Engagez-moi",
  a10:"Expérience professionnelle",
  a11:"InterPrice",
  a12:"Microsoft",
  a13:"IndustriasApollo",
  a14:"Jooble.org",
  a15:"Ingénieur système",
  a16:"@InterPrice",
  a17:"De février 2024 à aujourd'hui",
  a18:"J'ai développé des applications modernes, efficaces et faciles à entretenir pour des clients internes et externes.",
  a19:"J'ai travaillé avec plusieurs technologies WEB modernes, notamment React, TypeScript, Express JS et PostgreSQL.",
  a20:"J'ai apporté un soutien technique à nos clients lors du lancement de plateformes numériques.",
  a21:"Ingénieur Front-End",
  a22:"@Microsoft",
  a23:"Juillet 2022 - décembre 2023",
  a24:"Le client lui-même, le client pourra poursuivre l'adipiscing de l'entreprise. Ce sera suivi, ils partiront. Le client lui-même, le client pourra poursuivre l'adipiscing de l'entreprise. Ce sera suivi, ils partiront.",
  a25:"Le client lui-même, le client pourra poursuivre l'adipiscing de l'entreprise. Ce sera suivi, ils partiront. Le client lui-même, le client pourra poursuivre l'adipiscing de l'entreprise. Ce sera suivi, ils partiront.",
  a26:"Le client lui-même, le client pourra poursuivre l'adipiscing de l'entreprise. Ce sera suivi, ils partiront. Le client lui-même, le client pourra poursuivre l'adipiscing de l'entreprise. Ce sera suivi, ils partiront.",
  a27:"Développeur WEB",
  a28:"@IndustriasApollo",
  a29:"Janvier 2021 - septembre 2021",
  a30:"Le client lui-même, le client pourra poursuivre l'adipiscing de l'entreprise. Ce sera suivi, ils partiront. Le client lui-même, le client pourra poursuivre l'adipiscing de l'entreprise. Ce sera suivi, ils partiront.",
  a31:"Le client lui-même, le client pourra poursuivre l'adipiscing de l'entreprise. Ce sera suivi, ils partiront. Le client lui-même, le client pourra poursuivre l'adipiscing de l'entreprise. Ce sera suivi, ils partiront.",
  a32:"Le client lui-même, le client pourra poursuivre l'adipiscing de l'entreprise. Ce sera suivi, ils partiront. Le client lui-même, le client pourra poursuivre l'adipiscing de l'entreprise. Ce sera suivi, ils partiront.",
  a33:"Ingénieur Front-End",
  a34:"@Jooble.org",
  a35:"Janvier 2020 - Juin 2020",
  a36:"Le client lui-même, le client pourra poursuivre l'adipiscing de l'entreprise. Ce sera suivi, ils partiront. Le client lui-même, le client pourra poursuivre l'adipiscing de l'entreprise. Ce sera suivi, ils partiront.",
  a37:"Le client lui-même, le client pourra poursuivre l'adipiscing de l'entreprise. Ce sera suivi, ils partiront. Le client lui-même, le client pourra poursuivre l'adipiscing de l'entreprise. Ce sera suivi, ils partiront.",
  a38:"Le client lui-même, le client pourra poursuivre l'adipiscing de l'entreprise. Ce sera suivi, ils partiront. Le client lui-même, le client pourra poursuivre l'adipiscing de l'entreprise. Ce sera suivi, ils partiront.",
  a39:"Mes derniers projets",
  a40:"INTELIO - LOCATION DE BUREAUX",
  a41:"HTML",
  a42:"CSS",
  a43:"JS",
  a44:"EXPERTD - MARKETING DIGITAL",
  a45:"SASS",
  a46:"Bootstrap",
  a47:"JS",
  a48:"ARTWEB - UI DESIGN",
  a49:"HTML",
  a50:"SASS",
  a51:"JS",
  a52:"Contactez-moi à l'adresse suivante",
  a53:"Envoyer un message",
  a54:"Conçu et développé par Edwaar.",
  a55:"Validation sociale",
  a56:"Leticia Fujimori",
  a57:"Arequipa",
  a58:"Il est très important que le client fasse attention au processus d'adipistage. Qu'ils sont liés par les devoirs ici qu'il cherche à vouloir d'ici.",
  a59:"Melisa Paredes",
  a60:"Piura",
  a61:"Car pour en venir au plus petit détail, aucun de nous n’entreprend aucun exercice du corps qui soit laborieux, sauf par commodité.",
  a62:"Pedro Porro",
  a63:"Lima",
  a64:"Mais en vérité nous accusons tous deux ceux qui méritent une juste haine, qui ont été adoucis et corrompus par la flatterie des plaisirs présents."
  }
}
// Función para traducir la página
function translatePage(language) {
  const selectedTranslations = translations[language];

  // Obtén todos los elementos con el atributo data-translation-key
  const elementsToTranslate = document.querySelectorAll('[data-translation-key]');

  // Itera sobre los elementos y cambia su contenido
  elementsToTranslate.forEach(element => {
      const translationKey = element.getAttribute('data-translation-key');
      element.textContent = selectedTranslations[translationKey];
  });
}

// Agrega un evento de cambio al elemento <select> para cambiar el idioma
document.getElementById("language-select").addEventListener("change", function () {
  const selectedLanguage = this.value;
  translatePage(selectedLanguage);
});
