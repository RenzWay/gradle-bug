// Gradle Configuration Code Snippets
const codeSnippets = {
  gradleApp: `plugins {
    alias(libs.plugins.android.application)
    alias(libs.plugins.kotlin.parcelize)
}`,

  gradleModule: `plugins {
    alias(libs.plugins.android.application) apply false
    alias(libs.plugins.kotlin.parcelize) apply false
}`,

  libsVersion: `kotlin-parcelize = { 
    id = "org.jetbrains.kotlin.plugin.parcelize", 
    version.ref = "kotlin" 
}`,
};

// Element references
const elementMap = {
  gradleApp: document.getElementById("gradleApp"),
  gradleModule: document.getElementById("gradleModule"),
  libsVersion: document.getElementById("libsVersion"),
};

// Populate code blocks
Object.entries(elementMap).forEach(([key, element]) => {
  if (element) {
    element.textContent = codeSnippets[key];
  }
});

// Image Modal Functionality
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const modalClose = document.querySelector(".modal-close");
const modalOverlay = document.querySelector(".modal-overlay");
const images = document.querySelectorAll(".card-image img");

// Open modal when clicking on image
images.forEach((img) => {
  img.addEventListener("click", () => {
    modalImage.src = img.src;
    modalImage.alt = img.alt;
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});

// Close modal function
const closeModal = () => {
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
};

// Close modal on close button click
modalClose.addEventListener("click", closeModal);

// Close modal on overlay click
modalOverlay.addEventListener("click", closeModal);

// Close modal on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("active")) {
    closeModal();
  }
});
