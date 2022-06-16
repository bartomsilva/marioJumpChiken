const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const clouds = document.querySelector(".clouds");
const zumbie = document.querySelector(".zumbie");
var vezes = 0;

const jump = () => {
  mario.classList.add("jump");
  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const zumbPosition = zumbie.offsetLeft;
  const cloudsPosition = clouds.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  if (
    (pipePosition <= 120 || zumbPosition <= 120) &&
    (pipePosition > 0 || zumbPosition > 0) &&
    marioPosition < 80
  ) {
    pipe.style.animation = "nome";
    pipe.style.left = `${pipePosition}px`;
    zumbie.style.animation = "nome";
    zumbie.style.left = `${zumbPosition}px`;
    mario.style.animation = "nome";
    mario.src = "/imagens/game-over.png";
    mario.style.bottom = `${marioPosition}px`;
    mario.style.width = "75px";
    mario.style.marginLeft = "50px";
    clouds.style.animation = "nome";
    clouds.style.left = `${cloudsPosition}px`;

    clearInterval(loop);
  } else {
    vezes++;
    document.getElementById("demo").innerHTML = vezes;
  }
}, 10);

document.addEventListener("keydown", jump);
document.addEventListener("onClick");
