import ParseVKAudio from "./modules/ParseVKAudio";
document.addEventListener("DOMContentLoaded", () => {
  window.parse = new ParseVKAudio({
    element: document.querySelector("._audio_page__audio_rows_list"),
  });
});
