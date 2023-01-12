const animatedCards = document.querySelectorAll(".interview-card");

animatedCards.forEach((animatedCard) => {
    let scrollTop = document.documentElement.scrollTop;
    console.log(scrollTop)
    if (scrollTop == 0) {
        animatedCard.style.opacity = 1;
        animatedCard.classList.add("animated");
    }
})

