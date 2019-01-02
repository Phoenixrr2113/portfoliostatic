window.onscroll = () => {
	setNav();
};

const navBar = document.querySelector('.navigation');

const sticky = navBar.offsetTop;

const setNav = () => {
	let winScroll;
	let height;
	let scrolled;

	if (window.pageYOffset >= sticky) {
		winScroll = document.documentElement.scrollTop;

		height =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight;

		scrolled = (winScroll / height) * 100;

		navBar.classList.add('sticky');
		document.querySelector('.scroll-progress-bar').style.width = scrolled + '%';
	} else {
		navBar.classList.remove('sticky');
		document.querySelector('.scroll-progress-bar').style.width = scrolled + '%';
	}
};
