var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video")
// });


document.querySelector("#play").addEventListener
("mouseover", function() {
    console.log("Play video")
    bd = document.querySelector("body")
    bd.style.fontsize = ".5em"
});

document.querySelector("#pause").addEventListener
("mouseover", function() {
    console.log("Pause video")
    bd = document.querySelector("body")
    bd.style.fontsize = ".5em"
});

document.querySelector("#slower").addEventListener
("mouseover", function() {
    console.log("Slow down")
    bd = document.querySelector("body")
    bd.style.fontsize = ".5em"
});

document.querySelector("#faster").addEventListener
("mouseover", function() {
    console.log("Pause video")
    bd = document.querySelector("body")
    bd.style.fontsize = ".5em"
});

document.querySelector("#skip").addEventListener
("mouseover", function() {
    console.log("skip ahead")
    bd = document.querySelector("body")
    bd.style.fontsize = ".5em"
});

document.querySelector("#mute").addEventListener
("mouseover", function() {
    console.log("mute")
    bd = document.querySelector("body")
    bd.style.fontsize = ".5em"
});

document.querySelector("#slider").addEventListener
("change", function() {
    console.log(this)
    console.log(this.value)
    console.log("I am in the slider")
    bd = document.querySelector("body")
    bd.style.fontsize = this.value + "px"
});

// document.querySelector("#vintage").addEventListener
// ("click", function() {
//     console.log("I am in Old School")
//     bd = document.querySelector("body")
//     if (bd.classList.contains("oldSchool")){
//         console.log("Adding Old School")
//         bd.classList.remove("oldSchool")
//     }
//     else{
//         console.log("Adding Old School")
//         bd.classList.add("oldSchool")
//     }
// });


document.querySelector("#orig").addEventListener
("click", function() {
    console.log("I am in Old School")
    bd = document.querySelector("body")
    if (bd.classList.contains("oldSchool")){
        console.log("Removing Old School")
        bd.classList.remove("oldSchool")
    }
    else{
        console.log("Adding Old School")
        bd.classList.add("oldSchool")
    }
});