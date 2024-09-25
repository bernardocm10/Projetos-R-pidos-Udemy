const images = [
     "images/A_small_cup_of_coffee.JPG",
    "images/cafezap.jpeg",
    "images/Latte_and_dark_coffee.jpg" 
/*     "images/images_1",
    "images/images_2",
    "images/images_3" */
]
let currentIndex = 0

let imageElement = document.getElementById("image")
let buttonElement = document.getElementById("button")

buttonElement.addEventListener("click", function(){
    currentIndex++
    if(currentIndex >= images.length){
        currentIndex = 0
    }
    imageElement.src = images[currentIndex]
})
