// Interaktiv SVG-side
const kort = document.querySelector(".svg-kort");

document
  .querySelector("#details-indgang")
  .addEventListener("toggle", opdaterFigur);

document
  .querySelector("#details-scen")
  .addEventListener("toggle", opdaterFigur);

document.querySelector("#details-bar").addEventListener("toggle", opdaterFigur);

document
  .querySelector("#details-vinylshop")
  .addEventListener("toggle", opdaterFigur);

document
  .querySelector("#details-lounge")
  .addEventListener("toggle", opdaterFigur);

function opdaterFigur() {
  const aabent = document.querySelector(".accordion-item[open]");
  if (aabent) {
    kort.dataset.position = aabent.dataset.position;
    document.querySelector("#besked").textContent =
      "Valg sted: " + aabent.querySelector("summary").textContent;
  } else {
    kort.dataset.position = "indgang";
    document.querySelector("#besked").textContent =
      "Alt er lukket. Figuren står ved indgangen.";
  }
}

opdaterFigur();

// Opsamlingsside
const opsamlingPlaceholder = document.querySelector(".opsamling-placeholder");

if (opsamlingPlaceholder) {
  const params = new URLSearchParams(window.location.search);
  // Eksempel: params.get("navn") henter værdien fra et formularfelt med name="navn".
}
