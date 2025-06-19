// Slider logic
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.opacity = (i === index) ? "1" : "0";
            slide.style.zIndex = (i === index) ? "10" : "0";
        });
    }

    document.getElementById("prevBtn").addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });

    document.getElementById("nextBtn").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });

    // Tampilkan slide pertama saat halaman dimuat
    showSlide(currentIndex);
});

document.addEventListener("DOMContentLoaded", function() {
    // Ambil elemen
    const loginBtn = document.getElementById("login-btn");
    const logoutBtn = document.getElementById("logout-btn");
    const userInfo = document.getElementById("user-info");

    // Deteksi login
    const role = localStorage.getItem("role");
    const no_hp = localStorage.getItem("no_hp");

    if (role === "user" || role === "admin") {
        // Sudah login
        loginBtn.classList.add("hidden");
        logoutBtn.classList.remove("hidden");
        userInfo.textContent = `Hai, ${no_hp}`;
    } else {
        // Belum login
        loginBtn.classList.remove("hidden");
        logoutBtn.classList.add("hidden");
        userInfo.textContent = "";
    }

    // Logout klik
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function() {
            localStorage.removeItem("role");
            localStorage.removeItem("no_hp");
            window.location.href = "login.html";
        });
    }
});