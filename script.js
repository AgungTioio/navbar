const input = document.querySelector("div.hamburger");
input.addEventListener("click", function () {
  const ul = document.querySelector("nav ul");
  const barAtas = document.querySelector("div.hamburger span:nth-child(1)");
  const barTengah = document.querySelector("div.hamburger span:nth-child(2)");
  const barBawah = document.querySelector("div.hamburger span:last-child");

  ul.classList.toggle("opensidebar");
  barAtas.classList.toggle("silangatas");
  barTengah.classList.toggle("silangtengah");
  barBawah.classList.toggle("silangbawah");
});
