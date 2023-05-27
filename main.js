console.log("hello world");

/* create function refresh page onclick home button */

function refreshPage(){
   location.reload();
}

//active class on button menu

// Get the container element
var btnContainer = document.getElementById("nav-bar");

// Get all buttons with class="link inside the container
var btns = btnContainer.getElementsByClassName("link");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace("active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
}

//navigation menu sticky

let navMenu = document.querySelector("nav");

if(window.scroll = ""){
   navMenu.style.opacity = "0.7";
}else {
   console.log("error");
}
// open social media icon 

const socMedia = document.querySelectorAll(".socMedia");
console.log(socMedia)
for( var i = 0 ; i < socMedia.length ; i++){

   // github 
     socMedia[0].style.cursor = "pointer"; 
     socMedia[0].addEventListener("click" , (e)=> {
        window.open("https://www.youtube.com/watch?v=Zk0pnMjkqXo" , "self");
     });
     
     // linkedin 
     socMedia[1].style.cursor = "pointer"; 
     socMedia[1].addEventListener("click" , (e)=>{
        window.open("https://www.google.com/", "self");
     });
     
     // facebook 
     socMedia[2].style.cursor = "pointer"; 
     socMedia[2].addEventListener("click" , (e)=>{
        window.open("" , "self");
     });
  };

// open profile photo 

const profilePhoto = document.getElementById("profile-photo");


profilePhoto.addEventListener("click" , () => {
   profilePhoto.style.animation = "profilePhoto 3s";
});

//after page loaded 100% appear section about me

const aboutMe = document.getElementById("about-me");
aboutMe.style.visibility = "hidden";

const textAbout = document.querySelector(".about-me");
textAbout.style.visibility = "hidden";


const photoMe = document.querySelector(".photo-me");
photoMe.style.visibility = "hidden";


document.addEventListener("DOMContentLoaded", function() {
  aboutMe.style.visibility = "visible";
  aboutMe.style.animation = "appear 2s 1";

   aboutMe.addEventListener("animationend" , () => {
   textAbout.style.animation = "textAppear 2s 1"
   textAbout.style.visibility = "visible";

   photoMe.style.animation = "photoMeAppear 3s 1";
   photoMe.style.visibility = "visible";
  })
  
});

// bar and fill-bar 
const fillBar = document.querySelectorAll(".fill-bar");
console.log(fillBar);

for( var i = 0; i < fillBar.length ; i++){
   
   //html fill-bar
    fillBar[0].style.width = "95%";
   //css fill-bar
    fillBar[1].style.width = "80%";
   //bootstrap fill-bar
    fillBar[2].style.width = "60%";
   //js fill-bar
    fillBar[3].style.width = "75%";
   //wp fill-bar
    fillBar[4].style.width = "60%";
   //php fill-bar
    fillBar[5].style.width = "20%";
};


//scrool effect & appear section skills 

const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll" , checkBoxes);

checkBoxes();

function checkBoxes(){
   const triggerBottom = window.innerHeight / 2 * 2; 

   boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if(boxTop < triggerBottom){
        box.classList.add("show");
    }else {
        box.classList.remove("show");
    }

   });
}

//carousel diplomas section

let galleryDiplomas = document.getElementById("createE");

const DIPLOMAS = ["assets/css.png" ,
                  "assets/html.png"];

let img = document.createElement("img");
img.src = DIPLOMAS[1];

galleryDiplomas.appendChild(img);




//contact form => email send

function sendEmail(){

var fName = document.getElementById("F.Name").value;
var lName = document.getElementById("L.Name").value; 

Email.send({
   SecureToken : "5943ca88-4924-49f7-8482-e41602abadeb",
   To : 'pavalalexandru20@gmail.com',
   From : "pavalalexandru20@gmail.com",
   Subject : document.getElementById("email").value,
   Body : 
   '<b>First Name: </b>' + fName 
   
   + 

   '<br>' 
   
   +

   '<b>Last Name: </b>' + lName

   +

   "<br>"

   +

   document.getElementById("opinion").value
}).then(
 message => alert(message)
);
};



//open C.V

const OPEN_CV = document.getElementById("CV");
 OPEN_CV.addEventListener("click" , () => {
   window.open("C.V.html");
 });