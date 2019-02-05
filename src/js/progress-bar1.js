import {
  DayUserProgress,
  WeekUserProgress,
  MonthUserProgress
} from "./progress-bar";
import { calorToProgress } from "./array.js";

//глобальная переменная (со значениями для проверки работы кода)
// let TIME = {
//   lastDate: [0, 1, 28],
//   todayCal: 300,
//   weekCal: 1000,
//   mounthCal: 3000,
//   todayTime: 300,
//   weekTime: 1000,
//   mounthTime: 3000
// };
let TIME = {
  lastDate: [0, 0, 0],
  todayCal: 0,
  weekCal: 0,
  mounthCal: 0,
  todayTime: 0,
  weekTime: 0,
  mounthTime: 0
};

const setToLS = value => {
  localStorage.setItem("time", JSON.stringify(value));
};

const getFromLS = () => {
  const data = localStorage.getItem("time");
  return data ? JSON.parse(data) : null;
};

function getCcalFromLS() {
  const data = localStorage.getItem("caloriess");
  console.log("f", data);
  return data ? Number(data) : null;
}

const getTimeFromLS = () => {
  const data = localStorage.getItem("timeProgress");
  return data ? Number(data) : null;
};

// setToLS(TIME);

document.addEventListener("DOMContentLoaded", loadingHandler);

//========================================================================
// Проверка даты и данных в ЛС и отрисовка прогресс-баров
function loadingHandler() {
  let timeLS = getFromLS();
  let currentMounth = new Date().getMonth();
  let currentDate = new Date().getDate();
  let currentDay = new Date().getDay();
  if (!timeLS || !timeLS.lastDate) {
    TIME.lastDate = [currentMounth, currentDay, currentDate];
    setToLS(TIME);
    return;
  } else if (timeLS && timeLS.lastDate) {
    if (
      //месяц совпадает
      currentMounth === timeLS.lastDate[0]
    ) {
      paintMounthBar(timeLS);
      MonthUserProgress(timeLS.mounthTime);
      //   alert("1");
    } else if (currentMounth !== timeLS.lastDate[0]) {
      //месяц не совпадает
      timeLS.lastDate[0] = currentMounth;
      timeLS.lastDate[2] = currentDate;
      timeLS.mounthCal = 0;
      timeLS.todayCal = 0;
      timeLS.mounthTime = 0;
      timeLS.todayTime = 0;
      paintTodayBar(timeLS);
      DayUserProgress(timeLS.todayTime);
      paintMounthBar(timeLS);
      MonthUserProgress(timeLS.mounthTime);
      //   alert("2");
    }
    if (
      //день совпадает
      currentDate === timeLS.lastDate[2]
    ) {
      paintTodayBar(timeLS);
      DayUserProgress(timeLS.todayTime);
      paintWeekBar(timeLS);
      WeekUserProgress(timeLS.weekTime);
      //   alert("3");
    } else if (currentDate !== timeLS.lastDate[2]) {
      //день не совпадает
      timeLS.todayCal = 0;
      timeLS.todayTime = 0;
      paintTodayBar(timeLS);
      DayUserProgress(timeLS.todayTime);
      paintWeekBar(timeLS);
      WeekUserProgress(timeLS.weekTime);
      //   alert("4");
    }
    if (currentDay === 1 && timeLS.today === 0) {
      //понедельник первый заход
      //   alert("5");
      timeLS.weekCal = 0;
      timeLS.weekTime = 0;
      paintWeekBar(timeLS);
      WeekUserProgress(timeLS.weekTime);
    }
    timeLS.lastDate = [currentMounth, currentDay, currentDate];
  }

  TIME = timeLS;
  setToLS(TIME);
  return TIME;
}
//===================================================================

const closeBtn = document.querySelector(".madal-btn__close");
closeBtn.addEventListener("click", handleGetAndPaintNewTime);

//получает время с видео и отрисовывает прогресс
function handleGetAndPaintNewTime() {
  setTimeout(function() {
    let newCal;
    newCal = getCcalFromLS();

    console.log("out", newCal);
    let newTime = getTimeFromLS();
    console.log(newTime);
    let timeFromLS = getFromLS();
    // console.log(timeFromLS);
    let currentDate = new Date().getDate();
    //   проверяет не наступил ли новый день, пока смотрели видео
    if (currentDate === timeFromLS.lastDate[2]) {
      // console.log(newCal);
      addNewTime(timeFromLS, newCal, newTime);
      setToLS(TIME);
      paintTodayBar(TIME);
      DayUserProgress(TIME.todayTime);
      paintWeekBar(TIME);
      WeekUserProgress(TIME.weekTime);
      paintMounthBar(TIME);
      MonthUserProgress(TIME.mounthTime);
    } else {
      loadingHandler(); //если наступил новый день снова делаем проверки и обнуляем данные.
      //Наверное, стоит сюда написать отдельную ф-цию, которая будет только делать проверку и не отрисовывать прогресс
      addNewTime(TIME, newCal, newTime);
      setToLS(TIME);
      paintTodayBar(TIME);
      DayUserProgress(TIME.todayTime);
      paintWeekBar(TIME);
      WeekUserProgress(TIME.weekTime);
      paintMounthBar(TIME);
      MonthUserProgress(TIME.mounthTime);
    }
    window.location.reload();
  }, 0);
}
//добавляет к существующему времени новое
function addNewTime(timeFromLS, newCal, newTime) {
  console.log(newTime);
  if (isNaN(newCal)) return;
  else {
    // console.log("srab", newCal == NaN, newCal);
    timeFromLS.todayCal += Number(newCal);
    timeFromLS.weekCal += Number(newCal);
    timeFromLS.mounthCal += Number(newCal);
    timeFromLS.todayTime += Number(newTime);
    timeFromLS.weekTime += Number(newTime);
    timeFromLS.mounthTime += Number(newTime);
    return (TIME = timeFromLS);
  }
}
//===================================================================

function paintTodayBar(timeObj) {
  const elem = document.getElementById("bar-today");
  const text = document.getElementById("bar-text-today");
  //   const maxTime = 2 * 60 * 60 * 1000; //2 трен по часу, в mc
  const maxCcal = 1200;
  countWidthAndCal(timeObj.todayCal, elem, text, maxCcal);
}
function paintWeekBar(timeObj) {
  const elem = document.getElementById("bar-week");
  const text = document.getElementById("bar-text-week");
  const maxCcal = 1200 * 7; //2 трен по часу каждый день, в mc
  countWidthAndCal(timeObj.weekCal, elem, text, maxCcal);
}
function paintMounthBar(timeObj) {
  const elem = document.getElementById("bar-mounth");
  const text = document.getElementById("bar-text-mounth");
  const maxCcal = 1200 * 7 * 30; //2 трен по часу каждый день. Сделать проверку на к-во дней в месяце
  countWidthAndCal(timeObj.mounthCal, elem, text, maxCcal);
}
function countWidthAndCal(ccal, elem1, elem2, maxCcal) {
  const width = Math.round((ccal * 100) / maxCcal);
  //   const ccal = Math.round((time * maxCal) / maxTime);
  elem1.style.width = width + "%";
  elem2.textContent = ccal + "ккал";
}
