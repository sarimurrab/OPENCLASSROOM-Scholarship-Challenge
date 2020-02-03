const calculateAverageRating = (ratings) => 
{         if(ratings===0)
          {
              return 0;
          }
          else
          {
              let sum = 0;
              for(let i of ratings)
              {
                sum = sum + i;
              }
              let avg = sum/ratings.length;
              return avg;
          }
}



export { calculateAverageRating };
