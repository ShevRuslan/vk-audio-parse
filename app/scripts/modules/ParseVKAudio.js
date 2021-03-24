export default class {
  constructor({element}) {
    this.element = element;
    this.audio = [];
    this.time = null;
    this.init();
  }
  getAudio() {
    const audios = this.element.querySelectorAll(".audio_row");
    audios.forEach(audio => {
      const name = audio.querySelector('.audio_row__title_inner').textContent;
      const time = audio.querySelector('.audio_row__duration').textContent
      console.log(`${name} - ${time}`);
    })
  }
  init(){
    this.getAudio();
  }
}