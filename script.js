const images = document.querySelectorAll('.slider .slider-line img');
const sliderLine = document.querySelector('.slider-line');
let count = 0;
let width;

var person = null;
if (confirm("Дякую, що завітали !")) {
    person = prompt("Введіть ваше ім'я, будь ласка");
    alert ("Привіт, " + person);
}
function init(){
        console.log('resize');
        width = document.querySelector('.slider').offsetWidth;
        sliderLine.style.width = width*images.length + 'px';
        images.forEach( item => {
            item.style.width = width + 'px';
            item.style.height = 'auto';
        });
        rollSlider();
}
window.addEventListener('resize', init)
init();
document.querySelector('.slider-next').addEventListener('click', function(){
    count++;
    if (count >= images.length) {
        count = 0
    }
    rollSlider();
})
document.querySelector('.slider-back').addEventListener('click', function(){
    count--;
    if (count < 0 ) {
        count = images.length -1
    }
    rollSlider();
})
function rollSlider(){
    sliderLine.style.transform = 'translate(-'+count*width+'px)';
}
var modal1 = document.getElementById("buymodal1");
var btn1 = document.getElementById("buybtn1");
var span1 = document.getElementsByClassName("close1")[0];
var modal2 = document.getElementById("buymodal2");
var btn2 = document.getElementById("buybtn2");
var span2 = document.getElementsByClassName("close2")[0];
var modal3 = document.getElementById("buymodal3");
var btn3 = document.getElementById("buybtn3");
var span3 = document.getElementsByClassName("close3")[0];
var modal4 = document.getElementById("buymodal4");
var btn4 = document.getElementById("buybtn4");
var span4 = document.getElementsByClassName("close4")[0];
var modal5 = document.getElementById("buymodal5");
var btn5 = document.getElementById("buybtn5");
var span5 = document.getElementsByClassName("close5")[0];
var modal6 = document.getElementById("buymodal6");
var btn6 = document.getElementById("buybtn6");
var span6 = document.getElementsByClassName("close6")[0];
var modal7 = document.getElementById("buymodal7");
var btn7 = document.getElementById("buybtn7");
var span7 = document.getElementsByClassName("close7")[0];
var modal8 = document.getElementById("buymodal8");
var btn8 = document.getElementById("buybtn8");
var span8 = document.getElementsByClassName("close8")[0];
btn1.onclick = function () {
    modal1.style.display = "block";
}
span1.onclick = function () {
    modal1.style.display = "none"
}
btn2.onclick = function () {
    modal2.style.display = "block";
}
span2.onclick = function () {
    modal2.style.display = "none"
}
btn3.onclick = function () {
    modal3.style.display = "block";
}
span3.onclick = function () {
    modal3.style.display = "none"
}
btn4.onclick = function () {
    modal4.style.display = "block";
}
span4.onclick = function () {
    modal4.style.display = "none"
}
btn5.onclick = function () {
    modal5.style.display = "block";
}
span5.onclick = function () {
    modal5.style.display = "none";
}
btn6.onclick = function () {
    modal6.style.display = "block";
}
span6.onclick = function () {
    modal6.style.display = "none";
}
btn7.onclick = function () {
    modal7.style.display = "block";
}
span7.onclick = function () {
    modal7.style.display = "none";
}
btn8.onclick = function () {
    modal8.style.display = "block";
}
span8.onclick = function () {
    modal8.style.display = "none";
}
modal1.onclick = function () {
    modal1.style.display = "none"
}
modal2.onclick = function () {
    modal2.style.display = "none"
}
modal3.onclick = function () {
    modal3.style.display = "none"
}
modal4.onclick = function () {
    modal4.style.display = "none"
}
modal5.onclick = function () {
    modal5.style.display = "none"
}
modal6.onclick = function () {
    modal6.style.display = "none"
}
modal7.onclick = function () {
    modal7.style.display = "none"
}
modal8.onclick = function () {
    modal8.style.display = "none"
}



var modal = document.getElementById("ShoesModal");
var img = document.getElementById("ShoesImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
    modal.style.display = "block";
    modalImg. src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    modal.style.display = "none";
}