// Récupération de l'élément body
const body = document.querySelector('body');

// Création de l'élément de navigation avec l'ID "mobile-navmobile"
const navmobile = document.createElement('nav');
navmobile.setAttribute('id', 'mobile-nav');

// Création du premier lien
const link1 = document.createElement('a');
link1.setAttribute('class', 'nav-item');
link1.setAttribute('href', '#');
const icon1 = document.createElement('i');
icon1.setAttribute('data-feather', 'users');
const text1 = document.createElement('span');
text1.textContent = 'Profile';
link1.appendChild(icon1);
link1.appendChild(text1);
navmobile.appendChild(link1);

// Création du deuxième lien
const link2 = document.createElement('a');
link2.setAttribute('class', 'nav-item');
link2.setAttribute('href', '#');
const icon2 = document.createElement('i');
icon2.setAttribute('data-feather', 'home');
const text2 = document.createElement('span');
text2.textContent = 'Home';
link2.appendChild(icon2);
link2.appendChild(text2);
navmobile.appendChild(link2);

// Création du troisième lien
const link3 = document.createElement('a');
link3.setAttribute('class', 'nav-item');
link3.setAttribute('href', '#');
const icon3 = document.createElement('i');
icon3.setAttribute('data-feather', 'message-circle');
const text3 = document.createElement('span');
text3.textContent = 'Messages';
link3.appendChild(icon3);
link3.appendChild(text3);
navmobile.appendChild(link3);

// Ajout de la barre de navigation à l'élément body
body.appendChild(navmobile);

feather.replace();
      document.querySelector(".nav-item").focus();