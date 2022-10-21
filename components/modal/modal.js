const modalOpen = new Event("open");
const modalClose = new Event("close");

//wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
    let eles = document.querySelectorAll(".modal__close");
    for (var i = 0; i < eles.length; i++) {
        let button = eles[i];
        eles[i].addEventListener("click", (event) => {
            Modal.close(event, button);
        });
    }

    let overlays = document.querySelectorAll(".modal__overlay");
    for (var i = 0; i < overlays.length; i++) {
        let overlay = eles[i];
        overlays[i].addEventListener("click", (event) => {
            Modal.close(event, overlay);
        });
    }
    document.querySelectorAll("[data-modal-target]").forEach((element) => {
        element.addEventListener("click", () => Modal.toggle(element.dataset.modalTarget));
    });
});

export default class Modal {
    static close(event, ele) {
        if (!event.srcElement.classList.contains("modal__overlay") && !event.srcElement.classList.contains("modal__close")) {
            return;
        }
        var closestElement = ele.closest(".modal__overlay");
        closestElement.classList.remove("modal__show");
        closestElement.dispatchEvent(modalClose);
        var index = window.modals.indexOf("#" + ele.closest(".modal__overlay").id);
        if (index !== -1) {
            window.modals.splice(index, 1);
        }

        if (window.modals.length == 0) {
            document.querySelector("html").classList.remove("overflow-y--hidden");
        } else if (window.modals.length == 1) {
            document.querySelector("html").classList.add("overflow-y--hidden");
        }
    }

    static toggle(selector) {
        let ele = document.querySelector(selector);

        if (window.modals == null) {
            window.modals = [];
        }

        if (ele.classList.contains("modal__show")) {
            var index = window.modals.indexOf(selector);
            ele.dispatchEvent(modalClose);
            if (index !== -1) {
                window.modals.splice(index, 1);
            }
        } else {
            window.modals.push(selector);
            ele.dispatchEvent(modalOpen);
            ele.style.zIndex = 9999 + window.modals.length;
            if (window.modals.length > 1) {
                ele.style.backgroundColor = "rgba(0,0,0,0.0)";
            } else {
                ele.style.backgroundColor = "rgba(0,0,0,0.7)";
            }
        }

        ele.classList.toggle("modal__show");
        if (window.modals.length == 0) {
            document.querySelector("html").classList.remove("overflow-y--hidden");
        } else if (window.modals.length == 1) {
            document.querySelector("html").classList.add("overflow-y--hidden");
        }
    }
}