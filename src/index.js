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
        const originalSrc = '/src/assets/icons/connect.svg';
        const newSrc = '/src/assets/icons/connected.svg';

        if (img.getAttribute('src') === originalSrc) {
            img.setAttribute('src', newSrc);
        }
        else {
            img.setAttribute('src', originalSrc);
        }
    });
});


//////////////// MODAL ////////////////

const modal = document.querySelector(".modal");
const openBtn = document.querySelector(".openBtn");
const closeBtn = document.querySelector(".closeBtn");
const overlay = document.querySelector(".overlay");


openBtn.addEventListener("click", function(){
    modal.classList.remove("hidden");
    /* Blur Oyhana overlay.classList.remove("hidden");*/
})

closeBtn.addEventListener("click", function(){
    modal.classList.add("hidden");
})