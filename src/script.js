function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "The line-storm clouds fly tattered and swift, ",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);