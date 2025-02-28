document.addEventListener("DOMContentLoaded", function () {
  // 첫 번째 li 항목에 active 클래스를 추가
  const firstLi = document.querySelector(".sec2 li");
  firstLi.classList.add("active");

  // 첫 번째 콘텐츠를 기본적으로 활성화
  const firstContent = document.getElementById(
    firstLi.getAttribute("data-content")
  );
  if (firstContent) {
    firstContent.classList.add("active");
  }
});

// 메뉴 클릭 시 콘텐츠 변경
document.querySelectorAll(".sec2 li").forEach((li) => {
  li.addEventListener("click", () => {
    // 모든 콘텐츠를 숨기기
    document.querySelectorAll(".content").forEach((content) => {
      content.classList.remove("active");
    });

    // 클릭된 항목에 맞는 콘텐츠 표시
    const contentId = li.getAttribute("data-content");
    const content = document.getElementById(contentId);
    if (content) {
      content.classList.add("active");
    }

    // 모든 li에서 active 클래스 제거 후 클릭된 li에만 active 클래스 추가
    document.querySelectorAll(".sec2 li").forEach((item) => {
      item.classList.remove("active");
    });
    li.classList.add("active");
  });
});
