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

selectBtn.addEventListener("click", ()=>{
   optionMenu.classList.toggle("active")
    document.querySelector("#sub").style.zIndex="-1"
   });

options.forEach(option =>{
   option.addEventListener("click", function(){
       let selectOption = option.querySelector(".option-text").innerText;
       sBtn_text.innerText = selectOption;
       document.querySelector("#input_place").innerText = selectOption;
       optionMenu.classList.remove("active");
       document.querySelector("#sub").style.zIndex="1"
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



// <!-- featured section started -->


let sliderMain_1 = document.querySelector("#slider_first-main");
let item_1 = sliderMain_1.getElementsByClassName("item_1");

function next_1(){
sliderMain_1.append(item_1[0])
}

function prev_1(){
sliderMain_1.prepend(item_1[item_1.length - 1])
}

// <!-- featured section ended -->

// <!-- sanitized & safe cars section started -->


let sliderMain_2 = document.querySelector("#slider_second-main");
let item_2 = sliderMain_2.getElementsByClassName("item_2");

function next_2(){
sliderMain_2.append(item_2[0])
}

function prev_2(){
sliderMain_2.prepend(item_2[item_2.length - 1])
}


// <!-- sanitized & safe cars section ended -->

// <!-- why rwvv section started -->

let sliderMain_3 = document.querySelector("#slider_third-main");
let item_3 = sliderMain_3.getElementsByClassName("item_3");

function next_3(){
sliderMain_3.append(item_3[0])
}

function prev_3(){
sliderMain_3.prepend(item_3[item_3.length - 1])
}

// <!-- why rwvv section started -->


// <!-- happy customers section started -->
let sliderMain_4 = document.querySelector("#slider_fourth-main");
let item_4 = sliderMain_4.getElementsByClassName("item_4");

function next_4(){
sliderMain_4.append(item_4[0])
}

function prev_4(){
sliderMain_4.prepend(item_4[item_4.length - 1])
}


// <!-- happy customers section ended -->

// navbar and login&signup


let popup = document.querySelector("#register-form1")
        let popup1 = document.querySelector('#register-form')
        function openpopup() {
            popup.classList.add("openpopup")
        }
        function openpopup1() {
            popup1.classList.add("openpopup")
        }
    
        async function login() {
            let login_data = {
                password: document.getElementById("login_password").value,
                username: document.getElementById("login_username").value,
            }
            console.log(login_data)
    
            login_data = JSON.stringify(login_data)
    
            let login_link = 'https://masai-api-mocker.herokuapp.com/auth/login'
    
            let response = await fetch(login_link, {
                method: "POST",
    
                body: login_data,
    
                headers: {
                    'Content-Type': 'application/json'
                }
            })
    
            let data = await response.json()
            console.log(data)
            window.location.href="index.html"
    
    
        }
    
    
        async function Register() {
    
            let p = document.createElement("p")
            p.innerText = "SIGN UP"
            p.style.marginBottom = 20
            let name = document.createElement("input")
            let mobile = document.createElement("input")
            let description = document.createElement("input")
            let password = document.createElement("input")
            password.setAttribute('id', 'password')
            password.placeholder = "Password"
            let username = document.createElement("input")
            username.setAttribute('id', 'username')
            username.placeholder = 'Username'
            let email = document.createElement("input")
            email.setAttribute('id', 'email')
            email.placeholder = "Email ID"
            let img1 = document.createElement("img")
            img1.src = 'https://www.revv.co.in/imgs/google-login.png'
            let img2 = document.createElement("img")
            img2.src = 'https://www.revv.co.in/imgs/facebook-icon.png'
            let button = document.createElement("button")
            button.innerText = "Proceed"
            button.setAttribute("id", "submit")
            button.addEventListener("click", signup)
            let form = document.createElement("form")
            form.append(p, img1, img2, email, username, password, button)
    
    
            document.querySelector("#register-form1").innerHTML = ""
            document.querySelector("#register-form1").append(form, button)
            // 
            // // window.location.reload()
        }
    
        async function signup() {
            popup.classList.remove("openpopup")
    
            let signup_data = {
                name: document.getElementById('username').value,
                email: document.getElementById('email').value,
                password: document.getElementById('password').value,
                username: document.getElementById('username').value,
                mobile: document.getElementById('username').value,
                description: document.getElementById('username').value
            }
            signup_data = JSON.stringify(signup_data)
    
            let signup_api_link = 'https://masai-api-mocker.herokuapp.com/auth/register'
    
    
            let response = await fetch(signup_api_link, {
                method: "POST",
    
                body: signup_data,
    
                headers:
                {
                    'Content-Type': 'application/json'
                }
            })
            let data = await response.json()
            console.log(data)
            window.location.reload()
    
        }
// navbar and login&signup



























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