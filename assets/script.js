const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


 //Creation of the bullet points underneath the slider
 //Style is applied with existing CSS class


let dotsContainer = document.querySelector(".dots")

for (let i = 0; i < slides.length; i++) {
	let dot = document.createElement("span")
	dot.classList.add("dot")
	dotsContainer.appendChild(dot)
}

let dots = document.querySelectorAll(".dot")
//highlights the first dot by default
dots[0].classList.add("dot_selected")


// the following function updates the slide based on the i index

let bannerImg = document.querySelector(".banner-img")
let bannerText = document.querySelector("#banner p")

function slideUpdate(i) {
	//retrieves the image from the table then places the path of the image in the banner source
	let image = slides[i]["image"]
	bannerImg.src = `./assets/images/slideshow/${image}` 

	// retrieves the text from the table then replaces the text over the image
	let tagLine = slides[i]["tagLine"]
	bannerText.innerHTML = tagLine 

	//changes which dot is highlighted according to slide number
	dots[i].classList.add("dot_selected")
}



//the following function listens to the clicks on the right and left arrows to change the slide accordingly

let arrowLeft = document.querySelector(".arrow_left")
let arrowRight= document.querySelector(".arrow_right")

function carousel () {
	let i = 0

	arrowRight.addEventListener("click", () => {
		dots[i].classList.remove("dot_selected") // removes the highlighted dot on the previous slide
		i++
		if (i < slides.length) {
			slideUpdate(i)
		} else { //when carousel reaches last slide return to first
			i = 0
			slideUpdate(i)
		}
	})

	arrowLeft.addEventListener("click", () => {
		dots[i].classList.remove("dot_selected") // removes the highlighted dot on the previous slide
		i--
		if (i >= 0) {
			slideUpdate(i)
		} else { // when carousel reaches first slide return to last
			i = (slides.length - 1)
			slideUpdate(i)
		}
	})
}

carousel()
