// Gallery tab switching
const tabs = document.querySelectorAll(".gallery-tab");
const panels = document.querySelectorAll(".gallery-panel");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.gallery;

    tabs.forEach((btn) => btn.classList.remove("active"));
    panels.forEach((panel) => panel.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(`gallery-${target}`).classList.add("active");
  });
});

// Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");
const galleryImages = document.querySelectorAll(".gallery-item img");

galleryImages.forEach((img) => {
  img.addEventListener("click", () => {
    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt;
    lightbox.classList.add("open");
    document.body.style.overflow = "hidden";
  });
});

function closeLightbox() {
  lightbox.classList.remove("open");
  document.body.style.overflow = "";
  // Wait for transition to finish before clearing src to prevent visual flashing
  setTimeout(() => {
    if (!lightbox.classList.contains("open")) {
      lightboxImage.src = "";
    }
  }, 300);
}

lightboxClose.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && lightbox.classList.contains("open")) {
    closeLightbox();
  }
});