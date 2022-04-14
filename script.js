console.log("Welcome to Spotify");

let songindex = 0;
let audioElement = new Audio('1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let songitem = Array.from(document.getElementsByClassName('songitem'));
let songs = [
    
    {songname: "chori di pistol" , filepath: "1.mp3" , coverpath: "cover1.jpg"},
    {songname: "shadgi" , filepath: "2.mp3" , coverpath: "cover2.jpg"},
    {songname: "no more shada" , filepath: "3.mp3" , coverpath: "cover3.jpg"},
    {songname: "diamond da chhala" , filepath: "4.mp3" , coverpath: "cover4.jpg"},
    {songname: "meri marzi" , filepath: "5.mp3" , coverpath: "cover5.jpg"},
]

 songitem.forEach((element, i)=>{
    
    element.getElementsByTagName('img')[0].src = songs[i].coverpath;
    element.getElementsByClassName('songname')[0].innerText = songs[i].songname;
 })
    

 // audioElement.play();

masterplay.addEventListener('click' , ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
       
    }
})
audioElement.addEventListener('timeupdate' , ()=>{
    console.log('timeupdate')

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myprogressbar.value = progress;
})

myprogressbar.addEventListener('change' , ()=>{
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100;
})

 const makeallplays = ()=>{
  
    Array.from(document.getElementsByClassName('songname')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
 }

Array.from(document.getElementsByClassName('songname')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeallplays()
songindex = parseInt(e.target.id);
e.target.classList.remove('fa-play-circle');
e.target.classList.add('fa-pause-circle');
audioElement.src = '$(songindex).mp3';
audioElement.currentTime = 0 ;
audioElement.play();
masterplay.classList.remove('fa-play-circle');
masterplay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click' , ()=>{
if(songindex>=5){
    songindex = 1;
}
else{
    songindex += 1;
}
audioElement.src = `${songindex+1}.mp3`;
audioElement.currentTime = 0 ;
audioElement.play();
masterplay.classList.remove('fa-play-circle');
masterplay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click' , ()=>{
    if(songindex<=1){
        songindex = 5;
    }
    else{
        songindex -= 1;
    }
    audioElement.src = `${songindex+1}.mp3`;
    audioElement.currentTime = 0 ;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    })