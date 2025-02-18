$(function () {
  // 섹션3
  // 페이지 링크, 리뷰 카드, 이미지 요소 선택
  const pageLinks = document.querySelectorAll(".page-link"); // 페이지 링크 (버튼들)
  const reviewCards = document.querySelectorAll(".review_card"); // 리뷰 카드들
  const reviewImages = document.querySelectorAll(".reviewImage"); // 이미지 요소들

  // 페이지 링크 클릭 시 동작
  pageLinks.forEach((link, index) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // 기본 동작(페이지 이동) 막기

      // 모든 버튼과 카드, 이미지에서 'active' 클래스 제거
      pageLinks.forEach((btn) => btn.classList.remove("active"));
      reviewCards.forEach((card) => card.classList.remove("active"));
      reviewImages.forEach((img) => img.classList.remove("active")); // 모든 이미지에서 active 제거

      // 현재 클릭한 버튼과 리뷰 카드에 'active' 클래스 추가
      link.classList.add("active");
      reviewCards[index].classList.add("active");
      reviewImages[index].classList.add("active"); // 해당 이미지에만 'active' 클래스 추가
    });
  });
});
