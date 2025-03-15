document.addEventListener("DOMContentLoaded", function () {
    // Get the current year
    const currentYear = new Date().getFullYear();

    // Update the year element
    const yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.textContent = currentYear;
    }

    // Update the last modified date element
    const lastModifiedDate = new Date(document.lastModified);
    const lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last Modified: ${lastModifiedDate.toLocaleString()}`;
    }
});

// const menu = document.querySelector("#menu").addEventListener("click", () => {
//     const navLinks = document.querySelector(".nav-links");
//     navLinks.style.display = "block";
// });

// const hideMenu = document.querySelector(".close-menu").addEventListener("click", () => {
//     const navLinks = document.querySelector(".nav-links");
//     navLinks.style.display = "none";
// });
document.getElementById('menu').addEventListener('click', function () {
    var navmenu = document.getElementById('navmenu');
    if (navmenu.style.display === 'block') {
        navmenu.style.display = 'none';
    } else {
        navmenu.style.display = 'block';
    }
});

document.querySelector('.close-menu').addEventListener('click', function () {
    document.getElementById('navmenu').style.display = 'none';
});

window.addEventListener('resize', function () {
    if (window.innerWidth >= 640) {
        document.getElementById('navmenu').classList.add('show');
    } else {
        document.getElementById('navmenu').classList.remove('show');
    }
});



