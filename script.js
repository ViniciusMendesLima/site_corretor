document.querySelector(".hamburguer ").addEventListener("click", () =>
  document.querySelector(".sidebar").classList.toggle("show-menu")
);

document.querySelector(".hamburguer-sidebar ").addEventListener("click", () =>
  document.querySelector(".container .sidebar").classList.remove("show-menu")
);

let time = 3000,
  currentDivIndex = 0,
  divs = document.querySelectorAll("#show-imagem div")
max = divs.length;

function nextDiv() {
  divs[currentDivIndex]
    .classList.remove("selected")

  currentDivIndex++;

  if (currentDivIndex >= max)
    currentDivIndex = 0

  divs[currentDivIndex]
    .classList.add("selected")
}

function start() {
  setInterval(() => {
    //troca de div
    nextDiv()
  }, time)
}

window.addEventListener("load", start)

let currentDepDivIndex = 0,
  divsDep = document.querySelectorAll(".corpo-depoimentos div")
maxDepo = divsDep.length;
let next = document.getElementById('next');
let voltar = document.getElementById('voltar');

next.addEventListener('click', () => {
  divsDep[currentDepDivIndex]
    .classList.remove("selectedd")

  currentDepDivIndex++;

  if (currentDepDivIndex >= maxDepo)
    currentDepDivIndex = 0

  divsDep[currentDepDivIndex]
    .classList.add("selectedd")
})

voltar.addEventListener('click', () => {
  divsDep[currentDepDivIndex]
    .classList.remove("selectedd")

  currentDepDivIndex--;

  if (currentDepDivIndex < 0)
    currentDepDivIndex = maxDepo - 1

  divsDep[currentDepDivIndex]
    .classList.add("selectedd")
})

