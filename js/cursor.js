
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
		header.style.backgroundColor = 'transparent';
	}
});*/

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});



/*Contact */
// Setting a cookie with SameSite=None; Secure
// Set the cookie with SameSite=None; Secure attributes
document.cookie = "yourCookieName=yourCookieValue; SameSite=None; Secure";
document.cookie = "your_cookie_name=your_cookie_value; SameSite=None; Secure";
document.cookie = "your_cookie_name=your_cookie_value; SameSite=Strict";
document.cookie = "cookie_name=value; SameSite=None; Secure";



document.addEventListener('DOMContentLoaded', () => {
  const mountainLeft = document.querySelector('.mountain_left');
  const mountainRight = document.querySelector('.mountain_right');
  const cloud1 = document.querySelector('.clouds_1');
  const cloud2 = document.querySelector('.clouds_2');
  const text = document.querySelector('.text');
  const man = document.querySelector('.man');

  window.addEventListener('scroll',()=>{
    
    let value = scrollY;
    if (mountainLeft) {
      mountainLeft.style.left = `-${value/0.7}px`;
    }
    if (cloud2) {
      cloud2.style.left = `-${value*2}px`;
    }
    if (mountainRight) {
      mountainRight.style.left = `${value/0.7}px`;
    }
    if (cloud1) {
      cloud1.style.left = `${value*2}px`;
    }
    if (text) {
      text.style.bottom = `-${value}px`;
    }
    if (man) {
      man.style.height = `${window.innerHeight - value}px`;
    }
  });
});

/*END CONTA */


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
      $(".language-selected").removeClass("change-es");
      $(".language-selected").addClass("change-en");
      //section
         // Cambiar el texto dentro del <h1>
         var sectionTitle = $(".service-top .section-title");
         sectionTitle.contents().filter(function() {
             return this.nodeType === 3; // Filtrar nodos de texto
         }).first().replaceWith("ADVERTISING in ");

         $(".service-top p").text("Advertising is the dissemination of advertisements, messages and news, it is a market segment.\n"+
         "specific to publicize the existence, characteristics, details, qualities, benefits, opinions.\n"+
          "and sentiments of certain products, services and events. For commercial purposes.");
          //elaboracion de paginas web
          $(".flip-card-front .menu-title").text("Preparation of web pages");
          $(".card-content parrafo").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, eros at posuere fringilla, turpis tortor efficitur velit, at fringilla tortor magna id quam.");
          //posicionamiento de negocios
          $(".flip-card-front .menu-title1").text("business of positioning");
          $(".card-content parrafo1").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, eros at posuere fringilla, turpis tortor efficitur velit, at fringilla tortor magna id quam.");
          //creacion de videos para youtube
          $(".flip-card-front .menu-title2").text("video creation for youtube");
          $(".card-content parrafo2").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, eros at posuere fringilla, turpis tortor efficitur velit, at fringilla tortor magna id quam.");
          //creacion de sitios empresariales
          $(".flip-card-front .menu-title3").text("creation of business sites");
          $(".card-content parrafo3").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, eros at posuere fringilla, turpis tortor efficitur velit, at fringilla tortor magna id quam.");
      //secction 2
      var sectionTitle = $(".service-top .section-title1");
      sectionTitle.contents().filter(function() {
          return this.nodeType === 3; // Filtrar nodos de texto
      }).first().replaceWith("advertising ");

      $(".service-top .section-title1 span").text("radio");
      $(".service-top .radio").text("FM radio was born before television and the internet and will not lose its validity because it only needs the sense of hearing and accompanies the public during work and transit hours. This is why we offer services of:");
               //elaboraciòn de publicidad radial
               $(".flip-card-front .menu-title4").text("preparation of radio advertising");
               $(".card-content parrafo4").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, eros at posuere fringilla, turpis tortor efficitur velit, at fringilla tortor magna id quam.");
               //produccion e emision radial
               $(".flip-card-front .menu-title5").text("radio production and broadcast");
               $(".card-content parrafo5").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, eros at posuere fringilla, turpis tortor efficitur velit, at fringilla tortor magna id quam.");

               
         //SECTION CONTACT FORMULACION

         $(".informacion-contacto .info").text("contact information");
         $(".informacion-contacto .pa").text("cordilleradatascience@gmail.com");
         $(".informacion-contacto .pa1").text("+51 999365216");
         $(".sotizaciòn").text("Request your quote");
         $(".name").text("Name");
         $(".email").text("E-mail");
         $(".mensaje").text("Message");
         $("#button").val("Send");

         //SECTION CONTACT INFO

         $(".contact-info .tel").text("Phone");
         $(".contact-info .num").text("+51 999365216");
         $(".em").text("E-mail");
         $(".core").text("cordilleradatascience@gmail.com");
         $(".direc").text("Address");
         $(".callle").text("Calle José María Vilchez 840, San Juan de Miraflores, Lima, Lima, Perú");

         //MAPS
         $("#map-container h1").text("Locate us");

         //FOOTER CONTACT

         $(".brand h1").text("DATACOR");
         $("#footer h2").text("Follow us");
         $(document).ready(function() {
          var nuevoContenido = "&copy; 2023 Datacor. All rights reserved.";
          $("#footer p").html(nuevoContenido);
      });



       //footer
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
      $(".nav-list li:eq(0) a").text("INICIO");
      $(".nav-list li:eq(1) a").text("PUBLICIDAD");
      $(".nav-list li:eq(2) a").text("investigaciones");
      $(".nav-list li:eq(3) a").text("proyectos");
      $(".nav-list li:eq(4) a").text("Plan estrategico");
      $(".nav-list li:eq(5) a").text("Contacto");
      $(".language-selected").text("es");
      $(".language-selected").removeClass("change-en");
      $(".language-selected").addClass("change-es");
      //section service
         // Cambiar el texto dentro del <h1>
         var sectionTitle = $(".service-top .section-title");
         sectionTitle.contents().filter(function() {
             return this.nodeType === 3; // Filtrar nodos de texto
         }).first().replaceWith("publicidad en");
         $(".service-top .internet").text("La publicidad es la divulgación de anuncion, mensaje y noticias, es un segmento de mercado.\n"+
         "específico para dar a conocer la existencia, caracteristicas, detalles, cualidades, beneficios, opiniones.\n"+
          "y sentimientos de ciertos productos, servicios y eventos. Con fines comerciales.");
          //elaboracion de paginas web
          $(".flip-card-front .menu-title").text("Elaboración de paginas web");
          $(".card-content parrafo").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, eros at posuere fringilla, turpis tortor efficitur velit, at fringilla tortor magna id quam.");
          //posicionamiento de negocios
          $(".flip-card-front .menu-title1").text("posicionamiento de negocios");
          $(".card-content parrafo1").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, eros at posuere fringilla, turpis tortor efficitur velit, at fringilla tortor magna id quam.");
          //creacion de videos para youtube
          $(".flip-card-front .menu-title2").text("creaciòn de videos para youtube");
          $(".card-content parrafo2").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, eros at posuere fringilla, turpis tortor efficitur velit, at fringilla tortor magna id quam.");
          //creacion de sitios empresariales
          $(".flip-card-front .menu-title3").text("creaciòn de sitios empresariales");
          $(".card-content parrafo3").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, eros at posuere fringilla, turpis tortor efficitur velit, at fringilla tortor magna id quam.");
      //seccion 2
                   // Cambiar el texto dentro del <h1>
         var sectionTitle = $(".service-top .section-title1");
         sectionTitle.contents().filter(function() {
             return this.nodeType === 3; // Filtrar nodos de texto
         }).first().replaceWith("publicidad ");
         $(".service-top .section-title1 span").text("radial");
         $(".sevice-top .radio").text("La radio FM nació antes de la televisión y el internet y no perderá su vigencia por que solo necesita el sentido de la audición y acompaña al publico en horas de trabajo y tránsito. Por esto ofrecemos servicios de:");
         //elaboraciòn de publicidad radial
         $(".flip-card-front .menu-title4").text("elaboraciòn de publicidad radial");
         $(".card-content parrafo4").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, eros at posuere fringilla, turpis tortor efficitur velit, at fringilla tortor magna id quam.");
         //produccion e emision radial
         $(".flip-card-front .menu-title5").text("producción y emision radial");
         $(".card-content parrafo5").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, eros at posuere fringilla, turpis tortor efficitur velit, at fringilla tortor magna id quam.");

         //SECTION CONTACT FORMULACION

         $(".informacion-contacto .info").text("informaciòn de contacto");
         $(".informacion-contacto .pa").text("cordilleradatascience@gmail.com");
         $(".informacion-contacto .pa1").text("+51 999365216");
         $(".sotizaciòn").text("Solicita tu cotización");
         $(".name").text("Nombre");
         $(".email").text("correo");
         $(".mensaje").text("mensaje");
         $("#button").val("Enviar");

         //SECTION CONTACT INFO

         $(".contact-info .tel").text("telèfono");
         $(".contact-info .num").text("+51 999365216");
         $(".em").text("Correo Electrònico");
         $(".core").text("cordilleradatascience@gmail.com");
         $(".direc").text("Direcciòn");
         $(".callle").text("Calle José María Vilchez 840, San Juan de Miraflores, Lima, Lima, Perú");

         //MAPS
         $("#map-container h1").text("Ubiquenos");

         //FOOTER CONTACT

         $(".brand h1").text("DATACOR");
         $("#footer h2").text("Síganos");
         $(document).ready(function() {
          var nuevoContenido = "&copy; 2023 Datacor. Todos los derechos reservados.";
          $("#footer p").html(nuevoContenido);
      });

         
         
         
      //footer
      $(".direccion").text("DIRECCIÒN: Calle José María Vilchez 840, San Juan de Miraflores, Lima, Lima, Perú")
      $(".telefono").text("TELÈFONO: +51 999365216")
      $(".correo").text("CORREO: cordilleradatascience@gmail.com")
      $(".contact-info h2").text("contacto")
      $(".social-media h2").text("siguenos")
      $(document).ready(function() {
        var nuevoContenido = "&copy; 2023 Datacor. Todos los derechos reservados.";
        $(".copyright p").html(nuevoContenido);
    });
  });
});




