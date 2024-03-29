$('.char_box li').eq(0).addClass('active')

let charactor = setInterval(charRolling, 2000)


let i = 1;

function charRolling() {
    if (i > 3) {
        i = 0
    }
    $('.char_box li').eq(i).addClass('active').siblings().removeClass();
    i++;
}

$('.char_box li').mouseenter(function () {
    clearInterval(charactor);
    $(this).addClass('active').siblings().removeClass();
});
$('.char_box li').mouseleave(function () {
    charactor = setInterval(charRolling, 2000);
    let nowLi = $(this).index();
    console.log(nowLi);
    i = nowLi + 1
});


// let heart, clickheart, space

// $('.favorite').each(function () {
//     favorite.call(this)
//     // this를 호출하는 메서드
//     // heart = $(this);
//     // favorite(heart);



// })

// $('.favorite').click(function () {
//     // clickheart = $(this);
//     $(this).toggleClass('active')
//     favorite.call(this);
//     // favorite(clickheart);
//     return false
// })

// function favorite() {
//     if ($(this).hasClass('active')) {
//         $(this).text('♥').css({ color: '#ebd368' });
//     } else {
//         $(this).text('♡').css({ color: '' });
//     }

// }

// 서브페이지 변수
let prodNaPosi

if ($('#section_sub').length > 0) {
    prodNaPosi = $('.prod_nav').offset().top;
}

// 최근 본 상품이 스크롤했을때 따라오게 하기


let todayTop = parseInt($('.prod_today').css('top')) // 400px
console.log(todayTop);



// 숫자를 바꾸는 함수 parseInt() 

$(window).scroll(function () {
    let scrT = $(window).scrollTop();

    console.log(scrT)

    $('.prod_today').stop().animate({ top: scrT + todayTop }, 1000)

    if (scrT >= prodNaPosi) {
        $('.prod_nav').addClass('active')
    } else {
        $('.prod_nav').removeClass('active')
    }
})

// 

$('.small_img li').mouseenter(function () {
    let imgSrc = $(this).find('img').attr('src');
    $('.big_img img').attr('src', imgSrc);
    $(this).addClass('active').siblings().removeClass();
})

// 

$('.prod_nav a').click(function () {
    let prodNavHref = $(this).attr('href');
    // 위치값 구하기
    let prodNavTop = $(prodNavHref).offset().top;

    console.log(prodNavTop)

    $('html').animate({ scrollTop: prodNavTop - 70 })
})
