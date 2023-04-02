const seeMoreBtn = document.getElementById("see-more-btn");
const contentDiv = document.querySelector(".projects");
const BtnBg = document.getElementById("see-more-button");

seeMoreBtn.addEventListener("click", () => {
  contentDiv.style.overflow = "auto";
  seeMoreBtn.style.display = "none";
  BtnBg.style.display = "none";
});