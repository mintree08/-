// main.js

/* 주메뉴 */
var gnbMenu = document.querySelectorAll(".gnb>ul>li");
var headerWrap = document.querySelector(".header_wrap");

for(var i=0; i<gnbMenu.length;i++){
    gnbMenu[i].addEventListener('mouseover',(e)=>{
        e.currentTarget.classList.add('on');
        var ht = e.currentTarget.children[1].offsetHeight;
        headerWrap.style.height = 70 + ht + 'px';
    });
    gnbMenu[i].addEventListener('mouseout', (e) =>{
        e.currentTarget.classList.remove('on');
        headerWrap.style.height = '70px';
    });

    gnbMenu[i].children[0].addEventListener('focus',(e) =>{
        e.currentTarget.parentElement.classList.add('on');
        var ht = e.currentTarget.nextElementSibling.offsetHeight;
        headerWrap.style.height = 70 + ht + 'px';
    });
    gnbMenu[i].children[0].addEventListener('blur', (e) =>{
        e.currentTarget.parentElement.classList.remove('on');
        headerWrap.style.height = '70px';
    });
}

/* 검색박스 */
var srchBtn = document.querySelector(".btn_srch");
var srchWrap = document.querySelector(".srch_wrap");
var closeBtn = document.querySelector(".btn_srch_close");

srchBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    srchWrap.classList.add('on')
});
closeBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    srchWrap.classList.remove('on')
});



//스크롤
 let newsroom = document.querySelector(".newsroom")
 let newsletter = document.querySelector(".newsletter")
 let PR = document.querySelector(".PR_Hall")
 

 window.addEventListener('scroll',function(){
  let value = window.scrollY
  console.log("scrollY",value);
 
  if(value>400){
    newsroom.style.animation ='appear 1.5s ease-out forwards'
  }
  if(value>900){
    newsletter.style.animation = 'appear 1.5s ease-out forwards'
  }
  if(value>1300){
    PR.style.animation = 'appear 1.5s ease-out forwards'
  }
 });
