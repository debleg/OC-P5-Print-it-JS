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

let arrowLeft = document.querySelector(".arrow_left")
let arrowRight= document.querySelector(".arrow_right")

arrowLeft.addEventListener ("click", () => {
	console.log("Click on the left arrow")
})

arrowRight.addEventListener("click", () => {
	console.log("Click on the right arrow")
})

/**
 * Creates the bullet points underneath the slider
 * Style is applied through existing CSS classes
 */

let dotsContainer = document.querySelector(".dots")

for (let i = 0; i < slides.length; i++) {
	let dot = document.createElement("span")
	dot.classList.add("dot")
	dotsContainer.appendChild(dot)

	// dot.addEventListener("click", () => {
	// dot.classList.toggle("dot_selected")
	// console.log("selected dot")
 	//})	
 if (i === 0) {
		dot.classList.add("dot_selected")
	}
}



// dot has only been defined in the for loop!!
// left the function to call it on click, either toggle or if/else
