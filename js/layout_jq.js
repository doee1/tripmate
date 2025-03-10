$(function () {
  $("#slider-div").slick({
    slide: "div", //슬라이드 되어야 할 태그 ex) div, li
    infinite: true, //무한 반복 옵션
    slidesToShow: 4, // 한 화면에 보여질 컨텐츠 개수
    slidesToScroll: 1, //스크롤 한번에 움직일 컨텐츠 개수
    speed: 100, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
    arrows: false, // 옆으로 이동하는 화살표 표시 여부
    dots: true, // 스크롤바 아래 점으로 페이지네이션 여부
    autoplay: true, // 자동 스크롤 사용 여부
    autoplaySpeed: 10000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
    pauseOnHover: true, // 슬라이드 이동    시 마우스 호버하면 슬라이더 멈추게 설정
    vertical: false, // 세로 방향 슬라이드 옵션
    prevArrow: "<button type='button' class='slick-prev'>Previous</button>", // 이전 화살표 모양 설정
    nextArrow: "<button type='button' class='slick-next'>Next</button>", // 다음 화살표 모양 설정
    dotsClass: "slick-dots", //아래 나오는 페이지네이션(점) css class 지정
    draggable: true, //드래그 가능 여부
    variableWidth: true,
    centerMode: true, // 카드가 화면 중앙에 오도록 설정

    responsive: [
      // 반응형 웹 구현 옵션
      {
        breakpoint: 960, //화면 사이즈 960px
        settings: {
          //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, //화면 사이즈 768px
        settings: {
          //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
          slidesToShow: 2,
        },
      },
    ],
  });

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

  //섹션5

  $("#sec5_slider-div").slick({
    slide: "div",
    infinite: true, // 무한 슬라이드
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000, // 전환 속도
    autoplay: true, // 자동 슬라이드
    autoplaySpeed: 2000, // 자동 슬라이드 간격
    pauseOnHover: true, // 마우스 호버 시 슬라이드 멈추기
    vertical: false,
    arrows: false, // 화살표 숨기기
    dots: true, // 하단 점 네비게이션 표시
    draggable: true, // 드래그 가능
    variableWidth: true, // 카드 너비 자동 조정
    cssEase: "ease-out", // 부드러운 전환 효과
    centerMode: true, // 카드가 화면 중앙에 오도록 설정
    centerPadding: "0", // 슬라이드 양옆에 여백 없애기

    responsive: [
      // 반응형 웹 구현 옵션
      {
        breakpoint: 960, //화면 사이즈 960px
        settings: {
          //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, //화면 사이즈 768px
        settings: {
          //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
          slidesToShow: 2,
        },
      },
    ],
  });
});

// ㅎㅔ더

$(document).ready(function () {
  var menuOpen = false;

  // 메뉴 열기
  $("#hamburger-menu").click(function (event) {
    event.stopPropagation();
    $("#hamburger-menu").toggleClass("open");
    $(".menu-list").toggle();

    if (menuOpen) {
      $("#main").show();
      menuOpen = false;
    } else {
      $("#main").hide();
      menuOpen = true;
    }
  });

  // 메뉴 닫기
  $("#hamburger-menu.open").click(function () {
    $("#hamburger-menu").removeClass("open");
    $("#main").removeClass("overflow-hidden");
    $("#menu-container .menu-list").removeClass("active");
    $(".menu-list").hide();
  });
});
