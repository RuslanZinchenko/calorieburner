const TIME = {
  today: null,
  week: null,
  mounth: null
};

// export function userProgress(time) {
//   const elem = document.getElementById("bar-today");
//   const text = document.getElementById("bar-text-today");
//   const maxTime = 2 * 60 * 60; //2 трен по часу, в сек
//   const width = Math.round((time * 100) / maxTime);
//   const maxCal = 1200;
//   const ccal = Math.round((time * maxCal) / maxTime);
//   elem.style.width = width + "%";
//   text.textContent = ccal + "ккал";
// }
// userProgress(3600);

//   export function foo() {
//     console.log(obj.today);
//     localStorage.setItem("today", JSON.stringify(obj.today));
//     const data = JSON.parse(localStorage.getItem("today"));
//     console.log(data);
//     const bar = document.querySelector(".line-bar__bar");
//     console.log(bar);
//     const barMaxWidth = 100;
//     const barWidth = (data.ccal * barMaxWidth) / 1200;
//     console.log(barWidth);
//     bar.style.width = barWidth + "%";
//     const num = document.querySelector(".line-bar__num");
//     num.textContent = data.ccal + "ккал";
//   }
