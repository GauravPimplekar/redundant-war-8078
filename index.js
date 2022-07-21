// *******top section & slide bar started*********

let img1 =
  "https://www.revv.co.in/assets/RentalImages/HomeScreen/heroCarousel/ST_Desktop_1_FG.webp";
let img2 =
  "https://www.revv.co.in/assets/RentalImages/HomeScreen/heroCarousel/ST_Desktop_2_FG.webp";
let img3 =
  "https://www.revv.co.in/assets/RentalImages/HomeScreen/heroCarousel/ST_Desktop_3_FG.webp";

let image = [img1, img2, img3];

let i = 0;

let slideshow = document.getElementById("sub");

let id = setInterval(() => {
  if (i === image.length) {
    i = 0;
  }
  let img = document.createElement("img");
  img.style = "width:50%;";
  img.src = image[i];
  slideshow.innerHTML = null;
  slideshow.append(img);
  i++;
}, 2000);


// ..........top section & slide bar Ended..........
