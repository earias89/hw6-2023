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
    video.playbackRate *= 0.95
    console.log("Playback rate is" + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
    console.log("Speed up")
    video.playbackRate /= 0.95
    console.log("Playback rate is" + video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
    console.log("Skip ahead")
    video.currentTime += 15
    if (video.currentTime >= video.duration)
        video.currentTime = 0
        console.log("Current time is" + video.currentTime)
});


//left off here

document.querySelector("#mute").addEventListener("click", function() {
    console.log("Mute")
    if( $("#mute").prop('muted') ) {
        $("#mute").prop('muted', false);
        $(this).text('Mute');
    // or toggle class, style it with a volume icon sprite, change background-position
  } else {
    $("mute").prop('muted', true);
    $(this).text('Unmute');
  }
});



document.querySelector("#slider").addEventListener
("click", function() {
    console.log(this)
    console.log(this.value)
    console.log("I am in the slider")
    // bd = document.querySelector("body")
    // bd.style.fontsize = this.value + "px"
});

document.querySelector("#vintage").addEventListener
("click", function() {
    console.log("I am in Old School")
    bd = document.querySelector("body")
    if (bd.classList.contains("oldSchool")){
        console.log("Adding Old School")
        bd.classList.remove("oldSchool")
    }
    else{
        console.log("Adding Old School")
        bd.classList.add("oldSchool")
    }
});


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