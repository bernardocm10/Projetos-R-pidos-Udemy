let checkButton = document.getElementById("check-button")
let ageInput = document.getElementById("age-input")
let message = document.getElementById("message")

checkButton.addEventListener("click", function() {
    let age = ageInput.value
    message.innerHTML = (age >= 18) ? "Você é um adulto." : "Você não é um adulto."
    ageInput.value = ""
})