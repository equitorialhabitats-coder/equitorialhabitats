// ===============================
// Equitorial Habitats
// script.js
// ===============================

// Mobile Navigation Toggle

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Smooth Scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});

// Navbar Shadow on Scroll

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
        navbar.style.transition = "0.3s";

    } else {

        navbar.style.boxShadow = "0 2px 15px rgba(0,0,0,0.08)";

    }

});

// Search Button

const searchButton = document.querySelector(".search button");

if (searchButton) {

    searchButton.addEventListener("click", function (e) {

        e.preventDefault();

        alert("Property search feature coming soon!");

    });

}

// Contact Form Validation

const contactForm = document.querySelector(".contact form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const inputs = contactForm.querySelectorAll("input, textarea");

        let valid = true;

        inputs.forEach(input => {

            if (input.value.trim() === "") {

                valid = false;

                input.style.border = "2px solid red";

            } else {

                input.style.border = "1px solid #ccc";

            }

        });

        if (valid) {

            alert("Thank you for contacting Equitorial Habitats! We will get back to you soon.");

            contactForm.reset();

        } else {

            alert("Please fill in all the fields.");

        }

    });

}

// Property Buttons

const propertyButtons = document.querySelectorAll(".property-info button");

propertyButtons.forEach(button => {

    button.addEventListener("click", () => {

        alert("This property page will be available soon.");

    });

});

// Fade-in Animation on Scroll

const sections = document.querySelectorAll("section");

const revealSection = () => {

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
            section.style.transition = "0.8s ease";

        }

    });

};

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";

});

window.addEventListener("scroll", revealSection);

revealSection();

// Back to Top Button

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.right = "20px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#c9a227";
topButton.style.color = "white";
topButton.style.fontSize = "22px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
topButton.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// Welcome Message

window.addEventListener("load", () => {

    console.log("Welcome to Equitorial Habitats!");

});