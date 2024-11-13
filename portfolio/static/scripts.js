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
