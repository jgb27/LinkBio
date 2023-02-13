const img_github = document.getElementById("img_github");

img_github.addEventListener("click", () => {
  window.open("https://github.com/jgbispo/LinkBio", "_blank");
});

const exportButton = document.querySelectorAll(".export-button");
const toggle = document.getElementById("toggle");

// copy link to clipboard
exportButton.forEach((button) => {
  button.addEventListener("click", () => {
    const link = button.getAttribute("data-link");
    toggle.style.display = "block";
    setTimeout(() => {
      toggle.style.display = "none";
    }, 2000);
    navigator.clipboard.writeText(link);
  });
});
