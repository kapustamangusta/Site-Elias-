window.addEventListener("DOMContentLoaded", () => {
    const lang = document.querySelector("#languages");
    lang.addEventListener('click', function(){
        var langCont = document.querySelector(".languages__content");
        if(!langCont.classList.contains('languages__content_active'))
        {
            langCont.classList.add("languages__content_active");
            document.querySelector(".fa-caret-down").style.transform="rotate(180deg)";
        }
        else {
            langCont.classList.remove("languages__content_active");
            document.querySelector(".fa-caret-down").style.transform="";
        }
    });

/*     tabs.forEach(elem => {
        elem.addEventListener("click", () => {
            tabs.forEach(otherItem => {
                if (otherItem.classList.contains("tabs__item_active")) {
                    otherItem.classList.remove("tabs__item_active");
                }
            })
            elem.classList.add("tabs__item_active")
        });
    });

    $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: "<div class ='carousel__arrow carousel__prev'><i class='fa-solid fa-chevron-left'></i></div>",
        nextArrow: "<div class ='carousel__arrow carousel__next'><i class='fa-solid fa-chevron-right'></i></div>"
    });

    $('#buyNowBtn').on('click', popupOpen);
    $('.popup__close').on('click', () => {
        $('.popup').removeClass('popup_active');
        $('body').css('overflow', 'visible');
    });
    function popupOpen(){
        $('.popup').addClass('popup_active');
        $('body').css('overflow', 'hidden');
    } */
});

