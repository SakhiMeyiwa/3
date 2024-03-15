
const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.toggle ("sticky",window.scrollY > 120);
});


let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');




menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};


window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
}




let countDate = new Date('september 2, 2024 00:00:00').getTime();

function CountDown(){

    let now = new Date().getTime();
    gap = countDate - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute *60;
    let day = hour * 24;

    let d = Math.floor(gap / (day));
    let h = Math.floor((gap % (day)) / (hour));
    let m = Math.floor((gap % (hour)) / (minute));
    let s = Math.floor((gap % (minute)) / (second));

document.getElementById('day').innerText= d;
document.getElementById('hour').innerText= h;
document.getElementById('minute').innerText= m;
document.getElementById('second').innerText= s;

}

setInterval(function(){
    CountDown();

},1000)

