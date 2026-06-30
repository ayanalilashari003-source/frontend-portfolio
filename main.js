const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){
        menuBtn.innerHTML = '<i class="ri-close-line"></i>';
    }else{
        menuBtn.innerHTML = '<i class="ri-menu-3-line"></i>';
    }

});


