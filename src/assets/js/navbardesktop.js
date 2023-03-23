const desktopNav = document.createElement("nav");
desktopNav.setAttribute("id", "desktop-nav");

const ul = document.createElement("ul");

const li1 = document.createElement("li");
const a1 = document.createElement("a");
a1.setAttribute("href", "#home");
a1.textContent = "Home";
li1.appendChild(a1);
ul.appendChild(li1);

const li2 = document.createElement("li");
const a2 = document.createElement("a");
a2.setAttribute("href", "#about");
a2.textContent = "about";
li2.appendChild(a2);
ul.appendChild(li2);

const li3 = document.createElement("li");
const a3 = document.createElement("a");
a3.setAttribute("href", "#services");
a3.textContent = "services";
li3.appendChild(a3);
ul.appendChild(li3);

const li4 = document.createElement("li");
const a4 = document.createElement("a");
a4.setAttribute("href", "#contact");
a4.textContent = "contact";
li4.appendChild(a4);
ul.appendChild(li4);

desktopNav.appendChild(ul);

document.body.appendChild(desktopNav);




const bars=document.querySelector('.fa-bars');
const times=document.querySelector('.fa-times');

// click event for bars
bars.addEventListener('click',click_bars);
// click event for times
times.addEventListener('click',click_times);
function click_bars(){
    bars.style.transform="rotate(360deg)"
    bars.style.display='none';
}

function click_times(){
    bars.style.display = 'block';
    
}