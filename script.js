const sliderFunction = () => {
  let count = 0;
  const leftArrow = document.querySelector(".left__arrow");
  const rightArrow = document.querySelector(".right__arrow");

  const allSlides = document.querySelectorAll(".single__image");
  const imageSlides = document.querySelector(".image__slides");

  leftArrow.addEventListener("click", () => {
    count = count <= 0 ? allSlides.length - 1 : count - 1;
    imageSlides.style.transform = `translateX(-${count * 100}%)`;
  });

  rightArrow.addEventListener("click", () => {
    count = count >= allSlides.length - 1 ? 0 : count + 1;
    imageSlides.style.transform = `translateX(-${count * 100}%)`;
  });
};

sliderFunction();
