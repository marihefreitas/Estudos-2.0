//SHOWING THE SIDE BAR 
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
        const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

//POMODORO TIMER
const startEl = document.getElementById("start")
const stopEl = document.getElementById("stop")
const resetEl = document.getElementById("reset")
const timerEl = document.getElementById("timer")


let interval;
let timeLeft = 1500;

function updateTimer(){
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    timerEl.innerHTML = formattedTime
}

function startTimer(){
    interval = setInterval(()=>{
        timeLeft--;
        updateTimer();
        if (timeLeft === 0){
            clearInterval(interval);
            alert("Time's up");
            timeLeft = 1500;
            updateTimer();
        }
    },1000);
}
function stopTimer(){
    clearInterval(interval);
}
function resetTimer(){
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
}

startEl.addEventListener("click", startTimer)
stopEl.addEventListener("click", stopTimer)
resetEl.addEventListener("click", resetTimer)

//  MUSIC PLAYER    
const audio = document.getElementById("songA")
const ctrlIcon = document.getElementById("ctrlIcon");

const songs = ['2_00 AM by Chillpeach', 'In Dreamland by Chillpeach', 'Taiyaki by Chillpeach']

let songIndex = 0

loadSong(songs[songIndex])

function loadSong(song) {
    songA.src = `Media/${song}.mp3`;
}

// Evento de clique no botao(ctrlIcon)
ctrlIcon.addEventListener("click", function(){
    if(audio.paused){
        audio.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    }else{
        audio.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
});

// Tocar a musica automaticamente
audio.addEventListener('ended', () =>{
    songIndex++;
    if(songIndex >= songs.length){
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    audio.play();
});

setVolume.onchange = function(){
    songA.volume = setVolume.value / 100;
}


//  MUSIC PLAYER 2
const song2 = document.getElementById("song2");
const ctrlIcon2 = document.getElementById("ctrlIcon2");
const setVolume2 = document.getElementById("setVolume2");

ctrlIcon2.onclick = function(){
    if(ctrlIcon2.checked){
        song2.play();
    }
    else{
        song2.pause();
    }
}
setVolume2.onchange = function(){
    song2.volume = setVolume2.value / 100;
}

// Music player 3
const song3 = document.getElementById("song3");
const ctrlIcon3 = document.getElementById("ctrlIcon3");
const setVolume3 = document.getElementById("setVolume3");

ctrlIcon3.onclick = function(){
    if(ctrlIcon3.checked){
        song3.play();
    }
    else{
        song3.pause();
    }
}
setVolume3.onchange = function(){
    song3.volume = setVolume3.value / 100;
}