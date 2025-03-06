// 필터 클릭 시 열고 닫기
function toggleFilter(element) {
  // 체크박스를 클릭한 경우, 이벤트 전파를 막아서 필터 창을 닫히지 않도록 한다
  element
    .querySelector(".filter-options")
    .addEventListener("click", function (event) {
      event.stopPropagation();
    });

  const isOpen = element.classList.contains("open");

  // 모든 필터를 닫고, 클릭한 필터만 열기
  document
    .querySelectorAll(".filter")
    .forEach((f) => f.classList.remove("open"));

  // 클릭한 필터만 열기
  if (!isOpen) {
    element.classList.add("open");
  }
}
