(function () {
	let script = {
		init: function () {
			this.cacheDom();
			this.bindEvents();
			this.carousel();
		},
		cacheDom: function () {
			this.hamburger = document.querySelector(".hamburger");
			this.nav = document.querySelector(".main_nav");
			this.upAnim = document.querySelector('.up_anim1');
			this.upAnim2 = document.querySelector('.up_anim2');
			this.leftAnim = document.querySelector('.left_anim1');
			this.leftAnim2 = document.querySelector('.left_anim2');
			this.rightAnim = document.querySelector('.right_anim2');
			this.lastPar = document.querySelector('.last_par');
			this.container1 = document.querySelector('.animation_container1');
			this.container2 = document.querySelector('.animation_container2');
			this.container3 = document.querySelector('.animation_container3');
			this.slides = document.querySelectorAll('.mySlides');
			this.options = document.querySelectorAll('.options');
			this.y = document.getElementsByClassName("options");
			this.slideIndex = 0;
			this.arr = [this.upAnim, this.upAnim2, this.leftAnim, this.leftAnim2, this.rightAnim, this.lastPar];
		},
		bindEvents: function () {
			this.hamburger.addEventListener('click', this.clickHamburger.bind(this));
			window.addEventListener('load', this.hideElements.bind(this));
			this.container1.addEventListener("mouseover", this.getAnimation1.bind(this));
			this.container2.addEventListener("mouseover", this.getAnimation2.bind(this));
			this.container3.addEventListener("mouseover", this.getAnimation3.bind(this));
		},
		clickHamburger: function () {
			this.nav.classList.toggle('hidden');
			this.nav.classList.toggle('Down');
			this.nav.classList.toggle('animated');
		},
		hideElements: function () {
			for (var i = 0; i < this.arr.length; i++) {
				this.arr[i].style.opacity = '0';
			}
		},
		getAnimation: function (name1, name2, anim1) {
			name1.style.opacity = "1";
			name1.classList.add('Up');
			name1.classList.add('animated');
			name2.style.opacity = "1";
			name2.classList.add(anim1);
			name2.classList.add('animated');
		},
		getAnimation1: function () {
			this.getAnimation(this.upAnim, this.leftAnim, 'InLeft');
		},
		getAnimation2: function () {
			this.getAnimation(this.upAnim2, this.rightAnim, 'InRight');
		},
		getAnimation3: function () {
			this.getAnimation(this.lastPar, this.leftAnim2, 'InLeft');
		},
		carousel: function () {
			for (var i = 0; i < this.slides.length; i++) {
				this.slides[i].style.display = "none";
				this.y[i].style.background = 'none';
			}
			this.slideIndex++;
			if (this.slideIndex > this.slides.length) {
				this.slideIndex = 1
			}
			this.slides[this.slideIndex - 1].style.display = "block";
			this.slides[this.slideIndex - 1].classList.add('InLeft');
			this.slides[this.slideIndex - 1].classList.add('animated');
			this.y[this.slideIndex - 1].style.background = '#a9afb3';
			setTimeout(this.carousel.bind(this), 4000);
		}
	}

	script.init();
})();