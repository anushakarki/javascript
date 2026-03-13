let button = document.querySelector("#btn_id2");
button.addEventListener("click", animatonce);

function animatonce(e) {
    // Create ripple effect
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");
    button.appendChild(ripple);

    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = e.clientX - rect.left - size / 2 + "px";
    ripple.style.top = e.clientY - rect.top - size / 2 + "px";

    // Add animation class
    button.classList.add("animationjs");

    setTimeout(() => {
        button.style.backgroundColor = "#A155B9";
        button.classList.remove("animationjs");
        ripple.remove();
    }, 1000);
}   