const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click",() {

const noBtnRect = noBtn.getBoundingClientRect();
const maxX = window.innerWidth - noBtnRect.width;
const maxY = window.innerHeight - moBtnRect.height;
const randomX = Math.floor(math.random()* maxX)
const randomY= Math.floor(Math.random() * maxY);

noBtn.style.left = randomX = "px"
noBtn.style.top = randomY + "px";

});