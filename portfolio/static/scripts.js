document.addEventListener('DOMContentLoaded', () => {
  const isDarkMode = localStorage.getItem('dark-mode') === 'true';
  const darkIcon = document.getElementById('darkIcon');
  const lightIcon = document.getElementById('lightIcon');

  // Configuración inicial del modo
  if (isDarkMode) {
      document.body.classList.add('dark-mode');
      darkIcon.style.display = 'none';
      lightIcon.style.display = 'inline';
  } else {
      darkIcon.style.display = 'inline';
      lightIcon.style.display = 'none';
  }
});

function toggleDarkMode() {
  const darkIcon = document.getElementById('darkIcon');
  const lightIcon = document.getElementById('lightIcon');

  document.body.classList.toggle('dark-mode');
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('dark-mode', isDarkMode);

  if (isDarkMode) {
      darkIcon.style.display = 'none';
      lightIcon.style.display = 'inline';
  } else {
      lightIcon.style.display = 'none';
      darkIcon.style.display = 'inline';
  }
}



  let languageData = null;
  let currentLanguage = 'es'; // Idioma inicial

  // Cargar el archivo languages.json al cargar la página
  document.addEventListener('DOMContentLoaded', function () {
      fetch('/static/languages.json')
          .then(response => response.json())
          .then(data => {
              languageData = data;
              switchLanguage(currentLanguage); // Establece el idioma inicial
          })
          .catch(error => console.error('Error al cargar languages.json:', error));
  });

  // Cambiar el idioma
  function switchLanguage(lang) {
      if (!languageData) {
          console.warn('Esperando a que se cargue el archivo de idioma...');
          return;
      }
      document.getElementById('greeting').textContent = languageData[lang].greeting;
      document.getElementById('jobTitle').textContent = languageData[lang].jobTitle;
      document.getElementById('description').textContent = languageData[lang].description;
      document.getElementById('projects').textContent = languageData[lang].projects;
      document.getElementById('tools').textContent = languageData[lang].tools;
      document.getElementById('toolslenguajes').textContent = languageData[lang].toolslenguajes;
      document.getElementById('toolsherramientas').textContent = languageData[lang].toolsherramientas;
      document.getElementById('toolsotros').textContent = languageData[lang].toolsotros;
      document.getElementById('navinicio').textContent = languageData[lang].navinicio;
      document.getElementById('navherramientas').textContent = languageData[lang].navherramientas;
      document.getElementById('navprojects').textContent = languageData[lang].navprojects;
      document.getElementById('navcontact').textContent = languageData[lang].navcontact;
      document.getElementById('contactoh3').textContent = languageData[lang].contactoh3;
      document.getElementById('cv').textContent = languageData[lang].cv;






  }

  // Alternar entre los idiomas
  function toggleLanguage() {
      currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
      switchLanguage(currentLanguage);
  }





document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
    let currentSection = 0;

    // Asegura que la primera sección sea visible al cargar la página
    sections[0].classList.add("active");

    // Función para hacer scroll a una sección específica y aplicar el efecto fade
    function scrollToSection(index) {
        if (index >= 0 && index < sections.length) {
            // Elimina la clase activa de todas las secciones
            sections.forEach(section => section.classList.remove("active"));
            
            // Aplica la clase activa a la sección deseada
            sections[index].classList.add("active");

            // Realiza scroll hacia la sección
            sections[index].scrollIntoView({ behavior: "smooth" });
            currentSection = index;
        }
    }

    // Detecta teclas de flecha para controlar el desplazamiento
    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowDown") {
            event.preventDefault();
            scrollToSection(currentSection + 1);
        } else if (event.key === "ArrowUp") {
            event.preventDefault();
            scrollToSection(currentSection - 1);
        }
    });
});
