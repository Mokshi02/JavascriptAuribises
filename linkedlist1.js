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
class LinkedList{
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    append(object){
        if (this.head == null){
            this.head = object;
            this.tail = object;
        } else {
            this.tail.nextSong = object;
            object.previousSong = this.tail;
            this.head.previousSong = object;
            this.tail = object;
            this.tail.nextSong = this.head;
        }
        this.length++;
    }
    iterateForward(){
        let temporary = this.head;
        while(true){
            temporary.show();
            temporary = temporary.nextSong;
            if(temporary == this.head){
                break;
            }
        }
    }
    iterateBackward(){
        let temp = this.tail;
        while(true){
            temp.show();
            temp = temp.previousSong;
            if(temp == this.tail){
                break;
            }
        }   
    }
}

let linkedList = new LinkedList();

let song1 = new Song("1 Tera Naam", "Tulsi Kumar, Darshan Raval", 4.40)
let song2 = new Song("2 Churi", "Shipra Goyal", 4.53)
let song3 = new Song("3 Tera Naam 0.2", "Tulsi Kumar", 4.35)

linkedList.append(song1);
linkedList.append(song2);
linkedList.append(song3);

linkedList.iterateBackward();