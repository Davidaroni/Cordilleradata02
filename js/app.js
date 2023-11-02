const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});


/*document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '';
	} else {
		header.style.backgroundColor = 'transparen';
	}
});*/


menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

document.cookie = "yourCookieName=yourCookieValue; SameSite=None; Secure";
document.cookie = "your_cookie_name=your_cookie_value; SameSite=None; Secure";
document.cookie = "your_cookie_name=your_cookie_value; SameSite=Strict";
document.cookie = "cookie_name=value; SameSite=None; Secure";
document.cookie = "miCookie=valor; samesite=None; secure";



if (document.querySelector('#container-slider')) {
    let currentSlide = 0;
    const slides = document.querySelectorAll('#slider li');
    const slideCount = slides.length;
    const slideInterval = 5000; // Intervalo de cambio de diapositiva (en milisegundos)

    function showSlide(index) {
        slides[currentSlide].style.opacity = 0;
        slides[currentSlide].style.zIndex = 0;
        slides[index].style.opacity = 1;
        slides[index].style.zIndex = 1;
        currentSlide = index;
    }

    function nextSlide() {
        const nextIndex = (currentSlide + 1) % slideCount;
        showSlide(nextIndex);
    }

    function prevSlide() {
        const prevIndex = (currentSlide - 1 + slideCount) % slideCount;
        showSlide(prevIndex);
    }

    setInterval(nextSlide, slideInterval);

    const slideLinks = document.querySelectorAll(".listslider li a");
    slideLinks.forEach(function (link, index) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            showSlide(index);
        });
    });
}

//SCRITP CON LOS STILOS EN LINEA
    // if (document.querySelector('#container-slider')) {
    //   setInterval(function() {
    // funcionEjecutar("siguiente");
    //  }, 5000);
    // }
  
    // if (document.querySelector('.listslider')) {
    //   let links = document.querySelectorAll(".listslider li a");
    //   links.forEach(function(link) {
    //     link.addEventListener('click', function(e) {
    //       e.preventDefault();
    //       let item = this.getAttribute('itlist');
    //       let arrItem = item.split("_");
    //       funcionEjecutar(arrItem[1]);
    //       return false;
    //     });
    //   });
    // }
  
    // function funcionEjecutar(side) {
    //   let parentTarget = document.getElementById('slider');
    //   let elements = parentTarget.getElementsByTagName('li');
    //   let curElement, siguienteElement;
  
    //   for (var i = 0; i < elements.length; i++) {
    //     if (elements[i].style.opacity === "1") {
    //       curElement = i;
    //       break;
    //     }
    //   }
  
    //   if (side === 'anterior' || side === 'siguiente') {
    //     if (side === "anterior") {
    //       siguienteElement = (curElement === 0) ? elements.length - 1 : curElement - 1;
    //     } else {
    //       siguienteElement = (curElement === elements.length - 1) ? 0 : curElement + 1;
    //     }
    //   } else {
    //     siguienteElement = side;
    //     side = (curElement < siguienteElement) ? 'siguiente' : 'anterior';
    //   }
  
    //   // PUNTOS INFERIORES
    //   let elementSel = document.querySelectorAll(".listslider li a");
    //   elementSel[curElement].classList.remove("item-select-slid");
    //   elementSel[siguienteElement].classList.add("item-select-slid");
    //   elements[curElement].style.opacity = 0;
    //   elements[curElement].style.zIndex = 0;
    //   elements[siguienteElement].style.opacity = 1;
    //   elements[siguienteElement].style.zIndex = 1;
    // }

  
// script.js

const socialButton = document.getElementById('social-button');
const socialContainer = document.getElementById('social-container');

socialButton.addEventListener('click', () => {
    if (socialContainer.style.display === 'grid') {
        socialContainer.style.display = 'none';
    } else {
        socialContainer.style.display = 'grid';
    }
});
