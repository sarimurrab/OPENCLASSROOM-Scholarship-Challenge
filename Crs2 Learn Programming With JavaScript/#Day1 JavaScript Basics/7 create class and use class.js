class Episode{
  constructor(title,duration,hasBeenWatched){
    this.title = title;
    this.duration = duration;
    this.hasBeenWatched = hasBeenWatched;
  }
}
let firstEpisode = new Episode("New Moon",40,true);
let secondEpisode = new Episode("Eclipse",50,true);
let thirdEpisode = new Episode("Breaking Dawn",80,false);


export { firstEpisode, secondEpisode, thirdEpisode };
