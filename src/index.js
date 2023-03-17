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