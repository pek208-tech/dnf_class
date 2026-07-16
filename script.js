const contents = document.querySelectorAll("#changeBox .content");
let currentIndex = 0;

function changeDiv() {
  contents[currentIndex].classList.remove("active");

  currentIndex = (currentIndex + 1) % contents.length;

  contents[currentIndex].classList.add("active");
}

document
  .getElementById("changeBox")
  .addEventListener("click", changeDiv);