// Obtain the img element, and assign it to the image variable
let image 

// Obtain the 'flip-button' button, and assign it to the flipButton variable
let flipButton 

//DO NOT CHANGE THE FOLLOWING CODE
flipButton.addEventListener("click", function() {
  if(image.style.transform == "rotate(180deg)") {
    image.style.transform = "rotate(0deg)"
  }
  else {
    image.style.transform = "rotate(180deg)"
  }
})