/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuToggle =
    document.querySelector(".menu-toggle");

const navLinks =
    document.querySelector(".nav-links");


menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("open");

    const isOpen =
        navLinks.classList.contains("open");

    menuToggle.setAttribute(
        "aria-expanded",
        isOpen
    );

});


/* CLOSE MOBILE MENU */

document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });


/* =====================================================
   DARK MODE
===================================================== */

const themeToggle =
    document.querySelector(".theme-toggle");


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const darkMode =
        document.body.classList.contains("dark");

    themeToggle.textContent =
        darkMode ? "☀️" : "🌙";

    localStorage.setItem(
        "darkMode",
        darkMode
    );

});


/* LOAD SAVED THEME */

const savedTheme =
    localStorage.getItem("darkMode");

if (savedTheme === "true") {

    document.body.classList.add("dark");

    themeToggle.textContent = "☀️";
}


/* =====================================================
   BIRD SEARCH
===================================================== */

const searchInput =
    document.querySelector("#birdSearch");

const birdCards =
    document.querySelectorAll(".bird-card");


searchInput.addEventListener("input", () => {

    const searchValue =
        searchInput.value
            .toLowerCase()
            .trim();


    birdCards.forEach(card => {

        const birdName =
            card.dataset.name.toLowerCase();


        if (birdName.includes(searchValue)) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }

    });

});


/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
    document.querySelector("#contactForm");

const formMessage =
    document.querySelector("#formMessage");


contactForm.addEventListener("submit", (event) => {

    event.preventDefault();


    const name =
        document.querySelector("#name").value.trim();

    const email =
        document.querySelector("#email").value.trim();

    const message =
        document.querySelector("#message").value.trim();


    if (!name || !email || !message) {

        formMessage.textContent =
            "Please fill in all fields.";

        return;
    }


    formMessage.textContent =
        `Thanks ${name}! Your message has been received.`;


    contactForm.reset();

});


/* =====================================================
   BACK TO TOP
===================================================== */

const backToTop =
    document.querySelector("#backToTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll("section[id]");

const navItems =
    document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

    let currentSection = "";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navItems.forEach(link => {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

});