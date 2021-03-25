window.addEventListener('DOMContentLoaded', function() {
    var cursor = document.querySelector('.cursor');
    var linkBtn = document.querySelectorAll('[href]');
    console.log(linkBtn)
    
    window.addEventListener('mousemove',function(e){
        cursor.style = `transition:.15s; left:${e.clientX}px; top:${e.clientY}px`;
    });

    
    for(var i = 0; i<linkBtn.length; i++) {
        linkBtn[i].addEventListener('mouseenter',cursorFun);
        linkBtn[i].addEventListener('mouseleave',cursorFun);
    }
    
    function cursorFun(e){
       if(e.type == 'mouseenter'){
           cursor.classList.add('active');
       }else{
           cursor.classList.remove('active');
       }
   }

<<<<<<< Updated upstream
=======
   //circle event
    var circle = document.querySelector('.circle-pattern');

    window.addEventListener('scroll',function(){
        circle.style.transform = 'translateY('+ this.scrollY + 'px)';
    })
    

>>>>>>> Stashed changes
});
