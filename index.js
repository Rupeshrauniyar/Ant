

gsap.registerPlugin(ScrollTrigger);



const locoScroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy("main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },

  pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
});









var ownerArr = 
[
{img:"https://antorgnepal.com/wp-content/uploads/2024/03/sabin-768x1024.jpg",title:"Leader",name:"Sabin Timalsina"},
{img:"./suman.jpg",title:"Cheif Financial Officer",name:"Suman Kc"},
{img:"./sakshyam.jpg",title:"Managing Director",name:"Sakshyam Dhakal"},
{img:"./user.jpg",title:"Chief Technology Officer",name:"Prashant KC"},
{img:"./prakash.jpg",title:"Chief Technology Officer",name:"Prakash Subedi"},
{img:"./minaj.jpg",title:"Business Analyst",name:"Minaj Uddin"},
{img:"./benny.jpg",title:"Marketing Manager",name:"Beni Khadka"},
{img:"./barsha.jpg",title:"Director",name:"Barsha Khanal"},
{img:"./binayak.jpg",title:"Director",name:"Binayak Thapa"},

]

var ownersDivs = document.querySelectorAll('.owners');
var ownersCont = document.querySelector('.ownerContainer');
var ownerClutter="";
ownersDivs.forEach(ownersDiv =>{
ownerArr.forEach(item =>{
ownerClutter += 
` <div class="owners">
<div class="card">
 <div class="cardImg">
    <img src="${item.img}" alt="${item.name}">
    </div>
    <div class="card-content">
       <h1>${item.name}</h1>
        <h2>${item.title}</h2>
        
    </div>
</div>
</div>
` 
})
})
ownersCont.innerHTML=ownerClutter;


    gsap.from(".page1Content p", {
        y: 100,        
        ease: "power4.inOut",
        duration: 2,
        opacity: 5,
        stagger:{
         amount:0.5,
        },
        delay:4.8,
    });






gsap.from('.page1ImgCont img',{
y:100, 
stagger:{
 amount:0.2,
},
ease:"power4.inOut",
opacity:0,
duration:2,
 delay:4.8,
})

gsap.from('.page1ContentCont span',{
y:100, 
stagger:{
 amount:0.2,
},
ease:"power4.inOut",
duration:2,
opacity:0,
 delay:4.8,
})








let tl2 = gsap.timeline({
scrollTrigger : {
trigger:'.page2',
scroller:"main",
start:'3100vh 600vh',
end:'3100vh 600vh',
scrub:4,
}
},"same")


tl2.from('.owners',{
y:"300px", 
stagger:{
amount:0.5,
},
opacity:0,
},"same2")







gsap.from('.number h3',{
y:150, 
duration:2,
stagger:{
 amount:0.5,
},
ease:"power4.inOut",
opacity:0,
})



gsap.to(".loader",{
y:"-1000%", 
stagger:{
 amount:0.5,
},
duration:2,
ease:"power4.inOut",
delay:4,
})

gsap.to(".LoaderprogressBar",{
duration:6,
width:"100%",
ease:"power4.inOut",
stagger:{
 amount:0.5,
},
})




 let number = 0;
var numberVal = document.querySelector('#numberValue');
function increaseNumber() {
  if (number < 100) {
    let randomNumber = Math.floor(Math.random() * 10) +1;
    number += randomNumber;
if (number>100) {
number=100;
}


numberVal.innerHTML= number + "%";    
  } 
}
setTimeout(() => {
  increaseNumber();  
  const intervalId = setInterval(increaseNumber, 100);
}, 2000); 







let barFlag = 0;
var bar = document.querySelector('#bar');
var barPage = document.querySelector('.abrPage')
bar.addEventListener('click', function (){
 if (barFlag === 0) {
barFlag=1;
bar.classList="ri-close-line";
gsap.to(".barPage",{
 opacity:1,
 display:"initial",
 duration:1,
 stagger:{
 amount:0.5,
},
ease:"power4.inOut",
})  
 }
 else {
gsap.to(".barPage",{
 opacity:0,
 duration:0.5,
 display:"none",
 stagger:{
 amount:0.2,
},
ease:"power4.inOut",
})  
barFlag=0; 
bar.classList="ri-menu-line"; 
 }
})
