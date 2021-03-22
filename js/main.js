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
    $('.burger').on('click',function(){
        
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




//drag event
var mPos = { start: 0, end: 0 }, num = 0,
    itemEl = $('.gallery-list').length,
    itemWid = $('.gallery-list:first').width() / 2;

$('.gallery-wrap-container').draggable({
    axis: 'x',
    start: function (e) {
        mPos.start = e.pageX;
    },
    drag: function () { },
    stop: function (e) {
        mPos.end = e.pageX;
        dragAni();
    }
});
$('.w-gallery div').draggable({
    axis: 'x',
    start: function (e) {
        mPos.start = e.pageX;
    },
    drag: function () { },
    stop: function (e) {
        mPos.end = e.pageX;
        dragAni();
    }
})
function dragAni() {
    var dragNum = Math.abs(mPos.start - mPos.end);
    if (itemWid < dragNum) {
        if (mPos.start < mPos.end) {
            if (num > 0) num--;
        } else {
            if (num < itemEl - 1) num++;
        }
    }

    $('.gallery-wrap-container').animate({
        left: -25 * num + '%'
    })
}




    



});
