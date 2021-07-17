
let wrapper = document.querySelector('.wrapper');

let pageSlider = new Swiper('.page', {
	// Свои классы
	wrapperClass: "page__wrapper",
	slideClass: "page__screen",

	// Вертикальный слайдер
	direction: 'vertical',

	// Количество слайдов для показа
	slidesPerView: 'auto',

	// Включаем параллакс
	parallax: true,


	// Управление клавиатурой
	keyboard: {
		// Включить\выключить
		enabled: true,
		// Включить\выключить
		// только когда слайдер
		// в пределах вьюпорта
		onlyInViewport: true,
		// Включить\выключить
		// управление клавишами
		// pageUp, pageDown
		pageUpDown: true,
	},

	// Управление колесом мыши
	mousewheel: {
		// Чувствительность колеса мыши
		sensitivity: 0.5,
		// Класс объекта на котором
		// будет срабатывать прокрутка мышью.
		//eventsTarget: ".image-slider"
	},

	// Отключение функционала
	// если слайдов меньше чем нужно
	watchOverflow: true,

	// Скорость
	speed: 400,

	// Обновить свайпер
	// при изменении элементов слайдера
	observer: true,

	// Обновить свайпер
	// при изменении родительских
	// элементов слайдера
	observeParents: true,

	// Обновить свайпер
	// при изменении дочерних
	// элементов слайда
	observeSlideChildren: true,

	// Навигация 
	// Буллеты, текущее положение, прогрессбар
	pagination: {
		el: '.page__pagination',
		type: 'bullets',
		clickable: true,
		bulletClass: "page__bullet",
		bulletActiveClass: "page__bullet_active",
	},
	// Скролл
	scrollbar: {
		el: '.page__scroll',
		dragClass: "page__drag-scroll",
		// Возможность перетаскивать скролл
		draggable: true
	},
	
	// Отключаем автоинициализацию
	init: false,

	breakpoints: {
		// when window width is >= 992px
		992: {
			allowTouchMove: false,
		}
	},

	// События
	on: {
		// Событие инициализации
		init: function () {
			menuSlider();
			setScrollType();
			wrapper.classList.add('_loaded');
		},
		// Событие смены слайда
		slideChange: function () {
			menuSliderRemove();
			menuLinks[pageSlider.realIndex].classList.add('_active');
		},
		resize: function () {
			setScrollType();
		}
	},
});

let menuLinks = document.querySelectorAll('.menu__link');

function menuSlider() {
	if (menuLinks.length > 0) {
		menuLinks[pageSlider.realIndex].classList.add('_active');
		for (let index = 0; index < menuLinks.length; index++) {
			const menuLink = menuLinks[index];
			menuLink.addEventListener("click", function (e) {
				menuSliderRemove();
				pageSlider.slideTo(index, 800);
				menuLink.classList.add('_active');
				e.preventDefault();
			});
		}
	}
}

function menuSliderRemove() {
	let menuLinkActive = document.querySelector('.menu__link._active');
	if (menuLinkActive) {
		menuLinkActive.classList.remove('_active');
	}
}

function setScrollType() {
	if (wrapper.classList.contains('_free')) {
		wrapper.classList.remove('_free');
		pageSlider.params.freeMode = false;
	}
	for (let index = 0; index < pageSlider.slides.length; index++) {
		const pageSlide = pageSlider.slides[index];
		const pageSlideContent = pageSlide.querySelector('.screen__content');
		if (pageSlideContent) {
			const pageSlideContentHeight = pageSlideContent.offsetHeight;
			if (pageSlideContentHeight > window.innerHeight) {
				wrapper.classList.add('_free');
				pageSlider.params.freeMode = true;
				break;
			}
		}
	}
}

pageSlider.init();
const sliderItem = document.querySelectorAll('.slider__swiper');
const sliderBtn = document.querySelector('.slider__button');

let sliderMod = [
  "slider__swiper_first",
  "slider__swiper_second",
  "slider__swiper_third"
];

if (document.querySelector('.slider__button')) {
  if (document.querySelector('.pagination')) {
    let bulletContainer = document.querySelector('.pagination');
  
    for (let index = 0; index < sliderItem.length; index++) {
      let bulletdiv = document.createElement('div');
      bulletdiv.classList.add('pagination__bullet');
      bulletdiv.setAttribute('id', `${index}`);
      bulletContainer.appendChild(bulletdiv);
    }

    bulletContainer.firstChild.classList.add('pagination__bullet_active');
  }

  sliderBtn.addEventListener('click', () => {
    sliderItem.forEach(item => {
      sliderMod.forEach(el => {
        if (item.classList.contains(el)) {
          item.classList.remove(el);
        }
      })
    });
  
    let k = 1;
    sliderMod = sliderMod.concat(sliderMod.splice(0, sliderMod.length - k));
    let t = 0; 
    sliderItem.forEach(elem => {
      elem.classList.add(sliderMod[t]);
      t++;
    });

    sliderItem.forEach(element => {
      if (element.classList.contains('slider__swiper_first')) {
        document.querySelectorAll('.pagination__bullet').forEach(item => {
          item.classList.remove('pagination__bullet_active');
        });
        
        let id = element.getAttribute('data-role');
        let bullet = document.getElementById(id);
        bullet.classList.add('pagination__bullet_active')
      }
    });
  })

}





const accoButtons = document.querySelectorAll('.accordion__button');
const accoText = document.querySelector('.accordion__text');

document.addEventListener('click', function(e) {
  for (let i = 0; i < accoButtons.length; ++i) {
    if (e.target === accoButtons[i]) {
      e.target.classList.toggle('accordion__button_active');
      e.target.closest('div').lastElementChild.classList.toggle('accordion__text_active');
    }
  }
});
