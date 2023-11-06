const menu: HTMLDivElement = document.getElementById("menu") as HTMLDivElement;
const navItems: HTMLHeadElement = document.getElementById(
  "header"
) as HTMLHeadElement;
window.addEventListener("resize", (ev) => {
  if (window.outerWidth >= 1024) {
    changeHeaderVisibility(ev);
  }
});

function changeHeaderVisibility(evt: Event) {
  evt.preventDefault();

  if (navItems.className === "header") {
    // navItems.style.display = "flex";
    navItems.className += " responsive";
  } else {
    navItems.className = "header";
  }
}

menu.addEventListener("click", (evt) => changeHeaderVisibility(evt));
