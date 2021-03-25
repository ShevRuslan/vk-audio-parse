import ParseVKAudio from "./modules/ParseVKAudio";
window.parse = new ParseVKAudio({
  element: document.querySelector("._audio_page__audio_rows_list"),
});
