window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const header = document.querySelector('.home'); 
  
    if (window.scrollY > header.offsetHeight) {
      navbar.style.display = 'none';
    } else {
      navbar.style.display = 'flex'; 
    }
  });
  
  