
document.addEventListener("DOMContentLoaded", () => {
    // Ladda in navigation
    fetch("nav.html")
        .then(res => res.text())
        .then(data => document.getElementById("nav").innerHTML = data)
        .then(() => {
            const path = location.pathname.split("/").pop();
            document.querySelectorAll("nav a").forEach(link => {
                if (link.getAttribute("href") === path) {
                    link.classList.add("active");
                }
            });
        });

    // Ladda in footer
    fetch("footer.html")
        .then(res => res.text())
        .then(data => document.getElementById("footer").innerHTML = data);

    // Scroll to top button
    const topBtn = document.createElement("button");
    topBtn.id = "topBtn";
    topBtn.textContent = "⬆ Till toppen";
    document.body.appendChild(topBtn);

    topBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", () => {
        topBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });
});
