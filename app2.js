 const StudyFriend = document.querySelectorAll(".content li");
//make the JS of the back button 
 function back(){
     window.location.href ="indix2.html";
}

//make the JS  music button

let musicbtn = document.getElementById("musicbtn");

//the vars for music
const musicArray = ["Quarane2.mp3"];

let mySound5 = new Audio(musicArray[Math.floor(Math.random()*musicArray.length)]);

musicbtn.addEventListener("click",function(){


    if (musicbtn.innerHTML == "music"){

    
    //the sound 
    mySound5.play();
        
   
    //change the innerHtml of button

    musicbtn.innerHTML = "pause";

}
else{
    musicbtn.innerHTML = "music";
    mySound5.pause();
}
})

 