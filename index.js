let div = document.querySelector("#content");
let rect = div.getBoundingClientRect();
let span = document.querySelector("#eventDivSpan");
let spell = document.querySelector("#spell");
spell.addEventListener("click", () => {
  console.log(spell.innerText);
  if (spell.innerText === "LUMOS") {
    span.classList.add("show");
    spell.innerText = "knox";
  } else {
    span.classList.remove("show");
    spell.innerText = "lumos";
  }
});
div.addEventListener("mousemove", e => {
  let spanLeft = e.clientX - rect.left;
  let spanTop = e.clientY - rect.top;
  // 5 is half of height and width of span
  let spanHalf =
    window
      .getComputedStyle(span)
      .getPropertyValue("width")
      .replace("px", "") / 2;
  let lowerBound = 0;
  let upperTopBound = parseInt(
    window
      .getComputedStyle(div)
      .getPropertyValue("height")
      .replace("px", "")
  );
  let upperLeftBound = parseInt(
    window
      .getComputedStyle(div)
      .getPropertyValue("width")
      .replace("px", "")
  );
  if (spanLeft >= lowerBound && spanLeft <= upperLeftBound) {
    span.style.left = `${spanLeft - spanHalf}px`;
  }
  if (spanTop >= lowerBound && spanTop <= upperTopBound) {
    span.style.top = `${spanTop - spanHalf}px`;
  }
});
