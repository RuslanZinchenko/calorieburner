function DayUserProgress(currentVideoTime) {
  let targetVideoTime = 1500; //!!!!!потом исправить на правильное значение тут и дальше!!!!

  let progressElement = document.getElementById("ldBar-left");
  let percentage = (currentVideoTime / targetVideoTime) * 100;
  progressElement.setAttribute("data-value", percentage.toString());
}
function WeekUserProgress(currentVideoTime) {
  let targetVideoTime = 3000;

  let progressElement = document.getElementById("ldBar-center");

  let percentage = (currentVideoTime / targetVideoTime) * 100;
  progressElement.setAttribute("data-value", percentage.toString());
}
function MonthUserProgress(currentVideoTime) {
  let targetVideoTime = 7000;

  let progressElement = document.getElementById("ldBar-right");

  let percentage = (currentVideoTime / targetVideoTime) * 100;
  progressElement.setAttribute("data-value", percentage.toString());
}

function paintingTime() {
  let paintTime = document.getElementsByClassName("ldBar-label");

  if (paintTime[0] !== undefined) {
    clearInterval(idInterval);
    setCorrectDataToDayProgressbar();
    setCorrectDataToWeekProgressbar();
    setCorrectDataToMonthProgressbar();
  }
}

function setCorrectDataToDayProgressbar() {
  let paintTime = document.getElementsByClassName("ldBar-label");
  //   console.log(paintTime[0]);
  let videoTime = JSON.parse(localStorage.getItem("time"));
  let currentVideoTime = videoTime.todayTime;
  paintTime[0].innerHTML = contentCreator(currentVideoTime);
}

function setCorrectDataToWeekProgressbar() {
  let paintTime = document.getElementsByClassName("ldBar-label");
  //   console.log(paintTime[1]);
  let videoTime = JSON.parse(localStorage.getItem("time"));
  let currentVideoTime = videoTime.weekTime;
  //   console.log(currentVideoTime);
  paintTime[1].innerHTML = contentCreator(currentVideoTime);
}

function setCorrectDataToMonthProgressbar() {
  let paintTime = document.getElementsByClassName("ldBar-label");
  //   console.log(paintTime[2]);
  let videoTime = JSON.parse(localStorage.getItem("time"));
  let currentVideoTime = videoTime.mounthTime;
  console.log(videoTime);
  paintTime[2].innerHTML = contentCreator(currentVideoTime);
}

function contentCreator(currentVideoTimeInSeconds) {
  let string = "";
  let videoHour = currentVideoTimeInSeconds / 3600;
  if (videoHour < 1) {
    string =
      "<div class='progress-bar-time'>" +
      (currentVideoTimeInSeconds / 60).toFixed() +
      "</div>" +
      " <div class='progress-bar-small'> мин. </div>";
  } else if (videoHour === 1) {
    string =
      "<div class='progress-bar-time'>" +
      Number(currentVideoTimeInSeconds).toFixed() +
      "</div>" +
      " <div class='progress-bar-small'> ч. </div>";
  } else if (videoHour > 1) {
    let minutes = (
      (currentVideoTimeInSeconds - Math.floor(videoHour) * 36) / //3600
      60
    ).toFixed(0);
    string =
      "<div class='progress-bar-time'>" +
      `${Math.floor(videoHour)}` +
      " </div>" +
      " <div class='progress-bar-small'>   ч. </div>" +
      " <div class='progress-bar-time'>" +
      `${minutes}` +
      " </div>" +
      " <div class='progress-bar-small'> мин. </div>";
  }

  return string;
}

// DayUserProgress();
// WeekUserProgress();
// MonthUserProgress();

let idInterval = setInterval(paintingTime, 50);
// paintingTime();

export { DayUserProgress, WeekUserProgress, MonthUserProgress };
// setCorrectDataToDayProgressbar();
