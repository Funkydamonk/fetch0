$(document).ready(function() {
	$('.main__slider').slick({
		dots: false,
		infinite: true,
	})
});


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
});
$(document).ready(function() {
	$('.sub-slider').slick({
		dots: false,
		arrows: false,
		slidesToShow: 4,
		asNavFor: '.anchor-slider',
		focusOnSelect: true,
		infinite: true,
	})
});

// offer-slider
$(document).ready(function() {
	$('.offer__slider').slick({
		dots: false,
		arrows: true,
		infinite: true,
		slidesToShow: 4,
	})
});

//modal 
const openModalButton = document.querySelector('.form__table-link');
const closeModalButton = document.querySelector('.modal__close-button');
const overlay = document.querySelector('.modal__overlay');
const modal = document.querySelector('.modal');

openModalButton.addEventListener('click', () => {
	openModal()
})

closeModalButton.addEventListener('click', () => {
	closeModal()
})

function openModal() {
	modal.classList.add('modal--active');
	overlay.classList.add('modal__overlay--active');
}

function closeModal() {
	modal.classList.remove('modal--active');
	overlay.classList.remove('modal__overlay--active');
}

// closing modal with clicking on the void zone
overlay.addEventListener('click', () => {
	closeModal()
})

// closing modal with an "esc" button
$(document).keydown(function(event) { 
  if (event.keyCode == 27) { 
    closeModal()
  }
});