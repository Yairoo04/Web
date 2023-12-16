var video = document.querySelector('video');
var play = document.querySelector('.play');
var timer = document.querySelector('.timer');
var progressFilled = document.querySelector('.progressFilled');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var volume = document.querySelector('.volume');
var volIcon = document.querySelector('.volume i');
var volInput = document.querySelector('.volume input');
var volCache = 0;
function togglePlay() {
    if (video.paused) {
        video.play();
        play.innerHTML = `<i class='bx bx-pause' ></i>`;
    }else{ 
        video.pause();
        play.innerHTML = `<i class='bx bx-play' ></i>`;
    }
}

function updateTimer() {
    timer.innerHTML = timeToMMSS(video.currentTime) + '/' + timeToMMSS(video.duration); 
    let percentProgress = Math.floor((video.currentTime / video.duration) * 100) ;
    progressFilled.style.width = `${percentProgress}%`; 
}

function timeToMMSS(sec) {
    let min = Math.floor(sec/60);
    let second = Math.floor(sec%60);

    let formattedMinutes = String(min).padStart(2, '0');
    let formattedSeconds = String(second).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
}

function skip(skipTime) {
    video.currentTime += skipTime;
}

function updateVolume() {
    if (video.volume == 0)
    {
        volIcon.classList.remove('bx-volume-full');
        volIcon.classList.add('bx-volume-mute');
    }else {
        volIcon.classList.add('bx-volume-full');
        volIcon.classList.remove('bx-volume-mute');
    }
}
play.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', updateTimer);
prev.addEventListener('click', function(){
    skip(-10);
})

next.addEventListener('click', function(){
    skip(10);
})

volInput.addEventListener('change', function(){
    volCache = this.value;
    video.volume = volCache;
    updateVolume();
})

volIcon.addEventListener('click', function(){
    if (video.volume == 0) {
        video.volume = volCache;
        volInput.value = volCache;
    }else {
        video.volume = 0;
        volInput.value = 0;
    }
    updateVolume();
})

