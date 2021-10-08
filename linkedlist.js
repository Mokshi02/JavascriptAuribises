// Angular Project(Day-11 Work)
class Song{
    constructor(track, artists, duration){
        this.track = track;
        this.artists = artists;
        this.duration = duration;
        this.nextSong = null;
        this.previousSong = null;
    }
    show(){
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log(this.track+"  "+this.duration);
        console.log(this.artists);
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    }
}

let song1 = new Song("Tera Naam", "Tulsi Kumar, Darshan Raval", 4.40)
let song2 = new Song("Churi", "Shipra Goyal", 4.53)
let song3 = new Song("Tera Naam 0.2", "Tulsi Kumar", 4.35)

/*
song1.show();
song2.show();
song3.show();
*/

// Hard Code Linking
song1.nextSong = song2;
song2.nextSong = song3;
song3.nextSong = song1;

song1.previousSong = song3;
song2.previousSong = song1;
song3.previousSong = song2;

console.log("Forwardward Iterating");

let temporary = song1;

while(true){
    temporary.show();
    temporary = temporary.nextSong;

    if(temporary == song1){
        break;
    }
}


console.log("Backward Iterating");

let temp = song3;

while(true){
    temp.show();
    temp = temp.nextSong;

    if(temp == song3){
        break;
    }
}
