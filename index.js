let stars = document.getElementById ('stars');
let moon = document.getElementById ('moon');
let mountains3 = document.getElementById ('mountains3');
let mountains4 = document.getElementById ('mountains4');
let river = document.getElementById ('river');
let boat = document.getElementById ('boat');
let mountains7 = document.getElementById ('mountains7');
let dreams = document.querySelector ('.dreams');
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value *4 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value *3 + 'px';
    dreams.style.fontSize = value + 'px';
    if(scrollY >= 67){
        dreams.style.fontSize = 67 + 'px'; 
        dreams.style.position = 'fixed' ; 
        if(scrollY >= 402){
            dreams.style.display = 'none' ;
        }else{
            dreams.style.display = 'block' ;
        }
        if(scrollY >= 127){
            document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)'
        }else{
            document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f)'
        }
    }
}