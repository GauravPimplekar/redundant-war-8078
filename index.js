let img1 = "https://www.revv.co.in/assets/RentalImages/HomeScreen/heroCarousel/ST_Desktop_1_FG.webp";
let img2 = "https://www.revv.co.in/assets/RentalImages/HomeScreen/heroCarousel/ST_Desktop_2_FG.webp";
let img3 = "https://www.revv.co.in/assets/RentalImages/HomeScreen/heroCarousel/ST_Desktop_3_FG.webp";
// let img4;
// let img5 = "https://www.revv.co.in/assets/RentalImages/HomeScreen/heroCarousel/ST_Desktop_3_FG.webp";
// let img6 = "https://www.revv.co.in/assets/RentalImages/HomeScreen/heroCarousel/ST_Desktop_3_FG.webp";

let image = [[img1],[img2]];
// let image1 = [img4];

let i =0;


let slideshow = document.getElementById("sub");


let id = setInterval(()=>{
    if(i=== image.length){
        i=0;
    }
    let img = document.createElement("img");
    img.style="width:50%;"
    img.src = image[i];
    slideshow.innerHTML = null;
    slideshow.append(img);
    i++;
},2000);


// let j =0;


// let slideshowb = document.getElementById("top");


// let idb = setInterval(()=>{
//     if(j=== image1.length){
//         j=0;
//     }
//     let img1 = document.createElement("div");
//     img1.style="width:50%;background-image:https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg;"
//     img1.src = image1[j];
//     slideshowb.innerHTML = null;
//     slideshowb.append(img1);
//     j++;
// },2000);


