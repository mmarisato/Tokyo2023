document.addEventListener("DOMContentLoaded", function () {
    const imageItems = document.querySelectorAll(".image-item");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const lightboxCaption = document.getElementById("lightbox-caption");
    const closeButton = document.getElementById("close-button");

    imageItems.forEach(imageItem => {
        imageItem.addEventListener("click", function () {
            const img = this.querySelector("img");
            const caption = this.querySelector(".caption").textContent;

            lightboxImage.src = img.src;
            lightboxCaption.textContent = caption;
            lightbox.style.display = "flex";
        });
    });

    closeButton.addEventListener("click", function () {
        lightbox.style.display = "none";
    });
});
