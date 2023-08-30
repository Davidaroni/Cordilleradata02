
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






