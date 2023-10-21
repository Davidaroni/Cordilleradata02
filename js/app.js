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

    $(document).ready(function() {
        // Cuando se hace clic en el enlace con la clase "en" (English)
        $(".en").click(function(event) {
            // Prevenir la acción predeterminada del enlace
            event.preventDefault();
    
            // Ocultar los menús
            
            $(".nav-list li:eq(2) a").hide("Research");
            $(".nav-list li:eq(3) a").hide("Projects");
            $(".nav-list li:eq(4) a").hide("Strategic Plan");
        });

            
    $(".es").click(function(event) {
        // Prevenir la acción predeterminada del enlace
        event.preventDefault();

        // Restaurar los menús
        $(".nav-list li:eq(2) a").show("Research");
        $(".nav-list li:eq(3) a").show("Projects");
        $(".nav-list li:eq(4) a").show("Strategic Plan");
    });
    });


    
//INGLES
$(function(){
    $(".en").click(function(){
        //header
        $(".nav-list li:eq(0) a").text("Home");
        $(".nav-list li:eq(1) a").text("Advertising");
        $(".nav-list li:eq(2) a").text("Research");
        $(".nav-list li:eq(3) a").text("Projects");
        $(".nav-list li:eq(4) a").text("Strategic Plan");
        $(".nav-list li:eq(5) a").text("Contact");
        $(".language-selected").text("en-US");
        $(".language-selected").removeClass("change-es")
        $(".language-selected").addClass("change-en");
        //SLIDER

        $(".content_slider p").text("Advertising, marketing, market studies and project formulation");
        $("#slider .lane2").text("Advertising with web pages and social networks");
        $("#slider .lane3").text("Preparation of market research");
        $("#slider.lane4").text("Strategic plan for companies and project development");
        $(".btnSlider ").text("to access"); 

        //FLOAT BUTTON SOCIAL NETWORKS
        $(".floating-button span").text("Social Networks");

        //section
        // Cambiar el texto dentro del <h1>
        var sectionTitle = $(".col-righ .section-title");
        sectionTitle.contents().filter(function() {
            return this.nodeType === 3; // Filtrar nodos de texto
        }).first().replaceWith("ADVERTISING AND RESEARCH COMPANY ");
        $(".col-righ h2").text("the company Cordillera data");
        $(".col-righ p").text("It is a Peruvian company specialized in providing advertising, market research and opinion services. Preparation and evaluation of projects.\n" +
        "Advertising services are carried out based on operational marketing, to evaluate the product or service, identify the market segment, and select the advertising channels, for which we have the following channels: FM radios, social networks and printed advertising .\n" +
        "Market research is carried out with the purpose of determining and identifying the suppliers and demanders of products and services, and quantifying the demand. In addition to identifying the relevant characteristics of the market.\n" +
        "Opinion research is carried out with the purpose of determining the opinion of the general public, regarding aspects of identification and perception regarding social political aspects and prestige of brands and private and public institutions.\n" +
        "The preparation and evaluation of the investment project. It is a document that contains all the necessary information to demonstrate the viability or non-viability of a project. And all the information necessary for the initiation and operation of a project.")
        //Section  video
        $(".empresa").text("Learn more about the company cordillerdata");
        $(".movie button").text("Watch video");
      // Cambiar el texto dentro del <h1>
      var sectionTitle = $(".work-top .section-title");
      sectionTitle.contents().filter(function() {
          return this.nodeType === 3; // Filtrar nodos de texto
      }).first().replaceWith("¿ why work with ");
      $(".work-top p").text("We work on the basis of marketing: We evaluate the product or service, the market and promotion and advertising. We have computer professionals, graphic designers. Bilingual editors in Spanish and English. Mass channels on social networks to support advertising. We have experience and personnel to carry out market research. Preparation of survey questionnaires, sampling and collection of information at the national level");
      $(".direccion").text("ADDRESS: Calle José María Vilchez 840, San Juan de Miraflores, Lima, Lima, Perú")
      $(".telefono").text("PHONE: +51 999365216")
      $(".correo").text("E-MAIL: cordilleradatascience@gmail.com")
      $(".contact-info h2").text("contact")
      $(".social-media h2").text("follow us")
      $(document).ready(function() {
        var nuevoContenido = "&copy; 2023 Datacor. All rights reserved.";
        $(".copyright p").html(nuevoContenido);
    });
    
    });
});



//ESPAÑOL
$(function(){
    $(".es").click(function(){
        //header
        $(".nav-list li:eq(0) a").text("inicio");
        $(".nav-list li:eq(1) a").text("publicidad");
        $(".nav-list li:eq(2) a").text("invetigaciones");
        $(".nav-list li:eq(3) a").text("Proyectos");
        $(".nav-list li:eq(4) a").text("Plan estrategico");
        $(".nav-list li:eq(5) a").text("Contacto");
        $(".language-selected").text("es");
        $(".language-selected").removeClass("change-en")
        $(".language-selected").addClass("change-es");

        //SLIDER

        $(".content_slider p").text("Publicidad, marketing, estudios de mercado y formulación de proyectos");
        $("#slider .lane2").text("Publicidad con páginas web y redes sociales");
        $("#slider .lane3").text("Elaboración de investigación de mercados");
        $("#slider .lane4").text("Plan estratégico para empresas y elaboración de proyectos");
        $(".btnSlider").text("Acceder");
        
        //Redes Sociales boton flotante
        $(".floating-button span").text("Redes Sociales");

        //section
    // Cambiar el texto dentro del <h1>
    var sectionTitle = $(".col-righ .section-title");
    sectionTitle.contents().filter(function() {
        return this.nodeType === 3; // Filtrar nodos de texto
    }).first().replaceWith("compañia de publicidad e invetigaciones ");
    $(".col-righ h2").text("la compañia Cordillera data");
    $(".col-righ p").text("Es una empresa peruana especialista en proveer servicios de publicidad, investigación de mercados y opinión. Elaboración y evaluación de proyectos.\n" +
    "Los servicios de publicidad se realizan en base al marketing operativo, para evaluar el producto o servicio, identificar el segmento de mercado, y seleccionar los canales de publicidad, para los cuales contamos con los siguientes canales: radios Fm, redes sociales y publicidad impresa.\n" +
    "La investigación de mercados se realiza con la finalidad de determinar e identificar a los ofertantes y demandantes de productos y servicios, y cuantificar la demanda. Además de identificar las características relevantes del mercado.\n" +
    "La investigación de opinión, se realiza con la finalidad de determinar la opinión del público en general, respecto a aspectos de identificación y percepción respecto a aspectos políticos sociales y prestigio de marcas e instituciones privadas y públicas.\n" +
    "La elaboración y evaluación del proyecto de inversión. Es un documento que contiene toda la información necesaria que demuestre la viabilidad o inviabilidad de un proyecto. Y toda la información necesaria para el inicio y la operación de un proyecto.");
    // SECCION DE VIDEO//
    $(".empresa").text("Conose màs sobre la compañia cordillerdata");
    $(".movie button").text("Ver video")
          // Cambiar el texto dentro del <h1>
          var sectionTitle = $(".work-top .section-title");
          sectionTitle.contents().filter(function() {
              return this.nodeType === 3; // Filtrar nodos de texto
          }).first().replaceWith("¿por que trabajar con ");
          $(".work-top p").text("Trabajamos sobre la base del marketing: Evaluamos el producto o servicio, el mercado y la promoción y publicidad. Contamos con profesionales de la informática, diseñadores gráficos. Redactores bilingües en español e inglés. Canales masivos en redes sociales para el soporte de la publicidad. Tenemos experiencia y personal para la elaboración de investigación de mercado. Elaboración de cuestionarios de encuesta, muestreo y recopilación de la información a nivel nacional");
          $(".direccion").text("DIRECCIÒN: Calle José María Vilchez 840, San Juan de Miraflores, Lima, Lima, Perú")
          $(".telefono").text("TELÈFONO: +51 999365216");
          $(".correo").text("CORREO: cordilleradatascience@gmail.com");
          $(".contact-info h2").text("contacto");
          $(".social-media h2").text("siguenos");
          $(document).ready(function() {
            var nuevoContenido = "&copy; 2023 Datacor. Todos los derechos reservados.";
            $(".copyright p").html(nuevoContenido);
        });
        
    });
});

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
