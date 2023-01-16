const animatedCards = document.querySelectorAll(".interview-card");
const animatedMembers = document.querySelectorAll(".section-team_member");
const animatedAdvices = document.querySelectorAll(".tips_card");

const moveCards = (cards) => {
    cards.forEach((card) => {
        let scrollTop = document.documentElement.scrollTop;
        if ( scrollTop == 0) {
            card.style.opacity = 1;
            card.classList.add("animated");
        }
    })
}

moveCards(animatedCards);
moveCards(animatedMembers);
moveCards(animatedAdvices);

