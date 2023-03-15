function main() {
    const nav = document.getElementById('nav-container-mobile');
    const menuBtn = document.getElementById('controller');
        menuBtn.addEventListener('click',function() {
          nav.className = (!nav.classList.contains('active')) ? 'active' : '';
        });
  }
  addEventListener('load',main);