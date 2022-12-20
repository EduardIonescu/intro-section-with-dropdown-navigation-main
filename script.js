const burgerMenu = document.querySelector("#burger-menu");

const sidenav = document.querySelector("#sidenav");

const dropdownButtons = document.querySelectorAll(".dropdown");

const darken = document.querySelector("#darken");

burgerMenu.addEventListener("click", function () {
	this.classList.toggle("change");
	sidenav.classList.toggle("sidenav-active");
	darken.classList.toggle("darken-active");
});

dropdownButtons.forEach((button) => {
	button.addEventListener("click", function () {
		changeDropdown(this);
	});
});

function changeDropdown(dropdownButton) {
	dropdownButton.classList.toggle("dropdown-active");
	const slideList = dropdownButton.nextSibling.nextSibling;
	slideList.classList.toggle("slide-active");
	// Selects the image from the clicked button
	const img = dropdownButton.querySelector("img");
	if (dropdownButton.classList.contains("dropdown-active")) {
		img.src = "./images/icon-arrow-up.svg";
	} else {
		img.src = "./images/icon-arrow-down.svg";
	}
}
