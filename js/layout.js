document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("mobile_menu");
  const hamburgerIcon = document.getElementById("hamburger-icon");

  // 페이지 로드 시 메뉴를 숨기기 위해 기본 스타일을 설정
  if (menu.style.display === "") {
    menu.style.display = "none"; // 메뉴가 "none"으로 시작하도록 설정
  }

  hamburgerIcon.addEventListener("click", function () {
    // 메뉴가 보이면 숨기고, 숨겨져 있으면 보이도록 처리
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  });
});
