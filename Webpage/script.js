document.addEventListener("DOMContentLoaded", () => {
    const buyButtons = document.querySelectorAll(".buy-button");

    buyButtons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Thank you for your interest! This feature is coming soon.");
        });
    });
});
