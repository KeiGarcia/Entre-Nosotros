const arrowsDown = document.querySelectorAll(".arrow-down");
const arrowUp = `<i class="fa-solid fa-chevron-up arrow-up fa-2x"></i>`;
const arrowDown = `<i class="fa-solid fa-chevron-down fa-2x arrow-down"></i>`;

arrowsDown.forEach((arrowDown) => {
    arrowDown.addEventListener("click", (e) => {
        const question = e.target.parentElement;
        const answer = e.target.parentElement.parentElement.children[1];

        question.style.backgroundColor = "var(--violet-dark)";
        arrowDown.style.display = "none";
        answer.classList.add("active");

        question.insertAdjacentHTML("beforeend", arrowUp);
        hideAnswer(answer, question, arrowDown);
    })
})

const hideAnswer = (answer, question, arrowDown) => {
    if (answer.classList.contains("active")) {
        const arrowsUp = document.querySelectorAll(".arrow-up");
        arrowsUp.forEach((arrowUp) => {
            arrowUp.addEventListener("click", () => {
                question.style.backgroundColor = "transparent";
                arrowUp.style.display = "none";
                arrowDown.style.display = "inline-block";
                answer.classList.remove("active");
            })
        })
    }
}