let sliderMain = document.querySelector("#slider-main");
let item = sliderMain.getElementsByClassName("item");

function next(){
sliderMain.append(item[0])
}

function prev(){
sliderMain.prepend(item[item.length - 1])
}

let sliderMain_2 = document.querySelector("#slider_second-main");
let item_2 = sliderMain_2.getElementsByClassName("item_2");

function next_2(){
sliderMain_2.append(item_2[0])
}

function prev_2(){
sliderMain_2.prepend(item_2[item_2.length - 1])
}