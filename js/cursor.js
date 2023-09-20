
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
          $(".flip-card-front .menu-title").text("Advertising web pages");
          $(".card-content .parrafo").text("Web pages for companies, aimed at generating sales on the internet; About the marketing concept, for this:n"+
          "The product or service is evaluated, consumers and market segment demanders are identified and presentedn"+
          "The images, features, benefits and references of the product, the trust and guarantee offered by the company.n"+
          "Finally the customer is convinced to call and order the purchase to finalize the sale.");
          //posicionamiento de negocios
          $(".flip-card-front .menu-title1").text("Optimization of ads in search engines such as Google");
          $(".card-content .parrafo1").text("Ads and web pages in the first places of search engines such as google, through a correct web design;n"+
          "with the generation of Keywords, tagging, elaboration of own content,n"+
          "relevant and personalized with Rich Snippets. So search engines,n"+
          "It offers the right product to a consumer looking to fill a need.");
          //creacion de videos para youtube
          $(".flip-card-front .menu-title2").text("video creation for youtube");
          $(".card-content .parrafo2").text("Creation of audiovisual ads or institutional videos for Youtube. Social networks or web pages. The videos are adapted to be broadcast at the same time as podcasts, audiobooks or FM radios or other means of auditory advertising.");
          //creacion de sitios empresariales
          $(".flip-card-front .menu-title3").text("Creation and management of sites and accounts in social networks");
          $(".card-content .parrafo3").text("We create accounts and sites on social media pages such as: Google Business, Facebook, Instagram and LinkedIn. In addition, we manage dissemination and advertising campaigns on these social networks.");
      //secction 2
      var sectionTitle = $(".service-top .section-title1");
      sectionTitle.contents().filter(function() {
          return this.nodeType === 3; // Filtrar nodos de texto
      }).first().replaceWith("advertising ");

      $(".service-top .section-title1 span").text("radio");
      $(".service-top .radio").text("FM radio. It was born before television and the Internet and does not and will not lose its validity, because it only needs the sense of hearing,.n"+
      "and accompanies the public in hours of work, transit and travel. n"+
      "FM radio. It is currently complemented by TV channels and internet broadcasts. It is a massive channel of advertising and propaganda with arrival.. n"+
      "to various market segments.");
               //elaboraciòn de publicidad radial
               $(".flip-card-front .menu-title4").text("Development of radio advertising");
               $(".card-content .parrafo4").text("We elaborate audio announcements 'Spots', 'Spots' to be broadcast through FM radios. local or national. You can download the models of advertisements or radio spots.");
               //produccion e emision radial
               $(".flip-card-front .menu-title5").text("Production of radio programs");
               $(".card-content .parrafo5").text("We produce radio programs for advertising opinion or political propaganda. The production can be live or recorded programs that can be broadcast by other means such as the internet.");

               
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
          $(".flip-card-front .menu-title").text("Paginas web publicitarias");
          $(".card-content .parrafo").text("Páginas web para empresas, orientadas a generar ventas en internet; sobre el concepto de márquetin, para esto:\n"+
          "se evalúa el producto o servicio, se identifica a los consumidores y demandantes segmento de mercado y se presentan\n"+
          "las imágenes, características, beneficios y referencias del producto, la confianza y garantía que ofrece la empresa.\n"+
          "Finalmente se convence al cliente a que llame y ordene la compra para concretar la venta.");
          //posicionamiento de negocios
          $(".flip-card-front .menu-title1").text("Optimización de anuncios en buscadores como Google");
          $(".card-content .parrafo1").text("Anuncios y páginas web en los primeros lugares de buscadores como google, mediante un correcto diseño web;\n"+
          "con la generación de Keywords (Palabras clave), etiquetado, elaboración de contenido propio,\n"+
          "relevante y personalizado con Rich Snippets (Fragmentos enriquecidos). De manera que los motores de búsqueda,\n"+
          "le ofrece el producto preciso a un consumidor que busca satisfacer una necesidad.");
          //creacion de videos para youtube
          $(".flip-card-front .menu-title2").text("creaciòn de videos para youtube");
          $(".card-content .parrafo2").text("Creación de anuncios audiovisuales o vídeos institucionales para Youtube. Redes sociales o páginas web. Los vídeos están adaptados para ser difundidos a la vez como podcast, audiolibros o radios FM u otros medios de publicidad auditiva.");
          //creacion de sitios empresariales
          $(".flip-card-front .menu-title3").text("Creación y gestión de sitios y cuentas en redes sociales");
          $(".card-content .parrafo3").text("Creamos cuentas y sitios en páginas de redes sociales como: Google Business, Facebook Instagram y LinkedIn. Además, gestionamos campañas de difusión y publicidad en estas redes sociales.");
      //seccion 2
                   // Cambiar el texto dentro del <h1>
         var sectionTitle = $(".service-top .section-title1");
         sectionTitle.contents().filter(function() {
             return this.nodeType === 3; // Filtrar nodos de texto
         }).first().replaceWith("publicidad ");
         $(".service-top .section-title1 span").text("radial");
         $(".service-top .radio").text("La radio FM. nació antes de la televisión y el internet y no pierde ni perderá su vigencia, porque solo necesita el sentido de la audición,\n"+
         "y acompaña al público en horas de trabajo, tránsito y viaje.\n"+
         "La radio FM. Actualmente se complementa con canales de Tv y emisiones por internet. Es un canal masivo de publicidad y propaganda con llegada.\n"+
         "a varios segmentos de mercado.");
         //elaboraciòn de publicidad radial
         $(".flip-card-front .menu-title4").text("elaboraciòn de publicidad radial");
         $(".card-content .parrafo4").text("Elaboramos anuncios de audio 'Cuñas', 'Spots' para ser difundidos mediante las radios FM. locales o nacionales. Usted puede descargar los modelos de anuncios o spots radiales.");
         //produccion e emision radial
         $(".flip-card-front .menu-title5").text ("Producción de programas radiales");
         $(".card-content .parrafo5").text("Producimos programas radiales para publicidad opinión o propaganda política. La producción puede ser en vivo o programas grabados que se pueden difundir.por otros medios como internet.");

         
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




