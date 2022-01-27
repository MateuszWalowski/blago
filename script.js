"use strict";

function changeimage() {
  window.addEventListener("resize", checksize);
  window.addEventListener("click", function () {
    window.location = "main.html";
  });
}

function checksize() {
  console.log(window.innerWidth);
  if (window.innerWidth < 800) {
    console.log("change to vertical");
    fetch("vertical.txt")
      .then((response) => response.text())
      .then((dataver) => {
        document.querySelector("body").innerHTML = dataver;
      });
  }
  if (window.innerWidth > 800) {
    console.log("change to horizontal");
    fetch("horizontal.txt")
      .then((response) => response.text())
      .then((datahor) => {
        document.querySelector("body").innerHTML = datahor;
      });
  }
}

const images = document.querySelectorAll(".galleryimage");
let imgSrc;
images.forEach((img) => {
  img.addEventListener("click", (e) => {
    imgSrc = e.target.src;
    imgModal(imgSrc);
  });
});
let imgModal = (src) => {
  const modal = document.createElement("div");
  modal.setAttribute("class", "modal");
  document.querySelector("body").append(modal);
  const newImage = document.createElement("img");
  newImage.setAttribute("src", src);
  const closeBtn = document.createElement("p");
  closeBtn.innerText = "X";
  closeBtn.setAttribute("class", "closeBtn");
  closeBtn.onclick = () => {
    modal.remove();
  };
  modal.append(newImage, closeBtn);
};
