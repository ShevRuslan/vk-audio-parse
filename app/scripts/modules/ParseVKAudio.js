export default class {
  constructor({element}) {
    this.element = element;
    this.audio = [];
    this.time = {
      minutes: 0,
      seconds: 0,
    };
    this.init();
  }
  getAudio() {
    const audios = this.element.querySelectorAll(".audio_row");
    audios.forEach(audio => {
      const name = audio.querySelector('.audio_row__title_inner').textContent;
      const time = audio.querySelector('.audio_row__duration').textContent
      this.audio.push({
        name,
        time,
      })
      const arrayTime = time.split(":");
      this.time.minutes += +arrayTime[0];
      this.time.seconds += +arrayTime[1] + arrayTime[0] * 60;
    })
    console.table(this.audio);
    console.log(`Общее количество минут:${this.time.minutes}, Общее количество секунд:${this.time.seconds}`);
    const {minute, seconds} = this.getMinuteFromSeconds(this.time.seconds);
    const {hour, minutes} = this.getHoursFromMinute(minute);
    console.log(`${hour}:${minutes}:${seconds}`);
  }
  getMinuteFromSeconds(sec) {
    let minute = Math.floor(sec / 60);
    let seconds = sec - (minute * 60);
    return {minute, seconds}
  }
  getHoursFromMinute(min) {
    let hour = Math.floor(min / 60);
    let minutes = min - (hour * 60);
    return {hour, minutes}
  }
  init(){
    this.getAudio();
  }
}