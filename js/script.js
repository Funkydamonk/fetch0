$(document).ready(function() {
	$('.main__slider').slick({
		dots: false,
		infinite: true,
	})

	$('.main__slider').on('afterChange', function(event, slick, currentSlide){
  		const header = document.querySelector('.header');
  		const navLinks = document.querySelectorAll('.navbar__link');
  		const orderLink = document.querySelector('.orders__link'); 
  		const orderText = document.querySelector('.orders__text');
  		const scroll = document.querySelector('.scroll');

  		if (!header.classList.contains('header--styled')) {
  			header.classList.add('header--styled');
  			orderLink.classList.add('orders__link--styled');
  			orderText.classList.add('orders__text--styled');
  			for (const navLink of navLinks) {
  				navLink.classList.add('navbar__link--styled');
  			}
  		} else {
  			header.classList.remove('header--styled');
  			orderLink.classList.remove('orders__link--styled');
  			orderText.classList.remove('orders__text--styled');
  			for (const navLink of navLinks) {
  				navLink.classList.remove('navbar__link--styled');
  			}
  		}

  		if (scroll.classList.contains('scroll__left') && scroll.classList.contains('scroll__right')) {
  			scroll.classList.remove('scroll__left');
  			scroll.classList.remove('scroll__right');
  			scroll.classList.add('scroll__left--styled');
  			scroll.classList.add('scroll__right--styled');
  		} else if (scroll.classList.contains('scroll__right--styled') && scroll.classList.contains('scroll__left--styled')) {
  			scroll.classList.remove('scroll__right--styled');
  			scroll.classList.remove('scroll__left--styled');
  			scroll.classList.add('scroll__right');
  			scroll.classList.add('scroll__left');
  		} else if (scroll.classList.contains('scroll__right')) {
  			scroll.classList.remove('scroll__right');
  			scroll.classList.add('scroll__right--styled');
  		} else if (scroll.classList.contains('scroll__right--styled')) {
  			scroll.classList.remove('scroll__right--styled');
  			scroll.classList.add('scroll__right');
  		} else if (scroll.classList.contains('scroll__left')) {
  			scroll.classList.remove('scroll__left');
  			scroll.classList.add('scroll__left--styled');
  		} else if (scroll.classList.contains('scroll__left--styled')) {
  			scroll.classList.remove('scroll__left--styled');
  			scroll.classList.add('scroll__left');
  		}
	});
});

// product form submit imitation 
const productForm = document.querySelector('.product__form')
const ordersCount = document.querySelector('.orders__count');
const orders = document.querySelector('.orders__link');

if (productForm) {
	productForm.addEventListener('submit', () => {
		console.log('done');
		ordersCount.style.visibility = 'visible';
		orders.classList.add('orders--active');
		orders.style.opacity = 100;
	})
}

// pages 
const pages = document.querySelectorAll('.pages__item');

for (const page of pages) {
	page.onclick = () => {
		for (const page of pages) {
			if (page.classList.contains('pages__item--bold')) {
				page.classList.remove('pages__item--bold')
			}
		}	
		page.classList.add('pages__item--bold');	
	}
}

// anchor-slider + sub-slider
$(document).ready(function() {
	$('.anchor-slider').slick({
		dots: false,
		arrows: false,
		asNavFor: '.sub-slider',
		infinite: true,
	})

	$('.sub-slider').slick({
		dots: false,
		arrows: false,
		slidesToShow: 4,
		asNavFor: '.anchor-slider',
		focusOnSelect: true,
		infinite: true,
	})

// offer-slider
	$('.offer__slider').slick({
		dots: false,
		arrows: true,
		infinite: true,
		slidesToShow: 4,
		responsive: [{
			breakpoint: 1120,
			settings:{
				slidesToShow: 1,	
			}
		}]
	})
});

//modal 
const openModalButton = document.querySelector('.form__table-link');
const closeModalButton = document.querySelector('.modal__close-button');
const overlay = document.querySelector('.modal__overlay');
const modal = document.querySelector('.modal');


if (openModalButton) {
	openModalButton.addEventListener('click', () => {
			openModal();
	});
}

if (closeModalButton) {
	closeModalButton.addEventListener('click', () => {
			closeModal();
	});
}

function openModal() {
	modal.classList.add('modal--active');
	overlay.classList.add('modal__overlay--active');
}

function closeModal() {
	modal.classList.remove('modal--active');
	overlay.classList.remove('modal__overlay--active');
}

// closing modal with clicking on the void zone
if (overlay) {
	overlay.addEventListener('click', () => {
		closeModal();
	});
}

// closing modal with an "esc" button
$(document).keydown(function(event) { 
  if (event.keyCode == 27) { 
    closeModal();
  }
});

// scroll header 
if (document.documentElement.clientWidth <= 1199) {
	const scroll = document.querySelector('.scroll');
	const navbar = document.querySelector('.navbar__list');
	scroll.classList.add('scroll__right');

	if (navbar) {
		navbar.addEventListener('scroll', function() {
			const offsetLeft = navbar.scrollLeft;
			const scrollWidth = navbar.scrollWidth;
			const clientWidth = navbar.clientWidth;
			const isStyled = document.querySelector('.header').classList.contains('header--styled');
			if (offsetLeft === 0) {
				if (isStyled) {
					scroll.classList.remove('scroll__left');
					scroll.classList.add('scroll__right--styled');
					scroll.classList.remove('scroll__left--styled');
				} else {
					scroll.classList.remove('scroll__right--styled');
					scroll.classList.remove('scroll__left--styled');
					scroll.classList.remove('scroll__left');
					scroll.classList.add('scroll__right');
				}
			} else if (scrollWidth > (offsetLeft + clientWidth)) {
				if (isStyled) {
					scroll.classList.remove('scroll__right');
					scroll.classList.remove('scroll__left');
					scroll.classList.add('scroll__right--styled');
					scroll.classList.add('scroll__left--styled');
				} else {
					scroll.classList.remove('scroll__right--styled');
					scroll.classList.remove('scroll__left--styled');
					scroll.classList.add('scroll__right');
					scroll.classList.add('scroll__left');
				}
			} else if (scrollWidth === (offsetLeft + clientWidth)) {
				if (isStyled) {
					scroll.classList.remove('scroll__right');
					scroll.classList.remove('scroll__left');
					scroll.classList.remove('scroll__right--styled');
				} else {
					scroll.classList.remove('scroll__right--styled');
					scroll.classList.remove('scroll__left--styled');
					scroll.classList.remove('scroll__right');
				}
			}	 
		})
	}
} 

// local storage
const email = document.querySelector('.checkout__email');
const tel = document.querySelector('.checkout__tel');
const city = document.querySelector('.checkout__city');
const address = document.querySelector('.checkout__address');

function setLog(logName, inputName) {
	inputName.oninput = () => {
		localStorage.setItem(logName, inputName.value);
	}
}

function getLog(logName, inputName) {
	if (inputName.value === '') {
		inputName.value = localStorage.getItem(logName);
	}
}

setLog('emailLog', email);
getLog('emailLog', email);

setLog('telLog', tel);
getLog('telLog', tel);

setLog('city', city);
getLog('city', city);

setLog('address', address);
getLog('address', address);