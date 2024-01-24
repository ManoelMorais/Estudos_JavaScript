let progress = document.getElementById("progress");
let song = document.getElementById("song");
let crtlIcon = document.getElementById("crtlIcon");

song.onloadedmetadata = function(){
  progress.max = song.duration;
  progress.value = song.currentTime;
}

function playPause(){
  if(crtlIcon.classList.contains("fa-play")){
    song.play();
    crtlIcon.classList.remove("fa-play");
    crtlIcon.classList.add("fa-pause");
  }else{
    song.pause();
    crtlIcon.classList.remove("fa-pause");
    crtlIcon.classList.add("fa-play");
  }
}

if(song.play()){
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}

progress.onchange = function(){
  song.play()
  song.currentTime = progress.value
  crtlIcon.classList.add("fa-pause");
  crtlIcon.classList.remove("fa-play");
}
