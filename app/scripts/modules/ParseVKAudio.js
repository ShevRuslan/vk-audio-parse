export default class {
  constructor({ element }) {
    this.element = element; //Родительский элементы
    this.audio = []; //Массив всех аудио
    this.time = {
      seconds: 0,
    };
    this.observer = null; //Обсервер
    this.timeout = null; //Таймер для вывода собранной информации
    this.init(); //Инициализация
  }
  getAudio(params) {
    if (params?.length <= 100) {
      clearTimeout(this.timeout);
      this.parseAudio(params);
      console.log("MAKE OBSERVE!");
      this.timeout = setTimeout(() => {
        this.getInformation();
      }, 500);
      window.scrollBy(0, 10000);
    }
  }
  //Функция для парсинга треков, в которую передаем элемент, откуда нужно брать треки
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
        const arrayTime = time.split(":"); //Сплитим массив времени
        this.time.seconds += +arrayTime[1] + arrayTime[0] * 60; //Перевеодим все в секунды и записываем
      }
    });
  }
  //Функция для получение минут из секунд
  getMinuteFromSeconds(sec) {
    let minute = Math.floor(sec / 60);
    let seconds = sec - minute * 60;
    return { minute, seconds };
  }
  //Функция для получение часов из минут
  getHoursFromMinute(min) {
    let hour = Math.floor(min / 60);
    let minutes = min - hour * 60;
    return { hour, minutes };
  }
  //Функция для получение дней из минут
  getDayFromHours(hour) {
    let day = Math.floor(hour / 24);
    let hours = hour - day * 24;
    return { day, hours };
  }
  createObserve() {
    this.observer = new MutationObserver((params) => this.getAudio(params)); //Создаем обсервер и передаем колбек
    this.observer.observe(this.element, {
      childList: true, // наблюдать за непосредственными детьми
      characterDataOldValue: false, // передавать старое значение в колбэк
    });
  }
  init() {
    this.parseAudio(this.element.querySelectorAll(".audio_row")); //Парсим первые 100 аудио
    this.timeout = setTimeout(() => {
      this.getInformation();
    }, 500);
    this.createObserve(); //Создаем обсервер
    window.scrollBy(0, 10000); //Скроллим до новых треков, тем самым запуская обсервер
  }
  //Функция для вывода информации.
  getInformation() {
    console.table(this.audio);
    const { minute, seconds } = this.getMinuteFromSeconds(this.time.seconds);
    const { hour, minutes } = this.getHoursFromMinute(minute);
    const { hours, day } = this.getDayFromHours(hour);
    console.log(`Количество аудио: ${this.audio.length}`);
    console.log(`${minute} минут : ${seconds} секунды`);
    if (hour != 0) {
      console.log(`${hour} часов : ${minutes} минут : ${seconds} секунды`);
      if (day != 0) {
        console.log(`${day} дней : ${hours} часов : ${minutes} минут : ${seconds} секунды`);
      }
    }
  }
}
