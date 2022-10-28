let left = document.querySelector(".left");
let right = document.querySelector(".right");
let card = document.querySelectorAll(".card-container");
let cardX = 0;
let cardNumbers = card.length;
let cardIndex = 0;
let dot = document.querySelectorAll(".dot");
let showMore = document.querySelector(".show-more");
let galleryContainer = document
  .querySelector(".section-gallery")
  .querySelector(".container");
const returnToDefault = () => {
  card.forEach((e) => {
    e.style.transform = "translateX(0%)";
  });
  cardIndex = 0;
};

const removeActiveDot = () => {
  dot.forEach((e) => {
    e.classList.remove("dot-active");
    e.classList.add("dot-unactive");
  });
};

const changeCardPosition = (transformX) => {
  card.forEach((e) => {
    e.style.transform = "translateX(" + transformX + "%)";
  });
};

const whereToSlide = (slide) => {
  removeActiveDot();
  if (slide.target.classList.contains("index-0")) {
    returnToDefault();
    slide.target.classList.remove("dot-unactive");
    slide.target.classList.add("dot-active");
  } else if (slide.target.classList.contains("index-1")) {
    slide.target.classList.remove("dot-unactive");
    changeCardPosition(-100);
    slide.target.classList.add("dot-active");
  } else if (slide.target.classList.contains("index-2")) {
    slide.target.classList.remove("dot-unactive");
    changeCardPosition(-200);
    slide.target.classList.add("dot-active");
  }
};

const slideCard = (e) => {
  whereToSlide(e);
};
dot.forEach((e) => {
  e.addEventListener("click", slideCard);
});

const displayGallery = (e) => {
  // galleryContainer.style.backgroundColor = "red";
  if (e.target.innerText === "Show more") {
    let maxH = (galleryContainer.clientHeight * 2) / 10;
    galleryContainer.style.maxHeight = maxH + "rem";
    e.target.innerText = "Hide";
  } else if (e.target.innerText === "Hide") {
    galleryContainer.style.maxHeight = "147rem";
    e.target.innerText = "Show more";
  }
};

showMore.addEventListener("click", displayGallery);
// const slideLeft = () => {
//   cardX = -100;
//   cardIndex++;
//   if (cardIndex < cardNumbers) {
//     card.forEach((e) => {
//       e.style.transform = "translateX(" + cardIndex * cardX + "%)";
//     });
//   } else {
//     returnToDefault();
//   }
// };

// left.addEventListener("click", slideLeft);

//Top navbar fixed position

let topNav = document.querySelector(".top-nav");
const addFixedNav = () => {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    if (!topNav.classList.contains("fixed-nav")) {
      topNav.classList.add("fixed-nav");
    }
  } else {
    if (topNav.classList.contains("fixed-nav")) {
      topNav.classList.remove("fixed-nav");
    }
  }
};
window.addEventListener("scroll", addFixedNav);

//mobile nav

let mobileNav = document.querySelector(".mobile-nav");

const displayMobileNav = () => {
  // alert(e.currentTarget);
  if (mobileNav.classList.contains("clicked")) {
    // mobileNav.classList.replace("clicked", "unclicked");
    mobileNav.classList.remove("clicked");
    mobileNav.classList.add("unclicked");
  } else if (mobileNav.classList.contains("unclicked")) {
    mobileNav.classList.remove("unclicked");
    mobileNav.classList.add("clicked");
  }
};

mobileNav.addEventListener("click", displayMobileNav);
