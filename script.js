const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

class Song
{
    #player;

    constructor(filename)
    {
        this.filename = filename;
        let path = "MUSIC/" + filename;
        this.#player = new Audio(path);
        this.#player.addEventListener("ended", (e) => {
            document.dispatchEvent(songOver);
        });

        
    }
    
    playSong()
    {
        this.#player.play();
        nowPlaying.innerHTML = this.filename.toLowerCase().substring(0, this.filename.length - 4);

    }

    pauseSong()
    {
        this.#player.pause();
    }

    pauseAndReset()
    {
        this.pauseSong();
        this.#player.currentTime = 0;
    }
}

var nowPlaying = document.querySelector("#songname");

const songOver = new Event("songover");

var playButton = document.getElementById("playbutton");
var pauseButton = document.getElementById("pausebutton");
var skipButton = document.getElementById("skip");

skipButton.addEventListener("click", (e) => {
    document.dispatchEvent(songOver);
});


var currentSong = 0;
playButton.addEventListener("click", (e) => {
    songs[currentSong].playSong();
    
});

pauseButton.addEventListener("click", (e) => {
    songs[currentSong].pauseSong();
});

document.addEventListener('songover', (e) => {
    songs[currentSong].pauseAndReset();
    currentSong++;
    if (currentSong >= songs.length)
    {
        currentSong = 0;
    }
    songs[currentSong].playSong();
});


let songs = [];
songs.push(
    new Song("Census Designated - Jane Remover.mp3"),
    new Song("Street Carp - Deftones.mp3"),
    new Song("The Glow, Pt. 2 - The Microphones.mp3")
);
shuffleArray(songs);



