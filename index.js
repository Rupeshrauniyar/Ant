

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
{img:"https://antorgnepal.com/wp-content/uploads/2024/03/Suman-KC-CFO-150x150.jpg",title:"Cheif Financial Officer",name:"Suman Kc"},
{img:"https://antorgnepal.com/wp-content/uploads/2024/03/Sakshyam-150x150.jpg",title:"Managing Director",name:"Sakshyam"},
{img:"https://antorgnepal.com/wp-content/uploads/2024/03/Prakash-150x150.jpg",title:"Chief Technology Officer",name:"Prakash"},
{img:"https://antorgnepal.com/wp-content/uploads/2024/03/Minaj-DIrector-e1710406896361-150x150.jpg",title:"Business Analyst",name:"Mianj"},
{img:"https://antorgnepal.com/wp-content/uploads/2024/03/Beny-Khadka-e1710470905715-150x150.jpg",title:"Marketing Manager",name:"Benny Khadka"},
{img:"https://antorgnepal.com/wp-content/uploads/2024/03/barsha-1-e1710054179298-150x150.jpg",title:"Director",name:"Barsha"},
{img:"https://antorgnepal.com/wp-content/uploads/2024/03/ag-binayal-150x150.jpeg",title:"Director",name:"Binayal"},

]

var ownersDivs = document.querySelectorAll('.owners');
var ownersCont = document.querySelector('.ownerContainer');
var ownerClutter="";
ownersDivs.forEach(ownersDiv =>{
ownerArr.forEach(item =>{
ownerClutter += 
` <div class="owners">
<div class="card">
    <img src="${item.img}" alt="Image Description">
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

let tl1 = gsap.timeline({
scrollTrigger : {
trigger:'.AntDets',
scroller:"main",
start:'200vh top',
end:'1000vh 10vh',
scrub:2,
pin:true
}
})
    gsap.from(".page1Content p", {
        y: 100,        
        ease: "power4.inOut",
        duration: 2,
        opacity: 0,
        stagger:{
         amount:0.5,
        },
        delay:5,
    });






gsap.from('.page1ImgCont img',{
y:100, 
stagger:{
 amount:0.2,
},
ease:"power4.inOut",
opacity:0,
duration:2,
 delay:5,
})

gsap.from('.page1ContentCont span',{
y:100, 
stagger:{
 amount:0.2,
},
ease:"power4.inOut",
duration:2,
opacity:0,
 delay:5,
})





tl1.to('.progressBar',{
opacity:1,
width:"100%",
},"same")
 


tl1.to('.imgAndText img',{
rotate:900,
},"same")



let tl2 = gsap.timeline({
scrollTrigger : {
trigger:'.AntDets',
scroller:"main",
start:'350vh 600vh',
end:'350vh 600vh',
scrub:4,
}
},"same")


tl2.from('.owners',{
y:"50px", 
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

gsap.from('.AntDets p,.AntDets h3,.imgAndText',{
y:50, 
opacity:0,
stagger:{
 amount:0.5,
},
ease:"power4.inOut",
delay:5,
duration:2
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





 let number = 0;
var numberVal = document.querySelector('#numberValue');
function increaseNumber() {
  if (number < 100) {
    let randomNumber = Math.floor(Math.random() * 10) +1;
    number += randomNumber;
if (number>100) {
number=100;
}


numberVal.innerHTML= number;    
  } 
}
setTimeout(() => {
  increaseNumber();  
  const intervalId = setInterval(increaseNumber, 100);
}, 2000); 



var colorTheme = document.querySelector('#colorTheme');
var body = document.querySelector('body');
var page3 = document.querySelector('.page3');
var page4 = document.querySelector('.page4');
var card = document.querySelector('.card');

let colorFlag = 0
colorTheme.addEventListener("click",function(){
if (colorFlag === 0) {
 body.style.backgroundColor="#fff";
 body.style.color="#000"; 
 card.style.backgroundColor="#000"; 
 card.style.color="#fff"; 
 colorFlag=1;
}
else{
 body.style.backgroundColor="#000";
 body.style.color="#fff"; 
 card.style.backgroundColor="#fff"; 
 card.style.color="#000"; 
  colorFlag=0; 
}
 
 
})