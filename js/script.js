const menuToggle = document.getElementById("menu-toggle");
const siteNav = document.getElementById("site-nav");

if (menuToggle && siteNav) {

    menuToggle.addEventListener("click", function () {

        const isOpen = siteNav.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation"
                : "Open navigation"
        );

    });


    const navigationLinks =
        siteNav.querySelectorAll("a");

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            siteNav.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation"
            );

        });

    });

}

/* =====================================================
   PRODUCT FILTERS
===================================================== */

const productFilters = document.querySelectorAll(".product-filter");
const productCards = document.querySelectorAll(".product-card");

productFilters.forEach(function (filter) {

    filter.addEventListener("click", function () {

        const selectedCategory = this.dataset.filter;

        productFilters.forEach(function (button) {
            button.classList.remove("active");
        });

        this.classList.add("active");

        productCards.forEach(function (card) {

            const cardCategory = card.dataset.category;

            if (
                selectedCategory === "all" ||
                cardCategory === selectedCategory
            ) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        });

    });

});