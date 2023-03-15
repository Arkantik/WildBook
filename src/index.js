// Sélectionner la balise HTML de la barre de navigation
const nav = document.querySelector('nav');

// Créer un nouveau bouton de navigation
const homeBtn = document.createElement('a');
homeBtn.textContent = 'Accueil';
homeBtn.className = 'nav-button';
homeBtn.href = '#';

// Ajouter le bouton de navigation à la barre de navigation
nav.appendChild(homeBtn);

// Répéter les étapes ci-dessus pour chaque bouton de navigation
const servicesBtn = document.createElement('a');
servicesBtn.textContent = 'Services';
servicesBtn.className = 'nav-button';
servicesBtn.href = '#';
nav.appendChild(servicesBtn);

const aboutBtn = document.createElement('a');
aboutBtn.textContent = 'À propos';
aboutBtn.className = 'nav-button';
aboutBtn.href = '#';
nav.appendChild(aboutBtn);

const contactBtn = document.createElement('a');
contactBtn.textContent = 'Contact';
contactBtn.className = 'nav-button';
contactBtn.href = '#';
nav.appendChild(contactBtn);

