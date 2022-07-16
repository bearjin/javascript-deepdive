import "./scss/app.scss";
import nyancat from "./images/nyancat.jpeg";

document.addEventListener("DOMContentLoaded", () => {
  document.body.innerHTML = `
    <img src="${nyancat}" alt="고양이" />
  `;
});
