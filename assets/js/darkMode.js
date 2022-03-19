const toggleBtn = document.querySelector('.switch-mode-btn');

toggleBtn.addEventListener('click', () => {
    let theme = localStorage.getItem("data-theme");
    if (theme === "dark") {
        localStorage.setItem("data-theme", "light");
        document.documentElement.classList.remove('dark-theme');
        console.log("light moda geçildi")
        document.getElementById("switch-mode-btn").innerHTML = "<i class='fa-solid fa-moon mr-2'></i>Switch Dark Mode"
    } else if (theme === null || theme === "light") {
        localStorage.setItem("data-theme", "dark");
        document.documentElement.classList.toggle('dark-theme');
        console.log("dark moda geçildi")
        document.getElementById("switch-mode-btn").innerHTML = "<i class='fa-solid fa-sun mr-2'></i>Switch Light Mode"
    }
});

$(document).ready(function(){
    console.log("%c Eleven", "background: transparent; color: #b5b5e7; font-size: 30px; font-weight: 500")
    console.log("%c Temalar yükleniyor...", "background: transparent; color: red; font-size: 18px; font-weight: 400")
    let theme = localStorage.getItem("data-theme");
    if (theme === "dark") {
        document.documentElement.classList.toggle('dark-theme');
        console.log("dark moda geçildi")
        document.getElementById("switch-mode-btn").innerHTML = "<i class='fa-solid fa-sun mr-2'></i>Switch Light Mode"
    } else if (theme === null || theme === "light") {
        document.documentElement.classList.remove('dark-theme');
        console.log("light moda geçildi")
        document.getElementById("switch-mode-btn").innerHTML = "<i class='fa-solid fa-moon mr-2'></i>Switch Dark Mode"
    }
});