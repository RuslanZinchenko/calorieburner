// import createVideo from "./template/slider.hbs";
// import $ from "jquery";
// import "slick-carousel";
// import YouTubePlayer from "youtube-player";

// import {arrayVideos} from "./filter.js"

// export function viewAllVideos(arr) {
//   const markUp = createVideo({
//     arr
//   });
//   const out = document.querySelector(".slider-list");
//   out.insertAdjacentHTML("afterbegin", markUp);
//   $(".slider-list").slick({
//     centerMode: true,
//     centerPadding: "10px",
//     slidesToShow: 1
//   });

//   const mod = document.querySelector(".modal");
//   const sliderList = document.querySelector(".slick-track");
//   sliderList.addEventListener("click", showModal);
//   function showModal(event) {
//     event.preventDefault();
//     if (event.target.nodeName !== "IMG") return;
//     const newSrc = event.target.parentNode.href;
//     // const mod = document.querySelector('.modal');
//     const modalSrc = document.querySelector("#player");
//     modalSrc.src = newSrc;
//     mod.style.display = "block";

//     const sliderList = document.querySelector(".slick-track");
//     sliderList.addEventListener("click", showModal);
//     function showModal(event) {
//       const mod = document.querySelector(".modal");
//       event.preventDefault();
//       mod.style.display = "none";
//       player.stopVideo();
//       localStorage.setItem("caloriess", caloriesToExport);
//       localStorage.setItem("timeProgress", timeToExport);
//       // location.reload(true);
//     }

//     let player;

//     let caloriesToExport;
//     let timeToExport;
//     const closeBtn = document.querySelector(".madal-btn__close");
//     closeBtn.addEventListener("click", closeModal);
//     function closeModal(event) {
//       event.preventDefault();
//       mod.style.display = "none";
//       player.stopVideo();
//       localStorage.setItem("caloriess", caloriesToExport);
//       localStorage.setItem("timeProgress", timeToExport);
//       // location.reload(true);
//     }

//     player = YouTubePlayer("player");

//     player.on("stateChange", onPlayerStateChange);

//     let TIMER_ID;
//     let calloriesForSecond;
//     let callories;
//     let COUNTER = 0;

//     function onPlayerStateChange(event) {
//       let duration;
//       let currentTime;

//       if (event.data == 1) {
//         TIMER_ID = setInterval(triggerFunction, 1000);
//       } else {
//         clearInterval(TIMER_ID);
//       }

//       function triggerFunction() {
//         incrementCounter();
//         currentTime = Math.floor(event.target.getCurrentTime());
//         duration = Math.floor(event.target.getDuration());
//         calloriesForSecond = 200 / duration;
//         callories = Math.round(COUNTER * calloriesForSecond);
//         let res = formatedValue(callories);
//         displayResult(res);
//         timeToExport = currentTime;
//       }

//       function formatedValue(time) {
//         let value = time < 10 ? "00" + time : time < 100 ? "0" + time : time;
//         return value;
//       }

//       function displayResult(value) {
//         const counterElem = document.querySelector(
//           ".js-modal-content__counter-num"
//         );

//         counterElem.innerHTML = value;
//         caloriesToExport = value;
//       }
//       function incrementCounter() {
//         return COUNTER++;
//       }
//     }
//   }
// }
// export const calorToProgress = Number(localStorage.getItem("caloriess"));
// export const timeToProgress = Number(localStorage.getItem("timeProgress"));
