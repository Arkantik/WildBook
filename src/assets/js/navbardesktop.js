// Récupération de l'élément header
const header = document.querySelector('header');

// Création de l'élément img
const logo = document.createElement("img");
logo.className = "logo";
logo.src = "./src/assets/img/wildlogo.png";
logo.alt = "Logo";

// Création de l'élément nav
const nav = document.createElement("nav");
nav.id = "desktop-nav";

// Création de l'élément ul
const ul = document.createElement("ul");

// Ajout des liens dans la liste
const links = ["home", "about", "services", "contact"];
for (const link of links) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = "#" + link;
  a.textContent = link;
  li.appendChild(a);
  ul.appendChild(li);
}

// Ajout de la barre de navigation à l'élément header
nav.appendChild(logo);
nav.appendChild(ul);
header.appendChild(nav);

