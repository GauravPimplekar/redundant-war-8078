let startTime = document.querySelector("#start_date");
startTime.addEventListener("click", () => {

    startTime.style.width = "225px"
    startTime.style.height = "41px"
    startTime.style.marginLeft = "-1px"
    startTime.style.marginTop = "-10px"
   

})
let EndTime = document.querySelector("#end_date");
EndTime.addEventListener("click", () => {

    EndTime.style.width = "225px"
    EndTime.style.height = "41px"
    EndTime.style.marginLeft = "-3px"
    EndTime.style.marginTop = "-10px"

})
let start="";
let sTime =[]
let start_date = document.querySelector("#start_date");
start_date.addEventListener("click", () => {   
    // startArr_1 =null
     start = start_date.value; 
    //  console.log(start) 
     let startArr = start.split("T");
    let  startArr_1 =startArr[0].split("-")
  for(let i of startArr_1){
    sTime.push(i)
  }
     
})
console.log("arr",sTime)


// let end="";

// let end_date = document.querySelector("#end_date");

// function getTime(sTime){
//     end_date.addEventListener("click", () => { 

//      end = end_date.value; 
//      console.log(end) 
//      let endArr = end.split("T");
//     let  endArr_1=endArr[0].split("-")
    
//      console.log(endArr_1);
//     console.log(sTime);
// let sum=0;
//     for(let i = 0; i<sTime.length; i++){
//      sum+= sTime[0]-endArr_1[0]
//     }
//     console.log(sum)
// })

// }




const optionMenu = document.querySelector(".select-menu"),
selectBtn = optionMenu.querySelector(".select-btn"),
options = optionMenu.querySelectorAll(".option"),
sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", ()=>
   optionMenu.classList.toggle("active"));


options.forEach(option =>{
   option.addEventListener("click", function(){
       let selectOption = option.querySelector(".option-text").innerText;
       sBtn_text.innerText = selectOption;
       document.querySelector("#input_place").innerText = selectOption;
       optionMenu.classList.remove("active");
   } )
  
})




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







































// let today = new Date();
// let date = today.getDate();
// let month = today.getMonth()+1;
// let year = today.getFullYear();

// if(date < 10){
//     date = "0" + date;
// }
// if(month <10) {
//     month = "0"+month
// ;
// }
// today = year + '-' + month + '-' + date;
// document.querySelector("#start_date").setAttribute("max", today)