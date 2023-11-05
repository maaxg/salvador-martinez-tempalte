const menu: HTMLDivElement = document.getElementById("menu") as HTMLDivElement;

menu.addEventListener("click", (evt) => {
  evt.preventDefault();
  const navItems: HTMLDivElement = document.getElementById(
    "nav-items"
  ) as HTMLDivElement;
  if (navItems.style.display === "none") {
    navItems.style.display = "block";
  } else {
    navItems.style.display = "none";
  }
});
