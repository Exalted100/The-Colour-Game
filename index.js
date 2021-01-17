const one = document.querySelector(".one");

one.style.backgroundColor = "red";

const changeColour = () => {
    one.style.backgroundColor = "blue";
}

one.addEventListener("click", changeColour);