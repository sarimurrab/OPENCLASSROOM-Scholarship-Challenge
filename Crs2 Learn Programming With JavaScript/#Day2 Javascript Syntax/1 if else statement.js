class Episode {
  constructor(title, duration, minutesWatched) {
    this.title = title;
    this.duration = duration;
    
    // Add conditions here
    // ===================================
    this.minutesWatched = minutesWatched;
    if (minutesWatched === duration) {
      this.hasBeenWatched = true;
    } else if (minutesWatched <= duration) {
      this.hasBeenWatched = false;
    }
    // ===================================
  }
}

let firstEpisode = new Episode('Dark Beginnings', 45, 45);
let secondEpisode = new Episode('The Mystery Continues', 45, 45);
let thirdEpisode = new Episode('An Unexpected Climax', 60, 0);

let episodes = [firstEpisode, secondEpisode, thirdEpisode];

export { episodes };