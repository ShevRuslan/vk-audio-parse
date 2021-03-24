export default class {
  constructor({ element }) {
    this.element = element;
    this.audio = [];
    this.time = {
      minutes: 0,
      seconds: 0,
    };
    this.observer = null;
    this.height = window.innerHeight;
    this.init();
  }
  getAudio(params) {
    if (params?.length <= 100) {
      this.parseAudio(params);
      console.log("MAKE OBSERVE!");
      window.scrollBy(0, 10000);
    }
  }
  parseAudio(elements) {
    elements.forEach((element) => {
      const audio = element?.addedNodes ? element.addedNodes[0] : element;
      const name = audio.querySelector(".audio_row__title_inner").textContent;
      const time = audio.querySelector(".audio_row__duration").textContent;
      if (time != "") {
        this.audio.push({
          name,
          time,
        });
        const arrayTime = time.split(":");
        this.time.minutes += +arrayTime[0];
        this.time.seconds += +arrayTime[1] + arrayTime[0] * 60;
      }
    });
  }
  getMinuteFromSeconds(sec) {
    let minute = Math.floor(sec / 60);
    let seconds = sec - minute * 60;
    return { minute, seconds };
  }
  getHoursFromMinute(min) {
    let hour = Math.floor(min / 60);
    let minutes = min - hour * 60;
    return { hour, minutes };
  }
  createObserve() {
    this.observer = new MutationObserver((params) => this.getAudio(params));
    this.observer.observe(this.element, {
      childList: true, // наблюдать за непосредственными детьми
      characterDataOldValue: false, // передавать старое значение в колбэк
    });
  }
  init() {
    this.parseAudio(this.element.querySelectorAll(".audio_row"));
    this.createObserve();
    window.scrollBy(0, 10000);
  }
  getInformation() {
    console.table(this.audio);
    console.log(`Общее количество минут:${this.time.minutes}, Общее количество секунд:${this.time.seconds}`);
    const { minute, seconds } = this.getMinuteFromSeconds(this.time.seconds);
    const { hour, minutes } = this.getHoursFromMinute(minute);
    console.log(`${hour}:${minutes}:${seconds}`);
  }
}
