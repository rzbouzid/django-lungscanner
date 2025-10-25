// =========================
// Simple JS functionality
// =========================

// Preview uploaded image
document.addEventListener("DOMContentLoaded", function () {
  const input = document.querySelector('input[type="file"]');
  const previewArea = document.createElement("div");
  previewArea.id = "preview";
  input.insertAdjacentElement("afterend", previewArea);

  input.addEventListener("change", function (e) {
    previewArea.innerHTML = ""; // clear previous preview
    const file = e.target.files[0];
    if (file) {
      const img = document.createElement("img");
      img.src = URL.createObjectURL(file);
      img.style.maxWidth = "100%";
      img.style.marginTop = "10px";
      img.style.borderRadius = "8px";
      img.style.boxShadow = "0 0 8px rgba(0,0,0,0.1)";
      previewArea.appendChild(img);
    }
  });
});
