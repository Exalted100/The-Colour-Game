const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");

const backgroundColours = [
    `rgb(250, 250, 0)`,
    "rgb(0, 250, 0)",
    "rgb(0, 0, 250)",
    "rgb(0, 250, 250)",
]

const rightColour = backgroundColours[2]

document.querySelector(".colour-code").textContent = rightColour;

for (let i = 0; i < 4; i++) {
    document.querySelectorAll(".colour")[i].style.backgroundColor = backgroundColours[i];
}

const squareClick = (chosen) => {
    const chosenColour = chosen.style.background;

    if (chosenColour === rightColour) {
        alert("You're right!");
    } else {
        alert("Oops, that isn't the right colour. Try again.")
    }

    console.log(chosenColour + " " + rightColour)
}

one.addEventListener("click", () => squareClick(one));
two.addEventListener("click", () => squareClick(two));
three.addEventListener("click", () => squareClick(three));
four.addEventListener("click", () => squareClick(four));