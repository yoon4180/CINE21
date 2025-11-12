window.onload = () => {

    // 📌풀페이지
    var myFullpage = new fullpage('#fullpage', {
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7'],
        menu: '#menu',
        navigation: true, //세로 슬라이드 개수
        slidesNavigation: true, //가로 슬라이드 개수
        lazyLoad: true,
        credits: { enabled: false },
        afterRender: function () {
            // ✅ 첫 페이지(섹션0, 슬라이드1)로 강제 이동
            fullpage_api.moveTo('section0', 0);
            // ✅ URL 해시 제거 (혹시 남아있으면)
            history.replaceState(null, null, ' ');
        },
        // 800이하에서 풀페이지x 스크롤
        responsiveWidth: 720,
        afterResponsive: function (isResponsive) {}
    });//풀페이지 end

    // 📌헤더
    let searchBtn = document.querySelector('.search_btn');
    let searchBox = document.querySelector('.search_box');

    searchBtn.addEventListener('click', () => {
        searchBox.classList.toggle('active')
    });

    // PC 헤더 depth-02, 03 효과
    document.querySelectorAll('.header .inner .nav.pc .depth-02 li').forEach(li => {
        const subMenu = li.querySelector('.depth-03');

        if (subMenu) {
            li.addEventListener('mouseenter', () => {
                subMenu.style.maxHeight = subMenu.scrollHeight + 'px';
                subMenu.style.opacity = '1';
                subMenu.style.transform = 'translateY(0)';
            });

            li.addEventListener('mouseleave', () => {
                subMenu.style.maxHeight = '0';
                subMenu.style.opacity = '0';
                subMenu.style.transform = 'translateY(-5px)';
            });
        }
    });

    // TABLET, MOBILE 헤더 메뉴 나타나고 사라짐
    const menuopen = $('.menu')
    const mobileNav = $('.nav.mobile');

    menuopen.click(function () {
        mobileNav.toggleClass('active')
        menuopen.toggleClass('open')//메뉴 열릴 때 아이콘 변경
    });

    // TABLET, MOBILE 헤더 효과
    const depth01Links = $('.nav.mobile .depth-01');
    const depth02Links = $('.nav.mobile .depth-02 li')

    // 1차 메뉴 클릭 시 2차 메뉴 나타나고 사라짐
    depth01Links.click(function () {
        depth01Links.removeClass('active');
        $(this).addClass('active');

        $('.depth-02').removeClass('active')
        $(this).siblings('.depth-02').addClass('active')
        //siblings -> 형제
    });

    //2차 메뉴 클릭 시 3차 메뉴 나타나고 사라짐
    depth02Links.click(function () {
        $(this).toggleClass('on')

        $(this).find('.depth-03').toggle('active');
        //find -> 자식지정
    });// 헤더 end

    // 📌20자평 팝업
    $(function () {
        const $penBtn = $('.pen_btn');
        const $popup = $('.popup');
        const $closeBtn = $('.popup_close');

        $penBtn.on('click', function () {
            $popup.addClass('active');
            $penBtn.addClass('active');
        });

        $closeBtn.on('click', function () {
            $popup.removeClass('active');
            $penBtn.removeClass('active');
        });
    });// 20자평 end

    // 📌박스오피스 슬라이드
    var swiper = new Swiper(".boxoffice_slide", {
        slidesPerView: 4.5,
        spaceBetween: 75,
        freeMode: true,
        pagination: {
            clickable: true,
        },
        breakpoints: {
            0: {         // 0px 이상 ~ 499px
                slidesPerView: 1.5,
                spaceBetween: 18, // 필요하면 간격도 줄일 수 있음
            },
            500: {       // 500px 이상 ~ 1024px
                slidesPerView: 2.5,
                spaceBetween: 50,
            },
            1025: {      // 1025px 이상
                slidesPerView: 4.5,
                spaceBetween: 75,
            }
        }
    });// 박스오피스 end
    
};//script end