export default class {
  constructor({element}) {
    this.element = element;
    this.audio = [];
    this.time = null;
    this.init();
  }
  init(){
    console.log(this.element.querySelectorAll(".audio_row"));
  }
}