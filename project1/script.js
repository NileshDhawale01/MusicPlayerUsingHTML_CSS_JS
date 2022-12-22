console.log("welcome to Spotify");
//initialization of songs
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let  masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems =Array.from(document.getElementsByClassName('songItem')); 
let masterSongName =document.getElementById('masterSongName');
let songs =[{songName:"Salamat -Arijit Singh",filePath: "song/1.mp3",coverPath:"covers/1.jpg"},
{songName:"Aaj Phir -Arijit Singh",filePath: "song/1.mp3",coverPath:"covers/8.jpg"},
{songName:"Aaj Zid -Arijit Singh",filePath: "song/2.mp3",coverPath:"covers/2.jpg"},
{songName:"Ae Dil Hai Mushkil",filePath: "song/3.mp3",coverPath:"covers/3.jpg"},
{songName:"Bezubaan Kab Se",filePath: "song/4.mp3",coverPath:"covers/4.jpg"},
{songName:"Bulleya ",filePath: "song/5.mp3",coverPath:"covers/5.jpg"},
{songName:"Disco Disco",filePath: "song/6.mp3",coverPath:"covers/6.jpg"},
{songName:"Salam7-e-Ishq",filePath: "song/7.mp3",coverPath:"covers/7.jpg"}
]
songItems.forEach((element , i)=>{
    // console.log(element , i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText =songs[i].songName; 
})
// audioElement.play();
//handle play pouse click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle-o');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle-o');
        gif.style.opacity = 0;
    }
})
//listen to event
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate')
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value = progress;
});
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
});
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
       element.classList.remove('fa-pause-circle');
       element.classList.add('fa-play-circle-o');
    });
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
       makeAllPlays();
       gif.style.opacity = 1;
       songIndex = parseInt(e.target.id);
        // console.log(e.target);
        e.target.classList.remove('fa-play-circle-o');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle-o');
        masterPlay.classList.add('fa-pause-circle');
    })
});
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex >=6){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle-o');
    masterPlay.classList.add('fa-pause-circle');
});
document.getElementById('privius').addEventListener('click',()=>{
    if(songIndex <=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle-o');
    masterPlay.classList.add('fa-pause-circle');
});