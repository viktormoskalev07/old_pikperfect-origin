// accordion

function accordionInit() {
    window.addEventListener("load", function () {
        const accordion = document.querySelector(".accordion");
        const items = accordion.querySelectorAll(".accordion__item"); 
        items.forEach(function (item) {
            const title = item.querySelector(".accordion__title"); 
            title.addEventListener("click", (e) => {
                const opened_item = accordion.querySelector(".is-open"); 
                toggle_item(item); 
                if (opened_item && opened_item !== item) {
                    toggle_item(opened_item);
                }
            });
        }); 
        const toggle_item = function (item) { 
            if (item.classList.contains("is-open")) { 
                item.classList.remove("is-open");
            } else { 
                item.classList.add("is-open");
            }
        };
    });
} 
if (document.querySelector('.accordion')) {
    accordionInit()
}
// accordion