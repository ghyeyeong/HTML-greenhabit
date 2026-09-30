$(document).ready(function () {
    //추천상품 스와이퍼 영역
    var swiper = new Swiper('.recom-swiper', {
        //swiper를 모바일에 대응하게 하려면 모바일에서 보여질 옵션을 먼저 기본으로 설정해야한다
        slidesPerView: '1',
        spaceBetween: 16,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
})

$(document).ready(function () {
    var swiper = new Swiper('.recom-swiper', {
        slidesPerView: 1,
        spaceBetween: 16,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
        },
    });

    //모바일 버튼
    //.bng-mobile을 클릭하면 .active 클래스가 추가되야함
    //btn-mobile을 클릭하면 .gnb-area가 나타나야함
    $('.btn-mobile').click(function () {
        $(this).toggleClass('active')

        //gnb
        $('.gnb-area').slideToggle('500')
    })
});