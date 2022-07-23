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

