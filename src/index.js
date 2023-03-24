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
        
    });
});


//////////////// MODAL ////////////////

const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".closeBtn");
const title = document.querySelector(".title-profile h2:first-child");
const job = document.querySelector(".job h3:first-child");
const picture = document.querySelector(".picture");
const btn1 = document.querySelector("#card1");
const btn2 = document.querySelector("#card2");
const btn3 = document.querySelector("#card3");
const btn4 = document.querySelector("#card4");
const btn5 = document.querySelector("#card5");
const btn6 = document.querySelector("#card6");


btn1.addEventListener("click", function(){
    modal.classList.add("show-modal");
})

btn2.addEventListener("click", function(){
    title.innerHTML = "Anthony Gorski";
    job.innerHTML = "Instructor";
    picture.src = "/src/assets/images/AnthonyGorski.png"
    modal.classList.add("show-modal");
})

btn3.addEventListener("click", function(){
    title.innerHTML = "Enzo Castagnos";
    job.innerHTML = "Web developper";
    picture.src = "/src/assets/images/EnzoCastagnos.jpeg";
    modal.classList.add("show-modal");
})

btn4.addEventListener("click", function(){
    title.innerHTML = "Oyhana Mahjoubi";
    job.innerHTML = "Web developper";
    picture.src="/src/assets/images/OyhanaMahjoubi.png";
    modal.classList.add("show-modal");
})

btn5.addEventListener("click", function(){
    title.innerHTML = "Jeremy Dohin";
    job.innerHTML = "Web developper";
    picture.src="/src/assets/images/JeremyDohin.jpg";
    modal.classList.add("show-modal");
})

btn6.addEventListener("click", function(){
    title.innerHTML = "Kylian Gronier";
    job.innerHTML = "Web developper";
    picture.src="/src/assets/images/kylian.png";
    modal.classList.add("show-modal");
})

closeBtn.addEventListener("click", function (){
    modal.classList.remove("show-modal");
})

window.addEventListener("click", function (event){
    if (event.target === modal){
        modal.classList.remove("show-modal")
    }
})











