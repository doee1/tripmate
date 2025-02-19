document
  .getElementById("hamburger-icon")
  .addEventListener("click", function () {
    const menu = document.getElementById("mobile_menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  });
