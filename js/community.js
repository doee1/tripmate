
      document.addEventListener("DOMContentLoaded", function () {
        // 섹션3 메뉴
        const menuItems = document.querySelectorAll(".sec3 li");
        const contentSections = document.querySelectorAll(".content");

        // 첫 번째 li 메뉴와 첫 번째 콘텐츠 활성화
        const firstLi = menuItems[0];
        const firstContent = document.getElementById(
          firstLi.getAttribute("data-content")
        );

        firstLi.classList.add("active"); // 첫 번째 메뉴 활성화 (밑줄 표시)
        firstContent.classList.add("active"); // 첫 번째 콘텐츠 활성화 (봄 섹션 표시)

        // 메뉴 클릭 시 섹션 전환 처리
        menuItems.forEach((li) => {
          li.addEventListener("click", function () {
            // 모든 콘텐츠 숨기기
            contentSections.forEach((content) =>
              content.classList.remove("active")
            );

            // 클릭된 항목에 맞는 콘텐츠 표시
            const contentId = li.getAttribute("data-content");
            const content = document.getElementById(contentId);
            if (content) {
              content.classList.add("active");
            }

            // 모든 li에서 active 클래스 제거 후 클릭된 li에만 active 클래스 추가
            menuItems.forEach((item) => item.classList.remove("active"));
            li.classList.add("active");
          });
        });
      })

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
