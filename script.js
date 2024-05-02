const images = [
  "./assets/1.jpeg",
  "./assets/2.jpeg",
  "./assets/3.jpeg",
  "./assets/4.jpeg",
  "./assets/5.jpeg",
  "./assets/6.jpeg",
];

const transitions = [
  "move",
  "move-inverted",
  "zoom",
  "move-vertical",
  "move-vertical-inverted",
];

function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}

shuffle(images);
window.onload = () => {
  const carousel = document.getElementById("carousel");

  for (var i = 0; i < images.length; i++) {
    // Create parent
    const parentItem = document.createElement("div");
    if (!i) parentItem.setAttribute("class", "image-container show ");
    else parentItem.setAttribute("class", "image-container fade");
    // Create first child
    let newItem = document.createElement("img");
    newItem.setAttribute("src", images[i]);
    if (!i) {
      const random = Math.floor(Math.random() * transitions.length);
      newItem.setAttribute(
        "class",
        i ? "image " + +transitions[random] : "image"
      );
    }
    // Append first child
    parentItem.appendChild(newItem);
    // Create second child
    newItem = document.createElement("img");
    newItem.setAttribute("src", images[i]);
    newItem.setAttribute("class", "bg");
    // Append second child
    parentItem.appendChild(newItem);
    carousel.appendChild(parentItem);
  }

  showSlides("image-container", 0);
};
let slideIndex = 1;
function showSlides(className, duration) {
  setTimeout(() => {
    let i;
    let slides = document.getElementsByClassName(className);
    for (i = 0; i < slides.length; i++) {
      slides[i].firstChild.className = " image";
      slides[i].className = className + " fade";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    {
      const random = Math.floor(Math.random() * transitions.length);
      slides[slideIndex - 1].firstChild.className =
        "image " + transitions[random];
      slides[slideIndex - 1].className = className + " show";
    }
    showSlides(className, 7000); // Change image every 2 seconds
  }, duration);
}
