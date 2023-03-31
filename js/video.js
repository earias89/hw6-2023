video = document.querySelector("#player1")


window.addEventListener("load", function() {
	console.log("Good job opening the window")
    video.autoplay = false;
    console.log("Autoplay is set to" + video.loop)
    video.loop = false;
    console.log("Autoplay is set to" + video.loop)
});


document.querySelector("#play").addEventListener
("click", function() {
    console.log("Play video")
    video.play()
    document.querySelector("#volume").innerHTML = video.volume*100 + "%"
});


document.querySelector("#pause").addEventListener("click", function() {
    console.log("Pause video")
    video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
    console.log("Slow down")
    video.playbackRate *= 0.90
    console.log("Playback rate is" + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
    console.log("Speed up")
    video.playbackRate /= 0.90
    console.log("Playback rate is" + video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
    console.log("Skip ahead")
    video.currentTime += 10
    if (video.currentTime >= video.duration)
        video.currentTime = 0
        console.log("Current time is" + video.currentTime)
});



document.querySelector("#mute").addEventListener("click", function() {
    console.log(video.muted);
    if (video.muted == false) {
        video.muted = true
        this.innerHTML = "Unmute"}
    else{
        video.muted = false
        this.innerHTML = "Mute"}
});



document.querySelector("#slider").addEventListener
("change", function() {
    // console.log(this)
    console.log(this.value)
    // console.log("I am in the slider")
    video.volume = this.value/100
    console.log(video.volume)
    document.querySelector("#volume").innerHTML = video.volume*100 + "%"
});

document.querySelector("#vintage").addEventListener
("click", function() {
    console.log("I am in Old School")
    bd = document.querySelector("body")
    // if (bd.classList.contains("oldSchool")){
        // console.log("Adding Old School")
        bd.classList.add("oldSchool") // remove?
    // }
    // else{
    //     console.log("Adding Old School")
    //     bd.classList.add("oldSchool")
    // }
});


document.querySelector("#orig").addEventListener
("click", function() {
    console.log("I am in Old School")
    bd = document.querySelector("body")
    // if (bd.classList.contains("oldSchool")){
    //     console.log("Removing Old School")
    //     bd.classList.remove("oldSchool")
    // }
    // else{
    //     console.log("Adding Old School")
        bd.classList.remove("oldSchool") // add? 
    // }
});