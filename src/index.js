//////////////// CAROUSEL SCRIPT ////////////////

const config = {
    individualItem: '.carousel-item', // class of individual item
    carouselWidth: 360, // in px
    carouselId: '#carousel', // selector
    carouselHolderId: '#carousel-holder', // carousel should be <div id="carouselId"><div id="carouselHolderId">{items}</div></div>
}

document.addEventListener("DOMContentLoaded", function(e) {
    // Get items
    const elem = document.querySelector(config.individualItem);
    const elemWidth = parseFloat(window.getComputedStyle(elem).width) + parseFloat(window.getComputedStyle(elem).marginLeft) + parseFloat(window.getComputedStyle(elem).marginRight);
    
    // Track carousel
    let mousedown = false;
    let movement = false;
    let initialPosition = 0;
    let selectedItem;
    let currentDelta = 0;

    document.querySelectorAll(config.carouselId).forEach(function(item) { 
        item.style.width = `${config.carouselWidth}px`;
    });
    
    document.querySelectorAll(config.carouselId).forEach(function(item) {
        item.addEventListener('pointerdown', function(e) {
            mousedown = true;
            selectedItem = item;
            initialPosition = e.pageX;
            currentDelta = parseFloat(item.querySelector(config.carouselHolderId).style.transform.split('translateX(')[1]) || 0;
        }); 
    });
    
    const scrollCarousel = function(change, currentDelta, selectedItem) {
        let numberThatFit = Math.floor(config.carouselWidth / elemWidth);
        let newDelta = currentDelta + change;
        let elemLength = selectedItem.querySelectorAll(config.individualItem).length - numberThatFit;
        if(newDelta <= 0 && newDelta >= -elemWidth * elemLength) {
            selectedItem.querySelector(config.carouselHolderId).style.transform = `translateX(${newDelta}px)`;
        } else {
            if(newDelta <= -elemWidth * elemLength) {
                selectedItem.querySelector(config.carouselHolderId).style.transform = `translateX(${-elemWidth * elemLength}px)`;
            } else if(newDelta >= 0) {
                selectedItem.querySelector(config.carouselHolderId).style.transform = `translateX(0px)`;
            }
        }
    }

    document.body.addEventListener('pointermove', function(e) {
        if(mousedown == true && typeof selectedItem !== "undefined") {
            let change = -(initialPosition - e.pageX);
            scrollCarousel(change, currentDelta, document.body);
            document.querySelectorAll(`${config.carouselId} a`).forEach(function(item) {
                item.style.pointerEvents = 'none';
            });
            movement = true;
        }
    });
    
    ['pointerup', 'mouseleave'].forEach(function(item) {
        document.body.addEventListener(item, function(e) {
            selectedItem = undefined;
            movement = false;
            document.querySelectorAll(`${config.carouselId} a`).forEach(function(item) {
                item.style.pointerEvents = 'all';
            });
        });
    });
});


//////////////// SEARCH SCRIPT - WORK IN PROGRESS ////////////////


// const filter = document.querySelector('#search');

// let wildersSearch = []

// filter.addEventListener("keyup", (event) => {
//    wildersSearch = wilders.filter((wilders) => wilders.name.toLowerCase.includes(event.target.value.toLowerCase())
//    );

//     modalPop.innerHTML = render(wildersSearch)
// });

// modalPop.innerHTML = render(wilders)


//////////////// FILTER BTN SCRIPT ////////////////


const filterBtn = document.querySelector('.filter-btn');
const filterMenu = document.getElementById('filter-menu');

filterBtn.addEventListener('click', () => {
    filterMenu.classList.toggle('show-filters');
    filterBtn.classList.toggle('filter-btn-clicked');
});

const filters = document.querySelectorAll('.filters');

filters.forEach(filter => {
    filter.addEventListener('click', () => {
      filter.classList.toggle('filters-clicked');
    });
});


//////////////// CONNECT BTN SCRIPT ////////////////


const connected = document.querySelectorAll('.connect');

    connected.forEach((element)=> {
    element.addEventListener('click', () => {
        const img = element.querySelector('img');
        const originalSrc = './src/assets/icons/connect.svg';
        const newSrc = './src/assets/icons/connected.svg';

        if (img.getAttribute('src') === originalSrc) {
            img.setAttribute('src', newSrc);
        }
        else {
            img.setAttribute('src', originalSrc); 
        }
    });
});


//////////////// WILDERS PROFILES ////////////////


import render from "./assets/js/wildersCards.js";
import wilders from "./assets/js/wildersData.js";

const cards = document.querySelector("#cards-container");

cards.innerHTML = render(wilders);


////////////////// MODAL ////////////////


const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".closeBtn");
const btn = document.querySelector(".profile-card");
const overlay = document.querySelector(".overlay");

btn.addEventListener("click", function() {
    overlay.classList.add("is-visible");
    modal.classList.add("is-visible");
  });

closeBtn.addEventListener('click', function() {
    overlay.classList.remove('is-visible');
    modal.classList.remove('is-visible');
  });

// overlay.addEventListener("click", function() {
//     overlay.classList.remove("is-visible");
//     modal.classList.remove("is-visible");
// });


//////////////// NAV MOBILE ////////////////


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
    text1.textContent = 'Profiles';
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
    text3.textContent = 'Wilders Hub';
    link3.appendChild(icon3);
    link3.appendChild(text3);
    navmobile.appendChild(link3);

// Ajout de la barre de navigation à l'élément body
body.appendChild(navmobile);

feather.replace();
document.querySelector(".nav-item").focus();


//////////////// NAV DESKTOP ////////////////


// Récupération de l'élément header
const header = document.querySelector('header');

// Création de l'élément img
const logo = document.createElement("img");
// logo.className = "logo-nav";
// logo.src = "./src/assets/images/wcs-logo.png";
// logo.alt = "Logo";

// Création de l'élément nav
const nav = document.createElement("nav");
nav.id = "desktop-nav";

// Création de l'élément ul
const ul = document.createElement("ul");

// Ajout des liens dans la liste
const links = ["Home", "Profiles", "Wilders Hub"];
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

