const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");

const backgroundColours = [
    `rgb(${Math.floor(Math.random() * 250)}, ${Math.floor(Math.random() * 250)}, ${Math.floor(Math.random() * 250)})`,
    `rgb(${Math.floor(Math.random() * 250)}, ${Math.floor(Math.random() * 250)}, ${Math.floor(Math.random() * 250)})`,
    `rgb(${Math.floor(Math.random() * 250)}, ${Math.floor(Math.random() * 250)}, ${Math.floor(Math.random() * 250)})`,
    `rgb(${Math.floor(Math.random() * 250)}, ${Math.floor(Math.random() * 250)}, ${Math.floor(Math.random() * 250)})`,
]

const rightColour = backgroundColours[Math.floor(Math.random() * 4)]

document.querySelector(".colour-code").textContent = rightColour;

for (let i = 0; i < 4; i++) {
    document.querySelectorAll(".colour")[i].style.backgroundColor = backgroundColours[i];
}

const squareClick = (chosen) => {
    const chosenColour = chosen.style.backgroundColor;

    if (chosenColour === rightColour) {
        document.querySelector(".guess-reply").textContent = "You're right!";
    } else {
        document.querySelector(".guess-reply").textContent = "Oops, that isn't the right colour. Try again."
    }

    console.log(chosenColour + " " + rightColour)
}

one.addEventListener("click", () => squareClick(one));
two.addEventListener("click", () => squareClick(two));
three.addEventListener("click", () => squareClick(three));
four.addEventListener("click", () => squareClick(four));

document.querySelector(".button").addEventListener("click", () => location.reload())