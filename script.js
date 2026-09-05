document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       HEADER
    ========================= */

    const header = document.getElementById("header");

    function updateHeader() {

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    }

    window.addEventListener("scroll", updateHeader);

    updateHeader();


    /* =========================
       MOBILE MENU
    ========================= */

    const menuToggle = document.getElementById("menuToggle");
    const mobileMenu = document.getElementById("mobileMenu");

    menuToggle.addEventListener("click", () => {

        menuToggle.classList.toggle("active");

        mobileMenu.classList.toggle("open");

        document.body.classList.toggle("menu-open");

    });


    const mobileLinks =
        mobileMenu.querySelectorAll("a");

    mobileLinks.forEach(link => {

        link.addEventListener("click", () => {

            menuToggle.classList.remove("active");

            mobileMenu.classList.remove("open");

            document.body.classList.remove("menu-open");

        });

    });


    /* =========================
       CURSOR
    ========================= */

    const cursor = document.querySelector(".cursor");

    if (cursor && window.innerWidth > 800) {

        let mouseX = 0;
        let mouseY = 0;

        let currentX = 0;
        let currentY = 0;

        document.addEventListener("mousemove", event => {

            mouseX = event.clientX;
            mouseY = event.clientY;

        });


        function animateCursor() {

            currentX +=
                (mouseX - currentX) * 0.2;

            currentY +=
                (mouseY - currentY) * 0.2;

            cursor.style.left = currentX + "px";
            cursor.style.top = currentY + "px";

            requestAnimationFrame(animateCursor);

        }

        animateCursor();

    }


    /* =========================
       REVEAL ON SCROLL
    ========================= */

    const revealElements = document.querySelectorAll(
        ".intro-title, .intro-copy, .intro-image, .experience-card, .review-card, .contact-info, .contact-map"
    );


    revealElements.forEach(element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(35px)";

        element.style.transition =
            "opacity .8s ease, transform .8s ease";

    });


    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(element => {

        observer.observe(element);

    });


    /* =========================
       STAGGER CARDS
    ========================= */

    document
        .querySelectorAll(".experience-card")
        .forEach((card, index) => {

            card.style.transitionDelay =
                `${index * 0.1}s`;

        });


    document
        .querySelectorAll(".review-card")
        .forEach((card, index) => {

            card.style.transitionDelay =
                `${index * 0.1}s`;

        });


    /* =========================
       PARALLAX
    ========================= */

    const heroImage =
        document.querySelector(".hero-background img");

    if (heroImage) {

        window.addEventListener("scroll", () => {

            const scrollY = window.scrollY;

            if (scrollY < window.innerHeight) {

                heroImage.style.transform =
                    `scale(1) translateY(${scrollY * 0.08}px)`;

            }

        });

    }


    /* =========================
       SMOOTH ANCHORS
    ========================= */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(anchor => {

            anchor.addEventListener("click", event => {

                const id =
                    anchor.getAttribute("href");

                if (!id || id === "#") return;

                const target =
                    document.querySelector(id);

                if (!target) return;

                event.preventDefault();

                const offset = 70;

                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    offset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });

            });

        });


    /* =========================
       IMAGE HOVER EFFECT
    ========================= */

    document
        .querySelectorAll(".gallery-item, .experience-card")
        .forEach(element => {

            element.addEventListener("mouseenter", () => {

                element.style.willChange =
                    "transform";

            });

        });


    /* =========================
       TELEPHONE TRACKING
    ========================= */

    document
        .querySelectorAll('a[href^="tel:"]')
        .forEach(button => {

            button.addEventListener("click", () => {

                console.log(
                    "Contacto telefónico iniciado"
                );

            });

        });

});