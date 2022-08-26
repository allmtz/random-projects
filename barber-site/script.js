  


let y 
const nav = document.body.querySelector('nav')
const breakpointWidth = 760

const topOfNav = nav.offsetTop

function reCenterNav(){
    if(window.innerWidth > breakpointWidth){
        nav.style.transform = 'translateX(0)'
    }
}

function setNavDisplay(){
    if(window.innerWidth > breakpointWidth){
        y = window.pageYOffset

        if(y >= topOfNav){
            document.body.style.paddingTop = `${nav.offsetHeight}px`
            document.body.classList.add('fixed-nav')
        }
        else{
            document.body.style.paddingTop = 0
            document.body.classList.remove('fixed-nav')                                                
        }                      
    }               
}

function navSlideIn(){
    nav.style.transform = 'translateX(0)'
       
}

function navSlideOut(){
    nav.style.transform = 'translateX(100%)'

}

//squire widget
!function(e,t){                           
        var i=e.createElement("script")
        sa="setAttribute";
        i.src="https://widget.getsquire.com/widget.js?"+Date.now()
        i[sa]("defer","")
        i[sa]("type","text/javascript")
        i[sa]("brand",t.brand)
        i[sa]("x-squire-inline-enabled",t.inline||!1)
        e.head.appendChild(i)

    }
( document,{brand:"urbancuts390",inline:true} );  


//   swiper carousel
var swiper = new Swiper(".mySwiper", 
{
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

window.addEventListener('scroll',setNavDisplay)
window.addEventListener('resize',reCenterNav)