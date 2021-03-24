$(function () {
    //header event
    var $header = $('.head');
    $(window).scroll(function () {
        if ($(this).scrollTop() > $(window).height()) {
            $header.addClass('sticky');
        } else {
            $header.removeClass('sticky');
        }
    });

    //menu
    $('.burger').on('click',function(e){
        e.preventDefault();
        $('.menuwrap, .burger').toggleClass('active');
    })


    //index page - item scroll event
    var first = 0, last = 0, loop, state;
    var winHei,scrPos,imgPos;


    $(window).on('scroll', function () {
        first = $(this).scrollTop(); 

        //스크롤 up down 상태 파악
        if (first > last) {
            //console.log('down');
            state = 'down';
        } else {
            //console.log('up');
            state = 'up';
        }
        last = first;

        clearTimeout(loop);
        loop = setTimeout(scrFun(state)); 

    });
    //스크롤 up down 할일
    
    function scrFun(updown) {
        if (updown == 'down') {
            winHei = $(window).height();
            scrPos = $(this).scrollTop();
    
            $('.stamp, .sushi-img, .ramen, .journal-text, .sushi').each(function(i){
                imgPos = $('.stamp, .sushi-img, .ramen, .journal-text, .sushi').eq(i).offset().top;
                if(imgPos - winHei < scrPos){
                    $('.stamp, .sushi-img, .ramen, .journal-text, .sushi').eq(i).addClass('scroll');
                }
            });

        } else {
            $('.stamp').removeClass('scroll');
            $('.sushi-img').removeClass('scroll');
            $('.ramen').removeClass('scroll');
            $('.journal-text').removeClass('scroll');
            $('.sushi').removeClass('scroll');
        }
    }




//drag event - slick

    $('.gallery-wrap-container').slick({
        dots: false,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }

        ]
      });

      $('.w-gallery div').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        variableWidth: true
      });
        
      
      $('.insta-slide').slick({
        dots: false,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }

        ]
      });


    



});
