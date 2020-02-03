class Show {
  constructor(title, numberOfSeasons) {
    this.title = title;
    this.numberOfSeasons = numberOfSeasons;
    this.ratings = [];
    this.averageRating = 0;
  }
  addRating(rating)
  {
    this.ratings.push(rating);
    let sum = 0;
    for(let i of this.ratings)
    {
      sum = sum+i;
    }
    this.averageRating=sum/this.ratings.length;
  }
}

export { Show };
