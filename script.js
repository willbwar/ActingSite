// script.js



document.addEventListener("DOMContentLoaded", function() {
    // Get all the anchor tags in the navigation menu
    const navItems = document.querySelectorAll(".nav-items a");

    // Add a click event listener to each anchor tag
    navItems.forEach(function(anchor) {
        anchor.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent the default behavior of anchor tags

            // Get the target section ID from the anchor's "href" attribute
            const targetId = anchor.getAttribute("href").substring(1);

            // Check if the target section exists
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Scroll to the target section smoothly
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth"
                });
            } else {
                console.error("Target section not found:", targetId);
            }
        });
    });
});




document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const menuToggle = document.querySelector('.menu-toggle');



document.addEventListener("DOMContentLoaded", function () {
    const dots = document.querySelectorAll(".dot");
    const sections = document.querySelectorAll("section");
    const scrollOffset = window.innerHeight / 2; // Adjust this value as needed

    // Function to update active dot based on scroll position
    function updateActiveDot() {
        const scrollPosition = window.scrollY + scrollOffset;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.clientHeight;

            if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
                // Remove the "active-dot" class from all dots
                dots.forEach((dot) => dot.classList.remove("active-dot"));

                // Add the "active-dot" class to the corresponding dot
                dots[index].classList.add("active-dot");
            }
        });
    }

    // Track scroll direction and update active dot
    window.addEventListener("scroll", function () {
        updateActiveDot();
    });

    // Add event listeners for clicking the dots
    dots.forEach((dot) => {
        dot.addEventListener("click", () => {
            const target = dot.getAttribute("data-target");
            const section = document.querySelector(`#${target}`);
            if (section) {
                window.scrollTo({
                    top: section.offsetTop - scrollOffset, // Adjust the offset if needed
                    behavior: "smooth",
                });
            }
        });
    });

    // Call the function to set the initial active dot
    updateActiveDot();
});

const galleryContainer = document.querySelector('.gallery-container');
let scrollAmount = 0;

const autoScroll = () => {
    if (scrollAmount < galleryContainer.scrollWidth - galleryContainer.clientWidth) {
        scrollAmount += 0.25; // adjust scrolling speed if necessary
        galleryContainer.scrollTo(scrollAmount, 0);
    } else {
        scrollAmount = 0;
    }
};

let scrollInterval = setInterval(autoScroll, 10); // adjust time interval for smoother animation

// Stop scrolling on hover
galleryContainer.addEventListener('mouseover', () => {
    clearInterval(scrollInterval);
});

galleryContainer.addEventListener('mouseout', () => {
    scrollInterval = setInterval(autoScroll, 10);
});

document.addEventListener("DOMContentLoaded", function () {
    const toggleButtons = document.querySelectorAll(".toggle-button");

    toggleButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const row = button.closest(".table-row");
            const hiddenRow = row.nextElementSibling;

            if (hiddenRow.classList.contains("hidden-row")) {
                hiddenRow.classList.toggle("show-row");
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const toggleButtons = document.querySelectorAll('.toggle-button');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.textContent === '+') {
                this.textContent = '-';
                // Code to open the section
            } else {
                this.textContent = '+';
                // Code to close the section
            }
        });
    });
});
