window.addEventListener('DOMContentLoaded', function() {


    var url = location.pathname.substr(1).split('/')[1].split('.')[0];
    if(url == 'detail'){
        
    }



    switch(localStorage.pageNum){
        case '0' : temporarily(); break;
        case '1' : temporarily(); break;
        case '2' : temporarily(); break;
        case '3' : temporarily(); break;
    }

    function temporarily(){}

    // common - cursor event
    var cursor = document.querySelector('.cursor');
    var linkBtn = document.querySelectorAll('[href]');
    var btn = document.querySelector('button');
    console.log(btn)
    
    window.addEventListener('mousemove',function(e){
        cursor.style = `transition:.15s; left:${e.clientX}px; top:${e.clientY}px`;
    });

    
    for(var i = 0; i<linkBtn.length; i++) {
        linkBtn[i].addEventListener('mouseenter',cursorFun);
        linkBtn[i].addEventListener('mouseleave',cursorFun);
    }
    btn.addEventListener('mouseenter',cursorFun);
    btn.addEventListener('mouseleave',cursorFun);
    
    function cursorFun(e){
       if(e.type == 'mouseenter'){
           cursor.classList.add('active');
       }else{
           cursor.classList.remove('active');
       }
   }
   // common -circle event
    var circle = document.querySelector('.circle-pattern');

    window.addEventListener('scroll',function(){
        circle.style.transform = 'translateY('+ this.scrollY + 'px)';
    })

    // common - head order click
    var orderBtn = document.querySelector('.order_container');
    var orderWrap = document.querySelector('.orderList_container');
    var orderInner = document.querySelector('.orderList_wrap');
    var menuwrap = document.querySelector('.menuwrap');
    var burger = document.querySelector('.burger');

    var addCartBtn = document.querySelector('.order button');
    var num = 0;
    var headOrder = document.querySelector('.head_order .head_order_con');
    var headOrderNum = document.querySelector('.head_order_num');
    var headOrderNumInner = document.querySelector('.orderList_title .head_order_num');
    var inputNum = document.querySelector('.orderList_item_num input');
    var removeBtn = document.querySelector('.remove');
    console.log(orderBtn);

    orderBtn.addEventListener('click',function(e){
        e.preventDefault();
        this.classList.add('order');
        if( this.classList.contains('order') ){
            orderWrap.classList.add('order');
            orderInner.classList.add('order');
            burger.classList.add('order');

        }
    });

    burger.addEventListener('click',function(){
        if(orderBtn.classList.contains('order')){
            burger.classList.remove('order');
            orderWrap.classList.remove('order');
            orderInner.classList.remove('order');
            orderBtn.classList.remove('order');
            burger.classList.toggle('active');
            menuwrap.classList.toggle('active');
        }
    });


    (function () {
        if(localStorage.num == undefined){        
            localStorage.num = 0;
        }
        setTimeout(function(){
            headOrderNum.innerHTML = localStorage.num ;
            headOrderNumInner.innerHTML = localStorage.num;
            inputNum.value = localStorage.num ;

            // 장바구니가 비었을 때    
            if(localStorage.num == 0){
                orderWrap.classList.add('empty');
            }else{
                orderWrap.classList.remove('empty');
                orderWrap.classList.add('cart');
            }
            

            if(addCartBtn != null){
                console.log(addCartBtn)
                addCart(); removeCart();
            }else{
                removeCart();
            }
        },50);

    })();

    
    

    
    function addCart(){
        localStorage.addCart = '1';

        addCartBtn.addEventListener('click',function(){
            let num = localStorage.num;  
            num++;          
            headOrder.classList.add('num');
            orderWrap.classList.remove('empty');
            orderWrap.classList.add('cart');
            headOrderNum.innerHTML = num;
            headOrderNumInner.innerHTML = num;
            inputNum.value = num;
            localStorage.num = num;
        });
    }

    function removeCart(){       
        if(localStorage.num){
            removeBtn.addEventListener('click',function(){
                num = 0;
                inputNum.value = '';
                headOrderNum.innerHTML = num;
                headOrderNumInner.innerHTML = num;
                inputNum.value = num;
                headOrder.classList.remove('num');
                orderWrap.classList.remove('cart');
                orderWrap.classList.add('empty');
                localStorage.addCart = '0';
                localStorage.num = 0
            })
        }

        //headOrderNum.innerHTML = headOrderNumInner.innerHTML = inputNum.value = localStorage.num;
 
    }

    var inputValue = document.querySelector('input[type=number]')
    console.log(inputValue.value);
    console.log(inputNum.value);

});


