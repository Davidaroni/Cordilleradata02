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




if (document.querySelector('#container-slider')) {
    setInterval(function() {
        funcionEjecutar("siguiente");
    }, 5000);
}

if (document.querySelector('.listslider')) {
    let links = document.querySelectorAll(".listslider li a");
    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let item = this.getAttribute('itlist');
            let arrItem = item.split("_");
            funcionEjecutar(arrItem[1]);
            return false;
        });
    });
}

function funcionEjecutar(side) {
    let parentTarget = document.getElementById('slider');
    let elements = parentTarget.getElementsByTagName('li');
    let curElement, siguienteElement;

    for (var i = 0; i < elements.length; i++) {
        if (elements[i].style.opacity === "1") {
            curElement = i;
            break;
        }
    }

    if (side === 'anterior' || side === 'siguiente') {
        if (side === "anterior") {
            siguienteElement = (curElement === 0) ? elements.length - 1 : curElement - 1;
        } else {
            siguienteElement = (curElement === elements.length - 1) ? 0 : curElement + 1;
        }
    } else {
        siguienteElement = side;
        side = (curElement < siguienteElement) ? 'siguiente' : 'anterior';
    }

    // PUNTOS INFERIORES
    let elementSel = document.getElementsByClassName("listslider")[0].getElementsByTagName("a");
    elementSel[curElement].classList.remove("item-select-slid");
    elementSel[siguienteElement].classList.add("item-select-slid");
    elements[curElement].style.opacity = 0;
    elements[curElement].style.zIndex = 0;
    elements[siguienteElement].style.opacity = 1;
    elements[siguienteElement].style.zIndex = 1;
}
