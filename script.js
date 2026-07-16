const changeBoxes = document.querySelectorAll(".change-box");

changeBoxes.forEach(function (box) {
  const contents = box.querySelectorAll(".content");
  let currentIndex = 0;

  box.addEventListener("click", function () {
    contents[currentIndex].classList.remove("active");

    currentIndex = (currentIndex + 1) % contents.length;

    contents[currentIndex].classList.add("active");
  });
});