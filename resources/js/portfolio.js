$(document).ready(() => {
    let config = document.querySelector(".mymixcont");
    let mixer = mixitup(config, {
        selectors: {
            target: ".mix",
        },
        animation: {
            easing: "ease-in-out",
            applyPerspective: true,
            duration: 750,
            reverseOut: true,
            effects: "fade rotateY(90deg) stagger(100ms)",
            staggerSequence: function (i) {
                return 2 * i - 5 * (i / 3 - (1 / 3) * (i % 3));
            },
            nudge: false,
        },
        controls: {
            live: false,
        },
    });

    $(".closeButton").click(() => {
        document.querySelector(".closeButton .icon").classList.toggle("active");
        $(".description").slideToggle(500);
    });

    $(".exitButton").click(() => {
        tip.classList.remove("view");
    });

    function portfolioView(object) {
        let namePlate = document.querySelector(
            ".tip .allContent .description .pro_intro .nameplate h1"
        );
        namePlate.textContent = object.namePlate;

        let category = document.querySelector(
            ".tip .allContent .description .pro_intro .nameplate span span"
        );
        category.textContent = object.category;

        let pro_brief = document.querySelector(
            ".tip .allContent .description .pro_intro .other_text p"
        );
        pro_brief.textContent = object.project_brief;

        let project_date = document.querySelector(
            ".tip .allContent .description .pro_info .Date span"
        );
        project_date.textContent = object.project_date;

        let project_client = document.querySelector(
            ".tip .allContent .description .pro_info .client span"
        );
        project_client.textContent = object.project_client;

        let project_link = document.querySelector(
            ".tip .allContent .description .pro_info .link a"
        );
        project_link.textContent = object.project_link;

        let swiper_wrapper = document.querySelector(
            ".tip .swiper-container-2 .swiper-wrapper"
        );

        let image = swiper_wrapper.querySelectorAll(".swiper-slide img");

        for (let i = 0; i < object.image.length; i++) {
            image[i].src = object.image[i];
        }
    }

    // Swiper js
    var swiper = new Swiper(".swiper-container-2", {
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 1,
        // effect: "flip",
        // cubeEffect: {
        //     shadow: true,
        //     slideShadows: true,
        //     shadowOffset: 20,
        //     shadowScale: 0.94,
        // },
        // effect: "coverflow",
        // coverflowEffect: {
        //     rotate: 30,
        //     stretch: 0,
        //     depth: 100,
        //     modifier: 1,
        //     slideShadows: true,
        // },

        effect: "cube",
        cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
        },
        spaceBetween: 50,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
        },
    });

    let about_nav_btn_2 = document.querySelectorAll(".about_nav a");

    function collapse2() {
        about_nav_btn_2.forEach((link) => {
            link.classList.remove("active");
        });
    }

    function slider1(selector) {
        selector.addEventListener("click", () => {
            collapse2();
            selector.classList.add("active");
        });
    }

    slider1(about_nav_btn_2[0]);
    slider1(about_nav_btn_2[1]);
    slider1(about_nav_btn_2[2]);
    slider1(about_nav_btn_2[3]);
    slider1(about_nav_btn_2[4]);
    slider1(about_nav_btn_2[5]);

    let cards = document.querySelectorAll(".mix");
    let tip = document.querySelector(".tip");

    cards.forEach((card) => {
        card.addEventListener("click", () => {
            if (card.classList.contains("web")) {
                tip.classList.add("view");
                let website = card
                    .querySelector(".title")
                    .textContent.replace(" ", "")
                    .replace(" ", ".")
                    .toLowerCase();
                portfolioView({
                    namePlate: card.querySelector(".title").textContent,
                    category: "Web Development",
                    project_brief: `This website is registered under a website trademark. 
                    Pranav holds the copyright to this website. 
                    Using content from this website is an offensive crime under the Patent Act, 1970, 
                    sections 118 to 124`,

                    project_date: "2021",
                    project_client: "Dhundho Corporation",
                    project_link: `www.${website}.com`,

                    image: [
                        "resources/img/portfolios/web/1.jpg",
                        "resources/img/portfolios/web/2.jpg",
                        "resources/img/portfolios/web/3.jpg",
                        "resources/img/portfolios/web/4.jpg",
                        "resources/img/web_design.jpg",
                        "resources/img/web_design.jpg",
                        "resources/img/web_design.jpg",
                        "resources/img/web_design.jpg",
                        "resources/img/web_design.jpg",
                    ],
                });
            } else if (card.classList.contains("logo")) {
                tip.classList.add("view");
                let website = card
                    .querySelector(".title")
                    .textContent.replace(" ", "")
                    .replace(" ", ".")
                    .toLowerCase();
                portfolioView({
                    namePlate: card.querySelector(".title").textContent,
                    category: "Logo Designing",
                    project_brief: `This image was taken by Pranav during his visit to an exhibition.
                     He holds the copyright to this image, and using it without permission is an offensive crime`,

                    project_date: "2021",
                    project_client: `${
                        card.querySelector(".title").textContent
                    } Corporation`,
                    project_link: `www.${website}.com`,

                    image: [
                        "resources/img/portfolios/logo/1.jpg",
                        "resources/img/portfolios/logo/2.jpg",
                        "resources/img/portfolios/logo/3.jpg",
                        "resources/img/portfolios/logo/4.jpg",
                        "resources/img/portfolios/logo/5.jpg",
                        "resources/img/portfolios/logo/6.jpg",
                        "resources/img/portfolios/logo/7.jpg",
                        "resources/img/logo_design.jpg",
                        "resources/img/logo_design.jpg",
                    ],
                });
            } else if (card.classList.contains("card")) {
                tip.classList.add("view");
                let website = card
                    .querySelector(".title")
                    .textContent.replace(" ", "")
                    .replace(" ", ".")
                    .toLowerCase();
                portfolioView({
                    namePlate: card.querySelector(".title").textContent,
                    category: "Certificates",
                    project_brief: `Due to his passion for new technologies and the intense 
                    competition, Pranav prepared himself in five domains. 
                    His specialization was in Data Analysis, but he also prepared 
                    himself in Blockchain Technologies, Cloud Computing, Machine Learning, 
                    and Big Data Technologies, along with completing a virtual internship 
                    from Tata Forage. All certificates are included here`,
                    project_date: "2023",
                    project_client: `${
                        card.querySelector(".title").textContent
                    } Corporation`,
                    project_link: `www.${website}.com`,

                    image: [
                        "resources/img/portfolios/card/1.jpg",
                        "resources/img/portfolios/card/2.jpg",
                        "resources/img/portfolios/card/3.jpg",
                        "resources/img/portfolios/card/4.jpg",
                        "resources/img/portfolios/card/5.jpg",
                        "resources/img/graphics_design.jpg",
                        "resources/img/graphics_design.jpg",
                        "resources/img/graphics_design.jpg",
                        "resources/img/graphics_design.jpg",
                    ],
                });
            } else if (card.classList.contains("icon")) {
                tip.classList.add("view");
                let website = card
                    .querySelector(".title")
                    .textContent.replace(" ", "")
                    .replace(" ", ".")
                    .toLowerCase();
                portfolioView({
                    namePlate: card.querySelector(".title").textContent,
                    category: "Icon Designing",
                    project_brief: `This work is a part of the Icon designing projects 
                    Pranav completed during his academic journey under his minor class in 
                    Media and Web Development. It is available for users to download 
                    from Pranav's GitHub repository`,

                    project_date: "2021",
                    project_client: `${
                        card.querySelector(".title").textContent
                    } Corporation`,
                    project_link: `www.${website}.com`,

                    image: [
                        "resources/img/portfolios/icon/1.jpg",
                        "resources/img/portfolios/icon/2.jpg",
                        "resources/img/portfolios/icon/3.jpg",
                        "resources/img/portfolios/icon/4.jpg",
                        "resources/img/portfolios/icon/5.jpg",
                        "resources/img/icon_design.png",
                        "resources/img/icon_design.png",
                        "resources/img/icon_design.png",
                        "resources/img/icon_design.png",
                    ],
                });
            } else if (card.classList.contains("app")) {
                tip.classList.add("view");
                let website = card
                    .querySelector(".title")
                    .textContent.replace(" ", "")
                    .replace(" ", ".")
                    .toLowerCase();
                portfolioView({
                    namePlate: card.querySelector(".title").textContent,
                    category: "App Designing",
                    project_brief: `These apps were developed by Pranav during his academic 
                    journey and are available for users to download and use it for free`,

                    project_date: "2021",
                    project_client: `${
                        card.querySelector(".title").textContent
                    } Corporation`,
                    project_link: `www.${website}.com`,

                    image: [
                        "resources/img/portfolios/app/1.jpg",
                        "resources/img/portfolios/app/2.jpg",
                        "resources/img/portfolios/app/3.jpg",
                        "resources/img/ui_design.jpg",
                        "resources/img/ui_design.jpg",
                        "resources/img/ui_design.jpg",
                        "resources/img/ui_design.jpg",
                        "resources/img/ui_design.jpg",
                        "resources/img/ui_design.jpg",
                    ],
                });
            }
        });
    });
});
